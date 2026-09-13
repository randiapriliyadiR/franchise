/**
 * Refreshes src/lib/data/generated/*.json from TMDB.
 *
 * Reads TMDB_API_KEY from the environment (never from a file, never
 * printed). Meant to be run by the `sync-tmdb.yml` GitHub Actions workflow,
 * which supplies the key from a repository secret — see README.md for how
 * to run it manually and how to add the secret.
 *
 * Usage: TMDB_API_KEY=xxx npm run sync:tmdb
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { marvelEntries } from '../src/lib/data/seed/marvel.ts';
import { twdEntries } from '../src/lib/data/seed/the-walking-dead.ts';
import { harryPotterEntries } from '../src/lib/data/seed/harry-potter.ts';
import { starWarsEntries } from '../src/lib/data/seed/star-wars.ts';
import { starTrekEntries } from '../src/lib/data/seed/star-trek.ts';
import { bondEntries } from '../src/lib/data/seed/james-bond.ts';
import type { Entry } from '../src/lib/data/types.ts';

const API_KEY = process.env.TMDB_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GENERATED_DIR = path.resolve(__dirname, '../src/lib/data/generated');

const FRANCHISES: { id: string; entries: Entry[] }[] = [
	{ id: 'marvel', entries: marvelEntries },
	{ id: 'the-walking-dead', entries: twdEntries },
	{ id: 'harry-potter', entries: harryPotterEntries },
	{ id: 'star-wars', entries: starWarsEntries },
	{ id: 'star-trek', entries: starTrekEntries },
	{ id: 'james-bond', entries: bondEntries }
];

interface GeneratedFields {
	title?: string;
	releaseDate?: string;
	endDate?: string;
	runtimeMinutes?: number;
	seasons?: number;
	episodes?: number;
	synopsis?: string;
	cast?: string[];
	rating?: number;
	director?: string;
	posterPath?: string;
	backdropPath?: string;
}

// Minimal shapes for the handful of TMDB fields this script actually reads —
// not a full API type. See https://developer.themoviedb.org/reference for
// the complete response shapes.
interface TmdbSearchResult {
	id: number;
	release_date?: string;
	first_air_date?: string;
}

interface TmdbSearchResponse {
	results?: TmdbSearchResult[];
}

interface TmdbCastMember {
	name: string;
}

interface TmdbCrewMember {
	name: string;
	job: string;
}

interface TmdbCredits {
	cast?: TmdbCastMember[];
	crew?: TmdbCrewMember[];
}

interface TmdbMovieDetail {
	title: string;
	release_date?: string;
	runtime?: number;
	overview?: string;
	vote_average?: number;
	poster_path?: string;
	backdrop_path?: string;
}

interface TmdbTvDetail {
	name: string;
	first_air_date?: string;
	last_air_date?: string;
	status?: string;
	episode_run_time?: number[];
	number_of_seasons?: number;
	number_of_episodes?: number;
	overview?: string;
	vote_average?: number;
	poster_path?: string;
	backdrop_path?: string;
}

interface TmdbSeasonEpisode {
	runtime?: number;
	vote_average?: number;
}

interface TmdbSeasonDetail {
	name: string;
	air_date?: string;
	overview?: string;
	poster_path?: string;
	episodes?: TmdbSeasonEpisode[];
}

async function tmdbFetch<T>(pathname: string): Promise<T> {
	const url = new URL(`${API_BASE}${pathname}`);
	url.searchParams.set('api_key', API_KEY!);
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`TMDB ${pathname} -> ${res.status} ${res.statusText}`);
	}
	return res.json() as Promise<T>;
}

// Several season Entries resolve to the exact same search (same show,
// different `season`), so cache by the search itself rather than the entry.
const searchCache = new Map<string, Promise<number | null>>();

async function resolveTmdbId(entry: Entry): Promise<number | null> {
	if (!entry.tmdb) return null;
	if (entry.tmdb.tmdbId) return entry.tmdb.tmdbId;

	const query = entry.tmdb.query ?? entry.title;
	const searchType = entry.tmdb.type === 'movie' ? 'movie' : 'tv';
	const cacheKey = `${searchType}:${query}:${entry.tmdb.year ?? ''}`;

	let cached = searchCache.get(cacheKey);
	if (!cached) {
		cached = (async () => {
			const data = await tmdbFetch<TmdbSearchResponse>(
				`/search/${searchType}?query=${encodeURIComponent(query)}&include_adult=false`
			);
			const results = data.results ?? [];
			if (results.length === 0) return null;

			if (entry.tmdb!.year) {
				const withYear = results.find((r) => {
					const date = r.release_date ?? r.first_air_date;
					return date?.startsWith(String(entry.tmdb!.year));
				});
				if (withYear) return withYear.id;
			}

			return results[0].id;
		})();
		searchCache.set(cacheKey, cached);
	}
	return cached;
}

async function fetchMovie(id: number): Promise<GeneratedFields> {
	const [detail, credits] = await Promise.all([
		tmdbFetch<TmdbMovieDetail>(`/movie/${id}`),
		tmdbFetch<TmdbCredits>(`/movie/${id}/credits`)
	]);

	const director = (credits.crew ?? []).find((c) => c.job === 'Director')?.name;

	return {
		title: detail.title,
		releaseDate: detail.release_date || undefined,
		runtimeMinutes: detail.runtime || undefined,
		synopsis: detail.overview || undefined,
		cast: (credits.cast ?? []).slice(0, 5).map((c) => c.name),
		rating:
			typeof detail.vote_average === 'number'
				? Math.round(detail.vote_average * 10) / 10
				: undefined,
		director,
		posterPath: detail.poster_path || undefined,
		backdropPath: detail.backdrop_path || undefined
	};
}

async function fetchTv(id: number): Promise<GeneratedFields> {
	const [detail, credits] = await Promise.all([
		tmdbFetch<TmdbTvDetail>(`/tv/${id}`),
		tmdbFetch<TmdbCredits>(`/tv/${id}/credits`)
	]);

	const isEnded = detail.status === 'Ended' || detail.status === 'Canceled';

	return {
		title: detail.name,
		releaseDate: detail.first_air_date || undefined,
		endDate: isEnded ? detail.last_air_date || undefined : undefined,
		runtimeMinutes: Array.isArray(detail.episode_run_time) ? detail.episode_run_time[0] : undefined,
		seasons: detail.number_of_seasons || undefined,
		episodes: detail.number_of_episodes || undefined,
		synopsis: detail.overview || undefined,
		cast: (credits.cast ?? []).slice(0, 5).map((c) => c.name),
		rating:
			typeof detail.vote_average === 'number'
				? Math.round(detail.vote_average * 10) / 10
				: undefined,
		posterPath: detail.poster_path || undefined,
		backdropPath: detail.backdrop_path || undefined
	};
}

// One TMDB show can back several Entry objects (one per season), so cache
// its credits/backdrop instead of refetching them once per season.
const showCache = new Map<number, Promise<{ credits: TmdbCredits; detail: TmdbTvDetail }>>();

function getShow(id: number) {
	let cached = showCache.get(id);
	if (!cached) {
		cached = Promise.all([
			tmdbFetch<TmdbTvDetail>(`/tv/${id}`),
			tmdbFetch<TmdbCredits>(`/tv/${id}/credits`)
		]).then(([detail, credits]) => ({ detail, credits }));
		showCache.set(id, cached);
	}
	return cached;
}

async function fetchTvSeason(showId: number, seasonNumber: number): Promise<GeneratedFields> {
	const [{ detail: show, credits }, season] = await Promise.all([
		getShow(showId),
		tmdbFetch<TmdbSeasonDetail>(`/tv/${showId}/season/${seasonNumber}`)
	]);

	const episodes = season.episodes ?? [];
	const runtimes = episodes
		.map((e) => e.runtime)
		.filter((n): n is number => typeof n === 'number' && n > 0);
	const ratings = episodes
		.map((e) => e.vote_average)
		.filter((n): n is number => typeof n === 'number' && n > 0);

	return {
		// Deliberately no `title` here: the season endpoint's `name` is
		// usually just "Season N" with no show context, which is worse than
		// the seed's own authored title (e.g. "The Walking Dead: Season 1").
		releaseDate: season.air_date || undefined,
		runtimeMinutes: runtimes.length
			? Math.round(runtimes.reduce((a, b) => a + b, 0) / runtimes.length)
			: undefined,
		episodes: episodes.length || undefined,
		seasons: 1,
		synopsis: season.overview || undefined,
		// Per-episode cast credits aren't in this endpoint — the show's
		// overall top-billed cast is a reasonable stand-in per season.
		cast: (credits.cast ?? []).slice(0, 5).map((c) => c.name),
		rating: ratings.length
			? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10
			: undefined,
		posterPath: season.poster_path || show.poster_path || undefined,
		backdropPath: show.backdrop_path || undefined
	};
}

async function syncFranchise(
	id: string,
	entries: Entry[]
): Promise<Record<string, GeneratedFields>> {
	const result: Record<string, GeneratedFields> = {};

	for (const entry of entries) {
		if (!entry.tmdb) continue;

		try {
			const tmdbId = await resolveTmdbId(entry);
			if (!tmdbId) {
				console.warn(`[${id}] no TMDB match for "${entry.title}" (${entry.id}), skipping`);
				continue;
			}

			if (entry.tmdb.type === 'movie') {
				result[entry.id] = await fetchMovie(tmdbId);
			} else if (entry.tmdb.season) {
				result[entry.id] = await fetchTvSeason(tmdbId, entry.tmdb.season);
			} else {
				result[entry.id] = await fetchTv(tmdbId);
			}

			console.log(`[${id}] synced ${entry.id}`);
		} catch (err) {
			console.warn(`[${id}] failed to sync ${entry.id}: ${(err as Error).message}`);
		}

		// Be polite to TMDB's rate limits.
		await new Promise((resolve) => setTimeout(resolve, 150));
	}

	return result;
}

async function main() {
	if (!API_KEY) {
		console.error(
			'TMDB_API_KEY is not set. Get a free key at https://www.themoviedb.org/settings/api ' +
				'and run: TMDB_API_KEY=xxx npm run sync:tmdb'
		);
		process.exit(1);
	}

	for (const { id, entries } of FRANCHISES) {
		console.log(`Syncing ${id}...`);
		const data = await syncFranchise(id, entries);

		const sorted = Object.fromEntries(Object.entries(data).sort(([a], [b]) => a.localeCompare(b)));

		const outPath = path.join(GENERATED_DIR, `${id}.json`);
		await writeFile(outPath, JSON.stringify(sorted, null, '\t') + '\n', 'utf8');
		console.log(`Wrote ${outPath} (${Object.keys(sorted).length} entries)`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

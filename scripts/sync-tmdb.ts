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
import type { Entry } from '../src/lib/data/types.ts';

const API_KEY = process.env.TMDB_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GENERATED_DIR = path.resolve(__dirname, '../src/lib/data/generated');

const FRANCHISES: { id: string; entries: Entry[] }[] = [
	{ id: 'marvel', entries: marvelEntries },
	{ id: 'the-walking-dead', entries: twdEntries }
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

async function tmdbFetch<T>(pathname: string): Promise<T> {
	const url = new URL(`${API_BASE}${pathname}`);
	url.searchParams.set('api_key', API_KEY!);
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`TMDB ${pathname} -> ${res.status} ${res.statusText}`);
	}
	return res.json() as Promise<T>;
}

async function resolveTmdbId(entry: Entry): Promise<number | null> {
	if (!entry.tmdb) return null;
	if (entry.tmdb.tmdbId) return entry.tmdb.tmdbId;

	const query = entry.tmdb.query ?? entry.title;
	const searchType = entry.tmdb.type === 'movie' ? 'movie' : 'tv';
	const data = await tmdbFetch<TmdbSearchResponse>(
		`/search/${searchType}?query=${encodeURIComponent(query)}&include_adult=false`
	);

	const results = data.results ?? [];
	if (results.length === 0) return null;

	if (entry.tmdb.year) {
		const withYear = results.find((r) => {
			const date = r.release_date ?? r.first_air_date;
			return date?.startsWith(String(entry.tmdb!.year));
		});
		if (withYear) return withYear.id;
	}

	return results[0].id;
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

			result[entry.id] =
				entry.tmdb.type === 'movie' ? await fetchMovie(tmdbId) : await fetchTv(tmdbId);

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

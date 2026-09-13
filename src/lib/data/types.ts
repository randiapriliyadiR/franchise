/**
 * Core data model for the franchise explorer.
 *
 * An `Entry` is one unit of media (a film, a season of a show, a game, a
 * comic...). Most of its fields fall into one of two buckets:
 *
 *  - "authored" fields (id, franchise, type, chronology, group, tags, ...)
 *    are curated by hand in `src/lib/data/seed/*` and never come from TMDB.
 *  - "sourced" fields (releaseDate, synopsis, cast, rating, images...) are
 *    filled in by `scripts/sync-tmdb.mjs` and cached in
 *    `src/lib/data/generated/*.json`. They're optional on the seed itself so
 *    the site still renders sensibly before the first sync has ever run.
 */

export type MediaType = 'film' | 'series' | 'game' | 'comic' | 'short';

export type EntryStatus = 'released' | 'upcoming';

export type SortKey = 'release' | 'chronology' | 'rating' | 'title' | 'runtime';

export type EntryOrder = 'release' | 'chronology';

/** A lookup TMDB should perform to enrich this entry. Entries with no TMDB
 * presence (most games and comics) simply omit this. */
export interface TmdbQuery {
	/** Title to search for. Falls back to the entry's authored title if omitted. */
	query?: string;
	/** Release year, used to disambiguate remakes/reboots. */
	year?: number;
	type: 'movie' | 'tv';
	/** Pin to a specific TMDB id once known, skipping the search step entirely. */
	tmdbId?: number;
}

export interface Entry {
	/** Stable slug, e.g. `iron-man-2008`. Used in URLs. */
	id: string;
	franchise: string;
	title: string;
	type: MediaType;
	status: EntryStatus;

	/** Position in the franchise's own internal chronology (story order).
	 * A float so new entries can be slotted in without renumbering. Only
	 * meaningful for comparing entries within the same `branch` — see below. */
	chronology: number;
	/** Human-readable in-universe placement, e.g. "1983" or "Weeks after the outbreak". */
	chronologyNote?: string;

	/**
	 * Which strand of the story this entry belongs to. A franchise's timeline
	 * isn't always one straight line — it splits when a story runs in a
	 * different place at the same time (Fear the Walking Dead's Los Angeles
	 * vs. the flagship show's Georgia), tells parallel post-finale threads
	 * (three The Walking Dead spin-offs happening at once, in three places),
	 * or is explicitly a multiverse/alternate-timeline detour (What If...?,
	 * Fantastic Four's Earth-828). Entries with no `branch` are on the
	 * franchise's main line. The timeline groups entries by branch into
	 * parallel lanes rather than forcing everything into one sequence.
	 */
	branch?: string;

	/** Grouping used for filters and timeline sections, e.g. "Phase One", "Season 4". */
	group?: string;
	tags: string[];

	releaseDate?: string; // ISO date, YYYY-MM-DD
	endDate?: string;
	runtimeMinutes?: number;
	seasons?: number;
	episodes?: number;
	platforms?: string[];

	synopsis: string;
	cast: string[];
	rating?: number; // 0-10
	director?: string;

	tmdb?: TmdbQuery;
	posterPath?: string;
	backdropPath?: string;
}

export interface FranchiseTheme {
	accent: string;
	accentSoft: string;
	surface: string;
	surfaceRaised: string;
	gradient: string;
}

export interface Franchise {
	id: string;
	name: string;
	shortName: string;
	tagline: string;
	description: string;
	publisher: string;
	startYear: number;
	theme: FranchiseTheme;
	/** Entry whose backdrop art anchors the franchise hero. */
	heroEntryId: string;
}

export interface FranchiseStats {
	total: number;
	byType: Record<MediaType, number>;
	byYear: { year: number; count: number }[];
	byGroup: { group: string; averageRating: number | null; count: number }[];
	totalRuntimeMinutes: number;
	averageRating: number | null;
	yearRange: [number, number] | null;
}

export interface FilterOptions {
	types?: MediaType[];
	groups?: string[];
	query?: string;
}

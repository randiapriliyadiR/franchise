import type { Entry, EntryOrder, FilterOptions, FranchiseStats, MediaType, SortKey } from './types';
import { marvelEntries } from './seed/marvel';
import { twdEntries } from './seed/the-walking-dead';
import { harryPotterEntries } from './seed/harry-potter';
import { starWarsEntries } from './seed/star-wars';
import { starTrekEntries } from './seed/star-trek';
import { bondEntries } from './seed/james-bond';
import marvelGenerated from './generated/marvel.json';
import twdGenerated from './generated/the-walking-dead.json';
import harryPotterGenerated from './generated/harry-potter.json';
import starWarsGenerated from './generated/star-wars.json';
import starTrekGenerated from './generated/star-trek.json';
import bondGenerated from './generated/james-bond.json';
export { franchises, getFranchise } from './franchises';

/** Fields `scripts/sync-tmdb.mjs` is allowed to fill in from TMDB. */
type GeneratedFields = Partial<
	Pick<
		Entry,
		| 'title'
		| 'releaseDate'
		| 'endDate'
		| 'runtimeMinutes'
		| 'seasons'
		| 'episodes'
		| 'synopsis'
		| 'cast'
		| 'rating'
		| 'director'
		| 'posterPath'
		| 'backdropPath'
	>
>;

type GeneratedData = Record<string, GeneratedFields>;

function mergeGenerated(seed: Entry[], generated: GeneratedData): Entry[] {
	return seed.map((entry) => {
		const patch = generated[entry.id];
		if (!patch) return entry;
		const merged: Entry = { ...entry };
		for (const key of Object.keys(patch) as (keyof GeneratedFields)[]) {
			const value = patch[key];
			if (value !== undefined && value !== null && value !== '') {
				// @ts-expect-error -- key is one of the known GeneratedFields
				merged[key] = value;
			}
		}
		return merged;
	});
}

const entriesByFranchise: Record<string, Entry[]> = {
	marvel: mergeGenerated(marvelEntries, marvelGenerated as GeneratedData),
	'the-walking-dead': mergeGenerated(twdEntries, twdGenerated as GeneratedData),
	'harry-potter': mergeGenerated(harryPotterEntries, harryPotterGenerated as GeneratedData),
	'star-wars': mergeGenerated(starWarsEntries, starWarsGenerated as GeneratedData),
	'star-trek': mergeGenerated(starTrekEntries, starTrekGenerated as GeneratedData),
	'james-bond': mergeGenerated(bondEntries, bondGenerated as GeneratedData)
};

export function getEntries(franchiseId: string): Entry[] {
	return entriesByFranchise[franchiseId] ?? [];
}

export function getEntry(franchiseId: string, entryId: string): Entry | undefined {
	return getEntries(franchiseId).find((e) => e.id === entryId);
}

export function getAllEntries(): Entry[] {
	return Object.values(entriesByFranchise).flat();
}

/** Media types that participate in the main story timeline. Games and
 * comics live in separate canon branches for both franchises here, so they
 * show up in the grid and stats but are excluded from the timeline by
 * default to keep "story order" meaningful. */
export const TIMELINE_TYPES: MediaType[] = ['film', 'series', 'short'];

export function filterEntries(entries: Entry[], options: FilterOptions): Entry[] {
	const query = options.query?.trim().toLowerCase();
	return entries.filter((entry) => {
		if (options.types?.length && !options.types.includes(entry.type)) return false;
		if (options.groups?.length && (!entry.group || !options.groups.includes(entry.group)))
			return false;
		if (query) {
			const haystack = `${entry.title} ${entry.synopsis} ${entry.cast.join(' ')}`.toLowerCase();
			if (!haystack.includes(query)) return false;
		}
		return true;
	});
}

export function sortEntries(entries: Entry[], key: SortKey): Entry[] {
	const sorted = [...entries];
	switch (key) {
		case 'release':
			sorted.sort((a, b) => (a.releaseDate ?? '9999').localeCompare(b.releaseDate ?? '9999'));
			break;
		case 'chronology':
			sorted.sort((a, b) => a.chronology - b.chronology);
			break;
		case 'rating':
			sorted.sort((a, b) => (b.rating ?? -1) - (a.rating ?? -1));
			break;
		case 'title':
			sorted.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case 'runtime':
			sorted.sort((a, b) => (b.runtimeMinutes ?? -1) - (a.runtimeMinutes ?? -1));
			break;
	}
	return sorted;
}

export function orderedEntries(entries: Entry[], order: EntryOrder): Entry[] {
	return sortEntries(entries, order === 'release' ? 'release' : 'chronology');
}

export const MAIN_BRANCH = 'Main Continuity';

export interface TimelineNode {
	key: string;
	entry: Entry;
	column: number;
	/** 0-indexed position in the merged chronological sequence — a node's
	 * grid row. Every node gets its own row (unlike a git graph, nothing
	 * shares a row), so pixel position is pure arithmetic: no DOM
	 * measurement needed, which is what makes the connectors animate
	 * smoothly as `order` changes. */
	row: number;
	isBranchStart: boolean;
	branchNote?: string;
}

export interface TimelineColumn {
	column: number;
	branch: string;
	isMain: boolean;
	startRow: number;
	endRow: number;
}

export interface TimelineGraph {
	nodes: TimelineNode[];
	columns: TimelineColumn[];
	totalRows: number;
}

/**
 * Lays out every entry as a node in a single chronologically-ordered graph —
 * main line and branches interleaved by real position in time — tagging
 * each with a column (0 = main, 1+ = a specific branch) and row (its index
 * in that merged order). A franchise's story isn't always one straight line
 * (concurrent spin-offs in different places, multiverse detours, a prequel
 * series running before the flagship show even starts), so this is meant to
 * be rendered as a branching board — a persistent main column, with branch
 * columns that peel off partway through and run alongside it for as long as
 * that branch has entries.
 */
export function buildTimelineGraph(entries: Entry[], order: EntryOrder): TimelineGraph {
	const byBranch = new Map<string, Entry[]>();
	for (const entry of entries) {
		const key = entry.branch ?? MAIN_BRANCH;
		const list = byBranch.get(key);
		if (list) list.push(entry);
		else byBranch.set(key, [entry]);
	}

	const branchKeys = [...byBranch.keys()].filter((k) => k !== MAIN_BRANCH);
	branchKeys.sort((a, b) => {
		const aMin = Math.min(...byBranch.get(a)!.map((e) => e.chronology));
		const bMin = Math.min(...byBranch.get(b)!.map((e) => e.chronology));
		return aMin - bMin;
	});

	const columnOf = new Map<string, number>([[MAIN_BRANCH, 0]]);
	branchKeys.forEach((key, i) => columnOf.set(key, i + 1));

	const sorted = orderedEntries(entries, order);
	const seenBranch = new Set<string>();

	const nodes: TimelineNode[] = sorted.map((entry, row) => {
		const key = entry.branch ?? MAIN_BRANCH;
		const column = columnOf.get(key)!;
		const isBranchStart = key !== MAIN_BRANCH && !seenBranch.has(key);
		if (isBranchStart) seenBranch.add(key);
		return {
			key: `e:${entry.id}`,
			entry,
			column,
			row,
			isBranchStart,
			branchNote: entry.branchNote
		};
	});

	const columns: TimelineColumn[] = [
		{ column: 0, branch: MAIN_BRANCH, isMain: true, startRow: 0, endRow: nodes.length - 1 }
	];

	for (const key of branchKeys) {
		const column = columnOf.get(key)!;
		const rowsForColumn = nodes.filter((n) => n.column === column).map((n) => n.row);
		if (rowsForColumn.length > 0) {
			columns.push({
				column,
				branch: key,
				isMain: false,
				startRow: Math.min(...rowsForColumn),
				endRow: Math.max(...rowsForColumn)
			});
		}
	}

	return { nodes, columns, totalRows: nodes.length };
}

/** Previous/next entry relative to `id`, following the given order — used
 * for the detail page's "up next" navigation. */
export function neighbours(
	entries: Entry[],
	id: string,
	order: EntryOrder
): { prev: Entry | null; next: Entry | null; index: number; total: number } {
	const ordered = orderedEntries(entries, order);
	const index = ordered.findIndex((e) => e.id === id);
	if (index === -1) return { prev: null, next: null, index: -1, total: ordered.length };
	return {
		prev: index > 0 ? ordered[index - 1] : null,
		next: index < ordered.length - 1 ? ordered[index + 1] : null,
		index,
		total: ordered.length
	};
}

const emptyByType = (): Record<MediaType, number> => ({
	film: 0,
	series: 0,
	game: 0,
	comic: 0,
	short: 0
});

export function computeStats(entries: Entry[]): FranchiseStats {
	const byType = emptyByType();
	const yearCounts = new Map<number, number>();
	const groupRatings = new Map<string, { sum: number; count: number; total: number }>();
	let totalRuntimeMinutes = 0;
	let ratingSum = 0;
	let ratingCount = 0;
	let minYear = Infinity;
	let maxYear = -Infinity;
	let topRated: FranchiseStats['topRated'] = null;
	let longest: FranchiseStats['longest'] = null;

	for (const entry of entries) {
		byType[entry.type]++;

		if (entry.releaseDate) {
			const year = Number(entry.releaseDate.slice(0, 4));
			if (!Number.isNaN(year)) {
				yearCounts.set(year, (yearCounts.get(year) ?? 0) + 1);
				minYear = Math.min(minYear, year);
				maxYear = Math.max(maxYear, year);
			}
		}

		const entryMinutes = entry.runtimeMinutes
			? entry.runtimeMinutes * (entry.type === 'series' ? (entry.episodes ?? 1) : 1)
			: 0;
		totalRuntimeMinutes += entryMinutes;
		if (entryMinutes > 0 && (longest === null || entryMinutes > longest.value)) {
			longest = {
				id: entry.id,
				title: entry.title,
				franchise: entry.franchise,
				value: entryMinutes
			};
		}

		if (typeof entry.rating === 'number') {
			ratingSum += entry.rating;
			ratingCount++;
			if (topRated === null || entry.rating > topRated.value) {
				topRated = {
					id: entry.id,
					title: entry.title,
					franchise: entry.franchise,
					value: entry.rating
				};
			}
		}

		if (entry.group) {
			const g = groupRatings.get(entry.group) ?? { sum: 0, count: 0, total: 0 };
			g.total++;
			if (typeof entry.rating === 'number') {
				g.sum += entry.rating;
				g.count++;
			}
			groupRatings.set(entry.group, g);
		}
	}

	const byYear = [...yearCounts.entries()]
		.sort(([a], [b]) => a - b)
		.map(([year, count]) => ({ year, count }));

	const byGroup = [...groupRatings.entries()].map(([group, g]) => ({
		group,
		count: g.total,
		averageRating: g.count > 0 ? g.sum / g.count : null
	}));

	let busiestGroup: FranchiseStats['busiestGroup'] = null;
	for (const g of byGroup) {
		if (busiestGroup === null || g.count > busiestGroup.count) {
			busiestGroup = { group: g.group, count: g.count };
		}
	}

	return {
		total: entries.length,
		byType,
		byYear,
		byGroup,
		totalRuntimeMinutes,
		averageRating: ratingCount > 0 ? ratingSum / ratingCount : null,
		yearRange: Number.isFinite(minYear) ? [minYear, maxYear] : null,
		topRated,
		longest,
		busiestGroup
	};
}

export function uniqueGroups(entries: Entry[]): string[] {
	const seen = new Set<string>();
	const groups: string[] = [];
	for (const entry of entries) {
		if (entry.group && !seen.has(entry.group)) {
			seen.add(entry.group);
			groups.push(entry.group);
		}
	}
	return groups;
}

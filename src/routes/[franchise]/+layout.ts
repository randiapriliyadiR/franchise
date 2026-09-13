import { error } from '@sveltejs/kit';
import { getFranchise, getEntries, computeStats } from '$lib/data';
import type { LayoutLoad } from './$types';

// Note: the `entries()` export that tells SvelteKit which [franchise]
// values exist has to live in a +page.ts (not +layout.ts) — see the
// sibling +page.ts files for grid/timeline/stats.

export const load: LayoutLoad = ({ params }) => {
	const franchise = getFranchise(params.franchise);
	if (!franchise) {
		error(404, `Unknown franchise: ${params.franchise}`);
	}

	const franchiseEntries = getEntries(franchise.id);
	const stats = computeStats(franchiseEntries);
	const heroEntry = franchiseEntries.find((e) => e.id === franchise.heroEntryId) ?? null;

	return { franchise, entries: franchiseEntries, stats, heroEntry };
};

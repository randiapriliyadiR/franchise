import { franchises } from '$lib/data/franchises';
import { getEntries, computeStats } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const cards = franchises.map((franchise) => {
		const franchiseEntries = getEntries(franchise.id);
		return {
			franchise,
			stats: computeStats(franchiseEntries),
			heroEntry: franchiseEntries.find((e) => e.id === franchise.heroEntryId) ?? franchiseEntries[0]
		};
	});

	const allEntries = franchises.flatMap((f) => getEntries(f.id));

	return { cards, globalStats: computeStats(allEntries) };
};

import { error } from '@sveltejs/kit';
import { getEntry, getEntries } from '$lib/data';
import { franchises } from '$lib/data/franchises';
import type { PageLoad } from './$types';

export function entries() {
	return franchises.flatMap((f) => getEntries(f.id).map((e) => ({ franchise: f.id, entry: e.id })));
}

export const load: PageLoad = ({ params }) => {
	const entry = getEntry(params.franchise, params.entry);
	if (!entry) {
		error(404, `Unknown entry: ${params.entry}`);
	}
	return { entry };
};

import { franchises } from '$lib/data/franchises';

// Data for this page comes entirely from the parent [franchise]/+layout.ts
// load — this file only exists to tell SvelteKit which [franchise] values
// to prerender.
export function entries() {
	return franchises.map((f) => ({ franchise: f.id }));
}

/** Shared helpers so every component's animations agree on timing and all
 * honour `prefers-reduced-motion` the same way. */

export function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
}

export const DURATION = {
	fast: 180,
	base: 320,
	slow: 550
};

/** Duration to actually use, collapsed to 0 under reduced motion. */
export function duration(ms: number): number {
	return prefersReducedMotion() ? 0 : ms;
}

/** Stagger delay for the nth item in a list reveal, capped so long lists
 * don't take forever to finish appearing. */
export function stagger(index: number, step = 40, max = 480): number {
	return prefersReducedMotion() ? 0 : Math.min(index * step, max);
}

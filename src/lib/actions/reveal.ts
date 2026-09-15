import type { Action } from 'svelte/action';
import { prefersReducedMotion } from '$lib/utils/motion';

export interface RevealOptions {
	/** Extra delay before this element animates, for staggering a row. */
	delay?: number;
	/** Distance travelled on the way in. Negative values come from above. */
	y?: number;
	/** Starting scale, e.g. 0.96 for a subtle push-in. */
	scale?: number;
	threshold?: number;
	/** Set false to re-hide and replay every time it leaves the viewport. */
	once?: boolean;
}

/**
 * Animates an element in the first time it scrolls into view.
 *
 * The hidden state lives entirely in CSS behind `[data-reveal]`, and this
 * action is what adds that attribute — so if JS never runs, or the visitor
 * prefers reduced motion, the attribute is never set and the content is just
 * plainly visible. Nothing can end up permanently invisible.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;

	let opts: RevealOptions = options ?? {};

	function applyVars(o: RevealOptions) {
		node.style.setProperty('--reveal-delay', `${o.delay ?? 0}ms`);
		node.style.setProperty('--reveal-y', `${o.y ?? 28}px`);
		node.style.setProperty('--reveal-scale', String(o.scale ?? 1));
	}

	applyVars(opts);
	node.setAttribute('data-reveal', '');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-reveal', 'in');
					if (opts.once !== false) observer.unobserve(node);
				} else if (opts.once === false) {
					node.setAttribute('data-reveal', '');
				}
			}
		},
		{ threshold: opts.threshold ?? 0.12, rootMargin: '0px 0px -6% 0px' }
	);

	observer.observe(node);

	return {
		update(next) {
			opts = next ?? {};
			applyVars(opts);
		},
		destroy() {
			observer.disconnect();
		}
	};
};

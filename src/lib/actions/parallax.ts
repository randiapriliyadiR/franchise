import type { Action } from 'svelte/action';
import { prefersReducedMotion } from '$lib/utils/motion';

/**
 * Publishes the element's scroll progress as a `--parallax` pixel offset the
 * stylesheet can use however it likes (usually `translate3d(0, var(--parallax), 0)`
 * on a backdrop). Progress is measured from the element's centre against the
 * viewport's centre, so it reads 0 exactly when the element is centred.
 *
 * The listener is passive and every write is batched into one rAF, so this
 * never blocks scrolling.
 */
export const parallax: Action<HTMLElement, number | undefined> = (node, factor) => {
	if (prefersReducedMotion()) return;

	let strength = factor ?? 0.2;
	let frame = 0;

	function measure() {
		frame = 0;
		const rect = node.getBoundingClientRect();
		const viewport = window.innerHeight || 1;
		const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
		node.style.setProperty('--parallax', `${(progress * strength * 100).toFixed(2)}px`);
	}

	function schedule() {
		if (!frame) frame = requestAnimationFrame(measure);
	}

	measure();
	window.addEventListener('scroll', schedule, { passive: true });
	window.addEventListener('resize', schedule, { passive: true });

	return {
		update(next) {
			strength = next ?? 0.2;
			schedule();
		},
		destroy() {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		}
	};
};

/**
 * Publishes the pointer's position over the element as `--mx` / `--my`, each
 * normalised to -1…1 from the centre. Lets a hero drift towards the cursor
 * without any component needing its own mousemove bookkeeping.
 */
export const pointerField: Action<HTMLElement> = (node) => {
	if (prefersReducedMotion()) return;

	let frame = 0;
	let x = 0;
	let y = 0;

	function write() {
		frame = 0;
		node.style.setProperty('--mx', x.toFixed(3));
		node.style.setProperty('--my', y.toFixed(3));
	}

	function onMove(event: PointerEvent) {
		const rect = node.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
		y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
		if (!frame) frame = requestAnimationFrame(write);
	}

	function onLeave() {
		x = 0;
		y = 0;
		if (!frame) frame = requestAnimationFrame(write);
	}

	node.addEventListener('pointermove', onMove, { passive: true });
	node.addEventListener('pointerleave', onLeave, { passive: true });

	return {
		destroy() {
			if (frame) cancelAnimationFrame(frame);
			node.removeEventListener('pointermove', onMove);
			node.removeEventListener('pointerleave', onLeave);
		}
	};
};

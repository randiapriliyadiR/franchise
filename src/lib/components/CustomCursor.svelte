<script lang="ts">
	import { onMount } from 'svelte';
	import { prefersReducedMotion } from '$lib/utils/motion';

	/**
	 * A two-part cursor: a hard dot pinned to the pointer, and a ring that
	 * lags behind it and swells over anything interactive.
	 *
	 * It only takes over on real pointing devices, and only once this has
	 * mounted — the `has-custom-cursor` class it adds is what hides the native
	 * one, so a visitor without JS (or on a touchscreen, or with reduced
	 * motion) keeps their normal cursor and never ends up with none at all.
	 */

	let dot = $state<HTMLDivElement | null>(null);
	let ring = $state<HTMLDivElement | null>(null);
	let active = $state(false);
	let visible = $state(false);
	let enabled = $state(false);

	const INTERACTIVE = 'a, button, input, select, textarea, summary, [role="button"], [tabindex]';

	onMount(() => {
		const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
		if (!fine.matches || prefersReducedMotion()) return;

		enabled = true;
		document.documentElement.classList.add('has-custom-cursor');

		let pointerX = window.innerWidth / 2;
		let pointerY = window.innerHeight / 2;
		let ringX = pointerX;
		let ringY = pointerY;
		let frame = requestAnimationFrame(tick);

		function tick() {
			// Ring eases toward the pointer; the dot is already exact. The gap
			// between them is the whole effect.
			ringX += (pointerX - ringX) * 0.18;
			ringY += (pointerY - ringY) * 0.18;
			if (ring)
				ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
			if (dot)
				dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
			frame = requestAnimationFrame(tick);
		}

		function onMove(event: PointerEvent) {
			pointerX = event.clientX;
			pointerY = event.clientY;
			visible = true;
			const target = event.target;
			active = target instanceof Element ? !!target.closest(INTERACTIVE) : false;
		}

		function onLeave() {
			visible = false;
		}

		window.addEventListener('pointermove', onMove, { passive: true });
		document.addEventListener('pointerleave', onLeave);
		window.addEventListener('blur', onLeave);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('pointermove', onMove);
			document.removeEventListener('pointerleave', onLeave);
			window.removeEventListener('blur', onLeave);
			document.documentElement.classList.remove('has-custom-cursor');
		};
	});
</script>

{#if enabled}
	<div class="cursor-layer" aria-hidden="true" class:visible>
		<div class="ring" class:active bind:this={ring}></div>
		<div class="dot" bind:this={dot}></div>
	</div>
{/if}

<style>
	.cursor-layer {
		position: fixed;
		inset: 0;
		z-index: 9999;
		pointer-events: none;
		opacity: 0;
		transition: opacity 200ms var(--ease-out);
	}

	.cursor-layer.visible {
		opacity: 1;
	}

	.ring,
	.dot {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 999px;
	}

	.ring {
		width: 34px;
		height: 34px;
		border: 1px solid color-mix(in srgb, var(--accent-soft) 70%, transparent);
		transition:
			width 260ms var(--ease-spring),
			height 260ms var(--ease-spring),
			background-color 260ms var(--ease-out),
			border-color 260ms var(--ease-out);
	}

	.ring.active {
		width: 58px;
		height: 58px;
		background: color-mix(in srgb, var(--accent) 14%, transparent);
		border-color: var(--accent);
	}

	.dot {
		width: 5px;
		height: 5px;
		background: var(--ink);
	}
</style>

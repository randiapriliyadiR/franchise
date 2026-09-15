<script lang="ts">
	import type { AtmosphereKind } from '$lib/data/types';

	/**
	 * The set dressing behind a franchise: a fixed, purely decorative backdrop
	 * that gives each one its own light and texture. Every treatment is built
	 * from gradients alone — no image requests — and animates only `transform`
	 * / `opacity` so it stays cheap while the page scrolls over it.
	 */
	let { kind }: { kind: AtmosphereKind } = $props();
</script>

<div class="atmosphere {kind}" aria-hidden="true">
	<div class="glow"></div>
	<div class="texture"></div>
	<div class="drift"></div>
	<div class="vignette"></div>
</div>

<style>
	.atmosphere {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		overflow: hidden;
		contain: layout paint;
	}

	.glow,
	.texture,
	.drift,
	.vignette {
		position: absolute;
		inset: -25%;
	}

	.vignette {
		inset: 0;
		background: radial-gradient(
			ellipse at 50% 42%,
			transparent 34%,
			color-mix(in srgb, var(--bg) 82%, transparent) 78%,
			var(--bg) 100%
		);
	}

	/* ---------- Marvel: comic halftone under hot studio light ---------- */

	.halftone .glow {
		background:
			radial-gradient(
				38rem 30rem at 18% 12%,
				color-mix(in srgb, var(--accent) 34%, transparent),
				transparent 70%
			),
			radial-gradient(
				34rem 28rem at 84% 78%,
				color-mix(in srgb, var(--accent-2) 26%, transparent),
				transparent 72%
			);
	}

	.halftone .texture {
		background-image: radial-gradient(circle, var(--accent-soft) 1.1px, transparent 1.2px);
		background-size: 11px 11px;
		opacity: 0.14;
		--tile-rotate: 18deg;
		--tile-size: 11px;
		transform: rotate(18deg);
		animation: slide-tile 9s linear infinite;
	}

	/* ---------- The Walking Dead: grime, scratches, dead light ---------- */

	.decay .glow {
		background:
			radial-gradient(
				42rem 34rem at 70% 18%,
				color-mix(in srgb, var(--accent-soft) 16%, transparent),
				transparent 72%
			),
			radial-gradient(
				36rem 30rem at 15% 88%,
				color-mix(in srgb, var(--accent) 30%, transparent),
				transparent 74%
			);
	}

	.decay .texture {
		background-image:
			repeating-linear-gradient(
				97deg,
				transparent 0 3px,
				rgba(0, 0, 0, 0.5) 3px 4px,
				transparent 4px 19px
			),
			repeating-linear-gradient(
				82deg,
				transparent 0 11px,
				color-mix(in srgb, var(--accent-soft) 22%, transparent) 11px 12px,
				transparent 12px 40px
			);
		opacity: 0.35;
	}

	.decay .drift {
		background-image: radial-gradient(circle, rgba(200, 190, 160, 0.5) 0.9px, transparent 1px);
		background-size: 190px 190px;
		opacity: 0.25;
		animation: rise 26s linear infinite;
	}

	/* ---------- Wizarding World: candlelight and floating motes ---------- */

	.parchment .glow {
		background:
			radial-gradient(
				40rem 32rem at 78% 16%,
				color-mix(in srgb, var(--accent-soft) 24%, transparent),
				transparent 70%
			),
			radial-gradient(
				34rem 30rem at 12% 74%,
				color-mix(in srgb, var(--accent) 30%, transparent),
				transparent 72%
			);
	}

	.parchment .texture {
		background-image:
			radial-gradient(
				circle,
				color-mix(in srgb, var(--accent-soft) 60%, transparent) 1px,
				transparent 1.4px
			),
			radial-gradient(
				circle,
				color-mix(in srgb, var(--accent) 50%, transparent) 1.6px,
				transparent 2px
			);
		background-size:
			140px 140px,
			230px 230px;
		opacity: 0.4;
		animation: rise 34s linear infinite;
	}

	.parchment .drift {
		background-image: radial-gradient(circle, rgba(255, 233, 180, 0.8) 1.2px, transparent 1.6px);
		background-size: 320px 320px;
		opacity: 0.3;
		animation: rise 22s linear infinite reverse;
	}

	/* ---------- Star Wars: deep field, two parallax star layers ---------- */

	.starfield .glow {
		background:
			radial-gradient(
				44rem 34rem at 22% 22%,
				color-mix(in srgb, var(--accent) 22%, transparent),
				transparent 70%
			),
			radial-gradient(
				36rem 30rem at 82% 72%,
				color-mix(in srgb, var(--accent-2) 20%, transparent),
				transparent 72%
			);
	}

	.starfield .texture {
		background-image:
			radial-gradient(1.4px 1.4px at 12% 18%, #ffffff, transparent),
			radial-gradient(1.2px 1.2px at 27% 63%, #cfe8ff, transparent),
			radial-gradient(1.6px 1.6px at 43% 31%, #ffffff, transparent),
			radial-gradient(1px 1px at 58% 77%, #dceaff, transparent),
			radial-gradient(1.5px 1.5px at 71% 24%, #ffffff, transparent),
			radial-gradient(1.1px 1.1px at 86% 58%, #cfe8ff, transparent),
			radial-gradient(1.3px 1.3px at 34% 88%, #ffffff, transparent),
			radial-gradient(1px 1px at 92% 12%, #ffffff, transparent);
		background-size: 380px 380px;
		opacity: 0.85;
		animation: drift-diagonal 120s linear infinite;
	}

	.starfield .drift {
		background-image:
			radial-gradient(2px 2px at 18% 44%, #ffffff, transparent),
			radial-gradient(
				2.4px 2.4px at 64% 16%,
				color-mix(in srgb, var(--accent) 90%, white),
				transparent
			),
			radial-gradient(2px 2px at 79% 82%, #ffffff, transparent);
		background-size: 640px 640px;
		opacity: 0.6;
		animation: drift-diagonal 70s linear infinite;
	}

	/* ---------- Star Trek: scan lines and a console glow ---------- */

	.lcars .glow {
		background:
			radial-gradient(
				40rem 30rem at 80% 14%,
				color-mix(in srgb, var(--accent) 26%, transparent),
				transparent 70%
			),
			radial-gradient(
				38rem 32rem at 16% 80%,
				color-mix(in srgb, var(--accent-soft) 26%, transparent),
				transparent 72%
			);
	}

	.lcars .texture {
		background-image: repeating-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.045) 0 1px,
			transparent 1px 4px
		);
		opacity: 0.8;
	}

	.lcars .drift {
		background-image: linear-gradient(
			90deg,
			color-mix(in srgb, var(--accent) 40%, transparent) 0 6px,
			transparent 6px
		);
		opacity: 0.5;
		animation: sweep-x 26s ease-in-out infinite alternate;
	}

	/* ---------- Bond: deco sunburst and gun-barrel rings ---------- */

	.deco .glow {
		background: radial-gradient(
			38rem 34rem at 50% 30%,
			color-mix(in srgb, var(--accent) 26%, transparent),
			transparent 72%
		);
	}

	.deco .texture {
		background-image: repeating-conic-gradient(
			from 0deg at 50% 38%,
			transparent 0deg 5deg,
			color-mix(in srgb, var(--accent-soft) 16%, transparent) 5deg 10deg
		);
		opacity: 0.5;
		animation: spin-slow 180s linear infinite;
	}

	.deco .drift {
		background-image: repeating-radial-gradient(
			circle at 50% 38%,
			transparent 0 58px,
			color-mix(in srgb, var(--accent-soft) 26%, transparent) 58px 60px
		);
		opacity: 0.35;
		animation: breathe 16s ease-in-out infinite;
	}

	/* ---------- Middle-earth: embers over a forge glow ---------- */

	.ember .glow {
		background:
			radial-gradient(
				40rem 30rem at 24% 20%,
				color-mix(in srgb, var(--accent) 34%, transparent),
				transparent 72%
			),
			radial-gradient(
				36rem 32rem at 78% 82%,
				color-mix(in srgb, var(--accent-2) 30%, transparent),
				transparent 74%
			);
	}

	.ember .texture {
		background-image:
			radial-gradient(
				circle,
				color-mix(in srgb, var(--accent-soft) 85%, transparent) 1.3px,
				transparent 1.8px
			),
			radial-gradient(
				circle,
				color-mix(in srgb, var(--accent-2) 75%, transparent) 1.8px,
				transparent 2.4px
			);
		background-size:
			170px 170px,
			290px 290px;
		opacity: 0.55;
		animation: rise 18s linear infinite;
	}

	.ember .drift {
		background-image: radial-gradient(
			22rem 16rem at 50% 108%,
			color-mix(in srgb, var(--accent-soft) 40%, transparent),
			transparent 70%
		);
		animation: breathe 9s ease-in-out infinite;
	}

	/* ---------- Stephen King: worn VHS, scan lines and tracking ---------- */

	.vhs .glow {
		background:
			radial-gradient(
				38rem 30rem at 26% 18%,
				color-mix(in srgb, var(--accent) 32%, transparent),
				transparent 70%
			),
			radial-gradient(
				34rem 30rem at 80% 76%,
				color-mix(in srgb, var(--accent-2) 26%, transparent),
				transparent 72%
			);
		animation: flicker 7s steps(2) infinite;
	}

	.vhs .texture {
		background-image: repeating-linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.42) 0 1px,
			transparent 1px 3px
		);
		opacity: 0.75;
	}

	/* The tracking band that crawls down a worn tape. */
	.vhs .drift {
		background: linear-gradient(
			180deg,
			transparent 0%,
			color-mix(in srgb, var(--accent-soft) 18%, transparent) 46%,
			rgba(255, 255, 255, 0.1) 50%,
			color-mix(in srgb, var(--accent-2) 16%, transparent) 54%,
			transparent 100%
		);
		height: 28vh;
		inset: auto -25% auto -25%;
		animation: tracking-band 11s linear infinite;
	}

	/* ---------- Asterix: bright, loud, printed on cheap paper ---------- */

	.comic .glow {
		background:
			radial-gradient(
				40rem 30rem at 20% 16%,
				color-mix(in srgb, var(--accent) 36%, transparent),
				transparent 70%
			),
			radial-gradient(
				38rem 32rem at 82% 80%,
				color-mix(in srgb, var(--accent-soft) 34%, transparent),
				transparent 72%
			);
	}

	.comic .texture {
		background-image: radial-gradient(circle, var(--accent) 2px, transparent 2.4px);
		background-size: 18px 18px;
		opacity: 0.16;
		--tile-rotate: 12deg;
		--tile-size: 18px;
		transform: rotate(12deg);
		animation: slide-tile 14s linear infinite;
	}

	.comic .drift {
		background-image: repeating-linear-gradient(
			-38deg,
			transparent 0 44px,
			color-mix(in srgb, var(--accent-soft) 14%, transparent) 44px 52px
		);
		opacity: 0.4;
	}

	/* ---------- Sherlock: gaslight through London fog ---------- */

	.fog .glow {
		background:
			radial-gradient(
				30rem 24rem at 24% 26%,
				color-mix(in srgb, var(--accent) 34%, transparent),
				transparent 68%
			),
			radial-gradient(
				26rem 22rem at 74% 70%,
				color-mix(in srgb, var(--accent-soft) 26%, transparent),
				transparent 70%
			);
	}

	.fog .texture {
		background:
			radial-gradient(28rem 12rem at 20% 60%, rgba(214, 208, 196, 0.16), transparent 70%),
			radial-gradient(34rem 14rem at 70% 44%, rgba(214, 208, 196, 0.13), transparent 72%),
			radial-gradient(24rem 10rem at 48% 82%, rgba(214, 208, 196, 0.15), transparent 70%);
		animation: sweep-x 48s ease-in-out infinite alternate;
	}

	.fog .drift {
		background:
			radial-gradient(22rem 9rem at 62% 30%, rgba(214, 208, 196, 0.12), transparent 70%),
			radial-gradient(30rem 12rem at 30% 88%, rgba(214, 208, 196, 0.1), transparent 72%);
		animation: sweep-x 34s ease-in-out infinite alternate-reverse;
	}

	/* ---------- Shared motion ---------- */

	@keyframes slide-tile {
		to {
			/* One full tile, so the pattern never visibly jumps. */
			transform: rotate(var(--tile-rotate, 18deg))
				translate3d(var(--tile-size, 11px), var(--tile-size, 11px), 0);
		}
	}

	@keyframes rise {
		to {
			transform: translate3d(0, -190px, 0);
		}
	}

	@keyframes drift-diagonal {
		to {
			transform: translate3d(-380px, -190px, 0);
		}
	}

	@keyframes sweep-x {
		from {
			transform: translate3d(-3%, 0, 0);
		}
		to {
			transform: translate3d(3%, 1%, 0);
		}
	}

	@keyframes spin-slow {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes breathe {
		0%,
		100% {
			opacity: 0.28;
		}
		50% {
			opacity: 0.6;
		}
	}

	@keyframes flicker {
		0%,
		92%,
		100% {
			opacity: 1;
		}
		94% {
			opacity: 0.72;
		}
		96% {
			opacity: 1;
		}
		98% {
			opacity: 0.85;
		}
	}

	@keyframes tracking-band {
		from {
			transform: translate3d(0, -30vh, 0);
		}
		to {
			transform: translate3d(0, 130vh, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.glow,
		.texture,
		.drift {
			animation: none !important;
		}

		/* The crawling band only reads as a band while it moves. */
		.vhs .drift {
			display: none;
		}
	}
</style>

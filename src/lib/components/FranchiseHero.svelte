<script lang="ts">
	import type { Entry, Franchise, FranchiseStats } from '$lib/data/types';
	import Poster from './Poster.svelte';
	import { parallax, pointerField } from '$lib/actions/parallax';

	let {
		franchise,
		stats,
		heroEntry
	}: {
		franchise: Franchise;
		stats: FranchiseStats;
		heroEntry: Entry | null;
	} = $props();

	const words = $derived(franchise.name.split(' '));
	// Repeated twice so the marquee can translate a clean -50% and loop seamlessly.
	const mottoRun = $derived(Array.from({ length: 6 }, () => franchise.motto));
</script>

{#key franchise.id}
	<section class="hero" use:pointerField>
		<div class="backdrop" use:parallax={0.22}>
			{#if heroEntry?.backdropPath}
				<Poster entry={heroEntry} kind="backdrop" size="w780" eager />
			{/if}
		</div>
		<div class="scrim" aria-hidden="true"></div>
		<div class="wash" aria-hidden="true"></div>

		<div class="inner container-wide">
			<p class="kicker">
				{franchise.publisher} <span aria-hidden="true">·</span> est. {franchise.startYear}
			</p>

			<h1 class="title type-franchise">
				{#each words as word, i (word + i)}
					<span class="word" style="--i: {i}">{word}</span>
				{/each}
			</h1>

			<p class="tagline">{franchise.tagline}</p>

			<dl class="stats">
				<div>
					<dt>Entries</dt>
					<dd class="type-franchise">{stats.total}</dd>
				</div>
				{#if stats.yearRange}
					<div>
						<dt>Span</dt>
						<dd class="type-franchise">{stats.yearRange[0]}–{stats.yearRange[1]}</dd>
					</div>
				{/if}
				{#if stats.averageRating}
					<div>
						<dt>Avg. rating</dt>
						<dd class="type-franchise">{stats.averageRating.toFixed(1)}</dd>
					</div>
				{/if}
			</dl>
		</div>

		<div class="marquee" aria-hidden="true">
			<div class="track type-franchise">
				{#each mottoRun as motto, i (i)}
					<span>{motto}</span>
					<span class="sep">✳</span>
				{/each}
				{#each mottoRun as motto, i (`dup-${i}`)}
					<span>{motto}</span>
					<span class="sep">✳</span>
				{/each}
			</div>
		</div>
	</section>
{/key}

<style>
	.hero {
		position: relative;
		min-height: min(94svh, 60rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		padding-block: var(--space-9) 0;
		isolation: isolate;
	}

	.backdrop {
		position: absolute;
		inset: -12% -4%;
		z-index: -2;
		/* Scroll parallax from the action, plus a gentle drift toward the pointer. */
		transform: translate3d(
				calc(var(--mx, 0) * -14px),
				calc(var(--parallax, 0px) + var(--my, 0) * -14px),
				0
			)
			scale(1.08);
		transition: transform 600ms var(--ease-out);
	}

	.backdrop :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.backdrop :global(.poster img) {
		filter: saturate(0.72) contrast(1.12);
	}

	/* Pushes the artwork toward the franchise's own colour instead of leaving
	   every hero the same neutral grey-brown. */
	.wash {
		position: absolute;
		inset: 0;
		z-index: -1;
		background: var(--gradient);
		opacity: 0.66;
		mix-blend-mode: multiply;
	}

	.scrim {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				to top,
				var(--bg) 2%,
				color-mix(in srgb, var(--bg) 40%, transparent) 46%,
				transparent 78%
			),
			linear-gradient(to right, var(--bg) -12%, transparent 58%);
	}

	.inner {
		width: 100%;
		padding-bottom: var(--space-7);
	}

	.kicker {
		font-size: var(--fs-micro);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.26em;
		color: var(--accent-soft);
		margin-bottom: var(--space-5);
		animation: rise-in 700ms var(--ease-expo) both;
	}

	.title {
		font-size: calc(clamp(2.6rem, 1rem + 7.6vw, 8.4rem) * var(--franchise-scale, 1));
		line-height: 0.9;
		margin: 0;
		max-width: 20ch;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.28em;
	}

	.word {
		display: inline-block;
		animation: word-in 1s var(--ease-expo) both;
		animation-delay: calc(var(--i) * 85ms + 90ms);
	}

	.tagline {
		margin-top: var(--space-5);
		max-width: 46ch;
		font-size: var(--fs-h4);
		color: var(--ink-dim);
		animation: rise-in 900ms var(--ease-expo) both;
		animation-delay: 380ms;
	}

	.stats {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-6) var(--space-8);
		margin-top: var(--space-7);
		padding-top: var(--space-5);
		border-top: 1px solid var(--border-strong);
		animation: rise-in 900ms var(--ease-expo) both;
		animation-delay: 520ms;
	}

	.stats dt {
		font-size: var(--fs-micro);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin-bottom: var(--space-2);
	}

	.stats dd {
		margin: 0;
		font-size: var(--fs-h3);
		color: var(--ink);
		line-height: 1;
	}

	/* ---- Motto marquee ---- */

	.marquee {
		position: relative;
		overflow: hidden;
		border-block: 1px solid var(--border-strong);
		background: color-mix(in srgb, var(--surface) 55%, transparent);
		backdrop-filter: blur(6px);
		padding-block: var(--space-3);
	}

	.track {
		display: flex;
		align-items: center;
		gap: var(--space-5);
		width: max-content;
		font-size: clamp(0.9rem, 0.7rem + 0.7vw, 1.4rem);
		color: color-mix(in srgb, var(--ink) 72%, transparent);
		white-space: nowrap;
		animation: marquee-track 34s linear infinite;
	}

	.sep {
		color: var(--accent);
	}

	@keyframes word-in {
		from {
			opacity: 0;
			transform: translate3d(0, 0.5em, 0) rotate(1.5deg);
		}
	}

	@keyframes rise-in {
		from {
			opacity: 0;
			transform: translate3d(0, 16px, 0);
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: min(88svh, 44rem);
		}

		.stats {
			gap: var(--space-5);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.backdrop {
			transform: none;
			transition: none;
		}

		.word,
		.kicker,
		.tagline,
		.stats {
			animation: none;
		}

		.track {
			animation: none;
		}
	}
</style>

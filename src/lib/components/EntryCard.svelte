<script lang="ts">
	import type { Entry } from '$lib/data/types';
	import Poster from './Poster.svelte';
	import { formatYear, typeLabel, formatRating } from '$lib/utils/format';
	import { resolve } from '$app/paths';

	let { entry }: { entry: Entry } = $props();
</script>

<a
	class="card"
	href={resolve('/[franchise]/[entry]', { franchise: entry.franchise, entry: entry.id })}
>
	<div class="frame">
		<Poster {entry} size="w342" />
		<span class="sheen" aria-hidden="true"></span>

		<span class="type-badge">{typeLabel(entry.type)}</span>
		{#if entry.status === 'upcoming'}
			<span class="upcoming-badge">Upcoming</span>
		{/if}
		{#if typeof entry.rating === 'number'}
			<span class="rating"><i aria-hidden="true">★</i>{formatRating(entry.rating)}</span>
		{/if}
	</div>

	<div class="meta">
		<h3 class="type-franchise">{entry.title}</h3>
		<p class="sub">
			<span>{formatYear(entry.releaseDate)}</span>
			{#if entry.group}
				<span class="dot" aria-hidden="true">·</span>
				<span class="group">{entry.group}</span>
			{/if}
		</p>
	</div>
</a>

<style>
	.card {
		display: block;
		text-decoration: none;
		color: inherit;
		transition: transform var(--duration-base) var(--ease-out);
	}

	.card:hover,
	.card:focus-visible {
		transform: translateY(-6px);
	}

	.frame {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-sm);
		border: 1px solid var(--border);
		isolation: isolate;
		transition:
			border-color var(--duration-base) var(--ease-out),
			box-shadow var(--duration-base) var(--ease-out);
	}

	.card:hover .frame,
	.card:focus-visible .frame {
		border-color: var(--accent);
		box-shadow: var(--shadow-raised);
	}

	.frame :global(.poster) {
		border-radius: 0;
	}

	.frame :global(.poster img) {
		filter: saturate(0.85) contrast(1.05);
		transition:
			transform var(--duration-slow) var(--ease-out),
			filter var(--duration-slow) var(--ease-out);
	}

	.card:hover .frame :global(.poster img),
	.card:focus-visible .frame :global(.poster img) {
		transform: scale(1.07);
		filter: saturate(1.05) contrast(1);
	}

	/* A hard diagonal of accent light that wipes across the art on hover. */
	.sheen {
		position: absolute;
		inset: -40%;
		background: linear-gradient(
			104deg,
			transparent 42%,
			color-mix(in srgb, var(--accent-soft) 42%, transparent) 50%,
			transparent 58%
		);
		transform: translate3d(-120%, 0, 0);
		opacity: 0;
		pointer-events: none;
		transition:
			transform 900ms var(--ease-expo),
			opacity 300ms var(--ease-out);
	}

	.card:hover .sheen,
	.card:focus-visible .sheen {
		transform: translate3d(120%, 0, 0);
		opacity: 1;
	}

	.type-badge,
	.upcoming-badge,
	.rating {
		position: absolute;
		z-index: 2;
		font-size: var(--fs-micro);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		padding: 3px var(--space-2);
		backdrop-filter: blur(6px);
	}

	.type-badge {
		top: var(--space-2);
		left: var(--space-2);
		color: var(--ink);
		background: color-mix(in srgb, var(--accent) 78%, transparent);
	}

	.upcoming-badge {
		top: var(--space-2);
		right: var(--space-2);
		color: var(--ink);
		background: rgba(0, 0, 0, 0.6);
		border: 1px solid var(--border-strong);
	}

	.rating {
		bottom: var(--space-2);
		right: var(--space-2);
		display: inline-flex;
		align-items: center;
		gap: 3px;
		letter-spacing: 0.06em;
		color: var(--ink);
		background: rgba(0, 0, 0, 0.62);
	}

	.rating i {
		color: var(--accent-soft);
		font-style: normal;
	}

	.meta {
		padding-top: var(--space-3);
	}

	h3 {
		font-size: calc(var(--fs-h4) * var(--franchise-scale, 1));
		line-height: 1.12;
		transition: color var(--duration-base) var(--ease-out);
	}

	.card:hover h3,
	.card:focus-visible h3 {
		color: var(--accent-soft);
	}

	.sub {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-2);
		color: var(--ink-faint);
		font-size: var(--fs-small);
	}

	.group {
		color: var(--ink-dim);
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.frame,
		.sheen,
		h3 {
			transition: none;
		}

		.sheen {
			display: none;
		}
	}
</style>

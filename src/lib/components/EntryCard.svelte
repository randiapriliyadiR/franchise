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
	<Poster {entry} size="w342" />
	<div class="meta">
		<div class="badges">
			<span class="type-badge">{typeLabel(entry.type)}</span>
			{#if entry.status === 'upcoming'}
				<span class="upcoming-badge">Upcoming</span>
			{/if}
		</div>
		<h3>{entry.title}</h3>
		<p class="sub">
			<span>{formatYear(entry.releaseDate)}</span>
			{#if entry.group}
				<span aria-hidden="true">·</span>
				<span>{entry.group}</span>
			{/if}
		</p>
		{#if typeof entry.rating === 'number'}
			<p class="rating"><span aria-hidden="true">★</span> {formatRating(entry.rating)}</p>
		{/if}
	</div>
</a>

<style>
	.card {
		display: block;
		text-decoration: none;
		color: inherit;
		border-radius: var(--radius-md);
		transition:
			transform var(--duration-base) var(--ease-out),
			box-shadow var(--duration-base) var(--ease-out);
	}

	.card:hover,
	.card:focus-visible {
		transform: translateY(-4px);
	}

	.card:hover :global(.poster),
	.card:focus-visible :global(.poster) {
		box-shadow: var(--shadow-raised);
	}

	.card:hover :global(.poster img),
	.card:focus-visible :global(.poster img) {
		transform: scale(1.06);
	}

	.meta {
		padding-block: var(--space-3);
	}

	.badges {
		display: flex;
		gap: var(--space-2);
		margin-bottom: var(--space-2);
	}

	.type-badge,
	.upcoming-badge {
		font-size: var(--fs-small);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 2px var(--space-2);
		border-radius: 999px;
	}

	.type-badge {
		color: var(--accent-soft);
		background: color-mix(in srgb, var(--accent) 18%, transparent);
	}

	.upcoming-badge {
		color: var(--ink-dim);
		border: 1px solid var(--border-strong);
	}

	h3 {
		font-size: var(--fs-h4);
		margin-bottom: var(--space-1);
		transition: color var(--duration-base) var(--ease-out);
	}

	.card:hover h3,
	.card:focus-visible h3 {
		color: var(--accent-soft);
	}

	.sub {
		color: var(--ink-dim);
		font-size: var(--fs-small);
		display: flex;
		gap: var(--space-2);
	}

	.rating {
		margin-top: var(--space-2);
		font-size: var(--fs-small);
		color: var(--accent-soft);
		font-weight: 600;
	}
</style>

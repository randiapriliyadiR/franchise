<script lang="ts">
	import type { Entry, EntryOrder } from '$lib/data/types';
	import Poster from './Poster.svelte';
	import { formatDate, typeLabel } from '$lib/utils/format';
	import { resolve } from '$app/paths';

	let {
		entry,
		order
	}: {
		entry: Entry;
		order: EntryOrder;
	} = $props();
</script>

<a
	class="item"
	href={resolve('/[franchise]/[entry]', { franchise: entry.franchise, entry: entry.id })}
>
	<div class="thumb">
		<Poster {entry} size="w185" />
	</div>
	<div class="content">
		<p class="marker">
			{#if order === 'release'}
				{formatDate(entry.releaseDate)}
			{:else}
				{entry.chronologyNote ?? formatDate(entry.releaseDate)}
			{/if}
		</p>
		<span class="type-badge">{typeLabel(entry.type)}</span>
		<h3>{entry.title}</h3>
		<p class="synopsis">{entry.synopsis}</p>
	</div>
</a>

<style>
	.item {
		display: flex;
		gap: var(--space-5);
		text-decoration: none;
		color: inherit;
		padding: var(--space-4);
		border-radius: var(--radius-lg);
		transition:
			background var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
	}

	.item:hover,
	.item:focus-visible {
		background: var(--surface-raised);
		transform: translateX(4px);
	}

	.thumb {
		width: 88px;
		flex-shrink: 0;
	}

	.marker {
		font-size: var(--fs-small);
		color: var(--accent-soft);
		font-weight: 600;
		margin-bottom: var(--space-1);
	}

	.type-badge {
		font-size: var(--fs-small);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	h3 {
		font-size: var(--fs-h4);
		margin-block: var(--space-1) var(--space-2);
	}

	.synopsis {
		color: var(--ink-dim);
		font-size: var(--fs-small);
		max-width: 60ch;
	}

	@media (max-width: 560px) {
		.item {
			gap: var(--space-3);
		}
		.thumb {
			width: 64px;
		}
	}
</style>

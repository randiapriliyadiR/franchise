<script lang="ts">
	import type { Entry, EntryOrder } from '$lib/data/types';
	import Poster from './Poster.svelte';
	import { formatYear, typeLabel } from '$lib/utils/format';

	let {
		entry,
		order,
		onSelect
	}: {
		entry: Entry;
		order: EntryOrder;
		/** Opens this entry's detail modal (see `TimelineRail`). */
		onSelect: () => void;
	} = $props();
</script>

<button type="button" class="node" onclick={onSelect}>
	<div class="thumb">
		<Poster {entry} size="w185" />
	</div>
	<div class="content">
		<span class="type-badge">{typeLabel(entry.type)}</span>
		<h4>{entry.title}</h4>
		<span class="marker">
			{#if order === 'release'}
				{formatYear(entry.releaseDate)}
			{:else}
				{entry.chronologyNote ?? formatYear(entry.releaseDate)}
			{/if}
		</span>
	</div>
</button>

<style>
	.node {
		display: flex;
		align-items: stretch;
		gap: var(--space-2);
		width: 100%;
		height: 100%;
		text-decoration: none;
		text-align: left;
		font: inherit;
		color: inherit;
		cursor: pointer;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		transition:
			border-color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out),
			box-shadow var(--duration-fast) var(--ease-out);
	}

	.node:hover,
	.node:focus-visible {
		border-color: var(--accent-soft);
		transform: translateY(-2px);
		box-shadow: var(--shadow-card);
	}

	.thumb {
		width: 76px;
		flex-shrink: 0;
	}

	.thumb :global(.poster) {
		border-radius: 0;
		height: 100%;
	}

	.content {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3px;
		padding: var(--space-2) var(--space-3) var(--space-2) 0;
	}

	.type-badge {
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--accent-soft);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	h4 {
		font-size: 0.82rem;
		line-height: 1.25;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-word;
	}

	.marker {
		font-size: 0.7rem;
		color: var(--ink-faint);
	}
</style>

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
		<h4 class="type-franchise">{entry.title}</h4>
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
		position: relative;
		display: flex;
		align-items: stretch;
		gap: var(--space-3);
		width: 100%;
		height: 100%;
		text-decoration: none;
		text-align: left;
		font: inherit;
		color: inherit;
		cursor: pointer;
		background: color-mix(in srgb, var(--surface-raised) 82%, transparent);
		backdrop-filter: blur(8px);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		overflow: hidden;
		transition:
			border-color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out),
			box-shadow var(--duration-fast) var(--ease-out);
	}

	/* Accent spine down the left edge, filling in on hover. */
	.node::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--accent);
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform var(--duration-base) var(--ease-expo);
		z-index: 2;
	}

	.node:hover,
	.node:focus-visible {
		border-color: var(--accent);
		transform: translateY(-3px);
		box-shadow: var(--shadow-card);
	}

	.node:hover::before,
	.node:focus-visible::before {
		transform: scaleY(1);
	}

	.thumb {
		width: 80px;
		flex-shrink: 0;
	}

	.thumb :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.thumb :global(.poster img) {
		filter: saturate(0.8) contrast(1.06);
		transition: filter var(--duration-base) var(--ease-out);
	}

	.node:hover .thumb :global(.poster img) {
		filter: saturate(1.05) contrast(1);
	}

	.content {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 4px;
		padding: var(--space-2) var(--space-3) var(--space-2) 0;
	}

	.type-badge {
		font-size: 0.6rem;
		font-weight: 700;
		color: var(--accent-soft);
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	h4 {
		font-size: calc(0.86rem * var(--franchise-scale, 1));
		line-height: 1.2;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-word;
		transition: color var(--duration-fast) var(--ease-out);
	}

	.node:hover h4 {
		color: var(--accent-soft);
	}

	.marker {
		font-size: 0.68rem;
		color: var(--ink-faint);
		letter-spacing: 0.04em;
	}

	@media (prefers-reduced-motion: reduce) {
		.node,
		.node::before,
		h4 {
			transition: none;
		}
	}
</style>

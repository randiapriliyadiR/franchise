<script lang="ts">
	import type { MediaType, SortKey } from '$lib/data/types';
	import { typeLabel } from '$lib/utils/format';

	let {
		availableTypes,
		availableGroups,
		selectedTypes = $bindable([]),
		selectedGroup = $bindable(''),
		sort = $bindable('release'),
		query = $bindable(''),
		resultCount
	}: {
		availableTypes: MediaType[];
		availableGroups: string[];
		selectedTypes: MediaType[];
		selectedGroup: string;
		sort: SortKey;
		query: string;
		resultCount: number;
	} = $props();

	function toggleType(type: MediaType) {
		selectedTypes = selectedTypes.includes(type)
			? selectedTypes.filter((t) => t !== type)
			: [...selectedTypes, type];
	}

	const sortOptions: { value: SortKey; label: string }[] = [
		{ value: 'release', label: 'Release date' },
		{ value: 'chronology', label: 'Story order' },
		{ value: 'rating', label: 'Rating' },
		{ value: 'title', label: 'Title (A–Z)' },
		{ value: 'runtime', label: 'Runtime' }
	];
</script>

{#snippet typeIcon(type: MediaType)}
	<svg
		class="chip-icon"
		viewBox="0 0 16 16"
		width="14"
		height="14"
		fill="none"
		stroke="currentColor"
		stroke-width="1.3"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if type === 'film'}
			<path d="M2.5 6.5h11v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6Z" />
			<path d="M2.5 6.5 3 3.8l9.3 1.9-.5 1" />
			<path d="M6 6.5l.6-2.6M9.8 6.5l.5-2.3" />
		{:else if type === 'series'}
			<rect x="2" y="3.5" width="12" height="8" rx="1" />
			<path d="M6 13.5h4M8 11.5v2" />
		{:else if type === 'game'}
			<path
				d="M4.5 5.5h7a3 3 0 0 1 3 3.3l-.3 2a1.6 1.6 0 0 1-2.9.7L10.5 10h-5l-.8 1.5a1.6 1.6 0 0 1-2.9-.7l-.3-2a3 3 0 0 1 3-3.3Z"
			/>
			<path d="M5.5 7.2v2M4.5 8.2h2" />
			<path d="M11.7 7.8h.01M13 9.1h.01" />
		{:else if type === 'comic'}
			<path
				d="M8 4.2C7 3.4 5.6 3 3.6 3v9c2 0 3.4.4 4.4 1.2M8 4.2c1-.8 2.4-1.2 4.4-1.2v9c-2 0-3.4.4-4.4 1.2M8 4.2v9"
			/>
		{:else if type === 'short'}
			<circle cx="8" cy="9" r="5" />
			<path d="M8 9V6.3M6.3 2h3.4" />
		{/if}
	</svg>
{/snippet}

<div class="filter-bar">
	<div class="row">
		<div class="chips" role="group" aria-label="Filter by type">
			{#each availableTypes as type (type)}
				<button
					type="button"
					class="chip"
					aria-pressed={selectedTypes.includes(type)}
					onclick={() => toggleType(type)}
				>
					{@render typeIcon(type)}
					{typeLabel(type)}
				</button>
			{/each}
		</div>

		<div class="controls">
			<label class="field">
				<span class="visually-hidden">Filter by group</span>
				<select bind:value={selectedGroup}>
					<option value="">All groups</option>
					{#each availableGroups as group (group)}
						<option value={group}>{group}</option>
					{/each}
				</select>
			</label>

			<label class="field">
				<span class="visually-hidden">Sort by</span>
				<select bind:value={sort}>
					{#each sortOptions as opt (opt.value)}
						<option value={opt.value}>Sort: {opt.label}</option>
					{/each}
				</select>
			</label>

			<label class="field search">
				<span class="visually-hidden">Search titles</span>
				<input type="search" placeholder="Search titles…" bind:value={query} />
			</label>
		</div>
	</div>

	<p class="result-count" role="status" aria-live="polite">
		{resultCount}
		{resultCount === 1 ? 'entry' : 'entries'}
	</p>
</div>

<style>
	.filter-bar {
		padding-block: var(--space-5);
		border-block: 1px solid var(--border);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-4);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background: color-mix(in srgb, var(--ink) 5%, transparent);
		border: 1px solid var(--border-strong);
		color: var(--ink-dim);
		border-radius: 999px;
		padding: var(--space-2) var(--space-4);
		font-size: var(--fs-micro);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		cursor: pointer;
		transition:
			background var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
	}

	.chip-icon {
		flex-shrink: 0;
	}

	.chip:hover {
		background: color-mix(in srgb, var(--ink) 10%, transparent);
		border-color: var(--accent-soft);
		color: var(--ink);
		transform: translateY(-1px);
	}

	.chip[aria-pressed='true'] {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}

	@media (prefers-reduced-motion: reduce) {
		.chip {
			transition: none;
		}
		.chip:hover {
			transform: none;
		}
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.field select,
	.field input {
		background: color-mix(in srgb, var(--surface-raised) 70%, transparent);
		border: 1px solid var(--border-strong);
		color: var(--ink);
		border-radius: 999px;
		padding: var(--space-2) var(--space-4);
		font-size: var(--fs-small);
	}

	.search input {
		min-width: 12rem;
	}

	.result-count {
		margin-top: var(--space-5);
		font-size: var(--fs-micro);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--ink-faint);
	}
</style>

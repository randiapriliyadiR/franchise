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
		border-bottom: 1px solid var(--border);
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
		background: transparent;
		border: 1px solid var(--border-strong);
		color: var(--ink-dim);
		border-radius: 999px;
		padding: var(--space-2) var(--space-4);
		font-size: var(--fs-small);
		font-weight: 600;
		cursor: pointer;
		transition:
			background var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out);
	}

	.chip:hover {
		border-color: var(--accent-soft);
		color: var(--ink);
	}

	.chip[aria-pressed='true'] {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.field select,
	.field input {
		background: var(--surface-raised);
		border: 1px solid var(--border-strong);
		color: var(--ink);
		border-radius: var(--radius-sm);
		padding: var(--space-2) var(--space-3);
		font-size: var(--fs-small);
	}

	.search input {
		min-width: 12rem;
	}

	.result-count {
		margin-top: var(--space-4);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}
</style>

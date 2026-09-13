<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { MediaType, SortKey } from '$lib/data/types';
	import { filterEntries, sortEntries, uniqueGroups } from '$lib/data';
	import { duration, stagger } from '$lib/utils/motion';
	import FilterBar from '$lib/components/FilterBar.svelte';
	import EntryCard from '$lib/components/EntryCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const availableTypes = $derived([...new Set(data.entries.map((e) => e.type))] as MediaType[]);
	const availableGroups = $derived(uniqueGroups(data.entries));

	let selectedTypes = $state<MediaType[]>([]);
	let selectedGroup = $state('');
	let sort = $state<SortKey>('release');
	let query = $state('');

	const filtered = $derived(
		sortEntries(
			filterEntries(data.entries, {
				types: selectedTypes,
				groups: selectedGroup ? [selectedGroup] : [],
				query
			}),
			sort
		)
	);
</script>

<Seo title={data.franchise.name} description={data.franchise.description} />

<div class="container">
	<FilterBar
		{availableTypes}
		{availableGroups}
		bind:selectedTypes
		bind:selectedGroup
		bind:sort
		bind:query
		resultCount={filtered.length}
	/>

	{#if filtered.length === 0}
		<p class="empty" in:fade={{ duration: duration(200) }}>
			No entries match those filters. Try clearing a filter or the search box.
		</p>
	{:else}
		<ul class="grid">
			{#each filtered as entry, i (entry.id)}
				<li
					animate:flip={{ duration: duration(350), easing: cubicOut }}
					in:fly={{ y: 16, duration: duration(320), delay: stagger(i, 30, 300), easing: cubicOut }}
				>
					<EntryCard {entry} />
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: var(--space-6) var(--space-5);
		padding-block: var(--space-6) var(--space-8);
	}

	.empty {
		padding-block: var(--space-8);
		text-align: center;
		color: var(--ink-dim);
	}
</style>

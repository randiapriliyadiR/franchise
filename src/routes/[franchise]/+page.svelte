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

<div class="container-wide">
	<header class="section-head">
		<p class="kicker">The Collection</p>
		<p class="blurb">{data.franchise.description}</p>
	</header>

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
			Nothing matches those filters. Try clearing one, or the search box.
		</p>
	{:else}
		<ul class="grid">
			{#each filtered as entry, i (entry.id)}
				<li
					animate:flip={{ duration: duration(350), easing: cubicOut }}
					in:fly={{ y: 20, duration: duration(340), delay: stagger(i, 26, 320), easing: cubicOut }}
				>
					<EntryCard {entry} />
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.section-head {
		display: grid;
		grid-template-columns: minmax(0, 14rem) minmax(0, 46rem);
		gap: var(--space-6);
		align-items: start;
		padding-block: var(--space-8) var(--space-6);
	}

	.blurb {
		color: var(--ink-dim);
		font-size: var(--fs-h4);
		text-wrap: pretty;
	}

	/* Fixed column counts (rather than auto-fill) so the stagger below lands
	   on the same columns every time instead of drifting with the viewport. */
	.grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: var(--space-7) var(--space-5);
		padding-block: var(--space-7) var(--space-9);
	}

	/* Every other column rides lower — an editorial rhythm rather than a
	   flat catalogue of identical rows. */
	.grid li:nth-child(5n + 2),
	.grid li:nth-child(5n + 4) {
		margin-top: var(--space-7);
	}

	.empty {
		padding-block: var(--space-9);
		text-align: center;
		color: var(--ink-dim);
		font-size: var(--fs-h4);
	}

	@media (max-width: 1180px) {
		.grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.grid li:nth-child(5n + 2),
		.grid li:nth-child(5n + 4) {
			margin-top: 0;
		}

		.grid li:nth-child(4n + 2),
		.grid li:nth-child(4n + 4) {
			margin-top: var(--space-6);
		}
	}

	@media (max-width: 860px) {
		.section-head {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.grid li:nth-child(4n + 2),
		.grid li:nth-child(4n + 4) {
			margin-top: 0;
		}

		.grid li:nth-child(3n + 2) {
			margin-top: var(--space-5);
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: var(--space-6) var(--space-4);
		}

		.grid li:nth-child(3n + 2) {
			margin-top: 0;
		}

		.grid li:nth-child(2n) {
			margin-top: var(--space-5);
		}
	}
</style>

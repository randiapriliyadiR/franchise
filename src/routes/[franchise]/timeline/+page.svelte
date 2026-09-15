<script lang="ts">
	import { TIMELINE_TYPES } from '$lib/data';
	import TimelineRail from '$lib/components/TimelineRail.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const timelineEntries = $derived(data.entries.filter((e) => TIMELINE_TYPES.includes(e.type)));
	const excludedCount = $derived(data.entries.length - timelineEntries.length);
</script>

<Seo
	title={`${data.franchise.name} · Timeline`}
	description={`Browse ${data.franchise.name} in release order or story chronology.`}
/>

<div class="container-wide page">
	<header class="section-head">
		<p class="kicker">The Timeline</p>
		<p class="blurb">
			The same catalogue, laid out twice: the order it was made in, and the order the story actually
			happens in. Drag the board sideways to follow a branch.
		</p>
	</header>

	<TimelineRail entries={timelineEntries} />

	{#if excludedCount > 0}
		<p class="note">
			{excludedCount} game{excludedCount === 1 ? '' : 's'}/comic{excludedCount === 1 ? '' : 's'} not shown
			here — they're a separate continuity. See the grid or stats view for those.
		</p>
	{/if}
</div>

<style>
	.page {
		padding-block: var(--space-8) var(--space-9);
	}

	.section-head {
		display: grid;
		grid-template-columns: minmax(0, 14rem) minmax(0, 46rem);
		gap: var(--space-6);
		align-items: start;
	}

	.blurb {
		color: var(--ink-dim);
		font-size: var(--fs-h4);
		text-wrap: pretty;
	}

	.note {
		margin-top: var(--space-6);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	@media (max-width: 860px) {
		.section-head {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}
	}
</style>

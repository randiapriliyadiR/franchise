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

<div class="container">
	<TimelineRail entries={timelineEntries} />

	{#if excludedCount > 0}
		<p class="note">
			{excludedCount} game{excludedCount === 1 ? '' : 's'}/comic{excludedCount === 1 ? '' : 's'} not shown
			here — they're a separate continuity. See the grid or stats view for those.
		</p>
	{/if}
</div>

<style>
	.container {
		padding-block: var(--space-6) var(--space-8);
	}

	.note {
		margin-top: var(--space-6);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}
</style>

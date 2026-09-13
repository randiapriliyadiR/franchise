<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import StatCard from '$lib/components/StatCard.svelte';
	import BarChart from '$lib/components/BarChart.svelte';
	import DonutChart from '$lib/components/DonutChart.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatTotalRuntime, typeLabel } from '$lib/utils/format';
	import { duration, stagger } from '$lib/utils/motion';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const typeData = $derived(
		Object.entries(data.stats.byType)
			.filter(([, count]) => count > 0)
			.map(([type, count]) => ({ label: typeLabel(type as never), value: count }))
	);

	const yearData = $derived(
		data.stats.byYear.map((y) => ({ label: String(y.year), value: y.count }))
	);

	const groupData = $derived(
		data.stats.byGroup
			.filter((g) => g.averageRating !== null)
			.map((g) => ({ label: g.group, value: Math.round((g.averageRating ?? 0) * 10) / 10 }))
	);

	// Every number here is something you can't already see in the hero strip
	// above (entries / span / avg rating) — otherwise this page is just
	// repeating itself.
	const highlightCards = $derived(
		[
			{
				label: 'Total watch time',
				value: formatTotalRuntime(data.stats.totalRuntimeMinutes),
				hint: 'films, shorts & series runtime combined',
				href: undefined as string | undefined
			},
			data.stats.topRated && {
				label: 'Highest rated',
				value: `★ ${data.stats.topRated.value.toFixed(1)}`,
				hint: data.stats.topRated.title,
				href: resolve('/[franchise]/[entry]', {
					franchise: data.stats.topRated.franchise,
					entry: data.stats.topRated.id
				})
			},
			data.stats.longest && {
				label: 'Longest single watch',
				value: formatTotalRuntime(data.stats.longest.value),
				hint: data.stats.longest.title,
				href: resolve('/[franchise]/[entry]', {
					franchise: data.stats.longest.franchise,
					entry: data.stats.longest.id
				})
			},
			data.stats.busiestGroup && {
				label: 'Busiest era',
				value: data.stats.busiestGroup.group,
				hint: `${data.stats.busiestGroup.count} entries`,
				href: undefined
			}
		].filter((c): c is NonNullable<typeof c> => Boolean(c))
	);
</script>

<Seo
	title={`${data.franchise.name} · Stats`}
	description={`Numbers behind ${data.franchise.name}: releases per year, ratings by era, and total runtime.`}
/>

<div class="container">
	<p class="intro">
		A few things the grid and timeline don't spell out directly — the standout entries, and how the
		franchise's output is actually distributed.
	</p>

	<div class="stat-row">
		{#each highlightCards as stat, i (stat.label)}
			<div in:fly={{ y: 16, duration: duration(400), delay: stagger(i, 70), easing: cubicOut }}>
				<StatCard label={stat.label} value={stat.value} hint={stat.hint} href={stat.href} />
			</div>
		{/each}
	</div>

	<div class="chart-row">
		<div in:fly={{ y: 16, duration: duration(450), delay: duration(280), easing: cubicOut }}>
			<BarChart title="Releases per year" data={yearData} />
		</div>
		<div in:fly={{ y: 16, duration: duration(450), delay: duration(340), easing: cubicOut }}>
			<DonutChart title="Entries by media type" data={typeData} />
		</div>
	</div>

	{#if groupData.length > 0}
		<div
			class="chart-row single"
			in:fly={{ y: 16, duration: duration(450), delay: duration(400), easing: cubicOut }}
		>
			<BarChart
				title="Average rating by group"
				data={groupData}
				formatValue={(v) => v.toFixed(1)}
			/>
		</div>
	{/if}
</div>

<style>
	.container {
		padding-block: var(--space-6) var(--space-8);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.intro {
		max-width: 60ch;
		color: var(--ink-dim);
	}

	.stat-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: var(--space-4);
	}

	.chart-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: var(--space-5);
	}

	.chart-row.single {
		grid-template-columns: 1fr;
	}
</style>

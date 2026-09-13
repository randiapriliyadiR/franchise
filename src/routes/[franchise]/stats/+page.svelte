<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import StatCard from '$lib/components/StatCard.svelte';
	import BarChart from '$lib/components/BarChart.svelte';
	import DonutChart from '$lib/components/DonutChart.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatTotalRuntime, typeLabel } from '$lib/utils/format';
	import { duration, stagger } from '$lib/utils/motion';
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

	const statCards = $derived([
		{
			label: 'Total entries',
			value: String(data.stats.total),
			hint: undefined as string | undefined
		},
		{
			label: 'Total runtime',
			value: formatTotalRuntime(data.stats.totalRuntimeMinutes),
			hint: 'films, shorts & series runtime combined'
		},
		{
			label: 'Average rating',
			value: data.stats.averageRating ? `★ ${data.stats.averageRating.toFixed(1)}` : '—',
			hint: undefined
		},
		{
			label: 'Year span',
			value: data.stats.yearRange ? `${data.stats.yearRange[0]}–${data.stats.yearRange[1]}` : '—',
			hint: undefined
		}
	]);
</script>

<Seo
	title={`${data.franchise.name} · Stats`}
	description={`Numbers behind ${data.franchise.name}: releases per year, ratings by era, and total runtime.`}
/>

<div class="container">
	<div class="stat-row">
		{#each statCards as stat, i (stat.label)}
			<div in:fly={{ y: 16, duration: duration(400), delay: stagger(i, 70), easing: cubicOut }}>
				<StatCard label={stat.label} value={stat.value} hint={stat.hint} />
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

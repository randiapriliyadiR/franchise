<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Franchise, FranchiseStats } from '$lib/data/types';
	import { duration } from '$lib/utils/motion';

	let {
		franchise,
		stats
	}: {
		franchise: Franchise;
		stats: FranchiseStats;
	} = $props();
</script>

{#key franchise.id}
	<section class="hero" style="background-image: {franchise.theme.gradient}">
		<div class="container">
			<p class="eyebrow" in:fly={{ y: 10, duration: duration(400), easing: cubicOut }}>
				{franchise.publisher} · since {franchise.startYear}
			</p>
			<h1 in:fly={{ y: 14, duration: duration(450), delay: duration(60), easing: cubicOut }}>
				{franchise.name}
			</h1>
			<p
				class="tagline"
				in:fly={{ y: 14, duration: duration(450), delay: duration(120), easing: cubicOut }}
			>
				{franchise.tagline}
			</p>

			<dl
				class="stat-strip"
				in:fly={{ y: 14, duration: duration(450), delay: duration(180), easing: cubicOut }}
			>
				<div>
					<dt>Entries</dt>
					<dd>{stats.total}</dd>
				</div>
				{#if stats.yearRange}
					<div>
						<dt>Span</dt>
						<dd>{stats.yearRange[0]}–{stats.yearRange[1]}</dd>
					</div>
				{/if}
				{#if stats.averageRating}
					<div>
						<dt>Avg. rating</dt>
						<dd>★ {stats.averageRating.toFixed(1)}</dd>
					</div>
				{/if}
			</dl>
		</div>
	</section>
{/key}

<style>
	.hero {
		padding-block: var(--space-8) var(--space-7);
		border-bottom: 1px solid var(--border);
		background-size: 200% 200%;
		animation: shimmer 16s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.hero {
			animation: none;
		}
	}

	.eyebrow {
		color: var(--accent-soft);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: var(--fs-small);
		margin-bottom: var(--space-3);
	}

	h1 {
		max-width: 18ch;
	}

	.tagline {
		margin-top: var(--space-4);
		max-width: 52ch;
		color: var(--ink-dim);
		font-size: var(--fs-h4);
	}

	.stat-strip {
		display: flex;
		gap: var(--space-7);
		margin-top: var(--space-6);
	}

	.stat-strip dt {
		font-size: var(--fs-small);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.stat-strip dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--fs-h3);
		color: var(--ink);
	}
</style>

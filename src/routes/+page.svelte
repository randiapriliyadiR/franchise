<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Poster from '$lib/components/Poster.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatTotalRuntime } from '$lib/utils/format';
	import { duration, stagger } from '$lib/utils/motion';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Franchise Explorer"
	description="Explore long-running entertainment franchises by release order, story chronology, and more — starting with Marvel and The Walking Dead."
/>

<section class="hero container">
	<p class="eyebrow" in:fly={{ y: 10, duration: duration(400), easing: cubicOut }}>
		Marvel · The Walking Dead
	</p>
	<h1 in:fly={{ y: 16, duration: duration(500), delay: duration(60), easing: cubicOut }}>
		Every franchise, every timeline, one map.
	</h1>
	<p
		class="lede"
		in:fly={{ y: 16, duration: duration(500), delay: duration(140), easing: cubicOut }}
	>
		Films, series, games and comics — filterable by type, sortable by release date or in-universe
		chronology, and laid out on a timeline built to make a decade of continuity make sense.
	</p>

	<dl
		class="global-stats"
		in:fly={{ y: 16, duration: duration(500), delay: duration(220), easing: cubicOut }}
	>
		<div>
			<dt>Total entries</dt>
			<dd>{data.globalStats.total}</dd>
		</div>
		<div>
			<dt>Franchises</dt>
			<dd>{data.cards.length}</dd>
		</div>
		<div>
			<dt>Combined runtime</dt>
			<dd>{formatTotalRuntime(data.globalStats.totalRuntimeMinutes)}</dd>
		</div>
		{#if data.globalStats.yearRange}
			<div>
				<dt>Span</dt>
				<dd>{data.globalStats.yearRange[0]}–{data.globalStats.yearRange[1]}</dd>
			</div>
		{/if}
	</dl>
</section>

<section class="container">
	<ul class="franchise-cards">
		{#each data.cards as card, i (card.franchise.id)}
			<li in:fly={{ y: 24, duration: duration(500), delay: stagger(i, 120), easing: cubicOut }}>
				<a
					class="franchise-card"
					href={resolve('/[franchise]', { franchise: card.franchise.id })}
					style="--card-gradient: {card.franchise.theme.gradient}; --card-accent: {card.franchise
						.theme.accent};"
				>
					<div class="backdrop">
						{#if card.heroEntry}
							<Poster entry={card.heroEntry} kind="backdrop" size="w780" />
						{/if}
					</div>
					<div class="card-body">
						<p class="publisher">{card.franchise.publisher}</p>
						<h2>{card.franchise.name}</h2>
						<p class="tagline">{card.franchise.tagline}</p>
						<p class="count">
							{card.stats.total} entries · {card.stats.yearRange
								? `${card.stats.yearRange[0]}–${card.stats.yearRange[1]}`
								: ''}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<section class="container about">
	<h2>About this project</h2>
	<p>
		Built with SvelteKit, hand-written CSS and zero runtime API calls — the whole site is
		prerendered to static HTML. Poster art and ratings are synced from
		<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>
		by a scheduled GitHub Actions workflow, so the deployed site never depends on a live API key. Chronology
		data (the "story order" view) is a hand-curated, fan-friendly approximation.
	</p>
</section>

<style>
	.hero {
		padding-block: var(--space-9) var(--space-7);
	}

	.eyebrow {
		color: var(--accent-soft, var(--ink-faint));
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: var(--fs-small);
		font-weight: 600;
		margin-bottom: var(--space-4);
	}

	h1 {
		max-width: 16ch;
	}

	.lede {
		margin-top: var(--space-5);
		max-width: 58ch;
		font-size: var(--fs-h4);
		color: var(--ink-dim);
	}

	.global-stats {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-7);
		margin-top: var(--space-7);
	}

	.global-stats dt {
		font-size: var(--fs-small);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.global-stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--fs-h3);
	}

	.franchise-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: var(--space-6);
		padding-bottom: var(--space-8);
	}

	.franchise-card {
		position: relative;
		display: block;
		border-radius: var(--radius-lg);
		overflow: hidden;
		text-decoration: none;
		color: var(--ink);
		min-height: 320px;
		border: 1px solid var(--border);
		transition:
			transform var(--duration-base) var(--ease-out),
			border-color var(--duration-base) var(--ease-out);
	}

	.franchise-card:hover,
	.franchise-card:focus-visible {
		transform: translateY(-6px);
		border-color: var(--card-accent);
	}

	.franchise-card:hover h2,
	.franchise-card:focus-visible h2 {
		color: var(--card-accent);
	}

	.backdrop {
		position: absolute;
		inset: 0;
	}

	.backdrop :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.franchise-card:hover :global(.poster img),
	.franchise-card:focus-visible :global(.poster img) {
		transform: scale(1.05);
	}

	h2 {
		transition: color var(--duration-base) var(--ease-out);
	}

	.franchise-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.88) 15%, rgba(0, 0, 0, 0.25) 70%);
	}

	.card-body {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--space-6);
		z-index: 1;
	}

	.publisher {
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--card-accent);
		font-weight: 700;
		margin-bottom: var(--space-2);
	}

	.tagline {
		margin-top: var(--space-3);
		color: var(--ink-dim);
		max-width: 42ch;
	}

	.count {
		margin-top: var(--space-4);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	.about {
		padding-block: var(--space-7) var(--space-8);
		border-top: 1px solid var(--border);
		max-width: 70ch;
	}

	.about h2 {
		margin-bottom: var(--space-4);
	}

	.about p {
		color: var(--ink-dim);
	}

	.about a {
		color: var(--ink);
		text-decoration: underline;
		text-underline-offset: 2px;
	}
</style>

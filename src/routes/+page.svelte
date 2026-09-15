<script lang="ts">
	import Poster from '$lib/components/Poster.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatTotalRuntime } from '$lib/utils/format';
	import { reveal } from '$lib/actions/reveal';
	import { parallax } from '$lib/actions/parallax';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const headline = ['Every', 'franchise,', 'every', 'timeline,', 'one', 'map.'];

	// One stylesheet request covering all ten display faces. They're only
	// fetched as each panel's text actually needs them, and `display=swap`
	// keeps everything readable in the fallback meanwhile — so the landing
	// page can show ten typographic personalities without blocking on them.
	const fontHref = $derived(
		`https://fonts.googleapis.com/css2?${data.cards
			.map((card) => `family=${card.franchise.type.query}`)
			.join('&')}&display=swap`
	);

	function typeVars(card: (typeof data.cards)[number]): string {
		const { theme, type } = card.franchise;
		return (
			`--accent:${theme.accent};` +
			`--accent-soft:${theme.accentSoft};` +
			`--accent-2:${theme.accent2};` +
			`--gradient:${theme.gradient};` +
			`--font-franchise:${type.family};` +
			`--franchise-weight:${type.weight};` +
			`--franchise-tracking:${type.tracking};` +
			`--franchise-scale:${type.scale};` +
			`--franchise-transform:${type.uppercase ? 'uppercase' : 'none'};`
		);
	}
</script>

<Seo
	title="Franchise Explorer"
	description="Explore long-running entertainment franchises by release order, story chronology, and more."
/>

<svelte:head>
	<link rel="stylesheet" href={fontHref} />
</svelte:head>

<section class="intro">
	<div class="container-wide intro-inner">
		<p class="intro-kicker">
			Ten universes <span aria-hidden="true">·</span>
			{data.globalStats.total} entries <span aria-hidden="true">·</span> 1939—2026
		</p>

		<h1 class="intro-title">
			{#each headline as word, i (word + i)}
				<span class="word" style="--i: {i}">{word}</span>
			{/each}
		</h1>

		<p class="lede">
			Films, series, games and comics — filterable by type, sortable by release date or in-universe
			chronology, and laid out on a timeline built to make decades of continuity make sense.
		</p>

		<dl class="global-stats">
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
	</div>

	<div class="scroll-cue" aria-hidden="true">
		<span>Scroll</span>
		<i></i>
	</div>
</section>

<div class="name-marquee" aria-hidden="true">
	<div class="name-track">
		{#each [...data.cards, ...data.cards] as card, i (`${card.franchise.id}-${i}`)}
			<span style={typeVars(card)} class="type-franchise name-item">{card.franchise.shortName}</span
			>
			<span class="name-dot">◆</span>
		{/each}
	</div>
</div>

<ul class="panels">
	{#each data.cards as card, i (card.franchise.id)}
		<li>
			<a
				class="panel"
				class:flip={i % 2 === 1}
				style={typeVars(card)}
				href={resolve('/[franchise]', { franchise: card.franchise.id })}
			>
				<div class="panel-art" use:parallax={0.16}>
					{#if card.heroEntry}
						<Poster entry={card.heroEntry} kind="backdrop" size="w780" />
					{/if}
				</div>
				<div class="panel-wash" aria-hidden="true"></div>
				<div class="panel-scrim" aria-hidden="true"></div>

				<span class="panel-index type-franchise" aria-hidden="true">
					{String(i + 1).padStart(2, '0')}
				</span>

				<div class="panel-body container-wide">
					<div class="panel-copy" use:reveal={{ y: 40 }}>
						<p class="panel-kicker">{card.franchise.publisher}</p>
						<h2 class="panel-title type-franchise">{card.franchise.name}</h2>
						<p class="panel-tagline">{card.franchise.tagline}</p>
						<p class="panel-meta">
							{card.stats.total} entries
							{#if card.stats.yearRange}
								<span aria-hidden="true">·</span>
								{card.stats.yearRange[0]}–{card.stats.yearRange[1]}
							{/if}
						</p>
						<span class="panel-cta">
							Explore
							<i aria-hidden="true">→</i>
						</span>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>

<section class="about container-wide" use:reveal={{ y: 30 }}>
	<h2>About this project</h2>
	<div class="about-grid">
		<p>
			Built with SvelteKit, hand-written CSS and zero runtime API calls — the whole site is
			prerendered to static HTML. Poster art and ratings are synced from
			<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>
			by a scheduled GitHub Actions workflow, so the deployed site never depends on a live API key.
		</p>
		<p>
			Chronology data — the story-order view, and which entries are genuine branches versus
			unrelated remakes — is hand-curated. Each franchise gets its own typeface, palette and
			atmosphere rather than one house style stretched over everything.
		</p>
	</div>
</section>

<style>
	/* ---------- Intro ---------- */

	.intro {
		position: relative;
		min-height: min(92svh, 58rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-block: var(--space-9) var(--space-8);
	}

	.intro::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(42rem 32rem at 12% 8%, rgba(224, 36, 47, 0.16), transparent 70%),
			radial-gradient(38rem 30rem at 88% 78%, rgba(61, 127, 214, 0.14), transparent 72%);
		animation: shimmer 18s ease-in-out infinite;
		background-size: 180% 180%;
	}

	.intro-kicker {
		font-size: var(--fs-micro);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.26em;
		color: var(--ink-faint);
		margin-bottom: var(--space-6);
		animation: rise-in 700ms var(--ease-expo) both;
	}

	.intro-title {
		font-size: clamp(2.8rem, 0.8rem + 9.2vw, 9.5rem);
		line-height: 0.88;
		letter-spacing: -0.04em;
		font-weight: 800;
		max-width: 16ch;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.26em;
	}

	.word {
		display: inline-block;
		animation: word-in 1.1s var(--ease-expo) both;
		animation-delay: calc(var(--i) * 80ms + 80ms);
	}

	/* Each line of the headline leans a little further into the accent. */
	.word:nth-child(2) {
		color: var(--accent);
	}

	.word:nth-child(4) {
		color: var(--accent-2);
	}

	.lede {
		margin-top: var(--space-6);
		max-width: 52ch;
		font-size: var(--fs-h4);
		color: var(--ink-dim);
		animation: rise-in 900ms var(--ease-expo) both;
		animation-delay: 420ms;
	}

	.global-stats {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-6) var(--space-8);
		margin-top: var(--space-8);
		padding-top: var(--space-5);
		border-top: 1px solid var(--border-strong);
		animation: rise-in 900ms var(--ease-expo) both;
		animation-delay: 560ms;
	}

	.global-stats dt {
		font-size: var(--fs-micro);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin-bottom: var(--space-2);
	}

	.global-stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: var(--fs-h3);
		line-height: 1;
	}

	/* Sits in the right-hand gutter, reading downward, so it never collides
	   with the stat row across the bottom of the intro. */
	.scroll-cue {
		position: absolute;
		right: clamp(var(--space-5), 4vw, var(--space-8));
		bottom: var(--space-6);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		font-size: var(--fs-micro);
		text-transform: uppercase;
		letter-spacing: 0.24em;
		color: var(--ink-faint);
	}

	.scroll-cue span {
		writing-mode: vertical-rl;
	}

	.scroll-cue i {
		width: 1px;
		height: 42px;
		background: linear-gradient(to bottom, var(--ink-faint), transparent);
		animation: cue-drop 2.4s var(--ease-out) infinite;
		transform-origin: top;
	}

	/* ---------- Franchise name marquee ---------- */

	.name-marquee {
		overflow: hidden;
		border-block: 1px solid var(--border-strong);
		padding-block: var(--space-4);
		background: rgba(255, 255, 255, 0.015);
	}

	.name-track {
		display: flex;
		align-items: center;
		gap: var(--space-5);
		width: max-content;
		white-space: nowrap;
		animation: marquee-track 48s linear infinite;
	}

	.name-item {
		font-size: clamp(1.4rem, 1rem + 2vw, 3rem);
		color: color-mix(in srgb, var(--ink) 40%, transparent);
		transition: color var(--duration-base) var(--ease-out);
	}

	.name-marquee:hover .name-item {
		color: var(--accent-soft);
	}

	.name-dot {
		color: var(--ink-faint);
		font-size: 0.6rem;
	}

	/* ---------- Franchise panels ---------- */

	.panels {
		display: flex;
		flex-direction: column;
	}

	.panel {
		position: relative;
		display: flex;
		align-items: flex-end;
		min-height: min(88svh, 52rem);
		overflow: hidden;
		text-decoration: none;
		color: var(--ink);
		isolation: isolate;
		border-bottom: 1px solid var(--border);
	}

	.panel-art {
		position: absolute;
		inset: -8%;
		z-index: -3;
		transform: translate3d(0, var(--parallax, 0px), 0) scale(1.06);
		transition: transform 900ms var(--ease-out);
	}

	.panel-art :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.panel-art :global(.poster img) {
		filter: saturate(0.6) contrast(1.1);
		transition: filter 700ms var(--ease-out);
	}

	.panel:hover .panel-art,
	.panel:focus-visible .panel-art {
		transform: translate3d(0, var(--parallax, 0px), 0) scale(1.12);
	}

	.panel:hover .panel-art :global(.poster img),
	.panel:focus-visible .panel-art :global(.poster img) {
		filter: saturate(1) contrast(1.05);
	}

	.panel-wash {
		position: absolute;
		inset: 0;
		z-index: -2;
		background: var(--gradient);
		opacity: 0.72;
		mix-blend-mode: multiply;
		transition: opacity 700ms var(--ease-out);
	}

	.panel:hover .panel-wash {
		opacity: 0.52;
	}

	.panel-scrim {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				to top,
				var(--bg) 1%,
				color-mix(in srgb, var(--bg) 35%, transparent) 44%,
				transparent 80%
			),
			linear-gradient(to right, color-mix(in srgb, var(--bg) 88%, transparent), transparent 62%);
	}

	.panel.flip .panel-scrim {
		background:
			linear-gradient(
				to top,
				var(--bg) 1%,
				color-mix(in srgb, var(--bg) 35%, transparent) 44%,
				transparent 80%
			),
			linear-gradient(to left, color-mix(in srgb, var(--bg) 88%, transparent), transparent 62%);
	}

	/* The oversized index deliberately bleeds off the edge of the panel. */
	.panel-index {
		position: absolute;
		top: clamp(-1rem, -2vw, 0rem);
		right: clamp(-0.6rem, -1vw, 0rem);
		font-size: clamp(6rem, 3rem + 16vw, 20rem);
		line-height: 0.75;
		color: transparent;
		-webkit-text-stroke: 1px color-mix(in srgb, var(--ink) 22%, transparent);
		pointer-events: none;
		z-index: 0;
	}

	.panel.flip .panel-index {
		right: auto;
		left: clamp(-0.6rem, -1vw, 0rem);
	}

	.panel-body {
		width: 100%;
		padding-block: var(--space-8);
		position: relative;
		z-index: 1;
	}

	.panel.flip .panel-body {
		display: flex;
		justify-content: flex-end;
		text-align: right;
	}

	.panel-copy {
		max-width: 44ch;
	}

	.panel-kicker {
		font-size: var(--fs-micro);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.24em;
		color: var(--accent-soft);
		margin-bottom: var(--space-4);
	}

	.panel-title {
		font-size: calc(clamp(2.2rem, 1rem + 5.4vw, 5.6rem) * var(--franchise-scale, 1));
		line-height: 0.94;
		margin: 0;
	}

	.panel-tagline {
		margin-top: var(--space-4);
		color: var(--ink-dim);
		font-size: var(--fs-h4);
	}

	.panel-meta {
		margin-top: var(--space-4);
		font-size: var(--fs-small);
		color: var(--ink-faint);
		letter-spacing: 0.04em;
	}

	.panel-cta {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-5);
		padding: var(--space-3) var(--space-5);
		border: 1px solid var(--accent);
		border-radius: 999px;
		font-size: var(--fs-small);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		transition:
			background var(--duration-base) var(--ease-out),
			color var(--duration-base) var(--ease-out),
			gap var(--duration-base) var(--ease-out);
	}

	.panel:hover .panel-cta,
	.panel:focus-visible .panel-cta {
		background: var(--accent);
		color: #fff;
		gap: var(--space-4);
	}

	/* ---------- About ---------- */

	.about {
		padding-block: var(--space-9);
	}

	.about h2 {
		font-size: var(--fs-h2);
		margin-bottom: var(--space-6);
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
		gap: var(--space-6);
		color: var(--ink-dim);
		max-width: 80rem;
	}

	.about a {
		color: var(--ink);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* ---------- Motion ---------- */

	@keyframes word-in {
		from {
			opacity: 0;
			transform: translate3d(0, 0.55em, 0) rotate(2deg);
		}
	}

	@keyframes rise-in {
		from {
			opacity: 0;
			transform: translate3d(0, 18px, 0);
		}
	}

	@keyframes cue-drop {
		0% {
			transform: scaleY(0);
			opacity: 0;
		}
		40% {
			transform: scaleY(1);
			opacity: 1;
		}
		100% {
			transform: scaleY(1);
			opacity: 0;
		}
	}

	@media (max-width: 720px) {
		.panel {
			min-height: min(76svh, 38rem);
		}

		.panel.flip .panel-body {
			justify-content: flex-start;
			text-align: left;
		}

		.panel.flip .panel-scrim {
			background:
				linear-gradient(
					to top,
					var(--bg) 1%,
					color-mix(in srgb, var(--bg) 35%, transparent) 44%,
					transparent 80%
				),
				linear-gradient(to right, color-mix(in srgb, var(--bg) 88%, transparent), transparent 62%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.intro::before,
		.word,
		.intro-kicker,
		.lede,
		.global-stats,
		.name-track,
		.scroll-cue i {
			animation: none;
		}

		.panel-art {
			transform: scale(1.02);
			transition: none;
		}
	}
</style>

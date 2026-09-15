<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { neighbours } from '$lib/data';
	import type { EntryOrder } from '$lib/data/types';
	import Poster from '$lib/components/Poster.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatDate, formatRuntime, typeLabel, formatRating } from '$lib/utils/format';
	import { duration } from '$lib/utils/motion';
	import { reveal } from '$lib/actions/reveal';
	import { parallax } from '$lib/actions/parallax';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const orderDefs: { key: EntryOrder; label: string }[] = [
		{ key: 'release', label: 'Release order' },
		{ key: 'chronology', label: 'Story order' }
	];

	const nav = $derived(
		orderDefs.map((o) => ({ ...o, ...neighbours(data.entries, data.entry.id, o.key) }))
	);

	const runtimeLabel = $derived(formatRuntime(data.entry.runtimeMinutes));
</script>

<Seo title={data.entry.title} description={data.entry.synopsis} />

{#key data.entry.id}
	<article class="entry">
		<div class="stage">
			<div class="art" use:parallax={0.18}>
				{#if data.entry.backdropPath}
					<Poster entry={data.entry} kind="backdrop" size="w780" eager />
				{/if}
			</div>
			<div class="wash" aria-hidden="true"></div>
			<div class="scrim" aria-hidden="true"></div>
		</div>

		<div class="container-wide lead">
			<div class="poster-col" in:fly={{ y: 24, duration: duration(500), easing: cubicOut }}>
				<Poster entry={data.entry} size="w500" eager />
			</div>

			<div class="info">
				<p class="crumb">
					<a href={resolve('/[franchise]', { franchise: data.entry.franchise })}>
						{data.franchise.name}
					</a>
					{#if data.entry.group}
						<span aria-hidden="true">/</span>
						{data.entry.group}
					{/if}
				</p>

				<h1 class="title type-franchise">{data.entry.title}</h1>

				<ul class="meta-row">
					<li>{typeLabel(data.entry.type)}</li>
					{#if data.entry.status === 'upcoming'}
						<li class="upcoming">Upcoming</li>
					{/if}
					<li>{formatDate(data.entry.releaseDate)}</li>
					{#if runtimeLabel}
						<li>{runtimeLabel}{data.entry.episodes ? ` / ep` : ''}</li>
					{/if}
					{#if data.entry.seasons}
						<li>{data.entry.seasons} season{data.entry.seasons === 1 ? '' : 's'}</li>
					{/if}
					{#if data.entry.episodes}
						<li>{data.entry.episodes} episodes</li>
					{/if}
					{#if typeof data.entry.rating === 'number'}
						<li class="rating">
							<span aria-hidden="true">★</span>
							{formatRating(data.entry.rating)}
						</li>
					{/if}
				</ul>

				<p class="synopsis">{data.entry.synopsis}</p>

				{#if data.entry.cast.length > 0}
					<div class="cast" use:reveal={{ y: 20 }}>
						<h2 class="kicker">Cast &amp; crew</h2>
						<ul class="chips">
							{#each data.entry.cast as name (name)}
								<li>{name}</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if data.entry.tags.length > 0}
					<ul class="tags" aria-label="Tags">
						{#each data.entry.tags as tag (tag)}
							<li>#{tag}</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>

		<div class="container-wide nav-section">
			{#each nav as n (n.key)}
				<nav class="entry-nav" aria-label={n.label} use:reveal={{ y: 24 }}>
					<p class="nav-label">
						{n.label}
						<span aria-hidden="true">—</span>
						{n.index + 1} of {n.total}
					</p>
					<div class="nav-links">
						{#if n.prev}
							<a
								class="nav-link prev"
								href={resolve('/[franchise]/[entry]', {
									franchise: n.prev.franchise,
									entry: n.prev.id
								})}
							>
								<span class="dir"><i aria-hidden="true">←</i> Previous</span>
								<span class="nav-title type-franchise">{n.prev.title}</span>
							</a>
						{:else}
							<span class="nav-link disabled">Start of the {n.label.toLowerCase()}</span>
						{/if}
						{#if n.next}
							<a
								class="nav-link next"
								href={resolve('/[franchise]/[entry]', {
									franchise: n.next.franchise,
									entry: n.next.id
								})}
							>
								<span class="dir">Next <i aria-hidden="true">→</i></span>
								<span class="nav-title type-franchise">{n.next.title}</span>
							</a>
						{:else}
							<span class="nav-link disabled">End of the {n.label.toLowerCase()}</span>
						{/if}
					</div>
				</nav>
			{/each}
		</div>
	</article>
{/key}

<style>
	.entry {
		position: relative;
		isolation: isolate;
	}

	.stage {
		position: relative;
		height: clamp(20rem, 52svh, 34rem);
		overflow: hidden;
	}

	.art {
		position: absolute;
		inset: -10% 0;
		transform: translate3d(0, var(--parallax, 0px), 0) scale(1.05);
	}

	.art :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.art :global(.poster img) {
		filter: saturate(0.8) contrast(1.08);
	}

	.wash {
		position: absolute;
		inset: 0;
		background: var(--gradient);
		opacity: 0.55;
		mix-blend-mode: multiply;
	}

	.scrim {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			color-mix(in srgb, var(--bg) 55%, transparent) 0%,
			transparent 34%,
			color-mix(in srgb, var(--bg) 70%, transparent) 76%,
			var(--bg) 100%
		);
	}

	/* Pulls the poster and title up so they straddle the artwork's edge. */
	.lead {
		position: relative;
		display: grid;
		grid-template-columns: clamp(11rem, 18vw, 17rem) minmax(0, 1fr);
		gap: clamp(var(--space-5), 3vw, var(--space-8));
		margin-top: clamp(-12rem, -14vw, -7rem);
		padding-bottom: var(--space-8);
	}

	.poster-col :global(.poster) {
		border: 1px solid var(--border-strong);
		box-shadow: var(--shadow-raised);
	}

	.info {
		padding-top: clamp(var(--space-6), 9vw, var(--space-9));
	}

	.crumb {
		font-size: var(--fs-micro);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--ink-dim);
		margin-bottom: var(--space-4);
	}

	.crumb a {
		color: var(--accent-soft);
		text-decoration: none;
		border-bottom: 1px solid color-mix(in srgb, var(--accent-soft) 40%, transparent);
	}

	.crumb a:hover {
		color: var(--ink);
	}

	.title {
		font-size: calc(clamp(2rem, 1rem + 4.2vw, 4.6rem) * var(--franchise-scale, 1));
		line-height: 0.96;
		margin: 0;
		max-width: 22ch;
	}

	.meta-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-5);
		margin-top: var(--space-5);
		color: var(--ink-dim);
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.14em;
	}

	.meta-row li {
		position: relative;
		padding-left: var(--space-5);
	}

	.meta-row li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.62em;
		width: var(--space-3);
		height: 1px;
		background: var(--border-strong);
	}

	.meta-row .upcoming,
	.meta-row .rating {
		color: var(--accent-soft);
		font-weight: 700;
	}

	.synopsis {
		margin-top: var(--space-6);
		max-width: 62ch;
		font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.4rem);
		line-height: 1.5;
		color: var(--ink);
		text-wrap: pretty;
	}

	.cast {
		margin-top: var(--space-7);
	}

	.cast h2 {
		margin-bottom: var(--space-3);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chips li {
		background: color-mix(in srgb, var(--ink) 5%, transparent);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: var(--space-2) var(--space-4);
		font-size: var(--fs-small);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-5);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	/* ---- Prev / next ---- */

	.nav-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);
		padding-block: var(--space-7) var(--space-9);
		border-top: 1px solid var(--border-strong);
	}

	.nav-label {
		font-size: var(--fs-micro);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin-bottom: var(--space-4);
	}

	.nav-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4);
	}

	.nav-link {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-5);
		border: 1px solid var(--border);
		text-decoration: none;
		color: var(--ink);
		overflow: hidden;
		transition: border-color var(--duration-base) var(--ease-out);
	}

	/* Accent floods in from the relevant side on hover. */
	.nav-link::before {
		content: '';
		position: absolute;
		inset: 0;
		background: color-mix(in srgb, var(--accent) 16%, transparent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--duration-base) var(--ease-expo);
	}

	.nav-link.next::before {
		transform-origin: right;
	}

	.nav-link:hover::before,
	.nav-link:focus-visible::before {
		transform: scaleX(1);
	}

	.nav-link > * {
		position: relative;
	}

	.nav-link.next {
		text-align: right;
		align-items: flex-end;
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		border-color: var(--accent);
	}

	.nav-link.disabled {
		color: var(--ink-faint);
		display: flex;
		align-items: center;
		font-size: var(--fs-small);
	}

	.dir {
		font-size: var(--fs-micro);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--accent-soft);
	}

	.dir i {
		font-style: normal;
		display: inline-block;
		transition: transform var(--duration-base) var(--ease-out);
	}

	.nav-link.prev:hover .dir i {
		transform: translateX(-4px);
	}

	.nav-link.next:hover .dir i {
		transform: translateX(4px);
	}

	.nav-title {
		font-size: calc(var(--fs-h4) * var(--franchise-scale, 1));
		line-height: 1.15;
	}

	@media (max-width: 760px) {
		.lead {
			grid-template-columns: 1fr;
			margin-top: clamp(-8rem, -22vw, -5rem);
		}

		.poster-col {
			max-width: 12rem;
		}

		.info {
			padding-top: var(--space-4);
		}

		.nav-links {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.art {
			transform: scale(1.02);
		}

		.nav-link::before,
		.dir i {
			transition: none;
		}
	}
</style>

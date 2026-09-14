<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { neighbours } from '$lib/data';
	import type { EntryOrder } from '$lib/data/types';
	import Poster from '$lib/components/Poster.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatDate, formatRuntime, typeLabel, formatRating } from '$lib/utils/format';
	import { duration } from '$lib/utils/motion';
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
		<div class="backdrop" aria-hidden="true" in:fade={{ duration: duration(500) }}>
			{#if data.entry.backdropPath}
				<Poster entry={data.entry} kind="backdrop" size="w780" eager />
			{/if}
		</div>

		<div class="container layout">
			<div class="poster-col" in:fly={{ y: 20, duration: duration(450), easing: cubicOut }}>
				<Poster entry={data.entry} size="w500" eager />
			</div>

			<div class="info-col">
				<p
					class="crumb"
					in:fly={{ y: 12, duration: duration(400), delay: duration(80), easing: cubicOut }}
				>
					<a href={resolve('/[franchise]', { franchise: data.entry.franchise })}
						>{data.franchise.name}</a
					>
					{#if data.entry.group}
						<span aria-hidden="true">·</span> {data.entry.group}
					{/if}
				</p>
				<h1 in:fly={{ y: 16, duration: duration(450), delay: duration(140), easing: cubicOut }}>
					{data.entry.title}
				</h1>

				<ul
					class="meta-row"
					in:fly={{ y: 12, duration: duration(400), delay: duration(200), easing: cubicOut }}
				>
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

				<p
					class="synopsis"
					in:fly={{ y: 12, duration: duration(400), delay: duration(260), easing: cubicOut }}
				>
					{data.entry.synopsis}
				</p>

				{#if data.entry.cast.length > 0}
					<div
						class="cast"
						in:fly={{ y: 12, duration: duration(400), delay: duration(320), easing: cubicOut }}
					>
						<h2>Cast &amp; crew</h2>
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

		<div class="container nav-section">
			{#each nav as n (n.key)}
				<nav class="entry-nav" aria-label={n.label}>
					<p class="nav-label">
						{n.label} · {n.index + 1} of {n.total}
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
								<span class="dir">← Previous</span>
								<span class="title">{n.prev.title}</span>
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
								<span class="dir">Next →</span>
								<span class="title">{n.next.title}</span>
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
		/* Without this, the backdrop's z-index: -1 escapes .entry entirely
		   (position: relative alone doesn't create a stacking context) and
		   paints behind the page background instead of behind this content. */
		isolation: isolate;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		height: 480px;
		overflow: hidden;
		z-index: -1;
		mask-image: linear-gradient(to bottom, black 0%, transparent 90%);
	}

	.backdrop :global(.poster) {
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--gradient);
		opacity: 0.55;
	}

	.layout {
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: var(--space-7);
		padding-top: var(--space-8);
		padding-bottom: var(--space-7);
	}

	.poster-col {
		width: 100%;
	}

	.crumb {
		font-size: var(--fs-small);
		color: var(--ink-dim);
		margin-bottom: var(--space-3);
	}

	.crumb a {
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.meta-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-4);
		margin-top: var(--space-4);
		color: var(--ink-dim);
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.meta-row .upcoming {
		color: var(--accent-soft);
	}

	.meta-row .rating {
		color: var(--accent-soft);
		font-weight: 700;
	}

	.synopsis {
		margin-top: var(--space-5);
		max-width: 65ch;
		font-size: var(--fs-h4);
		color: var(--ink);
	}

	.cast {
		margin-top: var(--space-6);
	}

	.cast h2 {
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ink-faint);
		margin-bottom: var(--space-3);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chips li {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: var(--space-1) var(--space-3);
		font-size: var(--fs-small);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-4);
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	.nav-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding-block: var(--space-6) var(--space-8);
		border-top: 1px solid var(--border);
	}

	.nav-label {
		font-size: var(--fs-small);
		color: var(--ink-faint);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: var(--space-2);
	}

	.nav-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4);
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-4);
		border-radius: var(--radius-md);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		text-decoration: none;
		color: var(--ink);
	}

	.nav-link.next {
		text-align: right;
		align-items: flex-end;
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		border-color: var(--accent-soft);
	}

	.nav-link.disabled {
		color: var(--ink-faint);
		padding: var(--space-4);
		display: flex;
		align-items: center;
	}

	.dir {
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	.title {
		font-weight: 600;
	}

	@media (max-width: 720px) {
		.layout {
			grid-template-columns: 1fr;
		}
		.poster-col {
			max-width: 220px;
		}
		.nav-links {
			grid-template-columns: 1fr;
		}
	}
</style>

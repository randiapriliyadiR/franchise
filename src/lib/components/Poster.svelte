<script lang="ts">
	import type { Entry } from '$lib/data/types';

	let {
		entry,
		kind = 'poster',
		size = 'w342',
		eager = false
	}: {
		entry: Entry;
		kind?: 'poster' | 'backdrop';
		size?: 'w185' | 'w342' | 'w500' | 'w780' | 'original';
		eager?: boolean;
	} = $props();

	const path = $derived(kind === 'poster' ? entry.posterPath : entry.backdropPath);
	const src = $derived(path ? `https://image.tmdb.org/t/p/${size}${path}` : null);

	const initials = $derived(
		entry.title
			.split(/\s+/)
			.filter((w) => /[a-z0-9]/i.test(w[0] ?? ''))
			.slice(0, 2)
			.map((w) => w[0]!.toUpperCase())
			.join('')
	);
</script>

<div class="poster" class:backdrop={kind === 'backdrop'} data-type={entry.type}>
	{#if src}
		<img
			{src}
			alt={kind === 'poster' ? `Poster art for ${entry.title}` : `Scene art for ${entry.title}`}
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
		/>
	{:else}
		<div class="fallback" role="img" aria-label="{entry.title} — no artwork available">
			<span>{initials}</span>
		</div>
	{/if}
</div>

<style>
	.poster {
		position: relative;
		aspect-ratio: 2 / 3;
		border-radius: var(--radius-md);
		overflow: hidden;
		background: var(--surface-raised);
		isolation: isolate;
	}

	.poster.backdrop {
		aspect-ratio: 16 / 9;
	}

	.poster img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-slow) var(--ease-out);
	}

	.fallback {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		background: var(--gradient);
	}

	.fallback span {
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 4vw, 2.75rem);
		font-weight: 700;
		color: rgba(244, 241, 234, 0.55);
		letter-spacing: 0.05em;
	}
</style>

<script lang="ts">
	import { page } from '$app/state';
	import FranchiseHero from '$lib/components/FranchiseHero.svelte';
	import FranchiseAtmosphere from '$lib/components/FranchiseAtmosphere.svelte';
	import ViewTabs from '$lib/components/ViewTabs.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const view = $derived.by((): 'grid' | 'timeline' | 'stats' | null => {
		switch (page.route.id) {
			case '/[franchise]':
				return 'grid';
			case '/[franchise]/timeline':
				return 'timeline';
			case '/[franchise]/stats':
				return 'stats';
			default:
				return null;
		}
	});

	const theme = $derived(data.franchise.theme);
	const type = $derived(data.franchise.type);

	// Everything downstream — cards, charts, the timeline — reads these, so no
	// component ever has to know which franchise it's rendering inside.
	const themeVars = $derived(
		`--accent:${theme.accent};` +
			`--accent-soft:${theme.accentSoft};` +
			`--accent-2:${theme.accent2};` +
			`--surface:${theme.surface};` +
			`--surface-raised:${theme.surfaceRaised};` +
			`--gradient:${theme.gradient};` +
			`--font-franchise:${type.family};` +
			`--franchise-weight:${type.weight};` +
			`--franchise-tracking:${type.tracking};` +
			`--franchise-scale:${type.scale};` +
			`--franchise-transform:${type.uppercase ? 'uppercase' : 'none'};`
	);

	// Only this franchise's display face is requested, and only while you're
	// on its pages — the landing page never pays for ten of them.
	const fontHref = $derived(`https://fonts.googleapis.com/css2?family=${type.query}&display=swap`);
</script>

<svelte:head>
	<link rel="stylesheet" href={fontHref} />
</svelte:head>

<div class="franchise-scope" style={themeVars}>
	<FranchiseAtmosphere kind={data.franchise.atmosphere} />

	<div class="stage">
		{#if view}
			<FranchiseHero franchise={data.franchise} stats={data.stats} heroEntry={data.heroEntry} />
			<ViewTabs franchiseId={data.franchise.id} current={view} />
		{/if}

		{@render children()}
	</div>
</div>

<style>
	.franchise-scope {
		position: relative;
	}

	/* Lifts all real content above the fixed atmosphere layer behind it. */
	.stage {
		position: relative;
		z-index: 1;
	}
</style>

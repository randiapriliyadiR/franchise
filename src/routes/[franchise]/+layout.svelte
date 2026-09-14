<script lang="ts">
	import { page } from '$app/state';
	import FranchiseHero from '$lib/components/FranchiseHero.svelte';
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

	const themeVars = $derived(
		`--accent:${data.franchise.theme.accent};` +
			`--accent-soft:${data.franchise.theme.accentSoft};` +
			`--accent-2:${data.franchise.theme.accent2};` +
			`--surface:${data.franchise.theme.surface};` +
			`--surface-raised:${data.franchise.theme.surfaceRaised};` +
			`--gradient:${data.franchise.theme.gradient};`
	);
</script>

<div class="franchise-scope" style={themeVars}>
	{#if view}
		<FranchiseHero franchise={data.franchise} stats={data.stats} heroEntry={data.heroEntry} />
		<ViewTabs franchiseId={data.franchise.id} current={view} />
	{/if}

	{@render children()}
</div>

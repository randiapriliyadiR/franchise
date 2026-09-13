<script lang="ts">
	import '$lib/styles/base.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { onNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// Cross-fade between routes using the View Transitions API. No-ops in
	// browsers that don't support it, and skipped entirely under
	// prefers-reduced-motion — see base.css for the actual animation.
	onNavigate((navigation) => {
		if (
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		return new Promise((finish) => {
			document.startViewTransition(async () => {
				finish();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<header class="site-header">
	<div class="container">
		<a class="brand" href={resolve('/')}>
			<span class="brand-mark" aria-hidden="true">◆</span>
			Franchise Explorer
		</a>
	</div>
</header>

<main id="main-content">
	{@render children()}
</main>

<Footer />

<style>
	.site-header {
		padding-block: var(--space-5);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-display);
		font-size: var(--fs-h4);
		font-weight: 600;
		text-decoration: none;
		color: var(--ink);
	}

	.brand-mark {
		color: var(--accent);
	}
</style>

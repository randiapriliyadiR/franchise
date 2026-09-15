<script lang="ts">
	import '$lib/styles/base.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import { navState } from '$lib/utils/navigation.svelte';

	let { children } = $props();

	// `from` is null on a visit's first page (a fresh load, a shared link, a
	// new tab) and set on every navigation after that — BackButton uses this
	// to decide whether a real `history.back()` is safe.
	afterNavigate(({ from }) => {
		if (from) navState.hasInAppHistory = true;
	});

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

	// Every page except the landing page gets a back button, going to
	// whichever parent makes sense for that route if there's no real
	// in-app history to fall back on yet.
	const backHref = $derived.by(() => {
		const franchise = page.params.franchise;
		if (page.route.id === '/[franchise]/[entry]' && franchise) {
			return resolve('/[franchise]', { franchise });
		}
		if (franchise) return resolve('/');
		return null;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<CustomCursor />
<div class="grain" aria-hidden="true"></div>

<header class="site-header">
	<div class="container-wide header-row">
		<a class="brand" href={resolve('/')}>
			<span class="brand-mark" aria-hidden="true">◆</span>
			<span class="brand-name">Franchise Explorer</span>
		</a>
		{#if backHref}
			<BackButton href={backHref} />
		{/if}
	</div>
</header>

<main id="main-content">
	{@render children()}
</main>

<Footer />

<style>
	.site-header {
		position: relative;
		z-index: 20;
		padding-block: var(--space-5);
	}

	.header-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		font-family: var(--font-display);
		font-size: var(--fs-small);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		text-decoration: none;
		color: var(--ink);
	}

	.brand-mark {
		color: var(--accent);
		font-size: 0.7em;
		transition: transform var(--duration-base) var(--ease-spring);
	}

	.brand:hover .brand-mark {
		transform: rotate(90deg) scale(1.2);
	}

	@media (max-width: 480px) {
		.brand-name {
			font-size: 0.72rem;
			letter-spacing: 0.16em;
		}
	}
</style>

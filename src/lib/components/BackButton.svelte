<script lang="ts">
	import { navState } from '$lib/utils/navigation.svelte';

	/** Where to send the user if there's no in-app history to go back to
	 * (a direct/shared link, a fresh tab, a hard refresh). */
	let { href, label = 'Back' }: { href: string; label?: string } = $props();

	function onclick(event: MouseEvent) {
		if (navState.hasInAppHistory) {
			event.preventDefault();
			history.back();
		}
		// Otherwise let the anchor navigate to `href` normally — there's
		// nothing in this tab's history to go back to.
	}
</script>

<!-- `href` is always built by the caller with `resolve()` (see +layout.svelte);
     this component just renders whatever already-resolved path it's given. -->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a class="back" {href} {onclick}>
	<span aria-hidden="true">←</span>
	{label}
</a>

<style>
	.back {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--ink-dim);
		font-size: var(--fs-small);
		font-weight: 600;
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-out);
	}

	.back:hover,
	.back:focus-visible {
		color: var(--accent-soft);
	}
</style>

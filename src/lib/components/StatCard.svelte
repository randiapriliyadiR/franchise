<script lang="ts">
	let {
		label,
		value,
		hint,
		href
	}: {
		label: string;
		value: string;
		hint?: string;
		/** Renders the card as a link (e.g. to the entry a highlight refers to). */
		href?: string;
	} = $props();
</script>

<svelte:element this={href ? 'a' : 'div'} class="stat-card" {href}>
	<p class="label">{label}</p>
	<p class="value">{value}</p>
	{#if hint}
		<p class="hint">{hint}</p>
	{/if}
</svelte:element>

<style>
	.stat-card {
		display: block;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-5);
		color: inherit;
		text-decoration: none;
		transition:
			transform var(--duration-base) var(--ease-out),
			border-color var(--duration-base) var(--ease-out);
	}

	.stat-card:hover,
	.stat-card:focus-visible {
		transform: translateY(-3px);
		border-color: var(--accent-soft);
	}

	.label {
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ink-faint);
	}

	.value {
		margin-top: var(--space-2);
		font-family: var(--font-display);
		font-size: var(--fs-h2);
		color: var(--ink);
	}

	.hint {
		margin-top: var(--space-1);
		font-size: var(--fs-small);
		color: var(--ink-dim);
	}
</style>

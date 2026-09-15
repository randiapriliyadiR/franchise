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
	<span class="rule" aria-hidden="true"></span>
	<p class="label">{label}</p>
	<p class="value type-franchise">{value}</p>
	{#if hint}
		<p class="hint">{hint}</p>
	{/if}
</svelte:element>

<style>
	/* Deliberately not a boxed card: a hairline rule and a very large number,
	   the way a print spread would set a figure. */
	.stat-card {
		position: relative;
		display: block;
		padding-top: var(--space-5);
		color: inherit;
		text-decoration: none;
	}

	.rule {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--border-strong);
	}

	.rule::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--duration-slow) var(--ease-expo);
	}

	.stat-card:hover .rule::after,
	.stat-card:focus-visible .rule::after {
		transform: scaleX(1);
	}

	.label {
		font-size: var(--fs-micro);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--ink-faint);
	}

	.value {
		margin-top: var(--space-4);
		font-size: calc(clamp(1.9rem, 1.2rem + 2.2vw, 3.4rem) * var(--franchise-scale, 1));
		line-height: 0.95;
		color: var(--ink);
		transition: color var(--duration-base) var(--ease-out);
	}

	.stat-card:hover .value,
	.stat-card:focus-visible .value {
		color: var(--accent-soft);
	}

	.hint {
		margin-top: var(--space-3);
		font-size: var(--fs-small);
		color: var(--ink-dim);
		text-wrap: pretty;
	}

	@media (prefers-reduced-motion: reduce) {
		.rule::after,
		.value {
			transition: none;
		}
	}
</style>

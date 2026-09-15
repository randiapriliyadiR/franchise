<script lang="ts">
	import { resolve } from '$app/paths';

	let {
		franchiseId,
		current
	}: {
		franchiseId: string;
		current: 'grid' | 'timeline' | 'stats';
	} = $props();

	type Tab = 'grid' | 'timeline' | 'stats';

	function isCurrent(tab: Tab) {
		return current === tab ? 'page' : undefined;
	}
</script>

<nav class="tabs" aria-label="Franchise views">
	<ul class="container-wide">
		<li>
			<a
				href={resolve('/[franchise]', { franchise: franchiseId })}
				aria-current={isCurrent('grid')}
			>
				<span class="idx" aria-hidden="true">01</span>
				<span class="label">Grid</span>
			</a>
		</li>
		<li>
			<a
				href={resolve('/[franchise]/timeline', { franchise: franchiseId })}
				aria-current={isCurrent('timeline')}
			>
				<span class="idx" aria-hidden="true">02</span>
				<span class="label">Timeline</span>
			</a>
		</li>
		<li>
			<a
				href={resolve('/[franchise]/stats', { franchise: franchiseId })}
				aria-current={isCurrent('stats')}
			>
				<span class="idx" aria-hidden="true">03</span>
				<span class="label">Stats</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.tabs {
		position: sticky;
		top: 0;
		z-index: 15;
		background: color-mix(in srgb, var(--bg) 84%, transparent);
		backdrop-filter: blur(14px) saturate(1.2);
		border-bottom: 1px solid var(--border-strong);
	}

	ul {
		display: flex;
		gap: 0;
	}

	li + li a {
		border-left: 1px solid var(--border);
	}

	a {
		position: relative;
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		padding: var(--space-4) var(--space-6);
		text-decoration: none;
		color: var(--ink-faint);
		font-family: var(--font-franchise);
		font-weight: var(--franchise-weight);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-size: calc(var(--fs-h4) * var(--franchise-scale, 1));
		transition:
			color var(--duration-base) var(--ease-out),
			background var(--duration-base) var(--ease-out);
	}

	/* The active rule grows out from the left rather than just appearing. */
	a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 2px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--duration-base) var(--ease-expo);
	}

	a:hover {
		color: var(--ink);
		background: color-mix(in srgb, var(--ink) 4%, transparent);
	}

	a:hover::after {
		transform: scaleX(0.35);
	}

	a[aria-current='page'] {
		color: var(--ink);
		background: color-mix(in srgb, var(--accent) 12%, transparent);
	}

	a[aria-current='page']::after {
		transform: scaleX(1);
	}

	.idx {
		font-family: var(--font-body);
		font-size: var(--fs-micro);
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--accent-soft);
		opacity: 0.75;
	}

	@media (max-width: 560px) {
		a {
			padding: var(--space-3) var(--space-4);
			gap: var(--space-2);
		}

		.idx {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		a::after {
			transition: none;
		}
	}
</style>

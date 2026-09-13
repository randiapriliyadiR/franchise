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
	<ul>
		<li>
			<a
				href={resolve('/[franchise]', { franchise: franchiseId })}
				aria-current={isCurrent('grid')}
			>
				Grid
			</a>
		</li>
		<li>
			<a
				href={resolve('/[franchise]/timeline', { franchise: franchiseId })}
				aria-current={isCurrent('timeline')}
			>
				Timeline
			</a>
		</li>
		<li>
			<a
				href={resolve('/[franchise]/stats', { franchise: franchiseId })}
				aria-current={isCurrent('stats')}
			>
				Stats
			</a>
		</li>
	</ul>
</nav>

<style>
	.tabs {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--border);
	}

	ul {
		display: flex;
		gap: var(--space-6);
		max-width: var(--container-max);
		margin-inline: auto;
		padding-inline: var(--space-5);
	}

	a {
		display: inline-block;
		padding-block: var(--space-4);
		text-decoration: none;
		color: var(--ink-dim);
		font-family: var(--font-display);
		font-size: var(--fs-h4);
		letter-spacing: 0.02em;
		border-bottom: 2px solid transparent;
		transition:
			color var(--duration-fast) var(--ease-out),
			border-color var(--duration-fast) var(--ease-out);
	}

	a:hover {
		color: var(--ink);
	}

	a[aria-current='page'] {
		color: var(--ink);
		border-color: var(--accent);
	}
</style>

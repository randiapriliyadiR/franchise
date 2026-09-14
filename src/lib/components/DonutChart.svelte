<script lang="ts">
	let {
		title,
		data
	}: {
		title: string;
		data: { label: string; value: number }[];
	} = $props();

	// accent-2 is a deliberately different hue from accent/accent-soft (which
	// are the same hue two shades apart) — without it, the two biggest slices
	// of most franchises' charts would be nearly indistinguishable.
	const palette = ['var(--accent)', 'var(--accent-2)', 'var(--accent-soft)', '#8a94a6', '#5a6470'];

	const total = $derived(data.reduce((sum, d) => sum + d.value, 0) || 1);
	const radius = 70;
	const circumference = 2 * Math.PI * radius;

	const segments = $derived(
		(() => {
			let cumulative = 0;
			return data
				.filter((d) => d.value > 0)
				.map((d, i) => {
					const length = (d.value / total) * circumference;
					const seg = {
						...d,
						color: palette[i % palette.length],
						dasharray: `${length} ${circumference - length}`,
						dashoffset: -cumulative
					};
					cumulative += length;
					return seg;
				});
		})()
	);
</script>

<figure class="donut-chart">
	<figcaption>{title}</figcaption>
	<div class="layout">
		<svg viewBox="0 0 180 180" role="presentation" aria-hidden="true">
			<g transform="rotate(-90 90 90)">
				<circle cx="90" cy="90" r={radius} fill="none" stroke="var(--border)" stroke-width="20" />
				{#each segments as seg (seg.label)}
					<circle
						cx="90"
						cy="90"
						r={radius}
						fill="none"
						stroke={seg.color}
						stroke-width="20"
						stroke-dasharray={seg.dasharray}
						stroke-dashoffset={seg.dashoffset}
					>
						<title>{seg.label}: {seg.value}</title>
					</circle>
				{/each}
			</g>
			<text
				x="90"
				y="90"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="var(--ink)"
				font-size="22"
				font-family="var(--font-display)"
			>
				{total}
			</text>
		</svg>

		<ul class="legend">
			{#each segments as seg (seg.label)}
				<li>
					<span class="swatch" style="background: {seg.color}"></span>
					{seg.label} <span class="count">{seg.value}</span>
				</li>
			{/each}
		</ul>
	</div>

	<table class="visually-hidden">
		<caption>{title}</caption>
		<thead>
			<tr><th scope="col">Label</th><th scope="col">Count</th></tr>
		</thead>
		<tbody>
			{#each data as d (d.label)}
				<tr><th scope="row">{d.label}</th><td>{d.value}</td></tr>
			{/each}
		</tbody>
	</table>
</figure>

<style>
	.donut-chart {
		margin: 0;
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-5);
	}

	figcaption {
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ink-faint);
		margin-bottom: var(--space-4);
	}

	.layout {
		display: flex;
		align-items: center;
		gap: var(--space-6);
		flex-wrap: wrap;
	}

	svg {
		width: 150px;
		height: 150px;
		flex-shrink: 0;
	}

	svg circle {
		animation: donut-in var(--duration-slow) var(--ease-out) backwards;
	}

	@keyframes donut-in {
		from {
			opacity: 0;
			stroke-width: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		svg circle {
			animation: none;
		}
	}

	.legend {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		font-size: var(--fs-small);
	}

	.legend li {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--ink-dim);
	}

	.swatch {
		width: 10px;
		height: 10px;
		border-radius: 2px;
		display: inline-block;
	}

	.count {
		color: var(--ink-faint);
	}
</style>

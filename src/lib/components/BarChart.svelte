<script lang="ts">
	let {
		title,
		data,
		formatValue = (v: number) => String(v)
	}: {
		title: string;
		data: { label: string; value: number }[];
		formatValue?: (value: number) => string;
	} = $props();

	const max = $derived(Math.max(1, ...data.map((d) => d.value)));
	const width = 640;
	const height = 220;
	const padding = 28;
	const barGap = 6;
	const barWidth = $derived(data.length > 0 ? (width - padding * 2) / data.length - barGap : 0);
</script>

<figure class="bar-chart">
	<figcaption>{title}</figcaption>
	<svg viewBox="0 0 {width} {height}" role="presentation" aria-hidden="true">
		<line
			x1={padding}
			y1={height - padding}
			x2={width - padding}
			y2={height - padding}
			stroke="var(--border-strong)"
		/>
		{#each data as d, i (d.label)}
			{@const barHeight = (d.value / max) * (height - padding * 2)}
			{@const x = padding + i * (barWidth + barGap)}
			<g>
				<rect
					class="bar"
					{x}
					y={height - padding - barHeight}
					width={Math.max(barWidth, 1)}
					height={barHeight}
					rx="3"
					fill="var(--accent)"
					style="transform-origin: {x + barWidth / 2}px {height - padding}px; animation-delay: {i *
						25}ms"
				>
					<title>{d.label}: {formatValue(d.value)}</title>
				</rect>
				{#if data.length <= 20}
					<text
						x={x + barWidth / 2}
						y={height - padding + 14}
						text-anchor="middle"
						font-size="9"
						fill="var(--ink-faint)"
					>
						{d.label}
					</text>
				{/if}
			</g>
		{/each}
	</svg>

	<table class="visually-hidden">
		<caption>{title}</caption>
		<thead>
			<tr><th scope="col">Label</th><th scope="col">Value</th></tr>
		</thead>
		<tbody>
			{#each data as d (d.label)}
				<tr>
					<th scope="row">{d.label}</th>
					<td>{formatValue(d.value)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</figure>

<style>
	.bar-chart {
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

	svg {
		width: 100%;
		height: auto;
	}

	:global(.bar) {
		animation: grow-bar var(--duration-slow) var(--ease-out) backwards;
	}

	@keyframes grow-bar {
		from {
			transform: scaleY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.bar) {
			animation: none;
		}
	}
</style>

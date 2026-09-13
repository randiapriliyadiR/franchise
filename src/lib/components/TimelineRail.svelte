<script lang="ts">
	import type { Entry, EntryOrder } from '$lib/data/types';
	import { buildTimelineGraph } from '$lib/data';
	import TimelineItem from './TimelineItem.svelte';

	let { entries }: { entries: Entry[] } = $props();

	let order = $state<EntryOrder>('release');
	const graph = $derived(buildTimelineGraph(entries, order));

	// Fixed-size grid: node position is pure arithmetic from (column, row),
	// no DOM measurement needed — that's what lets the connectors and nodes
	// glide smoothly (via a plain CSS transition) when `order` toggles.
	const PADDING = 28;
	const COLUMN_WIDTH = 248;
	const ROW_HEIGHT = 122;
	const NODE_WIDTH = 224;
	const NODE_HEIGHT = 106;

	const x = (column: number) => PADDING + column * COLUMN_WIDTH;
	const y = (row: number) => PADDING + row * ROW_HEIGHT;
	const centerX = (column: number) => x(column) + NODE_WIDTH / 2;
	const centerY = (row: number) => y(row) + NODE_HEIGHT / 2;

	const maxColumn = $derived(Math.max(0, ...graph.columns.map((c) => c.column)));
	const canvasWidth = $derived(PADDING * 2 + (maxColumn + 1) * COLUMN_WIDTH);
	const canvasHeight = $derived(PADDING * 2 + graph.totalRows * ROW_HEIGHT);

	const mainColumn = $derived(graph.columns.find((c) => c.isMain));

	function branchPath(col: (typeof graph.columns)[number]): string {
		const bx = centerX(col.column);
		const startY = centerY(col.startRow);
		const endY = centerY(col.endRow);
		const mx = centerX(0);
		const corner = 22;
		if (col.endRow === col.startRow) {
			return `M ${mx} ${startY} Q ${bx} ${startY} ${bx} ${startY}`;
		}
		return `M ${mx} ${startY} Q ${bx} ${startY} ${bx} ${startY + corner} L ${bx} ${endY}`;
	}

	// Drag-to-pan the board horizontally (native touch scroll already
	// handles this on phones/tablets — this adds the same for mouse/desktop).
	let viewport: HTMLDivElement;
	let panning = $state(false);
	let panStartX = 0;
	let panScrollStart = 0;

	function startPan(event: PointerEvent) {
		if (event.button !== 0) return;
		panning = true;
		panStartX = event.clientX;
		panScrollStart = viewport.scrollLeft;
		viewport.setPointerCapture(event.pointerId);
	}

	function movePan(event: PointerEvent) {
		if (!panning) return;
		viewport.scrollLeft = panScrollStart - (event.clientX - panStartX);
	}

	function endPan(event: PointerEvent) {
		panning = false;
		viewport.releasePointerCapture(event.pointerId);
	}
</script>

<div class="toggle" role="group" aria-label="Timeline order">
	<button type="button" aria-pressed={order === 'release'} onclick={() => (order = 'release')}>
		Release order
	</button>
	<button
		type="button"
		aria-pressed={order === 'chronology'}
		onclick={() => (order = 'chronology')}
	>
		Story chronology
	</button>
</div>

<p class="disclaimer">
	Story order is a fan-friendly approximation for browsing, not an official studio document. The
	main continuity runs down the left; branches — parallel places, timelines, or universes — peel off
	to the right for as long as they last. Drag sideways (or scroll) if it doesn't fit.
</p>

<div
	class="viewport"
	role="region"
	aria-roledescription="pannable timeline board"
	aria-label="Timeline board — drag or scroll sideways to see more"
	bind:this={viewport}
	class:panning
	onpointerdown={startPan}
	onpointermove={movePan}
	onpointerup={endPan}
	onpointercancel={endPan}
>
	<div class="board" style="width: {canvasWidth}px; height: {canvasHeight}px">
		<svg class="connectors" width={canvasWidth} height={canvasHeight}>
			{#if mainColumn}
				<line
					class="edge main"
					x1={centerX(0)}
					y1={centerY(mainColumn.startRow)}
					x2={centerX(0)}
					y2={centerY(mainColumn.endRow)}
				/>
			{/if}
			{#each graph.columns.filter((c) => !c.isMain) as col (col.column)}
				<path class="edge branch" d={branchPath(col)} fill="none" />
			{/each}
		</svg>

		{#each graph.nodes as node (node.key)}
			{#if node.isBranchStart}
				<div
					class="branch-tag"
					style="left: {x(node.column)}px; top: {y(node.row) - 24}px; width: {NODE_WIDTH}px"
				>
					<span class="branch-icon" aria-hidden="true">⑂</span>
					{node.entry.branch}
				</div>
			{/if}
			<div
				class="node-slot"
				style="left: {x(node.column)}px; top: {y(
					node.row
				)}px; width: {NODE_WIDTH}px; height: {NODE_HEIGHT}px"
			>
				<TimelineItem entry={node.entry} {order} />
			</div>
		{/each}
	</div>
</div>

<style>
	.toggle {
		display: inline-flex;
		gap: var(--space-2);
		background: var(--surface-raised);
		border: 1px solid var(--border-strong);
		border-radius: 999px;
		padding: var(--space-1);
		margin-top: var(--space-5);
	}

	.toggle button {
		background: transparent;
		border: none;
		border-radius: 999px;
		padding: var(--space-2) var(--space-5);
		color: var(--ink-dim);
		font-weight: 600;
		font-size: var(--fs-small);
		cursor: pointer;
		transition:
			background var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out);
	}

	.toggle button[aria-pressed='true'] {
		background: var(--accent);
		color: #fff;
	}

	.disclaimer {
		margin-top: var(--space-3);
		max-width: 60rem;
		font-size: var(--fs-small);
		color: var(--ink-faint);
	}

	.viewport {
		margin-top: var(--space-6);
		overflow-x: auto;
		overflow-y: hidden;
		cursor: grab;
		touch-action: pan-x;
		user-select: none;
		border-radius: var(--radius-lg);
		background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
		background-size: 22px 22px;
		background-color: color-mix(in srgb, var(--surface) 40%, transparent);
	}

	.viewport.panning {
		cursor: grabbing;
	}

	.board {
		position: relative;
	}

	.connectors {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.edge {
		stroke: var(--border-strong);
		stroke-width: 2;
		transition: d var(--duration-slow) var(--ease-out);
	}

	.edge.branch {
		stroke: var(--accent-soft);
		stroke-dasharray: 5 4;
		opacity: 0.8;
	}

	.node-slot {
		position: absolute;
		transition:
			left var(--duration-slow) var(--ease-out),
			top var(--duration-slow) var(--ease-out);
	}

	.branch-tag {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--accent-soft);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition:
			left var(--duration-slow) var(--ease-out),
			top var(--duration-slow) var(--ease-out);
	}

	.branch-icon {
		font-size: 1em;
	}

	@media (prefers-reduced-motion: reduce) {
		.edge,
		.node-slot,
		.branch-tag {
			transition: none;
		}
	}
</style>

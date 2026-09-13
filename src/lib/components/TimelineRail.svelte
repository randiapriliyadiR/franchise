<script lang="ts">
	import type { Entry, EntryOrder } from '$lib/data/types';
	import { buildTimelineGraph } from '$lib/data';
	import TimelineItem from './TimelineItem.svelte';
	import EntryDetailModal from './EntryDetailModal.svelte';

	let { entries }: { entries: Entry[] } = $props();

	let order = $state<EntryOrder>('release');
	const graph = $derived(buildTimelineGraph(entries, order));

	let selected = $state<Entry | null>(null);

	// Fixed-size grid: node position is pure arithmetic from (column, row),
	// no DOM measurement needed — that's what lets the connectors and nodes
	// glide smoothly (via a plain CSS transition) when `order` toggles.
	const PADDING = 28;
	const COLUMN_WIDTH = 296;
	const ROW_HEIGHT = 132;
	const NODE_WIDTH = 272;
	const NODE_HEIGHT = 116;

	const x = (column: number) => PADDING + column * COLUMN_WIDTH;
	const y = (row: number) => PADDING + row * ROW_HEIGHT;
	const centerX = (column: number) => x(column) + NODE_WIDTH / 2;
	const centerY = (row: number) => y(row) + NODE_HEIGHT / 2;

	const maxColumn = $derived(Math.max(0, ...graph.columns.map((c) => c.column)));
	const canvasWidth = $derived(PADDING * 2 + (maxColumn + 1) * COLUMN_WIDTH);
	const canvasHeight = $derived(PADDING * 2 + graph.totalRows * ROW_HEIGHT);

	const mainColumn = $derived(graph.columns.find((c) => c.isMain));

	// A 'story' branch genuinely forked from the main line at some point, so
	// it's drawn connected — a curved elbow from the main column into its own.
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

	// A 'remake' didn't fork from anything — it's a wholly independent
	// retelling — so it's drawn as its own plain vertical line with no
	// connector to the main column at all. Single-entry remakes still get a
	// short visible stroke rather than nothing.
	function remakePath(col: (typeof graph.columns)[number]): string {
		const bx = centerX(col.column);
		const pad = col.startRow === col.endRow ? NODE_HEIGHT / 2 + 14 : 0;
		const startY = centerY(col.startRow) - pad;
		const endY = centerY(col.endRow) + pad;
		return `M ${bx} ${startY} L ${bx} ${endY}`;
	}

	// Drag-to-pan the board horizontally (native touch scroll already
	// handles this on phones/tablets — this adds the same for mouse/desktop).
	// Capture only kicks in past a small movement threshold so a plain click
	// on a card underneath the pointer isn't swallowed by the pan gesture.
	const DRAG_THRESHOLD = 6;
	let viewport: HTMLDivElement;
	let panning = $state(false);
	let activePointerId: number | null = null;
	let panStartX = 0;
	let panScrollStart = 0;

	function startPan(event: PointerEvent) {
		if (event.button !== 0) return;
		activePointerId = event.pointerId;
		panStartX = event.clientX;
		panScrollStart = viewport.scrollLeft;
	}

	function movePan(event: PointerEvent) {
		if (activePointerId === null || event.pointerId !== activePointerId) return;
		const dx = event.clientX - panStartX;
		if (!panning) {
			if (Math.abs(dx) < DRAG_THRESHOLD) return;
			panning = true;
			viewport.setPointerCapture(activePointerId);
		}
		viewport.scrollLeft = panScrollStart - dx;
	}

	function endPan() {
		if (panning && activePointerId !== null) {
			viewport.releasePointerCapture(activePointerId);
		}
		panning = false;
		activePointerId = null;
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
	main continuity runs down the left; dashed branches are genuine spinoffs, prequels, or in-story
	forks, connected where they split off. Solid, unconnected lines are remakes — unrelated retellings
	of the same story, not a continuation of anything. Drag sideways (or scroll) if it doesn't fit.
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
				{#if col.branchKind === 'remake'}
					<path class="edge remake" d={remakePath(col)} fill="none" />
				{:else}
					<path class="edge branch" d={branchPath(col)} fill="none" />
				{/if}
			{/each}
		</svg>

		{#each graph.nodes as node (node.key)}
			{#if node.isBranchStart}
				<div
					class="branch-tag"
					class:remake={node.branchKind === 'remake'}
					style="left: {x(node.column)}px; top: {y(node.row) - 24}px; width: {NODE_WIDTH}px"
				>
					<span class="branch-icon" aria-hidden="true"
						>{node.branchKind === 'remake' ? '∥' : '⑂'}</span
					>
					{node.branchKind === 'remake' ? 'Remake' : 'Branch'} — {node.entry.branch}
				</div>
			{/if}
			<div
				class="node-slot"
				style="left: {x(node.column)}px; top: {y(
					node.row
				)}px; width: {NODE_WIDTH}px; height: {NODE_HEIGHT}px"
			>
				<TimelineItem entry={node.entry} {order} onSelect={() => (selected = node.entry)} />
			</div>
		{/each}
	</div>
</div>

<EntryDetailModal entry={selected} onClose={() => (selected = null)} />

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

	/* Solid rather than dashed, and not visually tied to the main line's
	   x-position at all — a remake is an independent line, not a fork. */
	.edge.remake {
		stroke: var(--ink-faint);
		stroke-width: 2;
		opacity: 0.9;
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

	.branch-tag.remake {
		color: var(--ink-faint);
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

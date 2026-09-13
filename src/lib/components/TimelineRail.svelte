<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Entry, EntryOrder } from '$lib/data/types';
	import { timelineLanes } from '$lib/data';
	import { duration, stagger } from '$lib/utils/motion';
	import TimelineItem from './TimelineItem.svelte';

	let { entries }: { entries: Entry[] } = $props();

	let order = $state<EntryOrder>('release');
	const lanes = $derived(timelineLanes(entries, order));
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
	story doesn't always run in one line — parallel threads below (different places, timelines, or
	universes) are separate lanes, each ordered on its own.
</p>

{#each lanes as lane (lane.branch)}
	<section class="lane" class:branch={!lane.isMain}>
		{#if !lane.isMain}
			<h3 class="lane-title">
				<span class="branch-icon" aria-hidden="true">⑂</span>
				{lane.branch}
			</h3>
		{/if}
		<ol class="rail">
			{#each lane.entries as entry, i (entry.id)}
				<li
					animate:flip={{ duration: duration(500), easing: cubicOut }}
					in:fly={{
						x: i % 2 === 0 ? -24 : 24,
						duration: duration(400),
						delay: stagger(i, 35, 350),
						easing: cubicOut
					}}
				>
					<TimelineItem {entry} {order} />
				</li>
			{/each}
		</ol>
	</section>
{/each}

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

	.lane {
		margin-top: var(--space-7);
	}

	.lane:first-child {
		margin-top: var(--space-6);
	}

	.lane-title {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--accent-soft);
		margin-bottom: var(--space-2);
		padding-bottom: var(--space-2);
		border-bottom: 1px dashed var(--border-strong);
		max-width: 60rem;
	}

	.branch-icon {
		font-size: 1.1em;
	}

	.rail {
		position: relative;
		max-width: 60rem;
	}

	.rail::before {
		content: '';
		position: absolute;
		left: 43px;
		top: 0;
		bottom: 0;
		width: 1px;
		background: var(--border-strong);
	}

	.lane.branch .rail::before {
		background-image: linear-gradient(var(--accent-soft) 60%, transparent 0%);
		background-size: 1px 8px;
		background-repeat: repeat-y;
		opacity: 0.6;
	}

	.rail li {
		position: relative;
	}

	.rail li::before {
		content: '';
		position: absolute;
		left: 39px;
		top: 44px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 0 4px var(--bg);
		animation: pulse-glow 2.6s ease-in-out infinite;
	}

	.lane.branch .rail li::before {
		background: var(--accent-soft);
	}

	@media (max-width: 560px) {
		.rail::before {
			left: 31px;
		}
		.rail li::before {
			left: 27px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.rail li::before {
			animation: none;
		}
	}
</style>

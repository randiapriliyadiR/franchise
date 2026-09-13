<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Entry } from '$lib/data/types';
	import Poster from './Poster.svelte';
	import { formatDate, formatRuntime, formatRating, typeLabel } from '$lib/utils/format';
	import { duration } from '$lib/utils/motion';
	import { resolve } from '$app/paths';

	let {
		entry,
		onClose
	}: {
		entry: Entry | null;
		onClose: () => void;
	} = $props();

	let dialogEl: HTMLDivElement | undefined = $state();
	let previouslyFocused: HTMLElement | null = null;

	const runtimeLabel = $derived(formatRuntime(entry?.runtimeMinutes));

	function focusableElements(): HTMLElement[] {
		if (!dialogEl) return [];
		return Array.from(
			dialogEl.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.stopPropagation();
			onClose();
			return;
		}
		if (event.key === 'Tab') {
			const focusable = focusableElements();
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	}

	$effect(() => {
		if (entry) {
			previouslyFocused = document.activeElement as HTMLElement | null;
			document.body.style.overflow = 'hidden';
			// Wait for the dialog to render before moving focus into it.
			queueMicrotask(() => focusableElements()[0]?.focus());
			return () => {
				document.body.style.overflow = '';
				previouslyFocused?.focus();
			};
		}
	});
</script>

{#if entry}
	{@const e = entry}
	<!-- Clicking the scrim is a mouse convenience on top of a fully keyboard-
		 accessible dialog (Escape closes it, see handleKeydown) — not the
		 only way to close it, so it doesn't need its own keyboard handler. -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="scrim"
		onclick={onClose}
		onkeydown={handleKeydown}
		transition:fade={{ duration: duration(200) }}
	>
		<div
			class="dialog"
			bind:this={dialogEl}
			role="dialog"
			aria-modal="true"
			aria-labelledby="entry-modal-title"
			tabindex="-1"
			onclick={(event) => event.stopPropagation()}
			in:fly={{ y: 24, duration: duration(280), easing: cubicOut }}
		>
			<button type="button" class="close" onclick={onClose} aria-label="Close">✕</button>

			{#if e.backdropPath}
				<div class="backdrop" aria-hidden="true">
					<Poster entry={e} kind="backdrop" size="w780" eager />
				</div>
			{/if}

			<div class="body">
				<div class="poster-col">
					<Poster entry={e} size="w342" eager />
				</div>

				<div class="info-col">
					<p class="crumb">
						{typeLabel(e.type)}
						{#if e.group}
							<span aria-hidden="true">·</span> {e.group}
						{/if}
					</p>
					<h2 id="entry-modal-title">{e.title}</h2>

					<ul class="meta-row">
						{#if e.status === 'upcoming'}
							<li class="upcoming">Upcoming</li>
						{/if}
						<li>{formatDate(e.releaseDate)}</li>
						{#if runtimeLabel}
							<li>{runtimeLabel}{e.episodes ? ` / ep` : ''}</li>
						{/if}
						{#if e.seasons}
							<li>{e.seasons} season{e.seasons === 1 ? '' : 's'}</li>
						{/if}
						{#if e.episodes}
							<li>{e.episodes} episodes</li>
						{/if}
						{#if typeof e.rating === 'number'}
							<li class="rating"><span aria-hidden="true">★</span> {formatRating(e.rating)}</li>
						{/if}
					</ul>

					<p class="synopsis">{e.synopsis}</p>

					{#if e.cast.length > 0}
						<div class="cast">
							<h3>Cast</h3>
							<ul class="chips">
								{#each e.cast as name (name)}
									<li>{name}</li>
								{/each}
							</ul>
						</div>
					{/if}

					<a
						class="full-link"
						href={resolve('/[franchise]/[entry]', {
							franchise: e.franchise,
							entry: e.id
						})}
					>
						View full page →
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.scrim {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-5);
		background: rgba(0, 0, 0, 0.65);
		backdrop-filter: blur(2px);
	}

	.dialog {
		position: relative;
		width: min(720px, 100%);
		max-height: min(88vh, 900px);
		overflow-y: auto;
		background: var(--surface);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
	}

	.close {
		position: absolute;
		top: var(--space-3);
		right: var(--space-3);
		z-index: 2;
		width: 36px;
		height: 36px;
		display: grid;
		place-items: center;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 999px;
		cursor: pointer;
		transition: background var(--duration-fast) var(--ease-out);
	}

	.close:hover,
	.close:focus-visible {
		background: rgba(0, 0, 0, 0.8);
	}

	.backdrop {
		position: relative;
		height: 220px;
		overflow: hidden;
		mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
	}

	.backdrop :global(.poster) {
		border-radius: 0;
		height: 100%;
	}

	.body {
		display: flex;
		gap: var(--space-5);
		padding: var(--space-6);
	}

	.backdrop + .body {
		margin-top: -72px;
		position: relative;
	}

	.poster-col {
		width: 140px;
		flex-shrink: 0;
	}

	.info-col {
		flex: 1;
		min-width: 0;
	}

	.crumb {
		font-size: var(--fs-small);
		color: var(--ink-dim);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	h2 {
		font-family: var(--font-display);
		font-size: var(--fs-h3);
		margin-top: var(--space-1);
	}

	.meta-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-3);
		margin-top: var(--space-3);
		color: var(--ink-dim);
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.meta-row .upcoming {
		color: var(--accent-soft);
	}

	.meta-row .rating {
		color: var(--accent-soft);
		font-weight: 700;
	}

	.synopsis {
		margin-top: var(--space-4);
		color: var(--ink);
	}

	.cast {
		margin-top: var(--space-5);
	}

	.cast h3 {
		font-size: var(--fs-small);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ink-faint);
		margin-bottom: var(--space-2);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.chips li {
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: var(--space-1) var(--space-3);
		font-size: var(--fs-small);
	}

	.full-link {
		display: inline-block;
		margin-top: var(--space-5);
		font-size: var(--fs-small);
		font-weight: 600;
		color: var(--accent-soft);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	@media (max-width: 560px) {
		.body {
			flex-direction: column;
		}
		.poster-col {
			width: 96px;
		}
		.backdrop + .body {
			margin-top: -48px;
		}
	}
</style>

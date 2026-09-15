<footer class="site-footer">
	<div class="container-wide">
		<p class="wordmark" aria-hidden="true">Franchise Explorer</p>

		<div class="cols">
			<p>
				An explorer for long-running entertainment franchises. Not affiliated with Marvel, Disney,
				AMC, or any studio mentioned.
			</p>
			<p class="attribution">
				This product uses the TMDB API but is not endorsed or certified by
				<a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>.
			</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		position: relative;
		z-index: 1;
		border-top: 1px solid var(--border-strong);
		padding-block: var(--space-7) var(--space-6);
		margin-top: var(--space-8);
		color: var(--ink-faint);
		font-size: var(--fs-small);
		overflow: hidden;
	}

	/* Oversized outlined wordmark, clipped by the viewport edge. */
	.wordmark {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(2.6rem, 1rem + 8vw, 8rem);
		line-height: 0.9;
		letter-spacing: -0.04em;
		color: transparent;
		-webkit-text-stroke: 1px color-mix(in srgb, var(--ink) 18%, transparent);
		margin-bottom: var(--space-6);
		white-space: nowrap;
	}

	.cols {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: var(--space-4) var(--space-6);
		max-width: 70rem;
	}

	.attribution a {
		color: var(--ink-dim);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.attribution a:hover {
		color: var(--accent-soft);
	}
</style>

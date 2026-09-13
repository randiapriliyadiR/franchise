import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static adapter: the whole site is prerendered ahead of time and
			// deployed to GitHub Pages, so there's no server at runtime.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				strict: true
			}),

			paths: {
				// Set via the deploy workflow so links resolve correctly under
				// https://<user>.github.io/franchises. Empty locally.
				base: (process.env.BASE_PATH as `/${string}` | undefined) ?? ''
			}
		})
	]
});

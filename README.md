# Franchise Explorer

A static SvelteKit site for browsing long-running entertainment franchises — films, series, games and comics — by release order, in-universe chronology, or straight-up stats. Covers **Marvel Cinematic Universe**, **The Walking Dead**, **Wizarding World**, **Star Wars**, **Star Trek**, and **James Bond**, built on a data model designed to take more franchises without any structural changes.

**Live:** https://randiapriliyadir.github.io/franchises

## What it does

- **Grid** — every entry for a franchise, filterable by media type and group/phase, sortable, searchable. State lives in the URL, so a filtered view is shareable.
- **Timeline** — a toggle between _release order_ and _story chronology_, animated so cards visibly reorder rather than just re-appearing. The story doesn't always run in one line, though: parallel threads (a prequel series set before the flagship show even starts, three spin-offs happening at once in three different places, a multiverse detour) render as separate **branch lanes** instead of being forced into one sequence.
- **Stats** — releases per year, entries by media type, and average rating by era, as hand-written SVG charts (each with a proper `<table>` fallback for screen readers).
- **Detail pages** — synopsis, cast, and "position in the franchise" navigation in both release order and story order.

## Why it's built this way

| Decision                          | Reasoning                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SvelteKit + `adapter-static`      | The whole site prerenders to plain HTML/CSS/JS at build time — no server, no runtime API calls, fast on GitHub Pages.                                                                                                                                                                                                                                                        |
| Hand-written CSS, no framework    | A dark, cinematic per-franchise theme (see [`tokens.css`](src/lib/styles/tokens.css)) that swaps `--accent`/`--gradient`/etc. per franchise — easier to keep both bespoke and consistent without fighting a utility framework.                                                                                                                                               |
| Data split into seed + generated  | [`src/lib/data/seed/`](src/lib/data/seed) holds what _I_ authored by hand (chronology order, branch/parallel-thread info, phases, tags) — the things TMDB has no concept of. [`src/lib/data/generated/`](src/lib/data/generated) holds what TMDB fetched (synopsis, cast, rating, poster art). They merge at build time in [`src/lib/data/index.ts`](src/lib/data/index.ts). |
| TMDB sync runs in CI, not locally | See [Keeping data fresh](#keeping-data-fresh) below — the API key never touches a laptop or git history.                                                                                                                                                                                                                                                                     |
| Branch-aware timeline             | A franchise's story isn't always one line. `Entry.branch` (see [`types.ts`](src/lib/data/types.ts)) lets an entry declare which parallel thread it's on; [`timelineLanes()`](src/lib/data/index.ts) groups entries into lanes instead of one forced sequence.                                                                                                                |

## Project structure

```
scripts/sync-tmdb.ts          # fetches TMDB data for every seeded entry, run by CI
src/lib/data/
  types.ts                    # Entry, Franchise, and related types
  franchises.ts                # franchise metadata + theme colors
  seed/*.ts                    # hand-authored entries (one file per franchise)
  generated/*.json             # TMDB-sourced fields, committed by the sync workflow
  index.ts                     # merge, filter, sort, stats, timeline-lane helpers
src/lib/components/            # Poster, EntryCard, FilterBar, TimelineRail, charts, ...
src/lib/styles/                # design tokens + base stylesheet
src/routes/
  +page.svelte                 # landing page
  [franchise]/                 # grid / timeline / stats / [entry] detail
.github/workflows/
  sync-tmdb.yml                 # refreshes generated/*.json from TMDB (manual + monthly)
  deploy.yml                    # builds and publishes to GitHub Pages on every push to main
```

## Getting started

```bash
npm install
npm run dev
```

The site works locally without any API key — entries just fall back to a gradient-and-initials poster until `generated/*.json` has data in it (see below).

| Script                            | What it does                                                |
| --------------------------------- | ----------------------------------------------------------- |
| `npm run dev`                     | Local dev server                                            |
| `npm run build`                   | Production build → `build/`                                 |
| `npm run preview`                 | Serve the production build locally                          |
| `npm run check`                   | Type-check (`svelte-check`)                                 |
| `npm run lint` / `npm run format` | Prettier + ESLint                                           |
| `npm run sync:tmdb`               | Refresh `generated/*.json` from TMDB (needs `TMDB_API_KEY`) |

## Keeping data fresh

Synopsis, cast, rating, release dates, and poster/backdrop art come from [TMDB](https://www.themoviedb.org/). Rather than requiring a local API key, that sync runs entirely in GitHub Actions:

1. A free TMDB API key is stored as a **repository secret** named `TMDB_API_KEY` (Settings → Secrets and variables → Actions) — it's never in this repo or in anyone's shell history.
2. [`.github/workflows/sync-tmdb.yml`](.github/workflows/sync-tmdb.yml) runs monthly (and on-demand via _Run workflow_ in the Actions tab), calls TMDB with that secret, and commits the results to `src/lib/data/generated/*.json` as `github-actions[bot]`.
3. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) only ever reads that committed JSON — the deployed site can't break because TMDB is down or rate-limited.

Games and comics have no TMDB entry (`tmdb` field omitted in the seed) and stay fully hand-authored.

## Adding a franchise

1. Add an entry to [`franchises.ts`](src/lib/data/franchises.ts) — id, tagline, theme colors, hero entry.
2. Add a seed file under `src/lib/data/seed/`, one object per entry (film/series/game/comic/short). Set `tmdb: { type, query, year }` for anything with a TMDB page; leave it off for games/comics.
3. Register the new seed array in [`src/lib/data/index.ts`](src/lib/data/index.ts).
4. Run the sync workflow once to populate `generated/<franchise>.json`.

No route or component changes needed — everything downstream (grid, timeline, stats, detail pages, theming) is driven by the data.

## Accessibility

Semantic landmarks and a skip link, real `<button>` elements for every toggle/filter (not styled `<div>`s), `aria-current`/`aria-pressed` on active states, a live region announcing filtered result counts, keyboard-operable everything, and every SVG chart paired with a real `<table>` for assistive tech. All motion (page transitions, list reordering, chart draw-in) respects `prefers-reduced-motion`.

## Credits

This product uses the TMDB API but is not endorsed or certified by TMDB. Not affiliated with Marvel, Disney, AMC, Warner Bros., Lucasfilm, Paramount, EON Productions, or any studio mentioned.

## License

MIT — see [LICENSE](LICENSE).

import type { Entry } from '../types';

/**
 * Curated Sherlock Holmes entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * Holmes has been reinvented by dozens of unrelated productions rather than
 * one continuous story, so `chronology` matches release order and `group`
 * tracks which adaptation each entry belongs to. Enola Holmes follows
 * Sherlock's younger sister in her own spinoff films — a genuine branch,
 * unlike the other unrelated adaptations.
 */
export const sherlockHolmesEntries: Entry[] = [
	{
		id: 'the-adventures-of-sherlock-holmes-1939',
		franchise: 'sherlock-holmes',
		title: 'The Adventures of Sherlock Holmes',
		type: 'film',
		status: 'released',
		chronology: 1,
		group: 'Classic Films',
		tags: ['origin'],
		synopsis:
			'Holmes and Watson match wits with Professor Moriarty as he plots to steal the Crown Jewels and commit “the crime of the century.”',
		cast: ['Basil Rathbone', 'Nigel Bruce', 'George Zucco'],
		tmdb: { type: 'movie', year: 1939 }
	},
	{
		id: 'sherlock-holmes-2009',
		franchise: 'sherlock-holmes',
		title: 'Sherlock Holmes',
		type: 'film',
		status: 'released',
		chronology: 2,
		group: 'Guy Ritchie Films',
		tags: ['origin'],
		synopsis:
			'Holmes and Watson investigate a series of murders tied to a supernatural secret society and its supposedly resurrected leader.',
		cast: ['Robert Downey Jr.', 'Jude Law', 'Rachel McAdams'],
		tmdb: { type: 'movie', year: 2009 }
	},
	{
		id: 'sherlock-2010',
		franchise: 'sherlock-holmes',
		title: 'Sherlock',
		type: 'series',
		status: 'released',
		chronology: 3,
		chronologyNote: 'reimagined in present-day London',
		group: 'BBC Sherlock',
		tags: [],
		seasons: 4,
		synopsis:
			'A modern-day reimagining following a brilliant, abrasive consulting detective and his army-doctor flatmate through 21st-century London.',
		cast: ['Benedict Cumberbatch', 'Martin Freeman'],
		tmdb: { type: 'tv', year: 2010 }
	},
	{
		id: 'sherlock-holmes-a-game-of-shadows-2011',
		franchise: 'sherlock-holmes',
		title: 'Sherlock Holmes: A Game of Shadows',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Guy Ritchie Films',
		tags: ['finale'],
		synopsis:
			'Holmes faces his greatest rival yet, Professor Moriarty, in a battle of wits across Europe with the continent’s stability at stake.',
		cast: ['Robert Downey Jr.', 'Jude Law', 'Jared Harris'],
		tmdb: { type: 'movie', year: 2011 }
	},
	{
		id: 'elementary-2012',
		franchise: 'sherlock-holmes',
		title: 'Elementary',
		type: 'series',
		status: 'released',
		chronology: 5,
		chronologyNote: 'reimagined in present-day New York',
		group: 'Elementary',
		tags: [],
		seasons: 7,
		synopsis:
			'A modern-day Holmes, fresh out of rehab in New York, takes on Dr. Joan Watson as his sober companion — and eventually his partner in deduction.',
		cast: ['Jonny Lee Miller', 'Lucy Liu'],
		tmdb: { type: 'tv', year: 2012 }
	},
	{
		id: 'enola-holmes-2020',
		franchise: 'sherlock-holmes',
		title: 'Enola Holmes',
		type: 'film',
		status: 'released',
		chronology: 6,
		branch: 'Enola Holmes (spinoff)',
		branchNote:
			'Follows Sherlock’s much younger sister as the lead — a spinoff built around a new protagonist, not a continuation of his own cases.',
		group: 'Enola Holmes',
		tags: ['origin'],
		synopsis:
			'Sherlock Holmes’s teenage sister, Enola, sets out to find her missing mother and gets swept into a mystery of her own.',
		cast: ['Millie Bobby Brown', 'Henry Cavill', 'Sam Claflin'],
		tmdb: { type: 'movie', year: 2020 }
	},
	{
		id: 'enola-holmes-2-2022',
		franchise: 'sherlock-holmes',
		title: 'Enola Holmes 2',
		type: 'film',
		status: 'released',
		chronology: 6.5,
		branch: 'Enola Holmes (spinoff)',
		group: 'Enola Holmes',
		tags: ['finale'],
		synopsis:
			'Now running her own detective agency, Enola takes on a missing-persons case that uncovers a conspiracy reaching the highest levels of government.',
		cast: ['Millie Bobby Brown', 'Henry Cavill', 'David Thewlis'],
		tmdb: { type: 'movie', year: 2022 }
	}
];

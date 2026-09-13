import type { Entry } from '../types';

/**
 * Curated Middle-earth entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * The Hobbit is a prequel trilogy set roughly 60 years before The Lord of
 * the Rings, and The Rings of Power is set thousands of years earlier still
 * (the Second Age) — two separate branches, both running well before the
 * main line rather than after it.
 *
 * Before Peter Jackson's films, the whole saga was already adapted once as
 * three separate animated productions (1977–1980) — a retelling, not a
 * continuation, so it runs as its own branch alongside whichever film
 * covers the same part of the story.
 */
export const lotrEntries: Entry[] = [
	{
		id: 'the-lord-of-the-rings-the-fellowship-of-the-ring-2001',
		franchise: 'lord-of-the-rings',
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		type: 'film',
		status: 'released',
		chronology: 1,
		chronologyNote: 'Third Age, 3018',
		group: 'The Lord of the Rings',
		tags: ['origin'],
		synopsis:
			'A hobbit inherits a ring of immense power and sets out with eight companions to destroy it before it falls into the Dark Lord’s hands.',
		cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
		tmdb: { type: 'movie', year: 2001 }
	},
	{
		id: 'the-lord-of-the-rings-the-two-towers-2002',
		franchise: 'lord-of-the-rings',
		title: 'The Lord of the Rings: The Two Towers',
		type: 'film',
		status: 'released',
		chronology: 2,
		chronologyNote: 'Third Age, 3019',
		group: 'The Lord of the Rings',
		tags: ['war'],
		synopsis:
			'The Fellowship scattered, Frodo and Sam press on toward Mordor while Rohan faces an Isengard army bent on its destruction.',
		cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
		tmdb: { type: 'movie', year: 2002 }
	},
	{
		id: 'the-lord-of-the-rings-the-return-of-the-king-2003',
		franchise: 'lord-of-the-rings',
		title: 'The Lord of the Rings: The Return of the King',
		type: 'film',
		status: 'released',
		chronology: 3,
		chronologyNote: 'Third Age, 3019, the War of the Ring’s end',
		group: 'The Lord of the Rings',
		tags: ['war', 'finale'],
		synopsis:
			'Gondor makes its last stand against Sauron’s armies as Frodo and Sam near Mount Doom with the Ring.',
		cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
		tmdb: { type: 'movie', year: 2003 }
	},
	// ---- The Hobbit (prequel branch, ~60 years earlier) ----
	{
		id: 'the-hobbit-an-unexpected-journey-2012',
		franchise: 'lord-of-the-rings',
		title: 'The Hobbit: An Unexpected Journey',
		type: 'film',
		status: 'released',
		chronology: 0.1,
		chronologyNote: 'Third Age, 2941, sixty years before The Fellowship of the Ring',
		branch: 'The Hobbit (Third Age, 60 years earlier)',
		branchNote:
			'Set roughly sixty years before The Lord of the Rings — a prequel trilogy, not a continuation.',
		group: 'The Hobbit',
		tags: ['prequel'],
		synopsis:
			'A reluctant hobbit joins thirteen dwarves and a wizard on a quest to reclaim their mountain home from a fearsome dragon.',
		cast: ['Martin Freeman', 'Ian McKellen', 'Richard Armitage'],
		tmdb: { type: 'movie', year: 2012 }
	},
	{
		id: 'the-hobbit-the-desolation-of-smaug-2013',
		franchise: 'lord-of-the-rings',
		title: 'The Hobbit: The Desolation of Smaug',
		type: 'film',
		status: 'released',
		chronology: 0.2,
		chronologyNote: 'Third Age, 2941',
		branch: 'The Hobbit (Third Age, 60 years earlier)',
		group: 'The Hobbit',
		tags: ['prequel'],
		synopsis:
			'The company presses on toward Erebor, crossing Mirkwood and Lake-town before finally confronting the dragon Smaug himself.',
		cast: ['Martin Freeman', 'Ian McKellen', 'Benedict Cumberbatch'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'the-hobbit-the-battle-of-the-five-armies-2014',
		franchise: 'lord-of-the-rings',
		title: 'The Hobbit: The Battle of the Five Armies',
		type: 'film',
		status: 'released',
		chronology: 0.3,
		chronologyNote: 'Third Age, 2941',
		branch: 'The Hobbit (Third Age, 60 years earlier)',
		group: 'The Hobbit',
		tags: ['prequel', 'war', 'finale'],
		synopsis:
			'A dragon’s death sparks a five-way battle for Erebor’s treasure between dwarves, elves, men, and an orc army marching on them all.',
		cast: ['Martin Freeman', 'Ian McKellen', 'Richard Armitage'],
		tmdb: { type: 'movie', year: 2014 }
	},
	// ---- The Rings of Power (Second Age branch, thousands of years earlier) ----
	{
		id: 'the-lord-of-the-rings-the-rings-of-power-2022',
		franchise: 'lord-of-the-rings',
		title: 'The Lord of the Rings: The Rings of Power',
		type: 'series',
		status: 'released',
		chronology: 0.05,
		chronologyNote: 'Second Age, thousands of years before The Hobbit',
		branch: 'The Second Age (The Rings of Power)',
		branchNote:
			'Set thousands of years before The Hobbit, in the Second Age — the forging of the Rings of Power and Sauron’s first rise.',
		group: 'The Rings of Power',
		tags: ['prequel'],
		seasons: 2,
		synopsis:
			'Centuries before Frodo, elves, dwarves, and men face the growing shadow of a rising dark power and the forging of the Rings.',
		cast: ['Morfydd Clark', 'Ismael Cruz Córdova', 'Robert Aramayo'],
		tmdb: { type: 'tv', year: 2022 }
	},
	// ---- Animated Adaptations (1977–1980) — retells the whole saga across
	// three separate productions, not a continuation of the live-action films ----
	{
		id: 'the-hobbit-1977',
		franchise: 'lord-of-the-rings',
		title: 'The Hobbit',
		type: 'film',
		status: 'released',
		chronology: 0.25,
		branch: 'Animated Adaptations (1977–1980)',
		branchNote:
			'The whole saga adapted once before, across three separate animated productions — a retelling, not a continuation of the live-action films.',
		group: 'Animated Adaptations',
		tags: ['remake', 'animated'],
		synopsis:
			'The 1977 animated television adaptation of a reluctant hobbit’s journey with thirteen dwarves to reclaim their mountain home from a dragon.',
		cast: [],
		tmdb: { type: 'movie', year: 1977 }
	},
	{
		id: 'the-lord-of-the-rings-1978',
		franchise: 'lord-of-the-rings',
		title: 'The Lord of the Rings',
		type: 'film',
		status: 'released',
		chronology: 1.5,
		branch: 'Animated Adaptations (1977–1980)',
		group: 'Animated Adaptations',
		tags: ['remake', 'animated'],
		synopsis:
			'Ralph Bakshi’s rotoscoped animated adaptation, covering the Fellowship’s quest through roughly the first half of The Two Towers.',
		cast: [],
		tmdb: { type: 'movie', year: 1978 }
	},
	{
		id: 'the-return-of-the-king-1980',
		franchise: 'lord-of-the-rings',
		title: 'The Return of the King',
		type: 'film',
		status: 'released',
		chronology: 2.7,
		branch: 'Animated Adaptations (1977–1980)',
		group: 'Animated Adaptations',
		tags: ['remake', 'animated', 'finale'],
		synopsis:
			'A 1980 animated television special completing the story where Bakshi’s film left off, covering the back half of The Two Towers through the Ring’s destruction.',
		cast: [],
		tmdb: { type: 'movie', year: 1980 }
	},
	// ---- Games ----
	{
		id: 'middle-earth-shadow-of-mordor-2014',
		franchise: 'lord-of-the-rings',
		title: 'Middle-earth: Shadow of Mordor',
		type: 'game',
		status: 'released',
		chronology: 0.15,
		chronologyNote: 'Third Age, between The Hobbit and The Lord of the Rings',
		group: 'Games & Other Media',
		tags: [],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'A ranger of the North, killed and resurrected by a spectral elf, hunts Sauron’s lieutenants across a Mordor already in the Dark Lord’s grip.',
		cast: []
	}
];

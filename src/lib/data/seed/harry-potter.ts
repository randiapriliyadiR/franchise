import type { Entry } from '../types';

/**
 * Curated Wizarding World entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * Fantastic Beasts is a prequel trilogy set roughly 70 years before Harry
 * Potter's own story, so it's modeled as a branch that runs *before* the
 * main line rather than after it. HBO's Harry Potter series retells the
 * same seven books from scratch (one season per book) rather than
 * continuing the films' story, so it runs as its own branch too.
 */
export const harryPotterEntries: Entry[] = [
	{
		id: 'harry-potter-and-the-sorcerers-stone-2001',
		franchise: 'harry-potter',
		title: "Harry Potter and the Sorcerer's Stone",
		type: 'film',
		status: 'released',
		chronology: 1,
		chronologyNote: '1991–1992, Harry’s first year',
		group: 'Main Series',
		tags: ['origin'],
		synopsis:
			'An orphaned boy discovers he’s a wizard on his eleventh birthday and is whisked off to Hogwarts School of Witchcraft and Wizardry.',
		cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
		tmdb: { type: 'movie', year: 2001 }
	},
	{
		id: 'harry-potter-and-the-chamber-of-secrets-2002',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Chamber of Secrets',
		type: 'film',
		status: 'released',
		chronology: 2,
		chronologyNote: '1992–1993, second year',
		group: 'Main Series',
		tags: [],
		synopsis:
			'A mysterious force is petrifying students at Hogwarts, and Harry follows a trail to a legendary hidden chamber and its monster.',
		cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
		tmdb: { type: 'movie', year: 2002 }
	},
	{
		id: 'harry-potter-and-the-prisoner-of-azkaban-2004',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Prisoner of Azkaban',
		type: 'film',
		status: 'released',
		chronology: 3,
		chronologyNote: '1993–1994, third year',
		group: 'Main Series',
		tags: [],
		synopsis:
			'An escaped convict said to be hunting Harry is loose, dementors patrol the school, and old secrets about Harry’s parents resurface.',
		cast: ['Daniel Radcliffe', 'Gary Oldman', 'David Thewlis'],
		tmdb: { type: 'movie', year: 2004 }
	},
	{
		id: 'harry-potter-and-the-goblet-of-fire-2005',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Goblet of Fire',
		type: 'film',
		status: 'released',
		chronology: 4,
		chronologyNote: '1994–1995, fourth year',
		group: 'Main Series',
		tags: [],
		synopsis:
			'Harry is mysteriously entered into a dangerous, centuries-old wizarding tournament meant only for adult competitors.',
		cast: ['Daniel Radcliffe', 'Ralph Fiennes', 'Brendan Gleeson'],
		tmdb: { type: 'movie', year: 2005 }
	},
	{
		id: 'harry-potter-and-the-order-of-the-phoenix-2007',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Order of the Phoenix',
		type: 'film',
		status: 'released',
		chronology: 5,
		chronologyNote: '1995–1996, fifth year',
		group: 'Main Series',
		tags: [],
		synopsis:
			'With the Ministry of Magic in denial about Voldemort’s return, Harry forms a secret student group to teach real defensive magic.',
		cast: ['Daniel Radcliffe', 'Imelda Staunton', 'Helena Bonham Carter'],
		tmdb: { type: 'movie', year: 2007 }
	},
	{
		id: 'harry-potter-and-the-half-blood-prince-2009',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Half-Blood Prince',
		type: 'film',
		status: 'released',
		chronology: 6,
		chronologyNote: '1996–1997, sixth year',
		group: 'Main Series',
		tags: [],
		synopsis:
			'Dumbledore enlists Harry to help retrieve a crucial memory as Voldemort’s history — and Draco Malfoy’s secret mission — come into focus.',
		cast: ['Daniel Radcliffe', 'Michael Gambon', 'Tom Felton'],
		tmdb: { type: 'movie', year: 2009 }
	},
	{
		id: 'harry-potter-and-the-deathly-hallows-part-1-2010',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Deathly Hallows: Part 1',
		type: 'film',
		status: 'released',
		chronology: 7,
		chronologyNote: '1997, on the run',
		group: 'Main Series',
		tags: ['war'],
		synopsis:
			'With Hogwarts no longer safe, Harry, Ron and Hermione go on the run to hunt down and destroy Voldemort’s remaining Horcruxes.',
		cast: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
		tmdb: { type: 'movie', year: 2010 }
	},
	{
		id: 'harry-potter-and-the-deathly-hallows-part-2-2011',
		franchise: 'harry-potter',
		title: 'Harry Potter and the Deathly Hallows: Part 2',
		type: 'film',
		status: 'released',
		chronology: 8,
		chronologyNote: '1998, the Battle of Hogwarts',
		group: 'Main Series',
		tags: ['war', 'finale'],
		synopsis:
			'The final battle for Hogwarts begins as Harry closes in on Voldemort’s last Horcruxes and the truth about his own fate.',
		cast: ['Daniel Radcliffe', 'Ralph Fiennes', 'Maggie Smith'],
		tmdb: { type: 'movie', year: 2011 }
	},
	// ---- Fantastic Beasts (prequel branch) ----
	{
		id: 'fantastic-beasts-and-where-to-find-them-2016',
		franchise: 'harry-potter',
		title: 'Fantastic Beasts and Where to Find Them',
		type: 'film',
		status: 'released',
		chronology: 0.1,
		chronologyNote: '1926, decades before Harry Potter',
		branch: 'New York, 1926 (Fantastic Beasts)',
		branchNote:
			'Set roughly seventy years before Harry Potter — a prequel trilogy, not a continuation.',
		group: 'Fantastic Beasts',
		tags: ['prequel'],
		synopsis:
			'A magizoologist’s case of magical creatures escapes in 1920s New York just as tensions between wizards and No-Majs reach a breaking point.',
		cast: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'fantastic-beasts-the-crimes-of-grindelwald-2018',
		franchise: 'harry-potter',
		title: 'Fantastic Beasts: The Crimes of Grindelwald',
		type: 'film',
		status: 'released',
		chronology: 0.2,
		chronologyNote: '1927',
		branch: 'New York, 1926 (Fantastic Beasts)',
		group: 'Fantastic Beasts',
		tags: ['prequel'],
		synopsis:
			'The dark wizard Gellert Grindelwald escapes custody and begins rallying followers, forcing a young Dumbledore to act indirectly against him.',
		cast: ['Eddie Redmayne', 'Jude Law', 'Johnny Depp'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'fantastic-beasts-the-secrets-of-dumbledore-2022',
		franchise: 'harry-potter',
		title: 'Fantastic Beasts: The Secrets of Dumbledore',
		type: 'film',
		status: 'released',
		chronology: 0.3,
		chronologyNote: '1932',
		branch: 'New York, 1926 (Fantastic Beasts)',
		group: 'Fantastic Beasts',
		tags: ['prequel', 'finale'],
		synopsis:
			'Dumbledore asks Newt Scamander to lead a team against Grindelwald’s plan to seize control of the wizarding world.',
		cast: ['Eddie Redmayne', 'Jude Law', 'Mads Mikkelsen'],
		tmdb: { type: 'movie', year: 2022 }
	},
	// ---- HBO Harry Potter (remake branch — retells the books from scratch) ----
	{
		id: 'harry-potter-hbo-2026',
		franchise: 'harry-potter',
		title: 'Harry Potter',
		type: 'series',
		status: 'upcoming',
		chronology: 1.5,
		chronologyNote: '1991–1992, a season-per-book retelling',
		branch: 'HBO Series (Remake)',
		branchNote:
			'A from-scratch, season-per-book retelling of the same seven books the films adapt — a new cast, not a continuation.',
		group: 'HBO Series',
		tags: ['remake'],
		seasons: 1,
		synopsis:
			'An orphaned boy discovers he’s a wizard on his eleventh birthday and is whisked off to Hogwarts, in a new season-by-season retelling of the books.',
		cast: ['Dominic McLaughlin', 'Arabella Stanton', 'Alastair Stout', 'John Lithgow'],
		tmdb: { type: 'tv', year: 2026 }
	},
	// ---- Games ----
	{
		id: 'hogwarts-legacy-2023',
		franchise: 'harry-potter',
		title: 'Hogwarts Legacy',
		type: 'game',
		status: 'released',
		chronology: 9,
		chronologyNote: '1890s, a century before Harry',
		group: 'Games & Other Media',
		tags: [],
		platforms: ['PlayStation', 'Xbox', 'PC', 'Nintendo Switch'],
		synopsis:
			'An open-world action RPG set in the 1890s, decades before Harry Potter, following a student who discovers a hidden ability tied to an ancient uprising.',
		cast: []
	}
];

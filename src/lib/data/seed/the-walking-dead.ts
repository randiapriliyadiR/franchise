import type { Entry } from '../types';

/**
 * Curated The Walking Dead universe entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * The comic and the Telltale game are explicitly separate canon from the TV
 * continuity (this is true to how the franchise itself treats them), so
 * they're tagged `comic-continuity` / `game-continuity` and kept out of the
 * main story timeline by default.
 */
export const twdEntries: Entry[] = [
	{
		id: 'twd-s01',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 1',
		type: 'series',
		status: 'released',
		chronology: 1,
		chronologyNote: 'days 1–32 after the outbreak reaches Georgia',
		group: 'Main Series',
		tags: ['origin'],
		seasons: 1,
		episodes: 6,
		synopsis:
			'Sheriff’s deputy Rick Grimes wakes from a coma into a world overrun by the dead, and sets out to find his family.',
		cast: ['Andrew Lincoln', 'Jon Bernthal', 'Sarah Wayne Callies'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 1 }
	},
	{
		id: 'twd-s02',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 2',
		type: 'series',
		status: 'released',
		chronology: 2,
		chronologyNote: 'weeks 5–9',
		group: 'Main Series',
		tags: [],
		seasons: 1,
		episodes: 13,
		synopsis:
			'Trapped on a highway and then holed up on a secluded farm, the group’s fragile trust starts to fracture over who gets to make the hard calls.',
		cast: ['Andrew Lincoln', 'Norman Reedus', 'Steven Yeun'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 2 }
	},
	{
		id: 'twd-s03',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 3',
		type: 'series',
		status: 'released',
		chronology: 3,
		chronologyNote: 'months 3–8',
		group: 'Main Series',
		tags: ['war'],
		seasons: 1,
		episodes: 16,
		synopsis:
			'Fortified inside a prison, Rick’s group collides with a walled town called Woodbury and the man who rules it with an iron fist.',
		cast: ['Andrew Lincoln', 'David Morrissey', 'Danai Gurira'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 3 }
	},
	{
		id: 'twd-s04',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 4',
		type: 'series',
		status: 'released',
		chronology: 4,
		chronologyNote: 'months 9–14',
		group: 'Main Series',
		tags: [],
		seasons: 1,
		episodes: 16,
		synopsis:
			'A plague inside the prison walls and an old enemy’s return scatter the group across the countryside, alone or in fractured pairs.',
		cast: ['Andrew Lincoln', 'Chandler Riggs', 'Melissa McBride'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 4 }
	},
	{
		id: 'twd-s05',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 5',
		type: 'series',
		status: 'released',
		chronology: 5,
		chronologyNote: 'months 14–20',
		group: 'Main Series',
		tags: [],
		seasons: 1,
		episodes: 16,
		synopsis:
			'After escaping a cannibalistic community at Terminus, the group searches for a place to actually live rather than merely survive.',
		cast: ['Andrew Lincoln', 'Lauren Cohan', 'Norman Reedus'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 5 }
	},
	{
		id: 'twd-s06',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 6',
		type: 'series',
		status: 'released',
		chronology: 6,
		chronologyNote: 'months 20–24',
		group: 'Main Series',
		tags: [],
		seasons: 1,
		episodes: 16,
		synopsis:
			'Settled in Alexandria, the group triggers a herd of thousands while a new, far more organized threat quietly circles the walls.',
		cast: ['Andrew Lincoln', 'Jeffrey Dean Morgan', 'Danai Gurira'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 6 }
	},
	{
		id: 'twd-s07',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 7',
		type: 'series',
		status: 'released',
		chronology: 7,
		chronologyNote: 'months 24–30',
		group: 'Main Series',
		tags: ['war'],
		seasons: 1,
		episodes: 16,
		synopsis:
			'Broken by Negan and the Saviors, Rick’s group is forced into submission — until they start quietly building an alliance to fight back.',
		cast: ['Jeffrey Dean Morgan', 'Andrew Lincoln', 'Norman Reedus'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 7 }
	},
	{
		id: 'twd-s08',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 8',
		type: 'series',
		status: 'released',
		chronology: 8,
		chronologyNote: 'months 30–33',
		group: 'Main Series',
		tags: ['war'],
		seasons: 1,
		episodes: 16,
		synopsis:
			'All-out war breaks out between the communities and the Saviors, ending with Rick facing a choice about what kind of world comes next.',
		cast: ['Andrew Lincoln', 'Jeffrey Dean Morgan', 'Lauren Cohan'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 8 }
	},
	{
		id: 'twd-s09',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 9',
		type: 'series',
		status: 'released',
		chronology: 9,
		chronologyNote: 'year 3, then a jump to year 9',
		group: 'Main Series',
		tags: ['time-jump'],
		seasons: 1,
		episodes: 16,
		synopsis:
			'A fragile peace between the communities holds only briefly before a six-year jump reveals a new generation, and a new, masked threat.',
		cast: ['Danai Gurira', 'Norman Reedus', 'Lauren Cohan'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 9 }
	},
	{
		id: 'twd-s10',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 10',
		type: 'series',
		status: 'released',
		chronology: 10,
		chronologyNote: 'year 9–10',
		group: 'Main Series',
		tags: [],
		seasons: 1,
		episodes: 22,
		synopsis:
			'The Whisperers’ war of attrition pushes every community to its breaking point, in the show’s longest and most brutal season yet.',
		cast: ['Norman Reedus', 'Melissa McBride', 'Samantha Morton'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 10 }
	},
	{
		id: 'twd-s11',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season 11',
		type: 'series',
		status: 'released',
		chronology: 11,
		chronologyNote: 'year 10–11, series finale',
		group: 'Main Series',
		tags: ['finale'],
		seasons: 1,
		episodes: 24,
		synopsis:
			'The flagship series closes out with a final push against the Commonwealth, a sprawling, class-stratified society unlike anything the group has faced.',
		cast: ['Norman Reedus', 'Melissa McBride', 'Lauren Cohan'],
		tmdb: { type: 'tv', query: 'The Walking Dead', year: 2010, season: 11 }
	},
	{
		id: 'fear-the-walking-dead',
		franchise: 'the-walking-dead',
		title: 'Fear the Walking Dead',
		type: 'series',
		status: 'released',
		chronology: 0.5,
		chronologyNote: 'begins days before TWD Season 1, in Los Angeles',
		branch: 'Los Angeles (Fear the Walking Dead)',
		branchNote:
			'Starts before the outbreak reaches Rick in Georgia — runs parallel through the main series, then continues past its finale.',
		group: 'Spin-offs',
		tags: ['companion-series'],
		seasons: 8,
		synopsis:
			'A blended Los Angeles family lives through the earliest, most chaotic days of the outbreak, years before it reaches Rick Grimes in Georgia.',
		cast: ['Kim Dickens', 'Cliff Curtis', 'Alycia Debnam-Carey'],
		tmdb: { type: 'tv', year: 2015 }
	},
	{
		id: 'the-walking-dead-world-beyond',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: World Beyond',
		type: 'series',
		status: 'released',
		chronology: 9.5,
		chronologyNote: 'year 10, a fortified civilization inland',
		branch: 'The Campus Colony (World Beyond)',
		branchNote:
			'A separate, well-supplied settlement discovered a decade into the outbreak — briefly intersects the main line in Season 10.',
		group: 'Spin-offs',
		tags: ['coming-of-age', 'limited-series'],
		seasons: 2,
		synopsis:
			'A generation raised entirely inside the walls of a hidden, well-supplied settlement ventures out to rescue a missing father, and finds out what the world actually is.',
		cast: ['Aliyah Royale', 'Alexa Mansour', 'Nicolas Cantu'],
		tmdb: { type: 'tv', year: 2020 }
	},
	{
		id: 'tales-of-the-walking-dead',
		franchise: 'the-walking-dead',
		title: 'Tales of the Walking Dead',
		type: 'series',
		status: 'released',
		chronology: 9.2,
		chronologyNote: 'various points across the timeline',
		branch: 'Anthology (Tales of the Walking Dead)',
		branchNote: 'Six standalone stories scattered across the outbreak — not one continuous thread.',
		group: 'Spin-offs',
		tags: ['anthology'],
		seasons: 1,
		synopsis:
			'A one-off anthology telling six self-contained stories scattered across the outbreak, some featuring familiar faces from the flagship series.',
		cast: ['Samantha Morton', 'Terry Crews', 'Olivia Munn'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'the-walking-dead-dead-city',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Dead City',
		type: 'series',
		status: 'released',
		chronology: 12,
		chronologyNote: 'after the Season 11 finale',
		branch: 'New York (Dead City)',
		branchNote:
			'One of three parallel stories picking up right after the flagship series ends, each following different survivors in a different place.',
		group: 'Spin-offs',
		tags: ['crime'],
		seasons: 2,
		synopsis:
			'Maggie strikes an uneasy truce with Negan to track her kidnapped son into the ruins of a walled-off, gang-ruled Manhattan.',
		cast: ['Lauren Cohan', 'Jeffrey Dean Morgan', 'Gaius Charles'],
		tmdb: { type: 'tv', year: 2023 }
	},
	{
		id: 'the-walking-dead-daryl-dixon',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Daryl Dixon',
		type: 'series',
		status: 'released',
		chronology: 12.2,
		chronologyNote: 'after the Season 11 finale',
		branch: 'France (Daryl Dixon)',
		branchNote:
			'One of three parallel stories picking up right after the flagship series ends, each following different survivors in a different place.',
		group: 'Spin-offs',
		tags: [],
		seasons: 2,
		synopsis:
			'Washed up on the coast of France with no memory of how he got there, Daryl Dixon is pulled into a very different, unfamiliar apocalypse.',
		cast: ['Norman Reedus', 'Clémence Poésy', 'Adam Nagaitis'],
		tmdb: { type: 'tv', year: 2023 }
	},
	{
		id: 'the-walking-dead-the-ones-who-live',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: The Ones Who Live',
		type: 'series',
		status: 'released',
		chronology: 12.5,
		chronologyNote: 'fills the gap since Season 9, converges after Season 11',
		branch: 'Rick & Michonne (The Ones Who Live)',
		branchNote:
			'Fills the years since Rick was separated from the group, running alongside the other post-finale spin-offs before the two threads meet.',
		group: 'Spin-offs',
		tags: ['limited-series', 'romance'],
		seasons: 1,
		synopsis:
			'Separated for years and each presumed dead by the other, Rick and Michonne finally close the distance between them and everything that kept them apart.',
		cast: ['Andrew Lincoln', 'Danai Gurira'],
		tmdb: { type: 'tv', year: 2024 }
	},
	{
		id: 'the-walking-dead-issue-1',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead #1',
		type: 'comic',
		status: 'released',
		chronology: 0,
		chronologyNote: 'comic continuity, 2003',
		group: 'Games & Comics',
		tags: ['origin', 'comic-continuity'],
		releaseDate: '2003-10-01',
		synopsis:
			'The black-and-white first issue that started it all: Officer Rick Grimes wakes up alone in a hospital, in a story that would run for 193 issues.',
		cast: ['Robert Kirkman (writer)', 'Tony Moore (artist)']
	},
	{
		id: 'the-walking-dead-telltale-season-one',
		franchise: 'the-walking-dead',
		title: 'The Walking Dead: Season One',
		type: 'game',
		status: 'released',
		chronology: 0.2,
		chronologyNote: 'game continuity, parallel to the early outbreak',
		group: 'Games & Comics',
		tags: ['game-continuity', 'narrative-adventure'],
		releaseDate: '2012-04-24',
		platforms: ['Windows', 'PlayStation 3', 'Xbox 360', 'iOS'],
		synopsis:
			'Convicted criminal Lee Everett becomes the reluctant guardian of a young girl named Clementine in a five-episode, choice-driven story of its own.',
		cast: ['Dave Fennoy (voice)', 'Melissa Hutchison (voice)']
	}
];

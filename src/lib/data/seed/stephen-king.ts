import type { Entry } from '../types';

/**
 * Curated Stephen King adaptation entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * Unlike Marvel or The Walking Dead, most of these adaptations aren't one
 * serialized story — they stand alone, loosely tied together by recurring
 * fictional towns (Derry, Castle Rock) and King's own mythology rather than
 * a single timeline, so `chronology` matches release order for most of
 * them. The exception is the Derry cluster: IT: Welcome to Derry is set in
 * 1962, decades before It's 1989, so it's placed *before* It in story order
 * even though it released years later.
 *
 * Several stories have been adapted more than once — Carrie, The Shining,
 * It, Pet Sematary, The Mist, Firestarter. Each remake gets its own
 * `branchKind: 'remake'` branch, drawn as an independent parallel line
 * with no connector to the original: it didn't fork from anything, an
 * unrelated production just told the same story again. Carrie's two
 * remakes (2013, 2026) are unrelated to *each other* too, so each gets
 * its own branch rather than sharing one.
 */
export const stephenKingEntries: Entry[] = [
	{
		id: 'carrie-1976',
		franchise: 'stephen-king',
		title: 'Carrie',
		type: 'film',
		status: 'released',
		chronology: 1,
		group: 'Adaptations',
		tags: ['origin'],
		synopsis:
			'A bullied high schooler with emerging telekinetic powers is pushed past her breaking point at the senior prom.',
		cast: ['Sissy Spacek', 'Piper Laurie', 'Amy Irving'],
		tmdb: { type: 'movie', year: 1976 }
	},
	{
		id: 'the-shining-1980',
		franchise: 'stephen-king',
		title: 'The Shining',
		type: 'film',
		status: 'released',
		chronology: 2,
		group: 'The Shining Saga',
		tags: [],
		synopsis:
			'A writer takes a job as the winter caretaker of an isolated hotel, where its violent history begins to consume him.',
		cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
		tmdb: { type: 'movie', year: 1980 }
	},
	{
		id: 'doctor-sleep-2019',
		franchise: 'stephen-king',
		title: 'Doctor Sleep',
		type: 'film',
		status: 'released',
		chronology: 2.1,
		chronologyNote: 'decades after The Shining — a direct sequel, not a remake',
		group: 'The Shining Saga',
		tags: ['finale'],
		synopsis:
			'A grown Danny Torrance, still scarred by the Overlook, uses his fading “shine” to protect a young girl from a cult that feeds on it.',
		cast: ['Ewan McGregor', 'Rebecca Ferguson', 'Kyliegh Curran'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'creepshow-1982',
		franchise: 'stephen-king',
		title: 'Creepshow',
		type: 'film',
		status: 'released',
		chronology: 3,
		group: 'Adaptations',
		tags: ['anthology'],
		synopsis:
			'A comic-book-styled anthology of five macabre tales, from a vengeful corpse to a crate hiding something ravenous.',
		cast: ['Hal Holbrook', 'Adrienne Barbeau', 'Leslie Nielsen'],
		tmdb: { type: 'movie', year: 1982 }
	},
	{
		id: 'christine-1983',
		franchise: 'stephen-king',
		title: 'Christine',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A withdrawn teenager restores a broken-down 1958 Plymouth Fury with a murderous, jealous will of its own.',
		cast: ['Keith Gordon', 'John Stockwell', 'Alexandra Paul'],
		tmdb: { type: 'movie', year: 1983 }
	},
	{
		id: 'cujo-1983',
		franchise: 'stephen-king',
		title: 'Cujo',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A mother and her young son are trapped in a stalled car by a once-gentle St. Bernard driven rabid and murderous.',
		cast: ['Dee Wallace', 'Danny Pintauro'],
		tmdb: { type: 'movie', year: 1983 }
	},
	{
		id: 'firestarter-1984',
		franchise: 'stephen-king',
		title: 'Firestarter',
		type: 'film',
		status: 'released',
		chronology: 6,
		group: 'Adaptations',
		tags: ['origin'],
		synopsis:
			'A young girl with the power to start fires with her mind is hunted by a secretive government agency.',
		cast: ['David Keith', 'Drew Barrymore', 'George C. Scott'],
		tmdb: { type: 'movie', year: 1984 }
	},
	{
		id: 'stand-by-me-1986',
		franchise: 'stephen-king',
		title: 'Stand by Me',
		type: 'film',
		status: 'released',
		chronology: 7,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'Four boys in small-town Oregon set out on a two-day hike to find the body of a missing teenager.',
		cast: ['Wil Wheaton', 'River Phoenix', 'Corey Feldman'],
		tmdb: { type: 'movie', year: 1986 }
	},
	{
		id: 'pet-sematary-1989',
		franchise: 'stephen-king',
		title: 'Pet Sematary',
		type: 'film',
		status: 'released',
		chronology: 8,
		group: 'Adaptations',
		tags: ['origin'],
		synopsis:
			'A family discovers a burial ground behind their new home with the power to bring the dead back — changed.',
		cast: ['Dale Midkiff', 'Fred Gwynne', 'Denise Crosby'],
		tmdb: { type: 'movie', year: 1989 }
	},
	{
		id: 'misery-1990',
		franchise: 'stephen-king',
		title: 'Misery',
		type: 'film',
		status: 'released',
		chronology: 9,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A novelist rescued from a car crash by his self-proclaimed “number one fan” discovers just how obsessive she really is.',
		cast: ['James Caan', 'Kathy Bates'],
		tmdb: { type: 'movie', year: 1990 }
	},
	{
		id: 'the-shawshank-redemption-1994',
		franchise: 'stephen-king',
		title: 'The Shawshank Redemption',
		type: 'film',
		status: 'released',
		chronology: 10,
		group: 'Prison & Redemption',
		tags: ['origin'],
		synopsis:
			'A banker wrongly convicted of murder forms an unlikely friendship with a fellow inmate over two decades at Shawshank State Penitentiary.',
		cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
		tmdb: { type: 'movie', year: 1994 }
	},
	{
		id: 'the-green-mile-1999',
		franchise: 'stephen-king',
		title: 'The Green Mile',
		type: 'film',
		status: 'released',
		chronology: 11,
		group: 'Prison & Redemption',
		tags: ['finale'],
		synopsis:
			'A death row supervisor discovers one of his condemned inmates possesses an extraordinary, inexplicable gift.',
		cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
		tmdb: { type: 'movie', year: 1999 }
	},
	{
		id: 'the-mist-2007',
		franchise: 'stephen-king',
		title: 'The Mist',
		type: 'film',
		status: 'released',
		chronology: 12,
		group: 'Adaptations',
		tags: ['origin'],
		synopsis:
			'A small town is trapped inside a supermarket by a mysterious mist hiding creatures — and its own fraying humanity.',
		cast: ['Thomas Jane', 'Marcia Gay Harden', 'Laurie Holden'],
		tmdb: { type: 'movie', year: 2007 }
	},
	{
		id: '1408-2007',
		franchise: 'stephen-king',
		title: '1408',
		type: 'film',
		status: 'released',
		chronology: 13,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A skeptical author who debunks haunted locations checks into a hotel room that has killed everyone who ever stayed in it.',
		cast: ['John Cusack', 'Samuel L. Jackson'],
		tmdb: { type: 'movie', year: 2007 }
	},
	{
		id: 'under-the-dome-2013',
		franchise: 'stephen-king',
		title: 'Under the Dome',
		type: 'series',
		status: 'released',
		chronology: 14,
		group: 'Adaptations',
		tags: [],
		seasons: 3,
		synopsis:
			'An invisible, indestructible dome suddenly seals off a small town from the rest of the world, trapping its residents inside.',
		cast: ['Mike Vogel', 'Rachelle Lefevre', 'Dean Norris'],
		tmdb: { type: 'tv', year: 2013 }
	},
	{
		id: 'it-welcome-to-derry-2025',
		franchise: 'stephen-king',
		title: 'IT: Welcome to Derry',
		type: 'series',
		status: 'released',
		chronology: 14.5,
		chronologyNote: '1962, decades before It',
		group: 'Derry & Castle Rock',
		tags: ['prequel'],
		seasons: 1,
		synopsis:
			'Decades before the Losers Club, a spate of unexplained disappearances in 1962 Derry reveals a long-buried evil already at work.',
		cast: ['Taylour Paige', 'Jovan Adepo', 'James Remar'],
		tmdb: { type: 'tv', year: 2025 }
	},
	{
		id: 'it-2017',
		franchise: 'stephen-king',
		title: 'It',
		type: 'film',
		status: 'released',
		chronology: 15,
		chronologyNote: '1989, the Losers Club as kids',
		group: 'Derry & Castle Rock',
		tags: ['origin'],
		synopsis:
			'Seven children in small-town Derry, Maine, band together against a shapeshifting entity that preys on the town’s young.',
		cast: ['Bill Skarsgård', 'Jaeden Martell', 'Sophia Lillis'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'it-chapter-two-2019',
		franchise: 'stephen-king',
		title: 'It Chapter Two',
		type: 'film',
		status: 'released',
		chronology: 15.1,
		chronologyNote: '2016, the Losers Club as adults — directly follows It',
		group: 'Derry & Castle Rock',
		tags: ['finale'],
		synopsis:
			'Twenty-seven years later, the Losers Club reunites as adults to finish what they started against Pennywise.',
		cast: ['Jessica Chastain', 'James McAvoy', 'Bill Skarsgård'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'castle-rock-2018',
		franchise: 'stephen-king',
		title: 'Castle Rock',
		type: 'series',
		status: 'released',
		chronology: 15.2,
		group: 'Derry & Castle Rock',
		tags: ['anthology'],
		seasons: 2,
		synopsis:
			'An anthology series weaving together characters, settings, and mythology from across Stephen King’s body of work in one shared Maine town.',
		cast: ['André Holland', 'Bill Skarsgård', 'Sissy Spacek'],
		tmdb: { type: 'tv', year: 2018 }
	},
	{
		id: 'the-dark-tower-2017',
		franchise: 'stephen-king',
		title: 'The Dark Tower',
		type: 'film',
		status: 'released',
		chronology: 16,
		group: 'The Dark Tower',
		tags: [],
		synopsis:
			'A boy from our world is pulled into a parallel one to help the last Gunslinger stop a Man in Black bent on destroying the tower holding all universes together.',
		cast: ['Idris Elba', 'Matthew McConaughey', 'Tom Taylor'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'geralds-game-2017',
		franchise: 'stephen-king',
		title: "Gerald's Game",
		type: 'film',
		status: 'released',
		chronology: 17,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'Handcuffed to a bed after her husband’s sudden death during a remote getaway, a woman confronts her past to survive.',
		cast: ['Carla Gugino', 'Bruce Greenwood'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'the-outsider-2020',
		franchise: 'stephen-king',
		title: 'The Outsider',
		type: 'series',
		status: 'released',
		chronology: 18,
		group: 'Adaptations',
		tags: [],
		seasons: 1,
		synopsis:
			'A gruesome child murder with airtight, contradictory evidence against one suspect pulls investigators toward something impossible.',
		cast: ['Ben Mendelsohn', 'Cynthia Erivo', 'Jason Bateman'],
		tmdb: { type: 'tv', year: 2020 }
	},
	{
		id: 'the-long-walk-2025',
		franchise: 'stephen-king',
		title: 'The Long Walk',
		type: 'film',
		status: 'released',
		chronology: 19,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'Fifty teenage boys enter a dystopian, deadly annual walking contest — maintain the pace or be executed, until only one remains.',
		cast: ['Cooper Hoffman', 'David Jonsson', 'Mark Hamill'],
		tmdb: { type: 'movie', year: 2025 }
	},

	// ---- Remakes — each a retelling of an earlier entry's story, not a
	// sequel, so each runs as its own branch next to the original. ----
	{
		id: 'carrie-2013',
		franchise: 'stephen-king',
		title: 'Carrie',
		type: 'film',
		status: 'released',
		chronology: 1,
		branch: 'Carrie (2013 Film)',
		branchKind: 'remake',
		branchNote: 'An unrelated retelling of the same story as the 1976 film, not a sequel to it.',
		group: 'Adaptations',
		tags: ['remake'],
		synopsis:
			'A modern-day retelling: Carrie White’s telekinetic powers surface just as her mother’s religious fanaticism and her classmates’ cruelty peak.',
		cast: ['Chloë Grace Moretz', 'Julianne Moore', 'Judy Greer'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'carrie-2026',
		franchise: 'stephen-king',
		title: 'Carrie',
		type: 'series',
		status: 'upcoming',
		chronology: 1,
		chronologyNote: 'a modern-day remake, set in the social-media age',
		branch: 'Carrie (2026 Series)',
		branchKind: 'remake',
		branchNote:
			'Another unrelated retelling of the same story — not connected to the 2013 film either.',
		group: 'Adaptations',
		tags: ['remake'],
		seasons: 1,
		synopsis:
			'A social-media-era retelling: Carrie White’s home-schooled isolation collides with a viral bullying scandal as her telekinetic powers awaken.',
		cast: ['Summer H. Howell', 'Samantha Sloyan', 'Siena Agudong'],
		tmdb: { type: 'tv', year: 2026 }
	},
	{
		id: 'the-shining-1997',
		franchise: 'stephen-king',
		title: "Stephen King's The Shining",
		type: 'series',
		status: 'released',
		chronology: 2,
		branch: 'The Shining (1997 Miniseries)',
		branchKind: 'remake',
		branchNote:
			'An unrelated, more faithful retelling of the same novel — King himself wrote the script, partly in response to Kubrick’s changes.',
		group: 'The Shining Saga',
		tags: ['remake'],
		seasons: 1,
		synopsis:
			'A recovering-alcoholic writer takes his family to an isolated hotel for the winter, where its violent past begins to take hold of him.',
		cast: ['Steven Weber', 'Rebecca De Mornay', 'Courtland Mead'],
		tmdb: { type: 'tv', year: 1997 }
	},
	{
		id: 'the-mist-2017',
		franchise: 'stephen-king',
		title: 'The Mist',
		type: 'series',
		status: 'released',
		chronology: 12,
		branch: 'The Mist (2017 Series)',
		branchKind: 'remake',
		branchNote: 'An unrelated retelling of the same novella as the 2007 film, not a sequel to it.',
		group: 'Adaptations',
		tags: ['remake'],
		seasons: 1,
		synopsis:
			'A small Maine town is cut off by a mysterious fog hiding nightmarish creatures, its residents turning on each other as much as the mist itself.',
		cast: ['Morgan Spector', 'Alyssa Sutherland', 'Gus Birney'],
		tmdb: { type: 'tv', year: 2017 }
	},
	{
		id: 'it-1990',
		franchise: 'stephen-king',
		title: 'It',
		type: 'series',
		status: 'released',
		chronology: 15,
		branch: 'It (1990 Miniseries)',
		branchKind: 'remake',
		branchNote:
			'An unrelated production covering both timelines the 2017/2019 films split into two — a retelling, not a sequel.',
		group: 'Derry & Castle Rock',
		tags: ['remake'],
		seasons: 1,
		synopsis:
			'Seven childhood friends who once defeated a shapeshifting evil in Derry are drawn back decades later when it resurfaces.',
		cast: ['Tim Curry', 'Richard Thomas', 'John Ritter'],
		tmdb: { type: 'tv', year: 1990 }
	},
	{
		id: 'pet-sematary-2019',
		franchise: 'stephen-king',
		title: 'Pet Sematary',
		type: 'film',
		status: 'released',
		chronology: 8,
		branch: 'Pet Sematary (Remake)',
		branchKind: 'remake',
		branchNote: 'An unrelated retelling of the same novel as the 1989 film, not a sequel to it.',
		group: 'Adaptations',
		tags: ['remake'],
		synopsis:
			'A modern-day retelling: a family’s new home backs onto a burial ground with the power to bring the dead back — changed.',
		cast: ['Jason Clarke', 'Amy Seimetz', 'John Lithgow'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'firestarter-2022',
		franchise: 'stephen-king',
		title: 'Firestarter',
		type: 'film',
		status: 'released',
		chronology: 6,
		branch: 'Firestarter (Remake)',
		branchKind: 'remake',
		branchNote: 'An unrelated retelling of the same novel as the 1984 film, not a sequel to it.',
		group: 'Adaptations',
		tags: ['remake'],
		synopsis:
			'A modern-day retelling: a young girl with the power to start fires with her mind is hunted by a secretive government agency.',
		cast: ['Zac Efron', 'Ryan Kiera Armstrong'],
		tmdb: { type: 'movie', year: 2022 }
	}
];

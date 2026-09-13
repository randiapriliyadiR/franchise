import type { Entry } from '../types';

/**
 * Curated Stephen King adaptation entries. See the comment at the top of
 * `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * Unlike Marvel or The Walking Dead, these adaptations aren't one
 * serialized story — most stand alone, loosely tied together by recurring
 * fictional towns (Derry, Castle Rock) and King's own mythology rather than
 * a single timeline. `chronology` matches release order (the two genuine
 * direct sequels, It Chapter Two and Doctor Sleep, naturally follow their
 * predecessors this way too); `group` tracks which corner of King's work
 * each adaptation belongs to.
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
		id: 'stand-by-me-1986',
		franchise: 'stephen-king',
		title: 'Stand by Me',
		type: 'film',
		status: 'released',
		chronology: 3,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'Four boys in small-town Oregon set out on a two-day hike to find the body of a missing teenager.',
		cast: ['Wil Wheaton', 'River Phoenix', 'Corey Feldman'],
		tmdb: { type: 'movie', year: 1986 }
	},
	{
		id: 'misery-1990',
		franchise: 'stephen-king',
		title: 'Misery',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A novelist rescued from a car crash by his self-proclaimed “number one fan” discovers just how obsessive she really is.',
		cast: ['James Caan', 'Kathy Bates'],
		tmdb: { type: 'movie', year: 1990 }
	},
	{
		id: 'pet-sematary-1989',
		franchise: 'stephen-king',
		title: 'Pet Sematary',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Adaptations',
		tags: [],
		synopsis:
			'A family discovers a burial ground behind their new home with the power to bring the dead back — changed.',
		cast: ['Dale Midkiff', 'Fred Gwynne', 'Denise Crosby'],
		tmdb: { type: 'movie', year: 1989 }
	},
	{
		id: 'the-shawshank-redemption-1994',
		franchise: 'stephen-king',
		title: 'The Shawshank Redemption',
		type: 'film',
		status: 'released',
		chronology: 6,
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
		chronology: 7,
		group: 'Prison & Redemption',
		tags: ['finale'],
		synopsis:
			'A death row supervisor discovers one of his condemned inmates possesses an extraordinary, inexplicable gift.',
		cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
		tmdb: { type: 'movie', year: 1999 }
	},
	{
		id: 'it-2017',
		franchise: 'stephen-king',
		title: 'It',
		type: 'film',
		status: 'released',
		chronology: 8,
		chronologyNote: '1989, the Losers Club as kids',
		group: 'Derry & Castle Rock',
		tags: ['origin'],
		synopsis:
			'Seven children in small-town Derry, Maine, band together against a shapeshifting entity that preys on the town’s young.',
		cast: ['Bill Skarsgård', 'Jaeden Martell', 'Sophia Lillis'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'castle-rock-2018',
		franchise: 'stephen-king',
		title: 'Castle Rock',
		type: 'series',
		status: 'released',
		chronology: 8.5,
		group: 'Derry & Castle Rock',
		tags: ['anthology'],
		seasons: 2,
		synopsis:
			'An anthology series weaving together characters, settings, and mythology from across Stephen King’s body of work in one shared Maine town.',
		cast: ['André Holland', 'Bill Skarsgård', 'Sissy Spacek'],
		tmdb: { type: 'tv', year: 2018 }
	},
	{
		id: 'it-chapter-two-2019',
		franchise: 'stephen-king',
		title: 'It Chapter Two',
		type: 'film',
		status: 'released',
		chronology: 9,
		chronologyNote: '2016, the Losers Club as adults',
		group: 'Derry & Castle Rock',
		tags: ['finale'],
		synopsis:
			'Twenty-seven years later, the Losers Club reunites as adults to finish what they started against Pennywise.',
		cast: ['Jessica Chastain', 'James McAvoy', 'Bill Skarsgård'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'doctor-sleep-2019',
		franchise: 'stephen-king',
		title: 'Doctor Sleep',
		type: 'film',
		status: 'released',
		chronology: 10,
		chronologyNote: 'decades after The Shining',
		group: 'The Shining Saga',
		tags: ['finale'],
		synopsis:
			'A grown Danny Torrance, still scarred by the Overlook, uses his fading “shine” to protect a young girl from a cult that feeds on it.',
		cast: ['Ewan McGregor', 'Rebecca Ferguson', 'Kyliegh Curran'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'the-dark-tower-2017',
		franchise: 'stephen-king',
		title: 'The Dark Tower',
		type: 'film',
		status: 'released',
		chronology: 8.2,
		group: 'The Dark Tower',
		tags: [],
		synopsis:
			'A boy from our world is pulled into a parallel one to help the last Gunslinger stop a Man in Black bent on destroying the tower holding all universes together.',
		cast: ['Idris Elba', 'Matthew McConaughey', 'Tom Taylor'],
		tmdb: { type: 'movie', year: 2017 }
	}
];

import type { Entry } from '../types';

/**
 * Curated Star Trek entries. See the comment at the top of `seed/marvel.ts`
 * for how this data merges with `scripts/sync-tmdb.mjs` output — the same
 * rules apply here.
 *
 * Scoped to the film side of Trek plus two flagship modern series, rather
 * than the full 60-year catalog of television. The 2009 J.J. Abrams film
 * splits off an explicitly alternate reality (a time-travel incursion
 * changes history from that point on) — a genuine branch, unlike anything
 * else here.
 */
export const starTrekEntries: Entry[] = [
	// ---- The Original Crew ----
	{
		id: 'star-trek-the-motion-picture-1979',
		franchise: 'star-trek',
		title: 'Star Trek: The Motion Picture',
		type: 'film',
		status: 'released',
		chronology: 1,
		chronologyNote: '2273',
		group: 'The Original Crew',
		tags: ['origin'],
		synopsis:
			'The crew of the Enterprise investigates a mysterious, immensely powerful cloud entity on a collision course with Earth.',
		cast: ['William Shatner', 'Leonard Nimoy', 'DeForest Kelley'],
		tmdb: { type: 'movie', year: 1979 }
	},
	{
		id: 'star-trek-ii-the-wrath-of-khan-1982',
		franchise: 'star-trek',
		title: 'Star Trek II: The Wrath of Khan',
		type: 'film',
		status: 'released',
		chronology: 2,
		chronologyNote: '2285',
		group: 'The Original Crew',
		tags: [],
		synopsis:
			'A genetically engineered tyrant Kirk exiled years earlier returns, hijacking a terraforming device to exact his revenge.',
		cast: ['William Shatner', 'Ricardo Montalbán', 'Leonard Nimoy'],
		tmdb: { type: 'movie', year: 1982 }
	},
	{
		id: 'star-trek-iii-the-search-for-spock-1984',
		franchise: 'star-trek',
		title: 'Star Trek III: The Search for Spock',
		type: 'film',
		status: 'released',
		chronology: 3,
		chronologyNote: '2285',
		group: 'The Original Crew',
		tags: [],
		synopsis:
			'Kirk and crew steal the Enterprise to return to the forbidden Genesis Planet and recover Spock’s body — and perhaps his soul.',
		cast: ['William Shatner', 'DeForest Kelley', 'James Doohan'],
		tmdb: { type: 'movie', year: 1984 }
	},
	{
		id: 'star-trek-iv-the-voyage-home-1986',
		franchise: 'star-trek',
		title: 'Star Trek IV: The Voyage Home',
		type: 'film',
		status: 'released',
		chronology: 4,
		chronologyNote: '2286',
		group: 'The Original Crew',
		tags: ['time-travel'],
		synopsis:
			'To save Earth from a mysterious probe, the crew travels back in time to 1980s San Francisco to find humpback whales.',
		cast: ['William Shatner', 'Leonard Nimoy', 'Catherine Hicks'],
		tmdb: { type: 'movie', year: 1986 }
	},
	{
		id: 'star-trek-v-the-final-frontier-1989',
		franchise: 'star-trek',
		title: 'Star Trek V: The Final Frontier',
		type: 'film',
		status: 'released',
		chronology: 5,
		chronologyNote: '2287',
		group: 'The Original Crew',
		tags: [],
		synopsis:
			'Spock’s half-brother hijacks the Enterprise on a quest to find God at the center of the galaxy.',
		cast: ['William Shatner', 'Leonard Nimoy', 'DeForest Kelley'],
		tmdb: { type: 'movie', year: 1989 }
	},
	{
		id: 'star-trek-vi-the-undiscovered-country-1991',
		franchise: 'star-trek',
		title: 'Star Trek VI: The Undiscovered Country',
		type: 'film',
		status: 'released',
		chronology: 6,
		chronologyNote: '2293, the crew’s last voyage',
		group: 'The Original Crew',
		tags: ['finale'],
		synopsis:
			'As the Klingon Empire seeks peace with the Federation, Kirk and McCoy are framed for the assassination of a Klingon chancellor.',
		cast: ['William Shatner', 'Leonard Nimoy', 'Christopher Plummer'],
		tmdb: { type: 'movie', year: 1991 }
	},
	// ---- The Next Generation ----
	{
		id: 'star-trek-generations-1994',
		franchise: 'star-trek',
		title: 'Star Trek Generations',
		type: 'film',
		status: 'released',
		chronology: 7,
		chronologyNote: '2371, Kirk and Picard cross paths',
		group: 'The Next Generation',
		tags: ['origin'],
		synopsis:
			'Picard enlists the help of a man believed dead for decades — James T. Kirk — to stop a scientist chasing an energy ribbon that erases time.',
		cast: ['Patrick Stewart', 'William Shatner', 'Malcolm McDowell'],
		tmdb: { type: 'movie', year: 1994 }
	},
	{
		id: 'star-trek-first-contact-1996',
		franchise: 'star-trek',
		title: 'Star Trek: First Contact',
		type: 'film',
		status: 'released',
		chronology: 8,
		chronologyNote: '2373',
		group: 'The Next Generation',
		tags: ['time-travel'],
		synopsis:
			'The Borg travel back to the 21st century to stop humanity’s first warp flight, and the Enterprise follows to protect history.',
		cast: ['Patrick Stewart', 'Jonathan Frakes', 'Brent Spiner'],
		tmdb: { type: 'movie', year: 1996 }
	},
	{
		id: 'star-trek-insurrection-1998',
		franchise: 'star-trek',
		title: 'Star Trek: Insurrection',
		type: 'film',
		status: 'released',
		chronology: 9,
		chronologyNote: '2375',
		group: 'The Next Generation',
		tags: [],
		synopsis:
			'The Enterprise crew defies orders to protect a peaceful world from a forced relocation tied to a fountain-of-youth radiation.',
		cast: ['Patrick Stewart', 'Jonathan Frakes', 'Brent Spiner'],
		tmdb: { type: 'movie', year: 1998 }
	},
	{
		id: 'star-trek-nemesis-2002',
		franchise: 'star-trek',
		title: 'Star Trek: Nemesis',
		type: 'film',
		status: 'released',
		chronology: 10,
		chronologyNote: '2379, the crew’s last voyage together',
		group: 'The Next Generation',
		tags: ['finale'],
		synopsis:
			'Picard confronts a young clone of himself who has seized control of the Romulan Empire.',
		cast: ['Patrick Stewart', 'Brent Spiner', 'Tom Hardy'],
		tmdb: { type: 'movie', year: 2002 }
	},
	// ---- Modern era (prime timeline) ----
	{
		id: 'star-trek-discovery-2017',
		franchise: 'star-trek',
		title: 'Star Trek: Discovery',
		type: 'series',
		status: 'released',
		chronology: 6.5,
		chronologyNote: '2256, a decade before the original series',
		group: 'Modern Era',
		tags: [],
		seasons: 5,
		synopsis:
			'A first officer convicted of mutiny gets a second chance aboard a Starfleet ship built around a radical, secret research project.',
		cast: ['Sonequa Martin-Green', 'Doug Jones', 'Anthony Rapp'],
		tmdb: { type: 'tv', year: 2017 }
	},
	{
		id: 'star-trek-picard-2020',
		franchise: 'star-trek',
		title: 'Star Trek: Picard',
		type: 'series',
		status: 'released',
		chronology: 10.5,
		chronologyNote: '2399, two decades after Nemesis',
		group: 'Modern Era',
		tags: [],
		seasons: 3,
		synopsis:
			'A retired, disillusioned Jean-Luc Picard is drawn back into service by a mystery tied to the daughter of his old friend Data.',
		cast: ['Patrick Stewart', 'Alison Pill', 'Michelle Hurd'],
		tmdb: { type: 'tv', year: 2020 }
	},
	// ---- Kelvin Timeline (alternate reality branch) ----
	{
		id: 'star-trek-2009',
		franchise: 'star-trek',
		title: 'Star Trek',
		type: 'film',
		status: 'released',
		chronology: 0.5,
		chronologyNote: '2233–2258, a new timeline',
		branch: 'Kelvin Timeline (Alternate Reality)',
		branchNote:
			'A time-traveling Romulan mining ship alters history in 2233, branching off an entirely new timeline from this point forward.',
		group: 'Kelvin Timeline',
		tags: ['origin', 'time-travel'],
		synopsis:
			'A vengeful Romulan from the future changes history, forging a young, reckless Kirk and a by-the-book Spock into an unlikely command team.',
		cast: ['Chris Pine', 'Zachary Quinto', 'Zoe Saldaña'],
		tmdb: { type: 'movie', year: 2009 }
	},
	{
		id: 'star-trek-into-darkness-2013',
		franchise: 'star-trek',
		title: 'Star Trek Into Darkness',
		type: 'film',
		status: 'released',
		chronology: 0.6,
		chronologyNote: '2259',
		branch: 'Kelvin Timeline (Alternate Reality)',
		group: 'Kelvin Timeline',
		tags: [],
		synopsis:
			'A Starfleet officer turned terrorist wages a one-man war against the Federation, and Kirk leads the hunt for him into Klingon space.',
		cast: ['Chris Pine', 'Benedict Cumberbatch', 'Zachary Quinto'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'star-trek-beyond-2016',
		franchise: 'star-trek',
		title: 'Star Trek Beyond',
		type: 'film',
		status: 'released',
		chronology: 0.7,
		chronologyNote: '2263',
		branch: 'Kelvin Timeline (Alternate Reality)',
		group: 'Kelvin Timeline',
		tags: ['finale'],
		synopsis:
			'Stranded on a hostile planet after an ambush, the crew must reunite and stop a weapon capable of mass destruction.',
		cast: ['Chris Pine', 'Zachary Quinto', 'Karl Urban'],
		tmdb: { type: 'movie', year: 2016 }
	}
];

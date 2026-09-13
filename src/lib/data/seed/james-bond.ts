import type { Entry } from '../types';

/**
 * Curated James Bond (EON Productions) entries. See the comment at the top
 * of `seed/marvel.ts` for how this data merges with `scripts/sync-tmdb.mjs`
 * output — the same rules apply here.
 *
 * Unlike Marvel or The Walking Dead, Bond films aren't a serialized story —
 * each entry (mostly) stands alone, so `chronology` here just matches
 * release order and the "story order" timeline toggle isn't especially
 * meaningful except across the Daniel Craig era, which is a genuine
 * continuous arc. `group` tracks the actor's era instead of a story phase.
 *
 * Two Eon stories were remade outside the main series — Never Say Never
 * Again retells Thunderball, and the 1967 Casino Royale retells the same
 * novel as the 2006 film — so both run as a "Non-Eon Films" branch rather
 * than sitting further down the main line.
 */
export const bondEntries: Entry[] = [
	// ---- Sean Connery ----
	{
		id: 'dr-no-1962',
		franchise: 'james-bond',
		title: 'Dr. No',
		type: 'film',
		status: 'released',
		chronology: 1,
		group: 'Sean Connery',
		tags: ['origin'],
		synopsis:
			'Agent 007 investigates the disappearance of a British operative in Jamaica, uncovering a scheme to sabotage the American space program.',
		cast: ['Sean Connery', 'Ursula Andress', 'Joseph Wiseman'],
		tmdb: { type: 'movie', year: 1962 }
	},
	{
		id: 'from-russia-with-love-1963',
		franchise: 'james-bond',
		title: 'From Russia with Love',
		type: 'film',
		status: 'released',
		chronology: 2,
		group: 'Sean Connery',
		tags: [],
		synopsis:
			'Bond is lured into a SPECTRE trap built around a stolen Soviet decoding device and a supposed defector.',
		cast: ['Sean Connery', 'Daniela Bianchi', 'Robert Shaw'],
		tmdb: { type: 'movie', year: 1963 }
	},
	{
		id: 'goldfinger-1964',
		franchise: 'james-bond',
		title: 'Goldfinger',
		type: 'film',
		status: 'released',
		chronology: 3,
		group: 'Sean Connery',
		tags: [],
		synopsis:
			'Bond investigates a gold magnate’s plan to irradiate Fort Knox’s reserves and send the price of his own gold soaring.',
		cast: ['Sean Connery', 'Honor Blackman', 'Gert Fröbe'],
		tmdb: { type: 'movie', year: 1964 }
	},
	{
		id: 'thunderball-1965',
		franchise: 'james-bond',
		title: 'Thunderball',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Sean Connery',
		tags: [],
		synopsis:
			'SPECTRE hijacks two NATO nuclear warheads and holds the world to ransom, sending Bond to the Bahamas to recover them.',
		cast: ['Sean Connery', 'Claudine Auger', 'Adolfo Celi'],
		tmdb: { type: 'movie', year: 1965 }
	},
	{
		id: 'you-only-live-twice-1967',
		franchise: 'james-bond',
		title: 'You Only Live Twice',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Sean Connery',
		tags: [],
		synopsis:
			'Bond fakes his own death and heads to Japan to find who is hijacking American and Soviet spacecraft — and finally faces Blofeld.',
		cast: ['Sean Connery', 'Akiko Wakabayashi', 'Donald Pleasence'],
		tmdb: { type: 'movie', year: 1967 }
	},
	// ---- George Lazenby ----
	{
		id: 'on-her-majestys-secret-service-1969',
		franchise: 'james-bond',
		title: 'On Her Majesty’s Secret Service',
		type: 'film',
		status: 'released',
		chronology: 6,
		group: 'George Lazenby',
		tags: [],
		synopsis:
			'Bond falls for the daughter of a crime syndicate boss while chasing Blofeld’s plan to sterilize the world’s food supply.',
		cast: ['George Lazenby', 'Diana Rigg', 'Telly Savalas'],
		tmdb: { type: 'movie', year: 1969 }
	},
	// ---- Sean Connery (return) ----
	{
		id: 'diamonds-are-forever-1971',
		franchise: 'james-bond',
		title: 'Diamonds Are Forever',
		type: 'film',
		status: 'released',
		chronology: 7,
		group: 'Sean Connery',
		tags: [],
		synopsis:
			'Bond poses as a diamond smuggler to trace a stockpiling scheme back to a resurfaced Blofeld, hiding out in Las Vegas.',
		cast: ['Sean Connery', 'Jill St. John', 'Charles Gray'],
		tmdb: { type: 'movie', year: 1971 }
	},
	// ---- Roger Moore ----
	{
		id: 'live-and-let-die-1973',
		franchise: 'james-bond',
		title: 'Live and Let Die',
		type: 'film',
		status: 'released',
		chronology: 8,
		group: 'Roger Moore',
		tags: ['origin'],
		synopsis:
			'Bond investigates the deaths of three British agents, tracing a heroin operation run by a Caribbean dictator and his tarot-reading partner.',
		cast: ['Roger Moore', 'Jane Seymour', 'Yaphet Kotto'],
		tmdb: { type: 'movie', year: 1973 }
	},
	{
		id: 'the-man-with-the-golden-gun-1974',
		franchise: 'james-bond',
		title: 'The Man with the Golden Gun',
		type: 'film',
		status: 'released',
		chronology: 9,
		group: 'Roger Moore',
		tags: [],
		synopsis:
			'Bond is targeted by a legendary assassin who charges a million dollars a hit — and wants to add 007 to his record.',
		cast: ['Roger Moore', 'Christopher Lee', 'Britt Ekland'],
		tmdb: { type: 'movie', year: 1974 }
	},
	{
		id: 'the-spy-who-loved-me-1977',
		franchise: 'james-bond',
		title: 'The Spy Who Loved Me',
		type: 'film',
		status: 'released',
		chronology: 10,
		group: 'Roger Moore',
		tags: [],
		synopsis:
			'Bond teams up — and clashes — with a Soviet agent to stop a shipping magnate from starting a nuclear war to build a new world underwater.',
		cast: ['Roger Moore', 'Barbara Bach', 'Curd Jürgens'],
		tmdb: { type: 'movie', year: 1977 }
	},
	{
		id: 'moonraker-1979',
		franchise: 'james-bond',
		title: 'Moonraker',
		type: 'film',
		status: 'released',
		chronology: 11,
		group: 'Roger Moore',
		tags: [],
		synopsis:
			'A hijacked space shuttle leads Bond to a reclusive industrialist planning to wipe out humanity from orbit and start over.',
		cast: ['Roger Moore', 'Lois Chiles', 'Michael Lonsdale'],
		tmdb: { type: 'movie', year: 1979 }
	},
	{
		id: 'for-your-eyes-only-1981',
		franchise: 'james-bond',
		title: 'For Your Eyes Only',
		type: 'film',
		status: 'released',
		chronology: 12,
		group: 'Roger Moore',
		tags: [],
		synopsis:
			'Bond races the KGB to recover a sunken British encryption device before it falls into the wrong hands.',
		cast: ['Roger Moore', 'Carole Bouquet', 'Topol'],
		tmdb: { type: 'movie', year: 1981 }
	},
	{
		id: 'octopussy-1983',
		franchise: 'james-bond',
		title: 'Octopussy',
		type: 'film',
		status: 'released',
		chronology: 13,
		group: 'Roger Moore',
		tags: [],
		synopsis:
			'A stolen Fabergé egg leads Bond to a jewel smuggler and a rogue Soviet general plotting to detonate a bomb on a U.S. air base in West Germany.',
		cast: ['Roger Moore', 'Maud Adams', 'Louis Jourdan'],
		tmdb: { type: 'movie', year: 1983 }
	},
	{
		id: 'a-view-to-a-kill-1985',
		franchise: 'james-bond',
		title: 'A View to a Kill',
		type: 'film',
		status: 'released',
		chronology: 14,
		group: 'Roger Moore',
		tags: ['finale'],
		synopsis:
			'Bond investigates an industrialist’s plan to destroy Silicon Valley and corner the world microchip market.',
		cast: ['Roger Moore', 'Christopher Walken', 'Grace Jones'],
		tmdb: { type: 'movie', year: 1985 }
	},
	// ---- Timothy Dalton ----
	{
		id: 'the-living-daylights-1987',
		franchise: 'james-bond',
		title: 'The Living Daylights',
		type: 'film',
		status: 'released',
		chronology: 15,
		group: 'Timothy Dalton',
		tags: ['origin'],
		synopsis:
			'A defection that turns out to be staged draws Bond into an arms-dealing scheme involving a Soviet general and an Afghan war.',
		cast: ['Timothy Dalton', 'Maryam d’Abo', 'Jeroen Krabbé'],
		tmdb: { type: 'movie', year: 1987 }
	},
	{
		id: 'licence-to-kill-1989',
		franchise: 'james-bond',
		title: 'Licence to Kill',
		type: 'film',
		status: 'released',
		chronology: 16,
		group: 'Timothy Dalton',
		tags: ['finale'],
		synopsis:
			'Bond goes rogue, resigning from MI6 to hunt down the drug lord who maimed his friend Felix Leiter.',
		cast: ['Timothy Dalton', 'Carey Lowell', 'Robert Davi'],
		tmdb: { type: 'movie', year: 1989 }
	},
	// ---- Pierce Brosnan ----
	{
		id: 'goldeneye-1995',
		franchise: 'james-bond',
		title: 'GoldenEye',
		type: 'film',
		status: 'released',
		chronology: 17,
		group: 'Pierce Brosnan',
		tags: ['origin'],
		synopsis:
			'Bond investigates the theft of a Soviet space weapon and a former ally turned enemy behind it.',
		cast: ['Pierce Brosnan', 'Sean Bean', 'Izabella Scorupco'],
		tmdb: { type: 'movie', year: 1995 }
	},
	{
		id: 'tomorrow-never-dies-1997',
		franchise: 'james-bond',
		title: 'Tomorrow Never Dies',
		type: 'film',
		status: 'released',
		chronology: 18,
		group: 'Pierce Brosnan',
		tags: [],
		synopsis:
			'A media mogul manufactures a war between Britain and China to boost his ratings, and Bond has to stop him first.',
		cast: ['Pierce Brosnan', 'Michelle Yeoh', 'Jonathan Pryce'],
		tmdb: { type: 'movie', year: 1997 }
	},
	{
		id: 'the-world-is-not-enough-1999',
		franchise: 'james-bond',
		title: 'The World Is Not Enough',
		type: 'film',
		status: 'released',
		chronology: 19,
		group: 'Pierce Brosnan',
		tags: [],
		synopsis:
			'Bond protects an oil heiress from a terrorist who feels no pain, while a conspiracy targets an international pipeline.',
		cast: ['Pierce Brosnan', 'Sophie Marceau', 'Robert Carlyle'],
		tmdb: { type: 'movie', year: 1999 }
	},
	{
		id: 'die-another-day-2002',
		franchise: 'james-bond',
		title: 'Die Another Day',
		type: 'film',
		status: 'released',
		chronology: 20,
		group: 'Pierce Brosnan',
		tags: ['finale'],
		synopsis:
			'Captured and tortured in North Korea, Bond is disavowed by MI6 and goes it alone to expose a satellite weapon and its financier.',
		cast: ['Pierce Brosnan', 'Halle Berry', 'Toby Stephens'],
		tmdb: { type: 'movie', year: 2002 }
	},
	// ---- Daniel Craig ----
	{
		id: 'casino-royale-2006',
		franchise: 'james-bond',
		title: 'Casino Royale',
		type: 'film',
		status: 'released',
		chronology: 21,
		chronologyNote: 'Bond’s first mission as 00-status',
		group: 'Daniel Craig',
		tags: ['origin'],
		synopsis:
			'Newly promoted to 00-status, Bond takes on a banker to the world’s terrorists in a high-stakes poker game in Montenegro.',
		cast: ['Daniel Craig', 'Eva Green', 'Mads Mikkelsen'],
		tmdb: { type: 'movie', year: 2006 }
	},
	{
		id: 'quantum-of-solace-2008',
		franchise: 'james-bond',
		title: 'Quantum of Solace',
		type: 'film',
		status: 'released',
		chronology: 22,
		chronologyNote: 'days after Casino Royale',
		group: 'Daniel Craig',
		tags: [],
		synopsis:
			'Still reeling from Vesper’s betrayal, Bond uncovers a shadowy organization manipulating a South American coup for its water rights.',
		cast: ['Daniel Craig', 'Olga Kurylenko', 'Mathieu Amalric'],
		tmdb: { type: 'movie', year: 2008 }
	},
	{
		id: 'skyfall-2012',
		franchise: 'james-bond',
		title: 'Skyfall',
		type: 'film',
		status: 'released',
		chronology: 23,
		group: 'Daniel Craig',
		tags: [],
		synopsis:
			'When MI6 itself comes under attack, Bond must track a former agent with a personal vendetta against M — and confront his own past.',
		cast: ['Daniel Craig', 'Javier Bardem', 'Judi Dench'],
		tmdb: { type: 'movie', year: 2012 }
	},
	{
		id: 'spectre-2015',
		franchise: 'james-bond',
		title: 'Spectre',
		type: 'film',
		status: 'released',
		chronology: 24,
		group: 'Daniel Craig',
		tags: [],
		synopsis:
			'A cryptic message from the past sends Bond to unravel the truth behind SPECTRE — and the man pulling its strings.',
		cast: ['Daniel Craig', 'Léa Seydoux', 'Christoph Waltz'],
		tmdb: { type: 'movie', year: 2015 }
	},
	{
		id: 'no-time-to-die-2021',
		franchise: 'james-bond',
		title: 'No Time to Die',
		type: 'film',
		status: 'released',
		chronology: 25,
		chronologyNote: 'five years after Spectre',
		group: 'Daniel Craig',
		tags: ['finale'],
		synopsis:
			'Retired and living quietly, Bond is pulled back in when a old friend asks for help rescuing a kidnapped scientist — leading to his final mission.',
		cast: ['Daniel Craig', 'Léa Seydoux', 'Rami Malek'],
		tmdb: { type: 'movie', year: 2021 }
	},
	// ---- Games ----
	{
		id: 'goldeneye-007-1997',
		franchise: 'james-bond',
		title: 'GoldenEye 007',
		type: 'game',
		status: 'released',
		chronology: 26,
		group: 'Games & Other Media',
		tags: [],
		platforms: ['Nintendo 64'],
		synopsis:
			'The landmark N64 first-person shooter adaptation of GoldenEye, credited with popularizing console shooters and split-screen deathmatch.',
		cast: []
	},

	// ---- Non-Eon remakes — retellings of an Eon story made outside the
	// main series, not part of its continuity. ----
	{
		id: 'never-say-never-again-1983',
		franchise: 'james-bond',
		title: 'Never Say Never Again',
		type: 'film',
		status: 'released',
		chronology: 4.5,
		branch: 'Non-Eon Films',
		branchNote:
			'A retelling of Thunderball made outside the main Eon series, with Sean Connery returning outside his official run.',
		group: 'Non-Eon Films',
		tags: ['remake'],
		synopsis:
			'A retelling of Thunderball: Bond is sent to recover two stolen nuclear warheads held for ransom by SPECTRE.',
		cast: ['Sean Connery', 'Klaus Maria Brandauer', 'Kim Basinger'],
		tmdb: { type: 'movie', year: 1983 }
	},
	{
		id: 'casino-royale-1967',
		franchise: 'james-bond',
		title: 'Casino Royale',
		type: 'film',
		status: 'released',
		chronology: 21.5,
		branch: 'Non-Eon Films',
		group: 'Non-Eon Films',
		tags: ['remake'],
		synopsis:
			'A spy spoof adaptation of the same novel as the 2006 film: a retired Bond is dragged back in, and chaos — including several other "James Bonds" — follows.',
		cast: ['David Niven', 'Peter Sellers', 'Ursula Andress', 'Woody Allen'],
		tmdb: { type: 'movie', year: 1967 }
	}
];

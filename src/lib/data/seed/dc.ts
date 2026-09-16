import type { Entry } from '../types';

/**
 * Curated DC entries. See the comment at the top of `seed/marvel.ts` for how
 * this data merges with `scripts/sync-tmdb.mjs` output — the same rules apply.
 *
 * DC is the one franchise here with no main continuity at all. Its films are
 * seven unrelated screen universes, each recasting the same characters and
 * telling its own run of stories: Donner's Superman, Burton and Schumacher's
 * Batman, Nolan's trilogy, the Snyder-era DCEU, Phillips' Joker, Reeves'
 * Gotham, and the DCU that Gunn rebooted from scratch in 2024. So every entry
 * names its universe via `branch` and carries `branchKind: 'universe'`, and
 * the board draws them as parallel lines with nothing connecting them —
 * because nothing does.
 *
 * `chronology` runs each universe as one contiguous block, in the order the
 * universes themselves began, so story order reads universe by universe.
 * Release order then re-interleaves them by actual release date, which is
 * where you can see Nolan's Gotham and Snyder's Metropolis running at the
 * same time.
 *
 * The one true remake here is Zack Snyder's Justice League: the same story as
 * the 2017 theatrical cut, so it shares that film's chronology and sits level
 * with it rather than after it.
 */

const DONNER = 'Superman (Donner)';
const BURTON = 'Batman (Burton & Schumacher)';
const NOLAN = 'The Dark Knight (Nolan)';
const DCEU = 'DCEU (Snyder era)';
const JOKER = 'Joker (Phillips)';
const REEVES = 'The Batman (Reeves)';
const DCU = 'DCU (Gunn)';
const SNYDER_CUT = 'Justice League (Snyder Cut)';

export const dcEntries: Entry[] = [
	// ---- Source comics & games (off the screen timeline) ----
	{
		id: 'action-comics-1-1938',
		franchise: 'dc',
		title: 'Action Comics #1',
		type: 'comic',
		status: 'released',
		chronology: 0.1,
		group: 'Games & Comics',
		tags: ['origin'],
		synopsis:
			'The first appearance of Superman, and the issue generally credited with inventing the superhero comic outright.',
		cast: []
	},
	{
		id: 'detective-comics-27-1939',
		franchise: 'dc',
		title: 'Detective Comics #27',
		type: 'comic',
		status: 'released',
		chronology: 0.2,
		group: 'Games & Comics',
		tags: ['origin'],
		synopsis:
			'The first appearance of the Bat-Man, in a six-page case about a chemical-syndicate murder.',
		cast: []
	},
	{
		id: 'the-dark-knight-returns-1986',
		franchise: 'dc',
		title: 'The Dark Knight Returns',
		type: 'comic',
		status: 'released',
		chronology: 0.3,
		group: 'Games & Comics',
		tags: [],
		synopsis:
			'An aging Bruce Wayne comes out of retirement into a decaying Gotham — the book that reset the tone of screen Batman for decades afterwards.',
		cast: []
	},
	{
		id: 'batman-arkham-asylum-2009',
		franchise: 'dc',
		title: 'Batman: Arkham Asylum',
		type: 'game',
		status: 'released',
		chronology: 0.4,
		group: 'Games & Comics',
		tags: [],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'The Joker seizes control of Arkham Asylum with Batman inside it, in the game that started its own well-regarded continuity.',
		cast: []
	},
	{
		id: 'batman-arkham-city-2011',
		franchise: 'dc',
		title: 'Batman: Arkham City',
		type: 'game',
		status: 'released',
		chronology: 0.5,
		group: 'Games & Comics',
		tags: [],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'A walled-off district of Gotham becomes an open-air prison, and Batman goes in after the men running it.',
		cast: []
	},
	{
		id: 'injustice-gods-among-us-2013',
		franchise: 'dc',
		title: 'Injustice: Gods Among Us',
		type: 'game',
		status: 'released',
		chronology: 0.6,
		group: 'Games & Comics',
		tags: ['alternate-reality'],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'A fighting game set in an alternate world where Superman, broken by loss, installs himself as the planet’s ruler.',
		cast: []
	},
	{
		id: 'batman-arkham-knight-2015',
		franchise: 'dc',
		title: 'Batman: Arkham Knight',
		type: 'game',
		status: 'released',
		chronology: 0.7,
		group: 'Games & Comics',
		tags: ['finale'],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'Scarecrow drives Gotham out of the city and a masked Arkham Knight hunts Batman through the empty streets.',
		cast: []
	},

	// ---- Universe 1: Donner's Superman ----
	{
		id: 'superman-1978',
		franchise: 'dc',
		title: 'Superman',
		type: 'film',
		status: 'released',
		chronology: 1,
		group: 'Superman (Donner)',
		branch: DONNER,
		branchKind: 'universe',
		branchNote:
			'The first Superman on film, and its own self-contained continuity — no connection to anything that came after.',
		tags: ['origin'],
		synopsis:
			'The last son of a dying planet is raised in Kansas and grows into the world’s first superhero.',
		cast: ['Christopher Reeve', 'Margot Kidder', 'Gene Hackman'],
		tmdb: { type: 'movie', year: 1978 }
	},
	{
		id: 'superman-ii-1980',
		franchise: 'dc',
		title: 'Superman II',
		type: 'film',
		status: 'released',
		chronology: 2,
		group: 'Superman (Donner)',
		branch: DONNER,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Three Kryptonian criminals freed from the Phantom Zone arrive on Earth just as Superman gives up his powers.',
		cast: ['Christopher Reeve', 'Margot Kidder', 'Terence Stamp'],
		tmdb: { type: 'movie', year: 1980 }
	},

	// ---- Universe 2: Burton & Schumacher's Batman ----
	{
		id: 'batman-1989',
		franchise: 'dc',
		title: 'Batman',
		type: 'film',
		status: 'released',
		chronology: 3,
		group: 'Batman (Burton & Schumacher)',
		branch: BURTON,
		branchKind: 'universe',
		branchNote:
			'Tim Burton’s Gotham, handed to Joel Schumacher for the last two films — a continuity of its own, unconnected to every other Batman here.',
		tags: ['origin'],
		synopsis:
			'A masked vigilante stalks Gotham as a disfigured gangster remakes himself into the Joker.',
		cast: ['Michael Keaton', 'Jack Nicholson', 'Kim Basinger'],
		tmdb: { type: 'movie', year: 1989 }
	},
	{
		id: 'batman-returns-1992',
		franchise: 'dc',
		title: 'Batman Returns',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Batman (Burton & Schumacher)',
		branch: BURTON,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'A corrupt industrialist, a sewer-dwelling Penguin and a resurrected Catwoman converge on Gotham at Christmas.',
		cast: ['Michael Keaton', 'Danny DeVito', 'Michelle Pfeiffer'],
		tmdb: { type: 'movie', year: 1992 }
	},
	{
		id: 'batman-forever-1995',
		franchise: 'dc',
		title: 'Batman Forever',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Batman (Burton & Schumacher)',
		branch: BURTON,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Batman takes in an orphaned acrobat while Two-Face and the Riddler tear through Gotham.',
		cast: ['Val Kilmer', 'Tommy Lee Jones', 'Jim Carrey'],
		tmdb: { type: 'movie', year: 1995 }
	},
	{
		id: 'batman-and-robin-1997',
		franchise: 'dc',
		title: 'Batman & Robin',
		type: 'film',
		status: 'released',
		chronology: 6,
		group: 'Batman (Burton & Schumacher)',
		branch: BURTON,
		branchKind: 'universe',
		tags: ['finale'],
		synopsis:
			'Mr. Freeze and Poison Ivy threaten Gotham as Batman, Robin and Batgirl fall out among themselves.',
		cast: ['George Clooney', 'Arnold Schwarzenegger', 'Uma Thurman'],
		tmdb: { type: 'movie', year: 1997 }
	},

	// ---- Universe 3: Nolan's Dark Knight trilogy ----
	{
		id: 'batman-begins-2005',
		franchise: 'dc',
		title: 'Batman Begins',
		type: 'film',
		status: 'released',
		chronology: 7,
		group: 'The Dark Knight (Nolan)',
		branch: NOLAN,
		branchKind: 'universe',
		branchNote:
			'Christopher Nolan’s grounded trilogy — a closed three-film story with no shared universe attached to it.',
		tags: ['origin'],
		synopsis:
			'After years abroad, Bruce Wayne returns to a Gotham rotting from the inside and builds himself into its answer.',
		cast: ['Christian Bale', 'Michael Caine', 'Liam Neeson'],
		tmdb: { type: 'movie', year: 2005 }
	},
	{
		id: 'the-dark-knight-2008',
		franchise: 'dc',
		title: 'The Dark Knight',
		type: 'film',
		status: 'released',
		chronology: 8,
		group: 'The Dark Knight (Nolan)',
		branch: NOLAN,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'An anarchist in facepaint sets out to prove that Gotham’s decency is a pose, and very nearly does.',
		cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
		tmdb: { type: 'movie', year: 2008 }
	},
	{
		id: 'the-dark-knight-rises-2012',
		franchise: 'dc',
		title: 'The Dark Knight Rises',
		type: 'film',
		status: 'released',
		chronology: 9,
		group: 'The Dark Knight (Nolan)',
		branch: NOLAN,
		branchKind: 'universe',
		tags: ['finale'],
		synopsis:
			'Eight years after taking the blame for Harvey Dent’s crimes, a broken Bruce Wayne faces a mercenary who breaks him further.',
		cast: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
		tmdb: { type: 'movie', year: 2012 }
	},

	// ---- Universe 4: the DCEU ----
	{
		id: 'wonder-woman-2017',
		franchise: 'dc',
		title: 'Wonder Woman',
		type: 'film',
		status: 'released',
		chronology: 10,
		chronologyNote: '1918 — the earliest point in the DCEU',
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		branchNote:
			'The shared universe Zack Snyder set up with Man of Steel and handed on to other directors, wound down in 2023.',
		tags: ['origin'],
		synopsis:
			'An Amazon raised in isolation leaves her island for the Western Front, believing a god is behind the war.',
		cast: ['Gal Gadot', 'Chris Pine', 'Robin Wright'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'wonder-woman-1984-2020',
		franchise: 'dc',
		title: 'Wonder Woman 1984',
		type: 'film',
		status: 'released',
		chronology: 11,
		chronologyNote: '1984',
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Decades on, an artefact that grants wishes puts Diana against a failing businessman and a colleague turned rival.',
		cast: ['Gal Gadot', 'Chris Pine', 'Kristen Wiig'],
		tmdb: { type: 'movie', year: 2020 }
	},
	{
		id: 'man-of-steel-2013',
		franchise: 'dc',
		title: 'Man of Steel',
		type: 'film',
		status: 'released',
		chronology: 12,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['origin'],
		synopsis:
			'A drifter who has spent his life hiding what he can do is forced into the open when survivors of his dead world arrive.',
		cast: ['Henry Cavill', 'Amy Adams', 'Michael Shannon'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'batman-v-superman-dawn-of-justice-2016',
		franchise: 'dc',
		title: 'Batman v Superman: Dawn of Justice',
		type: 'film',
		status: 'released',
		chronology: 13,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'An older, angrier Batman decides the alien who levelled half of Metropolis has to be stopped.',
		cast: ['Ben Affleck', 'Henry Cavill', 'Gal Gadot'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'suicide-squad-2016',
		franchise: 'dc',
		title: 'Suicide Squad',
		type: 'film',
		status: 'released',
		chronology: 14,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'A government handler assembles a squad of imprisoned criminals for a mission nobody expects them to survive.',
		cast: ['Will Smith', 'Margot Robbie', 'Viola Davis'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'justice-league-2017',
		franchise: 'dc',
		title: 'Justice League',
		type: 'film',
		status: 'released',
		chronology: 15,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'With Superman dead, Batman and Diana recruit three more metahumans against an invader hunting three ancient boxes.',
		cast: ['Ben Affleck', 'Gal Gadot', 'Ezra Miller'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'aquaman-2018',
		franchise: 'dc',
		title: 'Aquaman',
		type: 'film',
		status: 'released',
		chronology: 16,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['origin'],
		synopsis:
			'The half-human heir to Atlantis is pushed to claim a throne he never wanted before his brother starts a war.',
		cast: ['Jason Momoa', 'Amber Heard', 'Patrick Wilson'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'shazam-2019',
		franchise: 'dc',
		title: 'Shazam!',
		type: 'film',
		status: 'released',
		chronology: 17,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['origin'],
		synopsis:
			'A teenage foster kid is handed the power to turn into an adult superhero by shouting one word.',
		cast: ['Zachary Levi', 'Asher Angel', 'Mark Strong'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'birds-of-prey-2020',
		franchise: 'dc',
		title: 'Birds of Prey',
		type: 'film',
		status: 'released',
		chronology: 18,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Newly single and no longer under the Joker’s protection, Harley Quinn falls in with four other women against a Gotham crime boss.',
		cast: ['Margot Robbie', 'Mary Elizabeth Winstead', 'Jurnee Smollett'],
		tmdb: { type: 'movie', query: 'Birds of Prey', year: 2020 }
	},
	{
		id: 'the-suicide-squad-2021',
		franchise: 'dc',
		title: 'The Suicide Squad',
		type: 'film',
		status: 'released',
		chronology: 19,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'A second, larger squad is dropped onto a South American island to destroy a Nazi-era laboratory.',
		cast: ['Margot Robbie', 'Idris Elba', 'John Cena'],
		tmdb: { type: 'movie', year: 2021 }
	},
	{
		id: 'peacemaker-s01-2022',
		franchise: 'dc',
		title: 'Peacemaker — Season 1',
		type: 'series',
		status: 'released',
		chronology: 20,
		chronologyNote: 'weeks after The Suicide Squad',
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Recovering from the island, Peacemaker is pressed into a black-ops team hunting parasitic aliens.',
		cast: ['John Cena', 'Danielle Brooks', 'Jennifer Holland'],
		tmdb: { type: 'tv', query: 'Peacemaker', year: 2022, season: 1 }
	},
	{
		id: 'black-adam-2022',
		franchise: 'dc',
		title: 'Black Adam',
		type: 'film',
		status: 'released',
		chronology: 21,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['origin'],
		synopsis:
			'An ancient champion freed after five thousand years answers his captors with none of a hero’s restraint.',
		cast: ['Dwayne Johnson', 'Aldis Hodge', 'Pierce Brosnan'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'shazam-fury-of-the-gods-2023',
		franchise: 'dc',
		title: 'Shazam! Fury of the Gods',
		type: 'film',
		status: 'released',
		chronology: 22,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'The daughters of Atlas come for the power that was taken from their father, and for the city holding it.',
		cast: ['Zachary Levi', 'Helen Mirren', 'Lucy Liu'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'the-flash-2023',
		franchise: 'dc',
		title: 'The Flash',
		type: 'film',
		status: 'released',
		chronology: 23,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['alternate-reality'],
		synopsis:
			'Barry Allen runs back far enough to save his mother and shatters the timeline doing it.',
		cast: ['Ezra Miller', 'Michael Keaton', 'Sasha Calle'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'blue-beetle-2023',
		franchise: 'dc',
		title: 'Blue Beetle',
		type: 'film',
		status: 'released',
		chronology: 24,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['origin'],
		synopsis:
			'A recent graduate is chosen by an alien scarab that fuses to his spine and hands him a suit of armour.',
		cast: ['Xolo Maridueña', 'Bruna Marquezine', 'Susan Sarandon'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'aquaman-and-the-lost-kingdom-2023',
		franchise: 'dc',
		title: 'Aquaman and the Lost Kingdom',
		type: 'film',
		status: 'released',
		chronology: 25,
		group: 'DCEU',
		branch: DCEU,
		branchKind: 'universe',
		tags: ['finale'],
		synopsis:
			'Arthur turns to his imprisoned brother for help against a vengeful pirate wielding a cursed trident — the DCEU’s last film.',
		cast: ['Jason Momoa', 'Patrick Wilson', 'Yahya Abdul-Mateen II'],
		tmdb: { type: 'movie', year: 2023 }
	},

	// ---- The one genuine remake: the same film, recut ----
	{
		id: 'zack-snyders-justice-league-2021',
		franchise: 'dc',
		title: 'Zack Snyder’s Justice League',
		type: 'film',
		status: 'released',
		chronology: 15,
		chronologyNote: 'the same story as the 2017 cut, told again at four hours',
		group: 'DCEU',
		branch: SNYDER_CUT,
		branchKind: 'remake',
		branchNote:
			'Not a sequel and not a separate universe — the original director’s own cut of Justice League, so it runs level with it.',
		tags: [],
		synopsis:
			'Snyder’s restored version of the same story, with the fuller treatment of Cyborg, Steppenwolf and Darkseid that the theatrical cut dropped.',
		cast: ['Ben Affleck', 'Gal Gadot', 'Ray Fisher'],
		tmdb: { type: 'movie', year: 2021 }
	},

	// ---- Universe 5: Phillips' Joker ----
	{
		id: 'joker-2019',
		franchise: 'dc',
		title: 'Joker',
		type: 'film',
		status: 'released',
		chronology: 26,
		group: 'Joker (Phillips)',
		branch: JOKER,
		branchKind: 'universe',
		branchNote:
			'A deliberately standalone Gotham with no superheroes in it and no connection to any other DC film.',
		tags: ['origin'],
		synopsis:
			'A failing clown-for-hire in a rotting city is ground down until violence is the only thing that answers back.',
		cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'joker-folie-a-deux-2024',
		franchise: 'dc',
		title: 'Joker: Folie à Deux',
		type: 'film',
		status: 'released',
		chronology: 27,
		group: 'Joker (Phillips)',
		branch: JOKER,
		branchKind: 'universe',
		tags: ['finale'],
		synopsis:
			'Awaiting trial in Arkham, Arthur Fleck meets a fellow inmate and the two feed each other’s delusions.',
		cast: ['Joaquin Phoenix', 'Lady Gaga', 'Brendan Gleeson'],
		tmdb: { type: 'movie', year: 2024 }
	},

	// ---- Universe 6: Reeves' Gotham ----
	{
		id: 'the-batman-2022',
		franchise: 'dc',
		title: 'The Batman',
		type: 'film',
		status: 'released',
		chronology: 28,
		group: 'The Batman (Reeves)',
		branch: REEVES,
		branchKind: 'universe',
		branchNote:
			'Matt Reeves’ detective-noir Gotham, running on its own with a spinoff series and a sequel — unconnected to the DCEU or the DCU.',
		tags: ['origin'],
		synopsis:
			'Two years into the work, Batman follows a serial killer’s riddles into the rot underneath Gotham’s founding families.',
		cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'the-penguin-2024',
		franchise: 'dc',
		title: 'The Penguin',
		type: 'series',
		status: 'released',
		chronology: 29,
		chronologyNote: 'days after The Batman',
		group: 'The Batman (Reeves)',
		branch: REEVES,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'With Gotham flooded and Falcone dead, Oz Cobb moves to take the city’s criminal underworld for himself.',
		cast: ['Colin Farrell', 'Cristin Milioti', 'Rhenzy Feliz'],
		tmdb: { type: 'tv', year: 2024 }
	},
	{
		id: 'the-batman-part-ii-2028',
		franchise: 'dc',
		title: 'The Batman: Part II',
		type: 'film',
		status: 'upcoming',
		chronology: 30,
		group: 'The Batman (Reeves)',
		branch: REEVES,
		branchKind: 'universe',
		tags: [],
		synopsis: 'The sequel to the 2022 film.',
		cast: ['Robert Pattinson'],
		tmdb: { type: 'movie', query: 'The Batman: Part II', year: 2028 }
	},

	// ---- Universe 7: the DCU ----
	{
		id: 'creature-commandos-2024',
		franchise: 'dc',
		title: 'Creature Commandos',
		type: 'series',
		status: 'released',
		chronology: 31,
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		branchNote:
			'James Gunn’s reboot, started from scratch in 2024 — a new continuity that keeps none of the DCEU’s story behind it.',
		tags: ['origin'],
		synopsis:
			'An animated black-ops unit of monsters is sent on missions no human squad would come back from — the first thing made for the new DC Universe.',
		cast: ['Frank Grillo', 'Indira Varma', 'David Harbour'],
		tmdb: { type: 'tv', year: 2024 }
	},
	{
		id: 'superman-2025',
		franchise: 'dc',
		title: 'Superman',
		type: 'film',
		status: 'released',
		chronology: 32,
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Superman is already established and already contested, balancing his Kryptonian inheritance against the life he was raised into.',
		cast: ['David Corenswet', 'Rachel Brosnahan', 'Nicholas Hoult'],
		tmdb: { type: 'movie', query: 'Superman', year: 2025 }
	},
	{
		id: 'peacemaker-s02-2025',
		franchise: 'dc',
		title: 'Peacemaker — Season 2',
		type: 'series',
		status: 'released',
		chronology: 33,
		chronologyNote: 'the season that carries Peacemaker over into the DCU',
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Peacemaker finds a door into a world where his life went differently, in the season that moves the character into the rebooted continuity.',
		cast: ['John Cena', 'Danielle Brooks', 'Frank Grillo'],
		tmdb: { type: 'tv', query: 'Peacemaker', year: 2022, season: 2 }
	},
	{
		id: 'supergirl-2026',
		franchise: 'dc',
		title: 'Supergirl',
		type: 'film',
		status: 'released',
		chronology: 34,
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Kara Zor-El, who remembers Krypton dying in a way her cousin never could, takes an interstellar trip for vengeance and justice.',
		cast: ['Milly Alcock'],
		tmdb: { type: 'movie', query: 'Supergirl', year: 2026 }
	},
	{
		id: 'lanterns-2026',
		franchise: 'dc',
		title: 'Lanterns',
		type: 'series',
		status: 'released',
		chronology: 35,
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'Two Green Lanterns — a new recruit and an old hand — work a murder in the American heartland that turns out to be much larger.',
		cast: ['Aaron Pierre', 'Kyle Chandler'],
		tmdb: { type: 'tv', query: 'Lanterns', year: 2026 }
	},
	{
		id: 'clayface-2026',
		franchise: 'dc',
		title: 'Clayface',
		type: 'film',
		status: 'upcoming',
		chronology: 36,
		group: 'DCU (Gunn)',
		branch: DCU,
		branchKind: 'universe',
		tags: [],
		synopsis:
			'An actor disfigured by a crime boss takes an experimental treatment that restores his face and takes his mind with it.',
		cast: [],
		tmdb: { type: 'movie', query: 'Clayface', year: 2026 }
	}
];

import type { Franchise } from './types';

export const franchises: Franchise[] = [
	{
		id: 'marvel',
		name: 'Marvel Cinematic Universe',
		shortName: 'Marvel',
		tagline: 'One universe, one saga, an ever-expanding cast of heroes.',
		description:
			'From a billionaire in a cave with a box of scraps to a multiverse of variants, the MCU is the largest shared-continuity franchise ever attempted on screen — dozens of films and series woven into a single ongoing story.',
		publisher: 'Marvel Studios',
		startYear: 2008,
		theme: {
			accent: '#e0242f',
			accentSoft: '#ff6a52',
			surface: '#150808',
			surfaceRaised: '#1f0e0e',
			gradient: 'linear-gradient(160deg, #2b0a0a 0%, #150808 55%, #0b0505 100%)'
		},
		heroEntryId: 'the-avengers-2012'
	},
	{
		id: 'the-walking-dead',
		name: 'The Walking Dead',
		shortName: 'TWD',
		tagline: 'In a world ruled by the dead, we are forced to finally start living.',
		description:
			'What began as Rick Grimes waking from a coma into the apocalypse grew into a sprawling universe of survivors, splinter communities, and spin-offs spanning two decades of story.',
		publisher: 'AMC Studios',
		startYear: 2010,
		theme: {
			accent: '#8f2b23',
			accentSoft: '#c2a866',
			surface: '#0e0f0a',
			surfaceRaised: '#171810',
			gradient: 'linear-gradient(160deg, #201d10 0%, #0e0f0a 55%, #08090a 100%)'
		},
		heroEntryId: 'twd-s01'
	},
	{
		id: 'harry-potter',
		name: 'Wizarding World',
		shortName: 'Harry Potter',
		tagline: 'The story that made a whole generation believe in magic.',
		description:
			'An orphaned boy discovers he’s a wizard and enters a hidden world of spells, houses, and an old evil returning to power — eight films spanning his years at Hogwarts, plus the prequel adventures of Newt Scamander decades earlier.',
		publisher: 'Warner Bros. Pictures',
		startYear: 2001,
		theme: {
			accent: '#b8860b',
			accentSoft: '#e8d18a',
			surface: '#0f0a05',
			surfaceRaised: '#1a130a',
			gradient: 'linear-gradient(160deg, #241a0a 0%, #0f0a05 55%, #0a0705 100%)'
		},
		heroEntryId: 'harry-potter-and-the-sorcerers-stone-2001'
	},
	{
		id: 'star-wars',
		name: 'Star Wars',
		shortName: 'Star Wars',
		tagline: 'A long time ago, in a galaxy far, far away....',
		description:
			'Three trilogies chart the rise and fall of the Skywalker line, from a boy on a desert planet to a war between the Rebellion and the Empire, alongside a growing constellation of side stories about the rebels, smugglers, and Jedi in between.',
		publisher: 'Lucasfilm',
		startYear: 1977,
		theme: {
			accent: '#4fc3f7',
			accentSoft: '#ffe81f',
			surface: '#05070d',
			surfaceRaised: '#0d1220',
			gradient: 'linear-gradient(160deg, #0a1428 0%, #05070d 55%, #030408 100%)'
		},
		heroEntryId: 'star-wars-episode-iv-a-new-hope-1977'
	},
	{
		id: 'star-trek',
		name: 'Star Trek',
		shortName: 'Star Trek',
		tagline: 'To boldly go where no one has gone before.',
		description:
			'Six decades of Starfleet crews exploring the galaxy — the original crew’s big-screen voyages, the Next Generation’s, and a modern era split between the prime timeline and an alternate reality forged by a single act of time travel.',
		publisher: 'Paramount Pictures',
		startYear: 1979,
		theme: {
			accent: '#d4a017',
			accentSoft: '#5b9bd5',
			surface: '#050a14',
			surfaceRaised: '#0d1420',
			gradient: 'linear-gradient(160deg, #0a1626 0%, #050a14 55%, #04060c 100%)'
		},
		heroEntryId: 'star-trek-ii-the-wrath-of-khan-1982'
	},
	{
		id: 'james-bond',
		name: 'James Bond',
		shortName: 'Bond',
		tagline: 'The name’s Bond. James Bond.',
		description:
			'Six decades and six actors as Agent 007 — Britain’s most famous spy, on a run of mostly-standalone missions against megalomaniacs, spies, and SPECTRE, culminating in one continuous story across the Daniel Craig era.',
		publisher: 'EON Productions',
		startYear: 1962,
		theme: {
			accent: '#a8172c',
			accentSoft: '#c9a227',
			surface: '#0a0a0a',
			surfaceRaised: '#161414',
			gradient: 'linear-gradient(160deg, #1a0a0d 0%, #0a0a0a 55%, #050505 100%)'
		},
		heroEntryId: 'goldfinger-1964'
	}
];

export function getFranchise(id: string): Franchise | undefined {
	return franchises.find((f) => f.id === id);
}

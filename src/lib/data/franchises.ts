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
	}
];

export function getFranchise(id: string): Franchise | undefined {
	return franchises.find((f) => f.id === id);
}

import type { Entry } from '../types';

/**
 * Curated Asterix entries. See the comment at the top of `seed/marvel.ts`
 * for how this data merges with `scripts/sync-tmdb.mjs` output — the same
 * rules apply here.
 *
 * Each film is a standalone adventure rather than one continuous story, so
 * `chronology` just matches release order; `group` splits the animated and
 * live-action lines, which are separate adaptations rather than a shared
 * continuity.
 */
export const asterixEntries: Entry[] = [
	{
		id: 'asterix-the-gaul-comic-1961',
		franchise: 'asterix',
		title: 'Asterix the Gaul — Vol. 1',
		type: 'comic',
		status: 'released',
		chronology: 0,
		group: 'Comics',
		tags: ['origin'],
		synopsis:
			'The first Asterix album: a small Gaulish village, protected by a magic potion, holds out against the entire Roman Empire.',
		cast: []
	},
	{
		id: 'asterix-the-gaul-1967',
		franchise: 'asterix',
		title: 'Asterix the Gaul',
		type: 'film',
		status: 'released',
		chronology: 1,
		group: 'Animated Films',
		tags: ['origin', 'animated'],
		synopsis:
			'The first animated adaptation, introducing the indomitable Gaulish village and the magic potion that keeps Rome at bay.',
		cast: [],
		tmdb: { type: 'movie', year: 1967 }
	},
	{
		id: 'asterix-and-cleopatra-1968',
		franchise: 'asterix',
		title: 'Asterix and Cleopatra',
		type: 'film',
		status: 'released',
		chronology: 2,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'Asterix and Obelix travel to Egypt to help an architect build a palace for Cleopatra in just three months.',
		cast: [],
		tmdb: { type: 'movie', year: 1968 }
	},
	{
		id: 'the-twelve-tasks-of-asterix-1976',
		franchise: 'asterix',
		title: 'The Twelve Tasks of Asterix',
		type: 'film',
		status: 'released',
		chronology: 3,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'To prove Gauls aren’t merely favored by the gods, Asterix and Obelix must complete twelve seemingly impossible trials set by Caesar.',
		cast: [],
		tmdb: { type: 'movie', year: 1976 }
	},
	{
		id: 'asterix-conquers-america-1994',
		franchise: 'asterix',
		title: 'Asterix Conquers America',
		type: 'film',
		status: 'released',
		chronology: 4,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'Swept overboard and washed up in the Americas, Asterix and Obelix must find their way home in time to save their village.',
		cast: [],
		tmdb: { type: 'movie', year: 1994 }
	},
	{
		id: 'asterix-and-obelix-vs-caesar-1999',
		franchise: 'asterix',
		title: 'Asterix & Obelix vs. Caesar',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Live-Action Films',
		tags: ['origin'],
		synopsis:
			'The first live-action outing: Caesar makes a wager that a Roman architect can subdue the last resisting Gaulish village.',
		cast: ['Christian Clavier', 'Gérard Depardieu', 'Roberto Benigni'],
		tmdb: { type: 'movie', year: 1999 }
	},
	{
		id: 'asterix-and-obelix-mission-cleopatra-2002',
		franchise: 'asterix',
		title: 'Asterix & Obelix: Mission Cleopatra',
		type: 'film',
		status: 'released',
		chronology: 6,
		group: 'Live-Action Films',
		tags: [],
		synopsis:
			'Asterix and Obelix help an architect build Cleopatra a lavish palace in Alexandria before an impossible deadline.',
		cast: ['Christian Clavier', 'Gérard Depardieu', 'Jamel Debbouze'],
		tmdb: { type: 'movie', year: 2002 }
	},
	{
		id: 'asterix-and-the-vikings-2006',
		franchise: 'asterix',
		title: 'Asterix and the Vikings',
		type: 'film',
		status: 'released',
		chronology: 7,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'Asterix is tasked with teaching a cowardly Viking prince to feel fear, unaware the Vikings are hunting for exactly that secret.',
		cast: [],
		tmdb: { type: 'movie', year: 2006 }
	},
	{
		id: 'asterix-at-the-olympic-games-2008',
		franchise: 'asterix',
		title: 'Asterix at the Olympic Games',
		type: 'film',
		status: 'released',
		chronology: 8,
		group: 'Live-Action Films',
		tags: [],
		synopsis:
			'Obelix’s cousin must compete in the Olympic Games to win a princess’s hand — but the potion is banned from competition.',
		cast: ['Clovis Cornillac', 'Gérard Depardieu', 'Alain Delon'],
		tmdb: { type: 'movie', year: 2008 }
	},
	{
		id: 'asterix-and-obelix-god-save-britannia-2012',
		franchise: 'asterix',
		title: 'Asterix & Obelix: God Save Britannia',
		type: 'film',
		status: 'released',
		chronology: 9,
		group: 'Live-Action Films',
		tags: [],
		synopsis:
			'Asterix and Obelix cross the Channel to help their British cousins resist Roman occupation with a barrel of magic potion.',
		cast: ['Édouard Baer', 'Gérard Depardieu', 'Fabrice Luchini'],
		tmdb: { type: 'movie', year: 2012 }
	},
	{
		id: 'asterix-the-secret-of-the-magic-potion-2018',
		franchise: 'asterix',
		title: 'Asterix: The Secret of the Magic Potion',
		type: 'film',
		status: 'released',
		chronology: 10,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'Fearing for his life after a fall, the druid Getafix searches for a successor to inherit the secret of the magic potion.',
		cast: [],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'asterix-and-obelix-the-middle-kingdom-2023',
		franchise: 'asterix',
		title: 'Asterix & Obelix: The Middle Kingdom',
		type: 'film',
		status: 'released',
		chronology: 11,
		group: 'Live-Action Films',
		tags: ['finale'],
		synopsis:
			'Asterix and Obelix travel to Imperial China to help a princess reclaim her throne from a usurper aided by Julius Caesar.',
		cast: ['Guillaume Canet', 'Gilles Lellouche', 'Marion Cotillard'],
		tmdb: { type: 'movie', year: 2023 }
	}
];

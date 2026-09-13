import type { Entry } from '../types';

/**
 * Curated Asterix entries. See the comment at the top of `seed/marvel.ts`
 * for how this data merges with `scripts/sync-tmdb.mjs` output — the same
 * rules apply here.
 *
 * Asterix doesn't have a real in-universe chronology — each film is a
 * standalone adventure — and several entries are outright re-adaptations of
 * the same story rather than sequels (Asterix and Cleopatra ↔ Mission
 * Cleopatra; Asterix the Gaul ↔ vs. Caesar). So instead of pretending
 * they're one continuous timeline, the live-action films run as their own
 * branch alongside the animated ones, `chronology` placing each live-action
 * entry next to its closest animated counterpart to show the two tracks
 * side by side rather than end-to-end.
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
	// ---- Animated Films (main line) ----
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
		id: 'asterix-and-the-vikings-2006',
		franchise: 'asterix',
		title: 'Asterix and the Vikings',
		type: 'film',
		status: 'released',
		chronology: 5,
		group: 'Animated Films',
		tags: ['animated'],
		synopsis:
			'Asterix is tasked with teaching a cowardly Viking prince to feel fear, unaware the Vikings are hunting for exactly that secret.',
		cast: [],
		tmdb: { type: 'movie', year: 2006 }
	},
	{
		id: 'asterix-the-secret-of-the-magic-potion-2018',
		franchise: 'asterix',
		title: 'Asterix: The Secret of the Magic Potion',
		type: 'film',
		status: 'released',
		chronology: 6,
		group: 'Animated Films',
		tags: ['animated', 'finale'],
		synopsis:
			'Fearing for his life after a fall, the druid Getafix searches for a successor to inherit the secret of the magic potion.',
		cast: [],
		tmdb: { type: 'movie', year: 2018 }
	},
	// ---- Live-Action Films (parallel branch — same adventures, retold) ----
	{
		id: 'asterix-and-obelix-vs-caesar-1999',
		franchise: 'asterix',
		title: 'Asterix & Obelix vs. Caesar',
		type: 'film',
		status: 'released',
		chronology: 1.5,
		branch: 'Live-Action Adaptations',
		branchNote:
			'The same loosely-ordered adventures retold in live action, decades later — a parallel version, not a sequel to the animated films.',
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
		chronology: 2.5,
		branch: 'Live-Action Adaptations',
		group: 'Live-Action Films',
		tags: [],
		synopsis:
			'Asterix and Obelix help an architect build Cleopatra a lavish palace in Alexandria before an impossible deadline — the live-action retelling of Asterix and Cleopatra.',
		cast: ['Christian Clavier', 'Gérard Depardieu', 'Jamel Debbouze'],
		tmdb: { type: 'movie', year: 2002 }
	},
	{
		id: 'asterix-at-the-olympic-games-2008',
		franchise: 'asterix',
		title: 'Asterix at the Olympic Games',
		type: 'film',
		status: 'released',
		chronology: 3.5,
		branch: 'Live-Action Adaptations',
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
		chronology: 4.5,
		branch: 'Live-Action Adaptations',
		group: 'Live-Action Films',
		tags: [],
		synopsis:
			'Asterix and Obelix cross the Channel to help their British cousins resist Roman occupation with a barrel of magic potion.',
		cast: ['Édouard Baer', 'Gérard Depardieu', 'Fabrice Luchini'],
		tmdb: { type: 'movie', year: 2012 }
	},
	{
		id: 'asterix-and-obelix-the-middle-kingdom-2023',
		franchise: 'asterix',
		title: 'Asterix & Obelix: The Middle Kingdom',
		type: 'film',
		status: 'released',
		chronology: 5.5,
		branch: 'Live-Action Adaptations',
		group: 'Live-Action Films',
		tags: ['finale'],
		synopsis:
			'Asterix and Obelix travel to Imperial China to help a princess reclaim her throne from a usurper aided by Julius Caesar.',
		cast: ['Guillaume Canet', 'Gilles Lellouche', 'Marion Cotillard'],
		tmdb: { type: 'movie', year: 2023 }
	}
];

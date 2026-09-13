import type { Entry } from '../types';

/**
 * Curated Star Wars entries. See the comment at the top of `seed/marvel.ts`
 * for how this data merges with `scripts/sync-tmdb.mjs` output — the same
 * rules apply here.
 *
 * Unlike Marvel or The Walking Dead, most Star Wars side stories (Rogue
 * One, Solo, Andor, Obi-Wan Kenobi, The Mandalorian and friends) sit in the
 * *same* single timeline as the saga films rather than a genuinely
 * concurrent or alternate one, so they're kept in the main line, ordered by
 * where they actually fall. `Star Wars: Visions` is the one real branch —
 * an anthology of non-canon, alternate-style shorts, the same role `What
 * If...?` plays for Marvel.
 */
export const starWarsEntries: Entry[] = [
	{
		id: 'star-wars-episode-i-the-phantom-menace-1999',
		franchise: 'star-wars',
		title: 'Star Wars: Episode I – The Phantom Menace',
		type: 'film',
		status: 'released',
		chronology: 1,
		chronologyNote: '32 BBY',
		group: 'Prequel Trilogy',
		tags: ['origin'],
		synopsis:
			'Two Jedi Knights escort a young queen while investigating a trade dispute — and discover a boy who may be the Chosen One.',
		cast: ['Liam Neeson', 'Ewan McGregor', 'Natalie Portman'],
		tmdb: { type: 'movie', year: 1999 }
	},
	{
		id: 'star-wars-episode-ii-attack-of-the-clones-2002',
		franchise: 'star-wars',
		title: 'Star Wars: Episode II – Attack of the Clones',
		type: 'film',
		status: 'released',
		chronology: 2,
		chronologyNote: '22 BBY',
		group: 'Prequel Trilogy',
		tags: [],
		synopsis:
			'A decade later, an assassination attempt on Senator Amidala uncovers a secret clone army and the beginnings of galactic war.',
		cast: ['Ewan McGregor', 'Natalie Portman', 'Hayden Christensen'],
		tmdb: { type: 'movie', year: 2002 }
	},
	{
		id: 'star-wars-episode-iii-revenge-of-the-sith-2005',
		franchise: 'star-wars',
		title: 'Star Wars: Episode III – Revenge of the Sith',
		type: 'film',
		status: 'released',
		chronology: 3,
		chronologyNote: '19 BBY',
		group: 'Prequel Trilogy',
		tags: ['finale'],
		synopsis:
			'As the Clone Wars rage on, Anakin Skywalker’s fall to the dark side triggers the Jedi Order’s destruction and the Empire’s rise.',
		cast: ['Ewan McGregor', 'Hayden Christensen', 'Natalie Portman'],
		tmdb: { type: 'movie', year: 2005 }
	},
	{
		id: 'solo-a-star-wars-story-2018',
		franchise: 'star-wars',
		title: 'Solo: A Star Wars Story',
		type: 'film',
		status: 'released',
		chronology: 3.2,
		chronologyNote: '13 BBY',
		group: 'Anthology Films',
		tags: [],
		synopsis:
			'A young Han Solo falls in with a group of smugglers, meets Chewbacca, and plays the card game that wins him the Millennium Falcon.',
		cast: ['Alden Ehrenreich', 'Woody Harrelson', 'Emilia Clarke'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'obi-wan-kenobi-2022',
		franchise: 'star-wars',
		title: 'Obi-Wan Kenobi',
		type: 'series',
		status: 'released',
		chronology: 3.4,
		chronologyNote: '9 BBY',
		group: 'Disney+ Era',
		tags: [],
		seasons: 1,
		synopsis:
			'In exile on Tatooine, a haunted Obi-Wan Kenobi is drawn back into action to save a young Princess Leia from Imperial Inquisitors.',
		cast: ['Ewan McGregor', 'Hayden Christensen', 'Moses Ingram'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'andor-2022',
		franchise: 'star-wars',
		title: 'Andor',
		type: 'series',
		status: 'released',
		chronology: 3.6,
		chronologyNote: '5–0 BBY',
		group: 'Disney+ Era',
		tags: [],
		seasons: 2,
		synopsis:
			'Cassian Andor’s path from small-time thief to committed rebel operative, and the quiet, costly work of building a rebellion.',
		cast: ['Diego Luna', 'Kyle Soller', 'Stellan Skarsgård'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'rogue-one-a-star-wars-story-2016',
		franchise: 'star-wars',
		title: 'Rogue One: A Star Wars Story',
		type: 'film',
		status: 'released',
		chronology: 3.8,
		chronologyNote: '0 BBY, days before A New Hope',
		group: 'Anthology Films',
		tags: ['war'],
		synopsis:
			'A ragtag band of rebels undertakes a desperate mission to steal the plans to the Empire’s planet-destroying superweapon.',
		cast: ['Felicity Jones', 'Diego Luna', 'Alan Tudyk'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'star-wars-episode-iv-a-new-hope-1977',
		franchise: 'star-wars',
		title: 'Star Wars: Episode IV – A New Hope',
		type: 'film',
		status: 'released',
		chronology: 4,
		chronologyNote: '0 BBY',
		group: 'Original Trilogy',
		tags: ['origin'],
		synopsis:
			'A farm boy joins a Rebel effort to rescue a captured princess and destroy the Empire’s ultimate weapon, the Death Star.',
		cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		tmdb: { type: 'movie', year: 1977 }
	},
	{
		id: 'star-wars-episode-v-the-empire-strikes-back-1980',
		franchise: 'star-wars',
		title: 'Star Wars: Episode V – The Empire Strikes Back',
		type: 'film',
		status: 'released',
		chronology: 5,
		chronologyNote: '3 ABY',
		group: 'Original Trilogy',
		tags: [],
		synopsis:
			'The Empire strikes back hard, scattering the Rebels — and Luke learns the truth about his father from Darth Vader himself.',
		cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		tmdb: { type: 'movie', year: 1980 }
	},
	{
		id: 'star-wars-episode-vi-return-of-the-jedi-1983',
		franchise: 'star-wars',
		title: 'Star Wars: Episode VI – Return of the Jedi',
		type: 'film',
		status: 'released',
		chronology: 6,
		chronologyNote: '4 ABY',
		group: 'Original Trilogy',
		tags: ['finale'],
		synopsis:
			'Luke confronts Vader and the Emperor while the Rebels mount an assault on the second Death Star above the forest moon of Endor.',
		cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		tmdb: { type: 'movie', year: 1983 }
	},
	{
		id: 'the-mandalorian-2019',
		franchise: 'star-wars',
		title: 'The Mandalorian',
		type: 'series',
		status: 'released',
		chronology: 6.3,
		chronologyNote: '9 ABY',
		group: 'Disney+ Era',
		tags: [],
		seasons: 3,
		synopsis:
			'A lone bounty hunter on the outer reaches of the galaxy takes on a job protecting a mysterious, powerful foundling.',
		cast: ['Pedro Pascal', 'Carl Weathers', 'Giancarlo Esposito'],
		tmdb: { type: 'tv', year: 2019 }
	},
	{
		id: 'the-book-of-boba-fett-2021',
		franchise: 'star-wars',
		title: 'The Book of Boba Fett',
		type: 'series',
		status: 'released',
		chronology: 6.5,
		chronologyNote: '9 ABY',
		group: 'Disney+ Era',
		tags: [],
		seasons: 1,
		synopsis:
			'Legendary bounty hunter Boba Fett and mercenary Fennec Shand carve out territory in the crime world of Tatooine’s Mos Espa.',
		cast: ['Temuera Morrison', 'Ming-Na Wen'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'ahsoka-2023',
		franchise: 'star-wars',
		title: 'Ahsoka',
		type: 'series',
		status: 'released',
		chronology: 6.7,
		chronologyNote: '9 ABY',
		group: 'Disney+ Era',
		tags: [],
		seasons: 1,
		synopsis:
			'Ahsoka Tano investigates a growing threat that could spell the return of Grand Admiral Thrawn and a new Imperial menace.',
		cast: ['Rosario Dawson', 'Natasha Liu Bordizzo', 'Mary Elizabeth Winstead'],
		tmdb: { type: 'tv', year: 2023 }
	},
	{
		id: 'star-wars-episode-vii-the-force-awakens-2015',
		franchise: 'star-wars',
		title: 'Star Wars: Episode VII – The Force Awakens',
		type: 'film',
		status: 'released',
		chronology: 7,
		chronologyNote: '34 ABY',
		group: 'Sequel Trilogy',
		tags: ['origin'],
		synopsis:
			'A scavenger and a defected stormtrooper get pulled into the fight between the Resistance and the First Order — and a hunt for Luke Skywalker.',
		cast: ['Daisy Ridley', 'John Boyega', 'Oscar Isaac'],
		tmdb: { type: 'movie', year: 2015 }
	},
	{
		id: 'star-wars-episode-viii-the-last-jedi-2017',
		franchise: 'star-wars',
		title: 'Star Wars: Episode VIII – The Last Jedi',
		type: 'film',
		status: 'released',
		chronology: 8,
		chronologyNote: '34 ABY',
		group: 'Sequel Trilogy',
		tags: [],
		synopsis:
			'Rey seeks out a self-exiled Luke Skywalker as the Resistance, reduced to a handful of ships, is run down by the First Order.',
		cast: ['Daisy Ridley', 'Mark Hamill', 'Adam Driver'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'star-wars-episode-ix-the-rise-of-skywalker-2019',
		franchise: 'star-wars',
		title: 'Star Wars: Episode IX – The Rise of Skywalker',
		type: 'film',
		status: 'released',
		chronology: 9,
		chronologyNote: '35 ABY',
		group: 'Sequel Trilogy',
		tags: ['finale'],
		synopsis:
			'The Resistance makes a final stand against a returned Emperor Palpatine and the might of the First Order.',
		cast: ['Daisy Ridley', 'John Boyega', 'Oscar Isaac'],
		tmdb: { type: 'movie', year: 2019 }
	},
	// ---- Star Wars: Visions (non-canon anthology branch) ----
	{
		id: 'star-wars-visions-2021',
		franchise: 'star-wars',
		title: 'Star Wars: Visions',
		type: 'series',
		status: 'released',
		chronology: 5.5,
		chronologyNote: 'various points, outside the main canon',
		branch: 'Star Wars: Visions',
		branchNote:
			'An anthology of shorts from different anime studios, each reimagining the galaxy in its own style — not canon, not one continuous story.',
		group: 'Star Wars: Visions',
		tags: ['anthology', 'animated'],
		seasons: 2,
		synopsis:
			'A collection of animated shorts from acclaimed anime studios, each offering its own vision of the Star Wars galaxy.',
		cast: []
	},
	// ---- Games ----
	{
		id: 'star-wars-jedi-fallen-order-2019',
		franchise: 'star-wars',
		title: 'Star Wars Jedi: Fallen Order',
		type: 'game',
		status: 'released',
		chronology: 3.3,
		chronologyNote: '14 BBY',
		group: 'Games & Other Media',
		tags: [],
		platforms: ['PlayStation', 'Xbox', 'PC'],
		synopsis:
			'A surviving Jedi Padawan evades Imperial Inquisitors while piecing together a plan to rebuild the shattered Jedi Order.',
		cast: []
	}
];

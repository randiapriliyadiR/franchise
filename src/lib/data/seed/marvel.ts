import type { Entry } from '../types';

/**
 * Curated Marvel Cinematic Universe entries.
 *
 * `releaseDate`, `synopsis`, `cast`, `rating`, `posterPath` and `backdropPath`
 * are placeholders here — `scripts/sync-tmdb.mjs` overwrites all of them from
 * TMDB for any entry with a `tmdb` query, caching the result in
 * `src/lib/data/generated/marvel.json`. Fields with no TMDB equivalent
 * (`chronology`, `chronologyNote`, `group`, `tags`) are authored here and
 * never touched by the sync.
 *
 * `chronology` is a fan-friendly approximation of in-universe story order,
 * not an official Marvel Studios document — it's good enough to power the
 * "story order" timeline toggle, not a citation.
 */
export const marvelEntries: Entry[] = [
	// ---- Phase One ----
	{
		id: 'iron-man-2008',
		franchise: 'marvel',
		title: 'Iron Man',
		type: 'film',
		status: 'released',
		chronology: 3,
		chronologyNote: '~2010',
		group: 'Phase One',
		tags: ['origin'],
		synopsis:
			'A billionaire weapons manufacturer builds a powered suit of armor after a near-fatal capture, and decides to keep wearing it.',
		cast: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Jeff Bridges'],
		tmdb: { type: 'movie', year: 2008 }
	},
	{
		id: 'the-incredible-hulk-2008',
		franchise: 'marvel',
		title: 'The Incredible Hulk',
		type: 'film',
		status: 'released',
		chronology: 4.1,
		chronologyNote: '~2011',
		group: 'Phase One',
		tags: [],
		synopsis:
			'On the run from the general who wants to weaponize his condition, Bruce Banner searches for a cure to the rage monster inside him.',
		cast: ['Edward Norton', 'Liv Tyler', 'Tim Roth'],
		tmdb: { type: 'movie', year: 2008 }
	},
	{
		id: 'iron-man-2-2010',
		franchise: 'marvel',
		title: 'Iron Man 2',
		type: 'film',
		status: 'released',
		chronology: 4,
		chronologyNote: '~2011',
		group: 'Phase One',
		tags: [],
		synopsis:
			'With the world now aware of his double life, Tony Stark faces government pressure, a dying body, and a vengeful new rival.',
		cast: ['Robert Downey Jr.', 'Scarlett Johansson', 'Mickey Rourke'],
		tmdb: { type: 'movie', year: 2010 }
	},
	{
		id: 'thor-2011',
		franchise: 'marvel',
		title: 'Thor',
		type: 'film',
		status: 'released',
		chronology: 5,
		chronologyNote: '~2011',
		group: 'Phase One',
		tags: ['origin', 'cosmic'],
		synopsis:
			'Cast out of Asgard for his recklessness, the god of thunder learns humility on Earth while his brother schemes for the throne.',
		cast: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston'],
		tmdb: { type: 'movie', year: 2011 }
	},
	{
		id: 'captain-america-the-first-avenger-2011',
		franchise: 'marvel',
		title: 'Captain America: The First Avenger',
		type: 'film',
		status: 'released',
		chronology: 1,
		chronologyNote: '1943–1945',
		group: 'Phase One',
		tags: ['origin', 'period'],
		synopsis:
			'A frail volunteer is transformed into a super-soldier and sent to fight Hydra, a science division that has outgrown the Nazi regime that spawned it.',
		cast: ['Chris Evans', 'Hayley Atwell', 'Hugo Weaving'],
		tmdb: { type: 'movie', year: 2011 }
	},
	{
		id: 'the-avengers-2012',
		franchise: 'marvel',
		title: 'The Avengers',
		type: 'film',
		status: 'released',
		chronology: 6,
		chronologyNote: '2012',
		group: 'Phase One',
		tags: ['team-up'],
		synopsis:
			"Earth's mightiest heroes are assembled for the first time to stop a stolen scepter and an alien army from conquering the planet.",
		cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
		tmdb: { type: 'movie', year: 2012 }
	},

	// ---- Phase Two ----
	{
		id: 'iron-man-3-2013',
		franchise: 'marvel',
		title: 'Iron Man 3',
		type: 'film',
		status: 'released',
		chronology: 6.4,
		chronologyNote: '2012–2013',
		group: 'Phase Two',
		tags: [],
		synopsis:
			'Shaken by the events in New York, Tony Stark rebuilds himself piece by piece while a terrorist calling himself the Mandarin strikes at home.',
		cast: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Ben Kingsley'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'thor-the-dark-world-2013',
		franchise: 'marvel',
		title: 'Thor: The Dark World',
		type: 'film',
		status: 'released',
		chronology: 6.6,
		chronologyNote: '2013',
		group: 'Phase Two',
		tags: ['cosmic'],
		synopsis:
			'An ancient race of Dark Elves resurfaces to plunge the universe into darkness, forcing Thor into an uneasy alliance with Loki.',
		cast: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston'],
		tmdb: { type: 'movie', year: 2013 }
	},
	{
		id: 'captain-america-the-winter-soldier-2014',
		franchise: 'marvel',
		title: 'Captain America: The Winter Soldier',
		type: 'film',
		status: 'released',
		chronology: 7,
		chronologyNote: '2014',
		group: 'Phase Two',
		tags: ['political-thriller'],
		synopsis:
			'Steve Rogers uncovers a conspiracy that has hollowed out S.H.I.E.L.D. from within, and finds himself facing an assassin from his own past.',
		cast: ['Chris Evans', 'Scarlett Johansson', 'Sebastian Stan'],
		tmdb: { type: 'movie', year: 2014 }
	},
	{
		id: 'guardians-of-the-galaxy-2014',
		franchise: 'marvel',
		title: 'Guardians of the Galaxy',
		type: 'film',
		status: 'released',
		chronology: 7.2,
		chronologyNote: '2014 (prologue 1988)',
		group: 'Phase Two',
		tags: ['cosmic', 'origin'],
		synopsis:
			'A ragtag crew of thieves and outlaws stumbles onto an orb that half the galaxy wants, and has to decide whether to actually be heroes.',
		cast: ['Chris Pratt', 'Zoe Saldaña', 'Dave Bautista'],
		tmdb: { type: 'movie', year: 2014 }
	},
	{
		id: 'avengers-age-of-ultron-2015',
		franchise: 'marvel',
		title: 'Avengers: Age of Ultron',
		type: 'film',
		status: 'released',
		chronology: 7.6,
		chronologyNote: '2015',
		group: 'Phase Two',
		tags: ['team-up'],
		synopsis:
			'An artificial intelligence Tony Stark builds to protect the world decides the best way to save it is to end it, and the Avengers scramble to stop him.',
		cast: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth'],
		tmdb: { type: 'movie', year: 2015 }
	},
	{
		id: 'ant-man-2015',
		franchise: 'marvel',
		title: 'Ant-Man',
		type: 'film',
		status: 'released',
		chronology: 7.8,
		chronologyNote: '2015',
		group: 'Phase Two',
		tags: ['origin', 'heist'],
		synopsis:
			'A reformed cat burglar is recruited to don a size-shifting suit and pull off a heist that could save the world from a dangerous new weapon.',
		cast: ['Paul Rudd', 'Evangeline Lilly', 'Michael Douglas'],
		tmdb: { type: 'movie', year: 2015 }
	},

	// ---- Phase Three ----
	{
		id: 'captain-america-civil-war-2016',
		franchise: 'marvel',
		title: 'Captain America: Civil War',
		type: 'film',
		status: 'released',
		chronology: 8,
		chronologyNote: '2016',
		group: 'Phase Three',
		tags: ['team-up'],
		synopsis:
			'Government oversight of enhanced individuals splits the Avengers into two camps, and old friends end up on opposite sides of the fight.',
		cast: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'black-widow-2021',
		franchise: 'marvel',
		title: 'Black Widow',
		type: 'film',
		status: 'released',
		chronology: 8.2,
		chronologyNote: '2016, in hiding after Civil War',
		group: 'Phase Four',
		tags: ['spy'],
		synopsis:
			'On the run after the events in Germany, Natasha Romanoff confronts a shadowy program from her past and the family she never chose.',
		cast: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
		tmdb: { type: 'movie', year: 2021 }
	},
	{
		id: 'doctor-strange-2016',
		franchise: 'marvel',
		title: 'Doctor Strange',
		type: 'film',
		status: 'released',
		chronology: 8.4,
		chronologyNote: '2016–2017',
		group: 'Phase Three',
		tags: ['origin', 'magic'],
		synopsis:
			'A brilliant but arrogant surgeon loses everything in an accident, then finds a new purpose learning the mystic arts from a secretive order.',
		cast: ['Benedict Cumberbatch', 'Chiwetel Ejiofor', 'Tilda Swinton'],
		tmdb: { type: 'movie', year: 2016 }
	},
	{
		id: 'guardians-of-the-galaxy-vol-2-2017',
		franchise: 'marvel',
		title: 'Guardians of the Galaxy Vol. 2',
		type: 'film',
		status: 'released',
		chronology: 7.3,
		chronologyNote: '2014, weeks after the first film',
		group: 'Phase Three',
		tags: ['cosmic'],
		synopsis:
			"The Guardians uncover the truth about Peter Quill's father while navigating a rival faction of gold-skinned zealots and their own dysfunction.",
		cast: ['Chris Pratt', 'Zoe Saldaña', 'Kurt Russell'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'spider-man-homecoming-2017',
		franchise: 'marvel',
		title: 'Spider-Man: Homecoming',
		type: 'film',
		status: 'released',
		chronology: 8.5,
		chronologyNote: '2016',
		group: 'Phase Three',
		tags: ['origin', 'coming-of-age'],
		synopsis:
			'Balancing high school with vigilante nights, a teenage Peter Parker chases a bigger case than he can handle involving stolen alien tech.',
		cast: ['Tom Holland', 'Michael Keaton', 'Robert Downey Jr.'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'thor-ragnarok-2017',
		franchise: 'marvel',
		title: 'Thor: Ragnarok',
		type: 'film',
		status: 'released',
		chronology: 8.7,
		chronologyNote: '2017',
		group: 'Phase Three',
		tags: ['cosmic', 'comedy'],
		synopsis:
			'Stripped of his hammer and hair, Thor is trapped on a gladiatorial junk planet and must escape in time to stop his sister from destroying Asgard.',
		cast: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett'],
		tmdb: { type: 'movie', year: 2017 }
	},
	{
		id: 'black-panther-2018',
		franchise: 'marvel',
		title: 'Black Panther',
		type: 'film',
		status: 'released',
		chronology: 9,
		chronologyNote: '2017–2018',
		group: 'Phase Three',
		tags: ['origin'],
		synopsis:
			"T'Challa returns home to Wakanda to claim the throne, only for a challenger with a legitimate claim and a personal grudge to upend everything.",
		cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyong’o'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'avengers-infinity-war-2018',
		franchise: 'marvel',
		title: 'Avengers: Infinity War',
		type: 'film',
		status: 'released',
		chronology: 10,
		chronologyNote: '2018',
		group: 'Phase Three',
		tags: ['team-up', 'cosmic'],
		synopsis:
			'The Avengers and the Guardians race across the galaxy to stop Thanos from collecting all six Infinity Stones before he wipes out half of all life.',
		cast: ['Robert Downey Jr.', 'Chris Hemsworth', 'Josh Brolin'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'ant-man-and-the-wasp-2018',
		franchise: 'marvel',
		title: 'Ant-Man and the Wasp',
		type: 'film',
		status: 'released',
		chronology: 9.5,
		chronologyNote: '2018, shortly before Infinity War’s ending',
		group: 'Phase Three',
		tags: [],
		synopsis:
			'Scott Lang teams up with Hope van Dyne to rescue her mother from the quantum realm, right as new enemies come looking for the same technology.',
		cast: ['Paul Rudd', 'Evangeline Lilly', 'Michael Peña'],
		tmdb: { type: 'movie', year: 2018 }
	},
	{
		id: 'captain-marvel-2019',
		franchise: 'marvel',
		title: 'Captain Marvel',
		type: 'film',
		status: 'released',
		chronology: 2,
		chronologyNote: 'primarily 1995',
		group: 'Phase Three',
		tags: ['origin', 'cosmic', 'period'],
		synopsis:
			'A former Air Force pilot with newly discovered cosmic powers uncovers the truth about a war between two alien civilizations, and her own erased past.',
		cast: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mendelsohn'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'avengers-endgame-2019',
		franchise: 'marvel',
		title: 'Avengers: Endgame',
		type: 'film',
		status: 'released',
		chronology: 11,
		chronologyNote: '2018–2023, five years after the Snap',
		group: 'Phase Three',
		tags: ['team-up'],
		synopsis:
			'The surviving Avengers attempt a desperate time heist to undo the Snap, at the cost of a final confrontation with Thanos.',
		cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
		tmdb: { type: 'movie', year: 2019 }
	},
	{
		id: 'spider-man-far-from-home-2019',
		franchise: 'marvel',
		title: 'Spider-Man: Far From Home',
		type: 'film',
		status: 'released',
		chronology: 11.2,
		chronologyNote: '2024, months after Endgame',
		group: 'Phase Three',
		tags: ['coming-of-age'],
		synopsis:
			"On a school trip to Europe, Peter Parker is recruited by Nick Fury to face down elemental creatures — and a hero who isn't quite what he seems.",
		cast: ['Tom Holland', 'Samuel L. Jackson', 'Jake Gyllenhaal'],
		tmdb: { type: 'movie', year: 2019 }
	},

	// ---- Phase Four ----
	{
		id: 'shang-chi-and-the-legend-of-the-ten-rings-2021',
		franchise: 'marvel',
		title: 'Shang-Chi and the Legend of the Ten Rings',
		type: 'film',
		status: 'released',
		chronology: 11.35,
		chronologyNote: '2024',
		group: 'Phase Four',
		tags: ['origin', 'martial-arts'],
		synopsis:
			"A man built a quiet life driving valet in San Francisco is pulled back into his father's criminal organization and its ancient, mystical power.",
		cast: ['Simu Liu', 'Awkwafina', 'Tony Leung'],
		tmdb: { type: 'movie', year: 2021 }
	},
	{
		id: 'eternals-2021',
		franchise: 'marvel',
		title: 'Eternals',
		type: 'film',
		status: 'released',
		chronology: 11.4,
		chronologyNote: '7,000 BCE onward, converging in 2024',
		group: 'Phase Four',
		tags: ['cosmic', 'origin'],
		synopsis:
			"A family of ancient immortals sent to Earth to fight monstrous Deviants must reunite when a far older threat than they'd been told about resurfaces.",
		cast: ['Gemma Chan', 'Richard Madden', 'Angelina Jolie'],
		tmdb: { type: 'movie', year: 2021 }
	},
	{
		id: 'spider-man-no-way-home-2021',
		franchise: 'marvel',
		title: 'Spider-Man: No Way Home',
		type: 'film',
		status: 'released',
		chronology: 11.9,
		chronologyNote: '2024–2025',
		group: 'Phase Four',
		tags: ['multiverse'],
		synopsis:
			'When a spell to make the world forget his identity goes wrong, Peter Parker tears open the multiverse and meets faces he never expected.',
		cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
		tmdb: { type: 'movie', year: 2021 }
	},
	{
		id: 'doctor-strange-in-the-multiverse-of-madness-2022',
		franchise: 'marvel',
		title: 'Doctor Strange in the Multiverse of Madness',
		type: 'film',
		status: 'released',
		chronology: 12.4,
		chronologyNote: '2025',
		group: 'Phase Four',
		tags: ['multiverse', 'magic'],
		synopsis:
			'Chasing a young woman who can travel between universes, Doctor Strange finds a version of a friend willing to burn every reality to get what she lost.',
		cast: ['Benedict Cumberbatch', 'Elizabeth Olsen', 'Xochitl Gomez'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'thor-love-and-thunder-2022',
		franchise: 'marvel',
		title: 'Thor: Love and Thunder',
		type: 'film',
		status: 'released',
		chronology: 12.6,
		chronologyNote: '2025',
		group: 'Phase Four',
		tags: ['cosmic', 'comedy'],
		synopsis:
			'A god-killer is hunting the pantheons of the universe, and Thor finds his ex-girlfriend wielding his own hammer to help stop him.',
		cast: ['Chris Hemsworth', 'Natalie Portman', 'Christian Bale'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'black-panther-wakanda-forever-2022',
		franchise: 'marvel',
		title: 'Black Panther: Wakanda Forever',
		type: 'film',
		status: 'released',
		chronology: 12.8,
		chronologyNote: '2025–2026',
		group: 'Phase Four',
		tags: [],
		synopsis:
			'Reeling from a devastating loss, the nations of Wakanda must protect their home from a hidden underwater civilization awakened by outside threats.',
		cast: ['Letitia Wright', 'Lupita Nyong’o', 'Danai Gurira'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'wandavision-2021',
		franchise: 'marvel',
		title: 'WandaVision',
		type: 'series',
		status: 'released',
		chronology: 11.05,
		chronologyNote: 'three weeks after Endgame',
		group: 'Phase Four',
		tags: ['sitcom-pastiche', 'grief'],
		seasons: 1,
		synopsis:
			'Grieving in isolation, Wanda Maximoff has unknowingly warped a small town into a shifting sitcom reality built entirely around her.',
		cast: ['Elizabeth Olsen', 'Paul Bettany', 'Kathryn Hahn'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'the-falcon-and-the-winter-soldier-2021',
		franchise: 'marvel',
		title: 'The Falcon and the Winter Soldier',
		type: 'series',
		status: 'released',
		chronology: 11.1,
		chronologyNote: 'six months after Endgame',
		group: 'Phase Four',
		tags: ['political-thriller'],
		seasons: 1,
		synopsis:
			'Sam Wilson and Bucky Barnes are forced into an uneasy partnership to track down a group of super-soldiers rejecting the new world order.',
		cast: ['Anthony Mackie', 'Sebastian Stan', 'Daniel Brühl'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'loki-season-1-2021',
		franchise: 'marvel',
		title: 'Loki (Season 1)',
		type: 'series',
		status: 'released',
		chronology: 11.15,
		chronologyNote: 'a branched 2012, from Avengers',
		group: 'Phase Four',
		tags: ['multiverse', 'time-travel'],
		seasons: 1,
		synopsis:
			'Snatched out of time for stealing the Tesseract in 2012, a variant of Loki is recruited by a bureaucratic agency that polices the timeline.',
		cast: ['Tom Hiddleston', 'Owen Wilson', 'Sophia Di Martino'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'what-if-season-1-2021',
		franchise: 'marvel',
		title: 'What If...? (Season 1)',
		type: 'series',
		status: 'released',
		chronology: 11.2,
		chronologyNote: 'across the multiverse',
		branch: 'Multiverse (What If…?)',
		group: 'Phase Four',
		tags: ['multiverse', 'anthology', 'animated'],
		seasons: 1,
		synopsis:
			'The Watcher observes a set of single decisions that spin entire timelines away from the one audiences already know.',
		cast: ['Jeffrey Wright'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'hawkeye-2021',
		franchise: 'marvel',
		title: 'Hawkeye',
		type: 'series',
		status: 'released',
		chronology: 11.3,
		chronologyNote: 'Christmas, a year after Endgame',
		group: 'Phase Four',
		tags: ['holiday'],
		seasons: 1,
		synopsis:
			'Trying to get home for Christmas, Clint Barton instead has to mentor a young archer with a talent for finding trouble in his old costume.',
		cast: ['Jeremy Renner', 'Hailee Steinfeld', 'Vera Farmiga'],
		tmdb: { type: 'tv', year: 2021 }
	},
	{
		id: 'moon-knight-2022',
		franchise: 'marvel',
		title: 'Moon Knight',
		type: 'series',
		status: 'released',
		chronology: 11.5,
		chronologyNote: '2024–2025',
		group: 'Phase Four',
		tags: ['origin', 'mythology'],
		seasons: 1,
		synopsis:
			'A mild-mannered museum gift-shop worker discovers he shares a body — and an Egyptian god — with a mercenary he has no memory of being.',
		cast: ['Oscar Isaac', 'Ethan Hawke', 'May Calamawy'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'ms-marvel-2022',
		franchise: 'marvel',
		title: 'Ms. Marvel',
		type: 'series',
		status: 'released',
		chronology: 12.5,
		chronologyNote: '2025',
		group: 'Phase Four',
		tags: ['origin', 'coming-of-age'],
		seasons: 1,
		synopsis:
			'A New Jersey teenager and devoted Avengers superfan discovers a bangle that grants her cosmic powers of her own.',
		cast: ['Iman Vellani', 'Matt Lintz', 'Yasmeen Fletcher'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'she-hulk-attorney-at-law-2022',
		franchise: 'marvel',
		title: 'She-Hulk: Attorney at Law',
		type: 'series',
		status: 'released',
		chronology: 12.7,
		chronologyNote: '2025',
		group: 'Phase Four',
		tags: ['comedy', 'legal'],
		seasons: 1,
		synopsis:
			'A blood transfusion from her cousin Bruce gives lawyer Jennifer Walters superhuman strength, complicating her career, her love life, and her patience.',
		cast: ['Tatiana Maslany', 'Mark Ruffalo', 'Tim Roth'],
		tmdb: { type: 'tv', year: 2022 }
	},
	{
		id: 'werewolf-by-night-2022',
		franchise: 'marvel',
		title: 'Werewolf by Night',
		type: 'short',
		status: 'released',
		chronology: 12.75,
		chronologyNote: 'undisclosed, present day',
		group: 'Phase Four',
		tags: ['horror', 'monster-hunters'],
		runtimeMinutes: 54,
		synopsis:
			'A secret society of monster hunters gathers for a competition to inherit a powerful relic, unaware one of their own hides a monstrous secret.',
		cast: ['Gael García Bernal', 'Laura Donnelly', 'Harriet Sansom Harris'],
		tmdb: { type: 'movie', year: 2022 }
	},
	{
		id: 'secret-invasion-2023',
		franchise: 'marvel',
		title: 'Secret Invasion',
		type: 'series',
		status: 'released',
		chronology: 12.9,
		chronologyNote: '2025–2026',
		group: 'Phase Four',
		tags: ['espionage'],
		seasons: 1,
		synopsis:
			'Nick Fury uncovers a decades-long infiltration of Earth by a faction of shapeshifting Skrulls who have run out of patience for waiting.',
		cast: ['Samuel L. Jackson', 'Ben Mendelsohn', 'Cobie Smulders'],
		tmdb: { type: 'tv', year: 2023 }
	},

	// ---- Phase Five ----
	{
		id: 'ant-man-and-the-wasp-quantumania-2023',
		franchise: 'marvel',
		title: 'Ant-Man and the Wasp: Quantumania',
		type: 'film',
		status: 'released',
		chronology: 13,
		chronologyNote: '2026',
		group: 'Phase Five',
		tags: ['multiverse'],
		synopsis:
			'A family trip goes wrong and pulls the Langs and van Dynes into the Quantum Realm, where they run headlong into a conqueror stranded there for decades.',
		cast: ['Paul Rudd', 'Evangeline Lilly', 'Jonathan Majors'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'guardians-of-the-galaxy-vol-3-2023',
		franchise: 'marvel',
		title: 'Guardians of the Galaxy Vol. 3',
		type: 'film',
		status: 'released',
		chronology: 13.1,
		chronologyNote: '2026',
		group: 'Phase Five',
		tags: ['cosmic'],
		synopsis:
			'To save a dying Rocket, the Guardians must confront the geneticist who engineered him and the horrors of the lab he escaped.',
		cast: ['Chris Pratt', 'Zoe Saldaña', 'Bradley Cooper'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'loki-season-2-2023',
		franchise: 'marvel',
		title: 'Loki (Season 2)',
		type: 'series',
		status: 'released',
		chronology: 11.16,
		chronologyNote: 'immediately after Season 1',
		group: 'Phase Five',
		tags: ['multiverse', 'time-travel'],
		seasons: 1,
		synopsis:
			'With the Sacred Timeline fracturing, Loki has to master his growing control over time itself before the TVA collapses for good.',
		cast: ['Tom Hiddleston', 'Owen Wilson', 'Sophia Di Martino'],
		tmdb: { type: 'tv', year: 2023 }
	},
	{
		id: 'the-marvels-2023',
		franchise: 'marvel',
		title: 'The Marvels',
		type: 'film',
		status: 'released',
		chronology: 13.2,
		chronologyNote: '2026',
		group: 'Phase Five',
		tags: ['cosmic'],
		synopsis:
			"Carol Danvers, Kamala Khan and Monica Rambeau find their powers unpredictably swapping them in and out of each other's places across the galaxy.",
		cast: ['Brie Larson', 'Teyonah Parris', 'Iman Vellani'],
		tmdb: { type: 'movie', year: 2023 }
	},
	{
		id: 'agatha-all-along-2024',
		franchise: 'marvel',
		title: 'Agatha All Along',
		type: 'series',
		status: 'released',
		chronology: 11.06,
		chronologyNote: 'after WandaVision',
		group: 'Phase Five',
		tags: ['magic'],
		seasons: 1,
		synopsis:
			'Stripped of her powers since Westview, Agatha Harkness assembles a coven of witches to walk the deadly Witches’ Road and reclaim what she lost.',
		cast: ['Kathryn Hahn', 'Joe Locke', 'Aubrey Plaza'],
		tmdb: { type: 'tv', year: 2024 }
	},
	{
		id: 'deadpool-and-wolverine-2024',
		franchise: 'marvel',
		title: 'Deadpool & Wolverine',
		type: 'film',
		status: 'released',
		chronology: 13.5,
		chronologyNote: 'across the multiverse',
		group: 'Phase Five',
		tags: ['multiverse', 'comedy'],
		synopsis:
			'Recruited by the TVA to prevent his universe from being erased, Wade Wilson drags a reluctant, weary Wolverine variant along for the ride.',
		cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin'],
		tmdb: { type: 'movie', year: 2024 }
	},

	// ---- Phase Six ----
	{
		id: 'captain-america-brave-new-world-2025',
		franchise: 'marvel',
		title: 'Captain America: Brave New World',
		type: 'film',
		status: 'released',
		chronology: 13.7,
		chronologyNote: '2026–2027',
		group: 'Phase Six',
		tags: ['political-thriller'],
		synopsis:
			'The new Captain America gets tangled in an international incident and a conspiracy that reaches all the way to the Oval Office.',
		cast: ['Anthony Mackie', 'Harrison Ford', 'Danny Ramirez'],
		tmdb: { type: 'movie', year: 2025 }
	},
	{
		id: 'daredevil-born-again-2025',
		franchise: 'marvel',
		title: 'Daredevil: Born Again',
		type: 'series',
		status: 'released',
		chronology: 13.75,
		chronologyNote: '2027',
		group: 'Phase Six',
		tags: ['crime', 'legal'],
		seasons: 1,
		synopsis:
			"Matt Murdock's double life as a lawyer and a vigilante collides with Wilson Fisk's new, very public life as Mayor of New York.",
		cast: ['Charlie Cox', 'Vincent D’Onofrio', 'Deborah Ann Woll'],
		tmdb: { type: 'tv', year: 2025 }
	},
	{
		id: 'thunderbolts-2025',
		franchise: 'marvel',
		title: 'Thunderbolts*',
		type: 'film',
		status: 'released',
		chronology: 13.8,
		chronologyNote: '2027',
		group: 'Phase Six',
		tags: ['anti-heroes'],
		synopsis:
			'A team of expendable operatives and former villains are sent on a suicide mission and decide, against their better judgment, to become something more.',
		cast: ['Florence Pugh', 'Sebastian Stan', 'David Harbour'],
		tmdb: { type: 'movie', year: 2025 }
	},
	{
		id: 'ironheart-2025',
		franchise: 'marvel',
		title: 'Ironheart',
		type: 'series',
		status: 'released',
		chronology: 13.85,
		chronologyNote: '2027',
		group: 'Phase Six',
		tags: ['origin'],
		seasons: 1,
		synopsis:
			'A genius MIT engineer builds her own suit of armor and gets pulled into a partnership with a magic-wielding con artist who wants a piece of her tech.',
		cast: ['Dominique Thorne', 'Anthony Ramos', 'Alden Ehrenreich'],
		tmdb: { type: 'tv', year: 2025 }
	},
	{
		id: 'the-fantastic-four-first-steps-2025',
		franchise: 'marvel',
		title: 'The Fantastic Four: First Steps',
		type: 'film',
		status: 'released',
		chronology: 13.9,
		chronologyNote: 'a retro-futurist parallel Earth, 1960s',
		branch: 'Earth-828 (Fantastic Four)',
		group: 'Phase Six',
		tags: ['origin', 'alternate-universe', 'period'],
		synopsis:
			"Earth's first family of explorers-turned-heroes must protect their world from a cosmic herald announcing the arrival of a planet-devourer.",
		cast: ['Pedro Pascal', 'Vanessa Kirby', 'Joseph Quinn'],
		tmdb: { type: 'movie', year: 2025 }
	},
	{
		id: 'avengers-doomsday-2026',
		franchise: 'marvel',
		title: 'Avengers: Doomsday',
		type: 'film',
		status: 'upcoming',
		chronology: 14.5,
		chronologyNote: 'announced, story placement unconfirmed',
		group: 'Phase Six',
		tags: ['team-up', 'multiverse'],
		synopsis:
			"A fractured lineup of heroes and villains converges to face a threat wearing Reed Richards' face and none of his restraint.",
		cast: ['Robert Downey Jr.', 'Vanessa Kirby', 'Pedro Pascal'],
		tmdb: { type: 'movie', year: 2026 }
	},
	{
		id: 'spider-man-brand-new-day-2026',
		franchise: 'marvel',
		title: 'Spider-Man: Brand New Day',
		type: 'film',
		status: 'upcoming',
		chronology: 14.2,
		chronologyNote: 'announced, story placement unconfirmed',
		group: 'Phase Six',
		tags: ['coming-of-age'],
		synopsis:
			"Peter Parker's next chapter, with a world that once again knows exactly who he is under the mask.",
		cast: ['Tom Holland', 'Zendaya'],
		tmdb: { type: 'movie', year: 2026 }
	},

	// ---- Games & Comics ----
	{
		id: 'amazing-fantasy-15-1962',
		franchise: 'marvel',
		title: 'Amazing Fantasy #15',
		type: 'comic',
		status: 'released',
		chronology: 0,
		chronologyNote: 'comic continuity, 1962',
		group: 'Games & Comics',
		tags: ['origin', 'comic-continuity'],
		releaseDate: '1962-08-01',
		synopsis:
			'The single issue that introduced Spider-Man to the world, and the line “with great power there must also come great responsibility.”',
		cast: ['Stan Lee (writer)', 'Steve Ditko (artist)']
	},
	{
		id: 'the-infinity-gauntlet-1991',
		franchise: 'marvel',
		title: 'The Infinity Gauntlet',
		type: 'comic',
		status: 'released',
		chronology: 0.1,
		chronologyNote: 'comic continuity, 1991',
		group: 'Games & Comics',
		tags: ['cosmic', 'comic-continuity'],
		releaseDate: '1991-07-01',
		endDate: '1991-12-01',
		synopsis:
			'The six-issue limited series in which Thanos claims all six Infinity Gems and erases half of all life with a snap, loosely reimagined for Infinity War.',
		cast: ['Jim Starlin (writer)', 'George Pérez (artist)', 'Ron Lim (artist)']
	},
	{
		id: 'marvels-spider-man-2018',
		franchise: 'marvel',
		title: "Marvel's Spider-Man",
		type: 'game',
		status: 'released',
		chronology: 0.2,
		chronologyNote: 'PlayStation game continuity',
		group: 'Games & Comics',
		tags: ['game-continuity'],
		releaseDate: '2018-09-07',
		platforms: ['PlayStation 4', 'PlayStation 5', 'Windows'],
		synopsis:
			'An experienced Peter Parker faces the Sinister Six in an open-world Manhattan, in a continuity built specifically for the game.',
		cast: ['Yuri Lowenthal (voice)', 'Nadji Jeter (voice)']
	},
	{
		id: 'marvels-guardians-of-the-galaxy-2021',
		franchise: 'marvel',
		title: "Marvel's Guardians of the Galaxy",
		type: 'game',
		status: 'released',
		chronology: 0.3,
		chronologyNote: 'game continuity',
		group: 'Games & Comics',
		tags: ['game-continuity'],
		releaseDate: '2021-10-26',
		platforms: ['PlayStation', 'Xbox', 'Windows', 'Nintendo Switch'],
		synopsis:
			'A broke, bickering band of Guardians stumbles into a galaxy-wide crisis they accidentally caused themselves, in a fully original story.',
		cast: ['Jon McLaren (voice)', 'Emily O’Brien (voice)']
	}
];

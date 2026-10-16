export const demoTeams = [
  {
    id: 'realmadrid',
    name: 'Real Madrid CF',
    shortName: 'Real Madrid',
    code: 'RMA',
    country: 'Spain',
    leagueId: 'laliga',
    founded: 1902,
    stadium: 'Santiago Bernabéu',
    capacity: '84,744',
    manager: 'Carlo Ancelotti',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#FFFFFF',
    secondaryColor: '#FFD700',
    position: 1,
    points: 67,
    form: ['W', 'W', 'W', 'D', 'W'],
    stats: {
      matches: 28,
      wins: 21,
      draws: 4,
      losses: 3,
      goalsFor: 66,
      goalsAgainst: 21,
      cleanSheets: 13,
      avgPossession: 61.4,
      passAccuracy: 89.2
    },
    topScorers: [
      { name: 'Kylian Mbappé', goals: 21, assists: 6 },
      { name: 'Vinícius Júnior', goals: 16, assists: 11 },
      { name: 'Jude Bellingham', goals: 12, assists: 9 },
      { name: 'Rodrygo', goals: 8, assists: 7 }
    ],
    squad: [
      { id: 'tibok', name: 'Thibaut Courtois', number: 1, position: 'Goalkeeper', nationality: 'Belgium', age: 32 },
      { id: 'carva', name: 'Dani Carvajal', number: 2, position: 'Defender', nationality: 'Spain', age: 33 },
      { id: 'militao', name: 'Éder Militão', number: 3, position: 'Defender', nationality: 'Brazil', age: 27 },
      { id: 'rudiger', name: 'Antonio Rüdiger', number: 22, position: 'Defender', nationality: 'Germany', age: 32 },
      { id: 'mendy', name: 'Ferland Mendy', number: 23, position: 'Defender', nationality: 'France', age: 29 },
      { id: 'valverde', name: 'Federico Valverde', number: 8, position: 'Midfielder', nationality: 'Uruguay', age: 26 },
      { id: 'tchouameni', name: 'Aurélien Tchouaméni', number: 14, position: 'Midfielder', nationality: 'France', age: 25 },
      { id: 'camavinga', name: 'Eduardo Camavinga', number: 6, position: 'Midfielder', nationality: 'France', age: 22 },
      { id: 'bellingham', name: 'Jude Bellingham', number: 5, position: 'Midfielder', nationality: 'England', age: 21 },
      { id: 'vini', name: 'Vinícius Júnior', number: 7, position: 'Forward', nationality: 'Brazil', age: 24 },
      { id: 'mbappe', name: 'Kylian Mbappé', number: 9, position: 'Forward', nationality: 'France', age: 26 },
      { id: 'rodrygo', name: 'Rodrygo Goes', number: 11, position: 'Forward', nationality: 'Brazil', age: 24 }
    ],
    trophies: [
      { name: 'UEFA Champions League', count: 15 },
      { name: 'La Liga', count: 36 },
      { name: 'Copa del Rey', count: 20 },
      { name: 'FIFA Club World Cup', count: 5 }
    ]
  },
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    shortName: 'Barcelona',
    code: 'FCB',
    country: 'Spain',
    leagueId: 'laliga',
    founded: 1899,
    stadium: 'Spotify Camp Nou',
    capacity: '105,000',
    manager: 'Hansi Flick',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#004D98',
    secondaryColor: '#A50044',
    position: 2,
    points: 65,
    form: ['W', 'W', 'D', 'W', 'W'],
    stats: {
      matches: 28,
      wins: 20,
      draws: 5,
      losses: 3,
      goalsFor: 71,
      goalsAgainst: 28,
      cleanSheets: 11,
      avgPossession: 64.8,
      passAccuracy: 90.1
    },
    topScorers: [
      { name: 'Robert Lewandowski', goals: 22, assists: 4 },
      { name: 'Raphinha', goals: 17, assists: 12 },
      { name: 'Lamine Yamal', goals: 11, assists: 14 },
      { name: 'Dani Olmo', goals: 9, assists: 5 }
    ],
    squad: [
      { id: 'terstegen', name: 'Marc-André ter Stegen', number: 1, position: 'Goalkeeper', nationality: 'Germany', age: 32 },
      { id: 'kounde', name: 'Jules Koundé', number: 23, position: 'Defender', nationality: 'France', age: 26 },
      { id: 'cubarsi', name: 'Pau Cubarsí', number: 2, position: 'Defender', nationality: 'Spain', age: 18 },
      { id: 'martinez', name: 'Íñigo Martínez', number: 5, position: 'Defender', nationality: 'Spain', age: 33 },
      { id: 'balde', name: 'Alejandro Balde', number: 3, position: 'Defender', nationality: 'Spain', age: 21 },
      { id: 'casado', name: 'Marc Casadó', number: 17, position: 'Midfielder', nationality: 'Spain', age: 21 },
      { id: 'pedri', name: 'Pedri González', number: 8, position: 'Midfielder', nationality: 'Spain', age: 22 },
      { id: 'gavi', name: 'Pablo Gavi', number: 6, position: 'Midfielder', nationality: 'Spain', age: 20 },
      { id: 'yamal', name: 'Lamine Yamal', number: 19, position: 'Forward', nationality: 'Spain', age: 17 },
      { id: 'lewa', name: 'Robert Lewandowski', number: 9, position: 'Forward', nationality: 'Poland', age: 36 },
      { id: 'raphinha', name: 'Raphinha Belloli', number: 11, position: 'Forward', nationality: 'Brazil', age: 28 }
    ],
    trophies: [
      { name: 'UEFA Champions League', count: 5 },
      { name: 'La Liga', count: 27 },
      { name: 'Copa del Rey', count: 31 }
    ]
  },
  {
    id: 'mancity',
    name: 'Manchester City FC',
    shortName: 'Man City',
    code: 'MCI',
    country: 'England',
    leagueId: 'epl',
    founded: 1880,
    stadium: 'Etihad Stadium',
    capacity: '53,400',
    manager: 'Pep Guardiola',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#6CABDD',
    secondaryColor: '#1C2C5B',
    position: 1,
    points: 65,
    form: ['W', 'W', 'D', 'W', 'W'],
    stats: {
      matches: 28,
      wins: 20,
      draws: 5,
      losses: 3,
      goalsFor: 68,
      goalsAgainst: 24,
      cleanSheets: 14,
      avgPossession: 67.2,
      passAccuracy: 91.5
    },
    topScorers: [
      { name: 'Erling Haaland', goals: 24, assists: 3 },
      { name: 'Phil Foden', goals: 14, assists: 8 },
      { name: 'Kevin De Bruyne', goals: 6, assists: 13 }
    ],
    squad: [
      { id: 'ederson', name: 'Ederson Moraes', number: 31, position: 'Goalkeeper', nationality: 'Brazil', age: 31 },
      { id: 'walker', name: 'Kyle Walker', number: 2, position: 'Defender', nationality: 'England', age: 34 },
      { id: 'dias', name: 'Rúben Dias', number: 3, position: 'Defender', nationality: 'Portugal', age: 27 },
      { id: 'gvardiol', name: 'Joško Gvardiol', number: 24, position: 'Defender', nationality: 'Croatia', age: 23 },
      { id: 'rodri', name: 'Rodri Cascante', number: 16, position: 'Midfielder', nationality: 'Spain', age: 28 },
      { id: 'kdb', name: 'Kevin De Bruyne', number: 17, position: 'Midfielder', nationality: 'Belgium', age: 33 },
      { id: 'foden', name: 'Phil Foden', number: 47, position: 'Midfielder', nationality: 'England', age: 24 },
      { id: 'haaland', name: 'Erling Haaland', number: 9, position: 'Forward', nationality: 'Norway', age: 24 }
    ],
    trophies: [
      { name: 'UEFA Champions League', count: 1 },
      { name: 'Premier League', count: 10 },
      { name: 'FA Cup', count: 7 }
    ]
  },
  {
    id: 'arsenal',
    name: 'Arsenal FC',
    shortName: 'Arsenal',
    code: 'ARS',
    country: 'England',
    leagueId: 'epl',
    founded: 1886,
    stadium: 'Emirates Stadium',
    capacity: '60,704',
    manager: 'Mikel Arteta',
    logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#EF0107',
    secondaryColor: '#063672',
    position: 2,
    points: 63,
    form: ['W', 'W', 'W', 'D', 'W'],
    stats: {
      matches: 28,
      wins: 19,
      draws: 6,
      losses: 3,
      goalsFor: 62,
      goalsAgainst: 22,
      cleanSheets: 15,
      avgPossession: 60.1,
      passAccuracy: 88.3
    },
    topScorers: [
      { name: 'Bukayo Saka', goals: 13, assists: 12 },
      { name: 'Kai Havertz', goals: 12, assists: 6 },
      { name: 'Martin Ødegaard', goals: 8, assists: 10 }
    ],
    squad: [
      { id: 'raya', name: 'David Raya', number: 22, position: 'Goalkeeper', nationality: 'Spain', age: 29 },
      { id: 'saliba', name: 'William Saliba', number: 2, position: 'Defender', nationality: 'France', age: 23 },
      { id: 'gabriel', name: 'Gabriel Magalhães', number: 6, position: 'Defender', nationality: 'Brazil', age: 27 },
      { id: 'rice', name: 'Declan Rice', number: 41, position: 'Midfielder', nationality: 'England', age: 26 },
      { id: 'odegaard', name: 'Martin Ødegaard', number: 8, position: 'Midfielder', nationality: 'Norway', age: 26 },
      { id: 'saka', name: 'Bukayo Saka', number: 7, position: 'Forward', nationality: 'England', age: 23 }
    ],
    trophies: [
      { name: 'Premier League', count: 13 },
      { name: 'FA Cup', count: 14 }
    ]
  },
  {
    id: 'bayern',
    name: 'FC Bayern Munich',
    shortName: 'Bayern',
    code: 'BAY',
    country: 'Germany',
    leagueId: 'bundesliga',
    founded: 1900,
    stadium: 'Allianz Arena',
    capacity: '75,024',
    manager: 'Vincent Kompany',
    logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#DC052D',
    secondaryColor: '#0066B2',
    position: 1,
    points: 63,
    form: ['W', 'W', 'W', 'L', 'W'],
    stats: {
      matches: 26,
      wins: 20,
      draws: 3,
      losses: 3,
      goalsFor: 74,
      goalsAgainst: 25,
      cleanSheets: 12,
      avgPossession: 66.5,
      passAccuracy: 89.8
    },
    topScorers: [
      { name: 'Harry Kane', goals: 27, assists: 7 },
      { name: 'Jamal Musiala', goals: 13, assists: 8 },
      { name: 'Michael Olise', goals: 10, assists: 9 }
    ],
    squad: [
      { id: 'neuer', name: 'Manuel Neuer', number: 1, position: 'Goalkeeper', nationality: 'Germany', age: 38 },
      { id: 'kimmich', name: 'Joshua Kimmich', number: 6, position: 'Midfielder', nationality: 'Germany', age: 30 },
      { id: 'musiala', name: 'Jamal Musiala', number: 42, position: 'Midfielder', nationality: 'Germany', age: 22 },
      { id: 'kane', name: 'Harry Kane', number: 9, position: 'Forward', nationality: 'England', age: 31 }
    ],
    trophies: [
      { name: 'UEFA Champions League', count: 6 },
      { name: 'Bundesliga', count: 33 }
    ]
  },
  {
    id: 'paxtakor',
    name: 'FC Paxtakor Tashkent',
    shortName: 'Paxtakor',
    code: 'PAK',
    country: 'Uzbekistan',
    leagueId: 'uzbekistan',
    founded: 1956,
    stadium: 'Pakhtakor Central Stadium',
    capacity: '35,000',
    manager: 'Maksim Shatskikh',
    logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#FDD000',
    secondaryColor: '#003399',
    position: 1,
    points: 52,
    form: ['W', 'W', 'W', 'D', 'W'],
    stats: {
      matches: 22,
      wins: 16,
      draws: 4,
      losses: 2,
      goalsFor: 47,
      goalsAgainst: 16,
      cleanSheets: 11,
      avgPossession: 58.6,
      passAccuracy: 84.7
    },
    topScorers: [
      { name: 'Dragan Ćeran', goals: 15, assists: 5 },
      { name: 'Igor Sergeyev', goals: 9, assists: 3 },
      { name: 'Dostonbek Khamdamov', goals: 7, assists: 6 }
    ],
    squad: [
      { id: 'suyunov', name: 'Eldorbek Suyunov', number: 35, position: 'Goalkeeper', nationality: 'Uzbekistan', age: 33 },
      { id: 'alijonov', name: 'Khojiakbar Alijonov', number: 3, position: 'Defender', nationality: 'Uzbekistan', age: 27 },
      { id: 'azmiddinov', name: 'Shahzod Azmiddinov', number: 88, position: 'Defender', nationality: 'Uzbekistan', age: 24 },
      { id: 'sobirkhodjaev', name: 'Sardor Sobirkhodjaev', number: 27, position: 'Midfielder', nationality: 'Uzbekistan', age: 29 },
      { id: 'ceran', name: 'Dragan Ćeran', number: 10, position: 'Forward', nationality: 'Serbia', age: 37 }
    ],
    trophies: [
      { name: 'Uzbekistan Super League', count: 16 },
      { name: 'Uzbekistan Cup', count: 13 }
    ]
  },
  {
    id: 'navbahor',
    name: 'FC Navbahor Namangan',
    shortName: 'Navbahor',
    code: 'NAV',
    country: 'Uzbekistan',
    leagueId: 'uzbekistan',
    founded: 1978,
    stadium: 'Markaziy Stadium Namangan',
    capacity: '22,000',
    manager: 'Samvel Babayan',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&auto=format&fit=crop&q=80',
    primaryColor: '#002B49',
    secondaryColor: '#FF6F00',
    position: 3,
    points: 46,
    form: ['W', 'W', 'L', 'W', 'D'],
    stats: {
      matches: 22,
      wins: 14,
      draws: 4,
      losses: 4,
      goalsFor: 39,
      goalsAgainst: 18,
      cleanSheets: 9,
      avgPossession: 54.2,
      passAccuracy: 81.3
    },
    topScorers: [
      { name: 'Toma Tabatadze', goals: 11, assists: 3 },
      { name: 'Jamshid Iskanderov', goals: 6, assists: 8 }
    ],
    squad: [
      { id: 'yusupov', name: 'Utkir Yusupov', number: 1, position: 'Goalkeeper', nationality: 'Uzbekistan', age: 33 },
      { id: 'golban', name: 'Danijel Golban', number: 4, position: 'Defender', nationality: 'Croatia', age: 28 },
      { id: 'iskanderov', name: 'Jamshid Iskanderov', number: 10, position: 'Midfielder', nationality: 'Uzbekistan', age: 31 }
    ],
    trophies: [
      { name: 'Uzbekistan Super League', count: 1 },
      { name: 'Uzbekistan Cup', count: 3 }
    ]
  }
];

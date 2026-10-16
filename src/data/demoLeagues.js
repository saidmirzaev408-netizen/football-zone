export const demoLeagues = [
  {
    id: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'UCL',
    country: 'Europe',
    type: 'Cup / Tournament',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 36,
    matchesPlayed: 144,
    totalGoals: 432,
    avgGoalsPerMatch: 3.0,
    topScorer: 'Erling Haaland (Man City) - 9 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'mancity', team: 'Manchester City', played: 8, won: 6, drawn: 2, lost: 0, gf: 24, ga: 7, gd: 17, points: 20, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, teamId: 'realmadrid', team: 'Real Madrid', played: 8, won: 6, drawn: 1, lost: 1, gf: 21, ga: 9, gd: 12, points: 19, form: ['W', 'L', 'W', 'W', 'W'] },
      { rank: 3, teamId: 'barcelona', team: 'FC Barcelona', played: 8, won: 5, drawn: 2, lost: 1, gf: 22, ga: 11, gd: 11, points: 17, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 4, teamId: 'bayern', team: 'Bayern Munich', played: 8, won: 5, drawn: 1, lost: 2, gf: 20, ga: 10, gd: 10, points: 16, form: ['W', 'D', 'W', 'L', 'W'] },
      { rank: 5, teamId: 'arsenal', team: 'Arsenal', played: 8, won: 5, drawn: 1, lost: 2, gf: 17, ga: 8, gd: 9, points: 16, form: ['W', 'W', 'L', 'W', 'W'] },
      { rank: 6, teamId: 'psg', team: 'Paris Saint-Germain', played: 8, won: 4, drawn: 2, lost: 2, gf: 18, ga: 12, gd: 6, points: 14, form: ['D', 'W', 'W', 'L', 'W'] },
      { rank: 7, teamId: 'inter', team: 'Inter Milan', played: 8, won: 4, drawn: 2, lost: 2, gf: 14, ga: 9, gd: 5, points: 14, form: ['W', 'D', 'W', 'W', 'L'] },
      { rank: 8, teamId: 'liverpool', team: 'Liverpool', played: 8, won: 4, drawn: 1, lost: 3, gf: 16, ga: 13, gd: 3, points: 13, form: ['L', 'W', 'W', 'W', 'L'] }
    ]
  },
  {
    id: 'epl',
    name: 'Premier League',
    shortName: 'EPL',
    country: 'England',
    type: 'League',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 20,
    matchesPlayed: 28,
    totalGoals: 820,
    avgGoalsPerMatch: 2.92,
    topScorer: 'Erling Haaland - 24 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'mancity', team: 'Manchester City', played: 28, won: 20, drawn: 5, lost: 3, gf: 68, ga: 24, gd: 44, points: 65, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, teamId: 'arsenal', team: 'Arsenal', played: 28, won: 19, drawn: 6, lost: 3, gf: 62, ga: 22, gd: 40, points: 63, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 3, teamId: 'liverpool', team: 'Liverpool', played: 28, won: 18, drawn: 7, lost: 3, gf: 65, ga: 29, gd: 36, points: 61, form: ['D', 'W', 'W', 'W', 'D'] },
      { rank: 4, teamId: 'astonvilla', team: 'Aston Villa', played: 28, won: 15, drawn: 6, lost: 7, gf: 51, ga: 38, gd: 13, points: 51, form: ['W', 'L', 'W', 'W', 'L'] },
      { rank: 5, teamId: 'tottenham', team: 'Tottenham Hotspur', played: 28, won: 14, drawn: 5, lost: 9, gf: 54, ga: 44, gd: 10, points: 47, form: ['L', 'W', 'D', 'L', 'W'] },
      { rank: 6, teamId: 'chelsea', team: 'Chelsea', played: 28, won: 13, drawn: 7, lost: 8, gf: 49, ga: 41, gd: 8, points: 46, form: ['W', 'W', 'L', 'D', 'W'] },
      { rank: 7, teamId: 'manunited', team: 'Manchester United', played: 28, won: 13, drawn: 5, lost: 10, gf: 43, ga: 40, gd: 3, points: 44, form: ['D', 'W', 'W', 'L', 'D'] },
      { rank: 8, teamId: 'newcastle', team: 'Newcastle United', played: 28, won: 12, drawn: 6, lost: 10, gf: 48, ga: 42, gd: 6, points: 42, form: ['W', 'L', 'D', 'W', 'L'] }
    ]
  },
  {
    id: 'laliga',
    name: 'La Liga EA SPORTS',
    shortName: 'La Liga',
    country: 'Spain',
    type: 'League',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 20,
    matchesPlayed: 28,
    totalGoals: 730,
    avgGoalsPerMatch: 2.61,
    topScorer: 'Kylian Mbappé - 21 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'realmadrid', team: 'Real Madrid', played: 28, won: 21, drawn: 4, lost: 3, gf: 66, ga: 21, gd: 45, points: 67, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 2, teamId: 'barcelona', team: 'FC Barcelona', played: 28, won: 20, drawn: 5, lost: 3, gf: 71, ga: 28, gd: 43, points: 65, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 3, teamId: 'atletico', team: 'Atlético Madrid', played: 28, won: 17, drawn: 6, lost: 5, gf: 50, ga: 25, gd: 25, points: 57, form: ['W', 'D', 'W', 'W', 'L'] },
      { rank: 4, teamId: 'athletic', team: 'Athletic Club', played: 28, won: 14, drawn: 7, lost: 7, gf: 44, ga: 30, gd: 14, points: 49, form: ['D', 'W', 'L', 'W', 'D'] },
      { rank: 5, teamId: 'villarreal', team: 'Villarreal', played: 28, won: 13, drawn: 6, lost: 9, gf: 47, ga: 41, gd: 6, points: 45, form: ['W', 'L', 'W', 'D', 'W'] }
    ]
  },
  {
    id: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    country: 'Italy',
    type: 'League',
    logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 20,
    matchesPlayed: 28,
    totalGoals: 710,
    avgGoalsPerMatch: 2.53,
    topScorer: 'Lautaro Martínez - 19 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'inter', team: 'Inter Milan', played: 28, won: 20, drawn: 5, lost: 3, gf: 63, ga: 19, gd: 44, points: 65, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 2, teamId: 'juventus', team: 'Juventus', played: 28, won: 17, drawn: 8, lost: 3, gf: 48, ga: 20, gd: 28, points: 59, form: ['D', 'W', 'D', 'W', 'W'] },
      { rank: 3, teamId: 'napoli', team: 'Napoli', played: 28, won: 17, drawn: 5, lost: 6, gf: 52, ga: 26, gd: 26, points: 56, form: ['W', 'L', 'W', 'W', 'W'] },
      { rank: 4, teamId: 'milan', team: 'AC Milan', played: 28, won: 16, drawn: 6, lost: 6, gf: 51, ga: 32, gd: 19, points: 54, form: ['L', 'W', 'W', 'D', 'W'] }
    ]
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    country: 'Germany',
    type: 'League',
    logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 18,
    matchesPlayed: 26,
    totalGoals: 835,
    avgGoalsPerMatch: 3.21,
    topScorer: 'Harry Kane - 27 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'bayern', team: 'Bayern Munich', played: 26, won: 20, drawn: 3, lost: 3, gf: 74, ga: 25, gd: 49, points: 63, form: ['W', 'W', 'W', 'L', 'W'] },
      { rank: 2, teamId: 'leverkusen', team: 'Bayer Leverkusen', played: 26, won: 18, drawn: 6, lost: 2, gf: 64, ga: 28, gd: 36, points: 60, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 3, teamId: 'dortmund', team: 'Borussia Dortmund', played: 26, won: 15, drawn: 5, lost: 6, gf: 55, ga: 34, gd: 21, points: 50, form: ['W', 'W', 'L', 'W', 'W'] }
    ]
  },
  {
    id: 'uzbekistan',
    name: "Uzbekistan Super League (O'zbekiston Superligasi)",
    shortName: 'Superliga UZB',
    country: 'Uzbekistan',
    type: 'League',
    logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=120&auto=format&fit=crop&q=80',
    currentSeason: '2025/2026',
    teamsCount: 14,
    matchesPlayed: 22,
    totalGoals: 345,
    avgGoalsPerMatch: 2.48,
    topScorer: 'Dragan Ćeran (Paxtakor) - 15 goals',
    featured: true,
    standings: [
      { rank: 1, teamId: 'paxtakor', team: 'FC Paxtakor Tashkent', played: 22, won: 16, drawn: 4, lost: 2, gf: 47, ga: 16, gd: 31, points: 52, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 2, teamId: 'nasaf', team: 'FC Nasaf Qarshi', played: 22, won: 15, drawn: 5, lost: 2, gf: 41, ga: 14, gd: 27, points: 50, form: ['W', 'D', 'W', 'W', 'W'] },
      { rank: 3, teamId: 'navbahor', team: 'FC Navbahor Namangan', played: 22, won: 14, drawn: 4, lost: 4, gf: 39, ga: 18, gd: 21, points: 46, form: ['W', 'W', 'L', 'W', 'D'] },
      { rank: 4, teamId: 'bunyodkor', team: 'FC Bunyodkor', played: 22, won: 11, drawn: 6, lost: 5, gf: 32, ga: 24, gd: 8, points: 39, form: ['D', 'W', 'W', 'L', 'W'] },
      { rank: 5, teamId: 'sogdiana', team: 'Sogdiana Jizzakh', played: 22, won: 10, drawn: 5, lost: 7, gf: 29, ga: 25, gd: 4, points: 35, form: ['L', 'W', 'D', 'W', 'L'] }
    ]
  }
];

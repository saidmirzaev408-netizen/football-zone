export const demoMatches = [
  {
    id: 'match-ucl-rma-mci',
    leagueId: 'ucl',
    leagueName: 'UEFA Champions League',
    leagueRound: 'Quarter-Final • 2nd Leg (Agg 3-3)',
    status: 'LIVE', // 'LIVE', 'FT', 'SCHEDULED'
    minute: 68,
    homeTeam: {
      id: 'realmadrid',
      name: 'Real Madrid',
      shortName: 'Real Madrid',
      code: 'RMA',
      score: 2,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=160&auto=format&fit=crop&q=80',
      color: '#FFFFFF'
    },
    awayTeam: {
      id: 'mancity',
      name: 'Manchester City',
      shortName: 'Man City',
      code: 'MCI',
      score: 2,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=160&auto=format&fit=crop&q=80',
      color: '#6CABDD'
    },
    venue: 'Santiago Bernabéu, Madrid',
    referee: 'Szymon Marciniak (Poland)',
    attendance: '82,450',
    startTime: 'Today, 20:00',
    votes: { home: 1840, draw: 620, away: 1530 },
    odds: { home: '2.45', draw: '3.40', away: '2.80' },
    events: [
      { id: 'e1', minute: 14, type: 'goal', team: 'away', player: 'Erling Haaland', assist: 'Kevin De Bruyne', detail: 'Clinical strike into the bottom right corner.' },
      { id: 'e2', minute: 29, type: 'goal', team: 'home', player: 'Kylian Mbappé', assist: 'Vinícius Júnior', detail: 'Blistering counter-attack, curled past Ederson.' },
      { id: 'e3', minute: 41, type: 'yellow_card', team: 'away', player: 'Rúben Dias', detail: 'Tactical foul on Jude Bellingham.' },
      { id: 'e4', minute: 45, type: 'info', team: 'neutral', player: 'Half Time', detail: 'End of 1st half. Intense tactical chess.' },
      { id: 'e5', minute: 52, type: 'goal', team: 'away', player: 'Rodri Cascante', assist: 'Phil Foden', detail: 'Thunderous volley from 25 yards out into top bins!' },
      { id: 'e6', minute: 58, type: 'yellow_card', team: 'home', player: 'Aurélien Tchouaméni', detail: 'Late tackle on Bernardo Silva.' },
      { id: 'e7', minute: 61, type: 'goal', team: 'home', player: 'Vinícius Júnior', assist: 'Federico Valverde', detail: 'Sensational solo dribble past two defenders and chips the keeper!' },
      { id: 'e8', minute: 66, type: 'sub', team: 'away', playerIn: 'Jack Grealish', playerOut: 'Jérémy Doku', detail: 'Substitution tactical change.' }
    ],
    stats: {
      possession: [46, 54],
      expectedGoals: ['1.85', '1.92'],
      totalShots: [14, 16],
      shotsOnTarget: [6, 7],
      shotsOffTarget: [5, 6],
      blockedShots: [3, 3],
      cornerKicks: [5, 8],
      offsides: [2, 1],
      fouls: [10, 11],
      yellowCards: [1, 2],
      redCards: [0, 0],
      passes: [412, 532],
      passAccuracy: ['87%', '91%'],
      bigChances: [3, 4]
    },
    lineups: {
      home: {
        formation: '4-3-3',
        manager: 'Carlo Ancelotti',
        players: [
          { number: 1, name: 'Courtois', role: 'GK', x: 50, y: 88, rating: 7.2 },
          { number: 2, name: 'Carvajal', role: 'RB', x: 84, y: 72, rating: 7.0 },
          { number: 3, name: 'Militão', role: 'CB', x: 62, y: 74, rating: 7.4 },
          { number: 22, name: 'Rüdiger', role: 'CB', x: 38, y: 74, rating: 7.6 },
          { number: 23, name: 'Mendy', role: 'LB', x: 16, y: 72, rating: 6.9 },
          { number: 8, name: 'Valverde', role: 'RCM', x: 74, y: 52, rating: 8.1 },
          { number: 14, name: 'Tchouaméni', role: 'DM', x: 50, y: 56, rating: 7.1 },
          { number: 5, name: 'Bellingham', role: 'LCM', x: 26, y: 50, rating: 8.3 },
          { number: 11, name: 'Rodrygo', role: 'RW', x: 82, y: 26, rating: 7.3 },
          { number: 9, name: 'Mbappé', role: 'ST', x: 50, y: 18, rating: 8.7, captain: false },
          { number: 7, name: 'Vinícius Jr', role: 'LW', x: 18, y: 24, rating: 8.9 }
        ]
      },
      away: {
        formation: '4-1-4-1',
        manager: 'Pep Guardiola',
        players: [
          { number: 31, name: 'Ederson', role: 'GK', x: 50, y: 88, rating: 6.8 },
          { number: 2, name: 'Walker', role: 'RB', x: 84, y: 72, rating: 7.2 },
          { number: 3, name: 'Dias', role: 'CB', x: 62, y: 75, rating: 6.9 },
          { number: 25, name: 'Akanji', role: 'CB', x: 38, y: 75, rating: 7.0 },
          { number: 24, name: 'Gvardiol', role: 'LB', x: 16, y: 72, rating: 7.4 },
          { number: 16, name: 'Rodri', role: 'DM', x: 50, y: 60, rating: 8.8 },
          { number: 20, name: 'Bernardo', role: 'RM', x: 80, y: 44, rating: 7.5 },
          { number: 17, name: 'De Bruyne', role: 'AM', x: 60, y: 40, rating: 8.4 },
          { number: 47, name: 'Foden', role: 'AM', x: 40, y: 40, rating: 7.9 },
          { number: 11, name: 'Doku', role: 'LM', x: 20, y: 44, rating: 7.1 },
          { number: 9, name: 'Haaland', role: 'ST', x: 50, y: 18, rating: 8.2 }
        ]
      }
    },
    h2h: [
      { date: 'Apr 2024', home: 'Man City', away: 'Real Madrid', score: '1 - 1 (P3-4)' },
      { date: 'Apr 2024', home: 'Real Madrid', away: 'Man City', score: '3 - 3' },
      { date: 'May 2023', home: 'Man City', away: 'Real Madrid', score: '4 - 0' },
      { date: 'May 2023', home: 'Real Madrid', away: 'Man City', score: '1 - 1' },
      { date: 'May 2022', home: 'Real Madrid', away: 'Man City', score: '3 - 1 (AET)' }
    ],
    commentary: [
      { minute: 67, text: 'Real Madrid are on the front foot! Vinícius cuts inside and unleashes a low drive, Ederson scrambles to parry it out for a corner!' },
      { minute: 64, text: 'Pep Guardiola is agitated on the sideline, demanding composure in midfield after conceding that dazzling Vinicius equalizer.' },
      { minute: 61, text: 'GOAL! Real Madrid 2-2 Manchester City! Vinicius Junior dances through the defense with jaw-dropping flair and finishes smoothly!' },
      { minute: 58, text: 'Yellow card shown to Tchouameni after stopping Bernardo Silva during a dangerous break.' },
      { minute: 52, text: 'WHAT A GOAL! Manchester City lead 2-1! Rodri drills an unstoppable rocket straight into the upper right postage stamp!' }
    ]
  },
  {
    id: 'match-epl-ars-che',
    leagueId: 'epl',
    leagueName: 'Premier League',
    leagueRound: 'Matchday 29 • London Derby',
    status: 'LIVE',
    minute: 34,
    homeTeam: {
      id: 'arsenal',
      name: 'Arsenal',
      shortName: 'Arsenal',
      code: 'ARS',
      score: 1,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=160&auto=format&fit=crop&q=80',
      color: '#EF0107'
    },
    awayTeam: {
      id: 'chelsea',
      name: 'Chelsea',
      shortName: 'Chelsea',
      code: 'CHE',
      score: 0,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=160&auto=format&fit=crop&q=80',
      color: '#034694'
    },
    venue: 'Emirates Stadium, London',
    referee: 'Michael Oliver',
    attendance: '60,250',
    startTime: 'Today, 19:30',
    votes: { home: 1420, draw: 410, away: 630 },
    odds: { home: '1.65', draw: '4.10', away: '5.25' },
    events: [
      { id: 'ea1', minute: 21, type: 'goal', team: 'home', player: 'Bukayo Saka', assist: 'Martin Ødegaard', detail: 'Curled masterfully inside the far post with his left foot.' },
      { id: 'ea2', minute: 28, type: 'yellow_card', team: 'away', player: 'Moisés Caicedo', detail: 'Hard slide tackle on Declan Rice.' }
    ],
    stats: {
      possession: [59, 41],
      expectedGoals: ['1.14', '0.28'],
      totalShots: [8, 3],
      shotsOnTarget: [4, 1],
      shotsOffTarget: [3, 2],
      blockedShots: [1, 0],
      cornerKicks: [4, 1],
      offsides: [1, 2],
      fouls: [4, 7],
      yellowCards: [0, 1],
      redCards: [0, 0],
      passes: [238, 164],
      passAccuracy: ['89%', '82%'],
      bigChances: [2, 0]
    },
    lineups: {
      home: {
        formation: '4-3-3',
        manager: 'Mikel Arteta',
        players: [
          { number: 22, name: 'Raya', role: 'GK', x: 50, y: 88, rating: 7.1 },
          { number: 4, name: 'White', role: 'RB', x: 84, y: 72, rating: 7.4 },
          { number: 2, name: 'Saliba', role: 'CB', x: 62, y: 74, rating: 7.7 },
          { number: 6, name: 'Gabriel', role: 'CB', x: 38, y: 74, rating: 7.5 },
          { number: 12, name: 'Timber', role: 'LB', x: 16, y: 72, rating: 7.2 },
          { number: 41, name: 'Rice', role: 'CM', x: 65, y: 52, rating: 7.8 },
          { number: 5, name: 'Partey', role: 'DM', x: 50, y: 58, rating: 7.3 },
          { number: 8, name: 'Ødegaard', role: 'CAM', x: 35, y: 46, rating: 8.4 },
          { number: 7, name: 'Saka', role: 'RW', x: 82, y: 24, rating: 8.6 },
          { number: 29, name: 'Havertz', role: 'ST', x: 50, y: 18, rating: 7.2 },
          { number: 11, name: 'Martinelli', role: 'LW', x: 18, y: 24, rating: 7.5 }
        ]
      },
      away: {
        formation: '4-2-3-1',
        manager: 'Enzo Maresca',
        players: [
          { number: 1, name: 'Sánchez', role: 'GK', x: 50, y: 88, rating: 6.5 },
          { number: 27, name: 'Gusto', role: 'RB', x: 84, y: 72, rating: 6.8 },
          { number: 29, name: 'Fofana', role: 'CB', x: 62, y: 74, rating: 6.7 },
          { number: 6, name: 'Colwill', role: 'CB', x: 38, y: 74, rating: 6.9 },
          { number: 3, name: 'Cucurella', role: 'LB', x: 16, y: 72, rating: 6.6 },
          { number: 25, name: 'Caicedo', role: 'DM', x: 60, y: 56, rating: 6.4 },
          { number: 8, name: 'Enzo', role: 'DM', x: 40, y: 56, rating: 6.8 },
          { number: 11, name: 'Madueke', role: 'RW', x: 80, y: 38, rating: 6.7 },
          { number: 20, name: 'Palmer', role: 'CAM', x: 50, y: 36, rating: 7.2 },
          { number: 7, name: 'Neto', role: 'LW', x: 20, y: 38, rating: 6.8 },
          { number: 15, name: 'Jackson', role: 'ST', x: 50, y: 18, rating: 6.3 }
        ]
      }
    },
    h2h: [
      { date: 'Nov 2024', home: 'Chelsea', away: 'Arsenal', score: '1 - 1' },
      { date: 'Apr 2024', home: 'Arsenal', away: 'Chelsea', score: '5 - 0' },
      { date: 'Oct 2023', home: 'Chelsea', away: 'Arsenal', score: '2 - 2' }
    ],
    commentary: [
      { minute: 33, text: 'Cole Palmer tries an audacious through ball looking for Jackson, but Saliba reads it expertly and intercepts.' },
      { minute: 28, text: 'Moisés Caicedo receives a yellow card for a crunching tackle on Declan Rice.' },
      { minute: 21, text: 'GOAL! 1-0 ARSENAL! Bukayo Saka receives a delightful reverse pass from Martin Ødegaard and slots it cleanly past Robert Sánchez!' }
    ]
  },
  {
    id: 'match-uzb-pak-nav',
    leagueId: 'uzbekistan',
    leagueName: "Uzbekistan Super League (O'zbekiston Superligasi)",
    leagueRound: 'Tur 23 • Oltin Oʻyin / Toshkent Derbisi',
    status: 'LIVE',
    minute: 76,
    homeTeam: {
      id: 'paxtakor',
      name: 'Paxtakor Tashkent',
      shortName: 'Paxtakor',
      code: 'PAK',
      score: 2,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=160&auto=format&fit=crop&q=80',
      color: '#FDD000'
    },
    awayTeam: {
      id: 'navbahor',
      name: 'Navbahor Namangan',
      shortName: 'Navbahor',
      code: 'NAV',
      score: 1,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=160&auto=format&fit=crop&q=80',
      color: '#002B49'
    },
    venue: 'Pakhtakor Central Stadium, Tashkent',
    referee: 'Ilgiz Tantashev (Uzbekistan)',
    attendance: '28,300',
    startTime: 'Today, 18:30',
    votes: { home: 3410, draw: 890, away: 2140 },
    odds: { home: '1.95', draw: '3.20', away: '3.80' },
    events: [
      { id: 'ep1', minute: 12, type: 'goal', team: 'home', player: 'Dragan Ćeran', assist: 'Khojiakbar Alijonov', detail: 'Towering header from a set-piece delivery.' },
      { id: 'ep2', minute: 44, type: 'goal', team: 'away', player: 'Toma Tabatadze', assist: 'Jamshid Iskanderov', detail: 'Lightning volley on the edge of the box.' },
      { id: 'ep3', minute: 59, type: 'goal', team: 'home', player: 'Igor Sergeyev', assist: 'Dragan Ćeran', detail: 'Tapped in from 6 yards out following a goalmouth scramble.' },
      { id: 'ep4', minute: 71, type: 'yellow_card', team: 'away', player: 'Danijel Golban', detail: 'Tripping on the counter.' }
    ],
    stats: {
      possession: [54, 46],
      expectedGoals: ['1.74', '1.18'],
      totalShots: [12, 9],
      shotsOnTarget: [6, 4],
      shotsOffTarget: [4, 4],
      blockedShots: [2, 1],
      cornerKicks: [7, 5],
      offsides: [3, 1],
      fouls: [14, 15],
      yellowCards: [1, 2],
      redCards: [0, 0],
      passes: [380, 315],
      passAccuracy: ['84%', '79%'],
      bigChances: [3, 2]
    },
    lineups: {
      home: {
        formation: '4-2-3-1',
        manager: 'Maksim Shatskikh',
        players: [
          { number: 35, name: 'Suyunov', role: 'GK', x: 50, y: 88, rating: 7.1 },
          { number: 3, name: 'Alijonov', role: 'RB', x: 84, y: 72, rating: 7.9 },
          { number: 88, name: 'Azmiddinov', role: 'CB', x: 62, y: 74, rating: 7.3 },
          { number: 5, name: 'Ortiqboev', role: 'CB', x: 38, y: 74, rating: 7.0 },
          { number: 34, name: 'Sayfiev', role: 'LB', x: 16, y: 72, rating: 7.2 },
          { number: 27, name: 'Sobirkhodjaev', role: 'DM', x: 60, y: 56, rating: 7.5 },
          { number: 8, name: 'Hamrobekov', role: 'DM', x: 40, y: 56, rating: 7.4 },
          { number: 17, name: 'Khamdamov', role: 'RW', x: 80, y: 36, rating: 7.3 },
          { number: 10, name: 'Ćeran', role: 'CAM', x: 50, y: 34, rating: 8.8 },
          { number: 7, name: 'Turgunboev', role: 'LW', x: 20, y: 36, rating: 7.2 },
          { number: 11, name: 'Sergeyev', role: 'ST', x: 50, y: 18, rating: 8.1 }
        ]
      },
      away: {
        formation: '4-3-3',
        manager: 'Samvel Babayan',
        players: [
          { number: 1, name: 'Yusupov', role: 'GK', x: 50, y: 88, rating: 6.9 },
          { number: 22, name: 'Gofurov', role: 'RB', x: 84, y: 72, rating: 6.7 },
          { number: 4, name: 'Golban', role: 'CB', x: 62, y: 74, rating: 6.8 },
          { number: 5, name: 'Milovic', role: 'CB', x: 38, y: 74, rating: 7.0 },
          { number: 13, name: 'Yoʻldoshev', role: 'LB', x: 16, y: 72, rating: 6.6 },
          { number: 14, name: 'Boltaboev', role: 'CM', x: 65, y: 54, rating: 7.1 },
          { number: 6, name: 'Bozorov', role: 'DM', x: 50, y: 60, rating: 6.9 },
          { number: 10, name: 'Iskanderov', role: 'CAM', x: 35, y: 46, rating: 8.2 },
          { number: 17, name: 'Sobirjonov', role: 'RW', x: 82, y: 26, rating: 7.0 },
          { number: 9, name: 'Tabatadze', role: 'ST', x: 50, y: 18, rating: 8.0 },
          { number: 77, name: 'Ismoilov', role: 'LW', x: 18, y: 26, rating: 6.8 }
        ]
      }
    },
    h2h: [
      { date: 'May 2024', home: 'Navbahor', away: 'Paxtakor', score: '1 - 1' },
      { date: 'Oct 2023', home: 'Paxtakor', away: 'Navbahor', score: '2 - 1' },
      { date: 'May 2023', home: 'Navbahor', away: 'Paxtakor', score: '1 - 2' }
    ],
    commentary: [
      { minute: 75, text: 'Paxtakor fans chanting passionately at the Central Stadium as the hosts manage the pace of the clash.' },
      { minute: 71, text: 'Danijel Golban takes down Ćeran to stop a quick break. Yellow card issued.' },
      { minute: 59, text: 'GOAL! 2-1 Paxtakor! Igor Sergeyev taps home after Ćeran’s flicked header was initially parried by Utkir Yusupov!' }
    ]
  },
  {
    id: 'match-laliga-fcb-atm',
    leagueId: 'laliga',
    leagueName: 'La Liga EA SPORTS',
    leagueRound: 'Matchday 28',
    status: 'FT',
    minute: 90,
    homeTeam: {
      id: 'barcelona',
      name: 'FC Barcelona',
      shortName: 'Barcelona',
      code: 'FCB',
      score: 3,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=160&auto=format&fit=crop&q=80',
      color: '#004D98'
    },
    awayTeam: {
      id: 'atletico',
      name: 'Atlético Madrid',
      shortName: 'Atlético',
      code: 'ATM',
      score: 1,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=160&auto=format&fit=crop&q=80',
      color: '#CB3524'
    },
    venue: 'Spotify Camp Nou, Barcelona',
    referee: 'Jesús Gil Manzano',
    attendance: '89,900',
    startTime: 'Today, 16:15',
    votes: { home: 2900, draw: 520, away: 980 },
    odds: { home: '1.80', draw: '3.75', away: '4.20' },
    events: [
      { id: 'eb1', minute: 18, type: 'goal', team: 'home', player: 'Robert Lewandowski', assist: 'Lamine Yamal', detail: 'Sublime trivela pass by Yamal, finished calmly.' },
      { id: 'eb2', minute: 42, type: 'goal', team: 'away', player: 'Antoine Griezmann', assist: 'Rodrigo De Paul', detail: 'Chipped finish over the advancing goalkeeper.' },
      { id: 'eb3', minute: 65, type: 'goal', team: 'home', player: 'Robert Lewandowski', assist: 'Pedri', detail: 'Powerful header off a teasing cross.' },
      { id: 'eb4', minute: 84, type: 'goal', team: 'home', player: 'Raphinha Belloli', assist: 'Dani Olmo', detail: 'Fast break with a drilled finish to seal the three points.' }
    ],
    stats: {
      possession: [63, 37],
      expectedGoals: ['2.65', '0.94'],
      totalShots: [17, 8],
      shotsOnTarget: [9, 3],
      shotsOffTarget: [5, 4],
      blockedShots: [3, 1],
      cornerKicks: [8, 3],
      offsides: [2, 4],
      fouls: [9, 16],
      yellowCards: [1, 4],
      redCards: [0, 0],
      passes: [610, 320],
      passAccuracy: ['91%', '80%'],
      bigChances: [4, 1]
    },
    lineups: {
      home: {
        formation: '4-2-3-1',
        manager: 'Hansi Flick',
        players: [
          { number: 1, name: 'Ter Stegen', role: 'GK', x: 50, y: 88, rating: 7.3 },
          { number: 23, name: 'Koundé', role: 'RB', x: 84, y: 72, rating: 7.7 },
          { number: 2, name: 'Cubarsí', role: 'CB', x: 62, y: 74, rating: 7.9 },
          { number: 5, name: 'Martínez', role: 'CB', x: 38, y: 74, rating: 7.4 },
          { number: 3, name: 'Balde', role: 'LB', x: 16, y: 72, rating: 7.5 },
          { number: 17, name: 'Casadó', role: 'DM', x: 60, y: 56, rating: 7.8 },
          { number: 8, name: 'Pedri', role: 'CM', x: 40, y: 52, rating: 8.6 },
          { number: 19, name: 'Yamal', role: 'RW', x: 82, y: 28, rating: 9.1 },
          { number: 20, name: 'Olmo', role: 'CAM', x: 50, y: 36, rating: 8.0 },
          { number: 11, name: 'Raphinha', role: 'LW', x: 18, y: 28, rating: 8.5 },
          { number: 9, name: 'Lewandowski', role: 'ST', x: 50, y: 18, rating: 9.3 }
        ]
      },
      away: {
        formation: '5-3-2',
        manager: 'Diego Simeone',
        players: [
          { number: 13, name: 'Oblak', role: 'GK', x: 50, y: 88, rating: 6.9 },
          { number: 16, name: 'Molina', role: 'RWB', x: 85, y: 70, rating: 6.4 },
          { number: 24, name: 'Le Normand', role: 'CB', x: 66, y: 76, rating: 6.5 },
          { number: 2, name: 'Giménez', role: 'CB', x: 50, y: 78, rating: 6.7 },
          { number: 21, name: 'Galán', role: 'CB', x: 34, y: 76, rating: 6.2 },
          { number: 17, name: 'Riquelme', role: 'LWB', x: 15, y: 70, rating: 6.3 },
          { number: 5, name: 'De Paul', role: 'CM', x: 65, y: 50, rating: 7.4 },
          { number: 6, name: 'Koke', role: 'DM', x: 50, y: 56, rating: 6.8 },
          { number: 8, name: 'Barrios', role: 'CM', x: 35, y: 50, rating: 6.6 },
          { number: 7, name: 'Griezmann', role: 'ST', x: 60, y: 24, rating: 7.8 },
          { number: 19, name: 'Álvarez', role: 'ST', x: 40, y: 24, rating: 6.9 }
        ]
      }
    },
    h2h: [
      { date: 'Mar 2024', home: 'Atlético', away: 'Barcelona', score: '0 - 3' },
      { date: 'Dec 2023', home: 'Barcelona', away: 'Atlético', score: '1 - 0' }
    ],
    commentary: [
      { minute: 90, text: 'Full Time at Spotify Camp Nou! FC Barcelona clinch an emphatic 3-1 victory over Diego Simeone’s Atlético.' },
      { minute: 84, text: 'GOAL! 3-1 Barcelona! Raphinha caps off a blistering team move with an emphatic blast into the roof of the net!' }
    ]
  },
  {
    id: 'match-bund-bay-lev',
    leagueId: 'bundesliga',
    leagueName: 'Bundesliga',
    leagueRound: 'Matchday 26 • Top of the Table Clash',
    status: 'FT',
    minute: 90,
    homeTeam: {
      id: 'bayern',
      name: 'Bayern Munich',
      shortName: 'Bayern',
      code: 'BAY',
      score: 4,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=160&auto=format&fit=crop&q=80',
      color: '#DC052D'
    },
    awayTeam: {
      id: 'leverkusen',
      name: 'Bayer Leverkusen',
      shortName: 'Leverkusen',
      code: 'B04',
      score: 2,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=160&auto=format&fit=crop&q=80',
      color: '#E32221'
    },
    venue: 'Allianz Arena, Munich',
    referee: 'Felix Zwayer',
    attendance: '75,000',
    startTime: 'Today, 15:30',
    votes: { home: 2100, draw: 650, away: 1100 },
    odds: { home: '1.90', draw: '3.60', away: '3.90' },
    events: [
      { id: 'ek1', minute: 9, type: 'goal', team: 'home', player: 'Harry Kane', assist: 'Michael Olise', detail: 'Slotted in from close range.' },
      { id: 'ek2', minute: 23, type: 'goal', team: 'away', player: 'Florian Wirtz', assist: 'Granit Xhaka', detail: 'Curler from 20 yards.' },
      { id: 'ek3', minute: 45, type: 'goal', team: 'home', player: 'Harry Kane', assist: 'Jamal Musiala', detail: 'Brace for the England captain from penalty spot.' },
      { id: 'ek4', minute: 58, type: 'goal', team: 'home', player: 'Jamal Musiala', assist: 'Harry Kane', detail: 'Magical footwork inside the penalty area.' },
      { id: 'ek5', minute: 74, type: 'goal', team: 'away', player: 'Victor Boniface', assist: 'Jeremie Frimpong', detail: 'Header off a fast counter attack.' },
      { id: 'ek6', minute: 81, type: 'goal', team: 'home', player: 'Michael Olise', assist: 'Leroy Sané', detail: 'Sensational free-kick into top corner.' }
    ],
    stats: {
      possession: [58, 42],
      expectedGoals: ['3.10', '1.65'],
      totalShots: [19, 11],
      shotsOnTarget: [9, 5],
      shotsOffTarget: [7, 4],
      blockedShots: [3, 2],
      cornerKicks: [7, 4],
      offsides: [1, 3],
      fouls: [11, 13],
      yellowCards: [2, 3],
      redCards: [0, 0],
      passes: [520, 390],
      passAccuracy: ['88%', '84%'],
      bigChances: [5, 2]
    },
    lineups: {
      home: {
        formation: '4-2-3-1',
        manager: 'Vincent Kompany',
        players: [
          { number: 1, name: 'Neuer', role: 'GK', x: 50, y: 88, rating: 7.0 },
          { number: 22, name: 'Guerreiro', role: 'RB', x: 84, y: 72, rating: 7.3 },
          { number: 2, name: 'Upamecano', role: 'CB', x: 62, y: 74, rating: 7.2 },
          { number: 3, name: 'Kim', role: 'CB', x: 38, y: 74, rating: 7.5 },
          { number: 19, name: 'Davies', role: 'LB', x: 16, y: 72, rating: 7.6 },
          { number: 6, name: 'Kimmich', role: 'DM', x: 60, y: 56, rating: 8.2 },
          { number: 16, name: 'Pavlović', role: 'DM', x: 40, y: 56, rating: 7.4 },
          { number: 17, name: 'Olise', role: 'RW', x: 80, y: 34, rating: 8.8 },
          { number: 42, name: 'Musiala', role: 'CAM', x: 50, y: 34, rating: 9.0 },
          { number: 7, name: 'Gnabry', role: 'LW', x: 20, y: 34, rating: 7.4 },
          { number: 9, name: 'Kane', role: 'ST', x: 50, y: 18, rating: 9.4 }
        ]
      },
      away: {
        formation: '3-4-2-1',
        manager: 'Xabi Alonso',
        players: [
          { number: 1, name: 'Hrádecký', role: 'GK', x: 50, y: 88, rating: 6.4 },
          { number: 12, name: 'Tapsoba', role: 'CB', x: 74, y: 75, rating: 6.3 },
          { number: 4, name: 'Tah', role: 'CB', x: 50, y: 77, rating: 6.6 },
          { number: 3, name: 'Hincapié', role: 'CB', x: 26, y: 75, rating: 6.4 },
          { number: 30, name: 'Frimpong', role: 'RWB', x: 86, y: 54, rating: 7.6 },
          { number: 34, name: 'Xhaka', role: 'CM', x: 60, y: 56, rating: 7.2 },
          { number: 8, name: 'Andrich', role: 'CM', x: 40, y: 56, rating: 6.8 },
          { number: 20, name: 'Grimaldo', role: 'LWB', x: 14, y: 54, rating: 7.1 },
          { number: 19, name: 'Tella', role: 'CAM', x: 65, y: 36, rating: 6.9 },
          { number: 10, name: 'Wirtz', role: 'CAM', x: 35, y: 36, rating: 8.3 },
          { number: 22, name: 'Boniface', role: 'ST', x: 50, y: 18, rating: 7.7 }
        ]
      }
    },
    h2h: [
      { date: 'Sep 2024', home: 'Bayern', away: 'Leverkusen', score: '1 - 1' },
      { date: 'Feb 2024', home: 'Leverkusen', away: 'Bayern', score: '3 - 0' }
    ],
    commentary: [
      { minute: 90, text: 'Full Time! Bayern Munich claim a statement 4-2 win against the defending champions!' }
    ]
  },
  {
    id: 'match-ucl-psg-liv',
    leagueId: 'ucl',
    leagueName: 'UEFA Champions League',
    leagueRound: 'Quarter-Final • 2nd Leg',
    status: 'SCHEDULED',
    minute: 0,
    homeTeam: {
      id: 'psg',
      name: 'Paris Saint-Germain',
      shortName: 'PSG',
      code: 'PSG',
      score: 0,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=160&auto=format&fit=crop&q=80',
      color: '#004170'
    },
    awayTeam: {
      id: 'liverpool',
      name: 'Liverpool FC',
      shortName: 'Liverpool',
      code: 'LIV',
      score: 0,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=160&auto=format&fit=crop&q=80',
      color: '#C8102E'
    },
    venue: 'Parc des Princes, Paris',
    referee: 'Daniele Orsato',
    attendance: '48,500 expected',
    startTime: 'Today, 21:00 UTC',
    votes: { home: 1650, draw: 720, away: 1980 },
    odds: { home: '2.50', draw: '3.60', away: '2.65' },
    events: [],
    stats: {
      possession: [50, 50],
      expectedGoals: ['0.00', '0.00'],
      totalShots: [0, 0],
      shotsOnTarget: [0, 0],
      shotsOffTarget: [0, 0],
      blockedShots: [0, 0],
      cornerKicks: [0, 0],
      offsides: [0, 0],
      fouls: [0, 0],
      yellowCards: [0, 0],
      redCards: [0, 0],
      passes: [0, 0],
      passAccuracy: ['0%', '0%'],
      bigChances: [0, 0]
    },
    lineups: {
      home: {
        formation: '4-3-3',
        manager: 'Luis Enrique',
        players: [
          { number: 1, name: 'Donnarumma', role: 'GK', x: 50, y: 88, rating: 7.2 },
          { number: 2, name: 'Hakimi', role: 'RB', x: 84, y: 72, rating: 8.1 },
          { number: 5, name: 'Marquinhos', role: 'CB', x: 62, y: 74, rating: 7.6 },
          { number: 51, name: 'Pacho', role: 'CB', x: 38, y: 74, rating: 7.3 },
          { number: 25, name: 'Mendes', role: 'LB', x: 16, y: 72, rating: 7.8 },
          { number: 33, name: 'Zaïre-Emery', role: 'CM', x: 70, y: 52, rating: 7.7 },
          { number: 17, name: 'Vitinha', role: 'DM', x: 50, y: 56, rating: 8.2 },
          { number: 87, name: 'Neves', role: 'CM', x: 30, y: 52, rating: 7.8 },
          { number: 10, name: 'Dembélé', role: 'RW', x: 82, y: 24, rating: 8.3 },
          { number: 9, name: 'Ramos', role: 'ST', x: 50, y: 18, rating: 7.5 },
          { number: 29, name: 'Barcola', role: 'LW', x: 18, y: 24, rating: 8.4 }
        ]
      },
      away: {
        formation: '4-2-3-1',
        manager: 'Arne Slot',
        players: [
          { number: 1, name: 'Alisson', role: 'GK', x: 50, y: 88, rating: 7.8 },
          { number: 66, name: 'Alexander-Arnold', role: 'RB', x: 84, y: 72, rating: 8.4 },
          { number: 5, name: 'Konaté', role: 'CB', x: 62, y: 74, rating: 7.7 },
          { number: 4, name: 'Van Dijk', role: 'CB', x: 38, y: 74, rating: 8.6 },
          { number: 26, name: 'Robertson', role: 'LB', x: 16, y: 72, rating: 7.4 },
          { number: 38, name: 'Gravenberch', role: 'DM', x: 60, y: 56, rating: 8.1 },
          { number: 10, name: 'Mac Allister', role: 'DM', x: 40, y: 56, rating: 8.0 },
          { number: 11, name: 'Salah', role: 'RW', x: 82, y: 26, rating: 9.1 },
          { number: 8, name: 'Szoboszlai', role: 'CAM', x: 50, y: 38, rating: 7.9 },
          { number: 7, name: 'Díaz', role: 'LW', x: 18, y: 26, rating: 8.2 },
          { number: 9, name: 'Darwin Núñez', role: 'ST', x: 50, y: 18, rating: 7.6 }
        ]
      }
    },
    h2h: [
      { date: 'Nov 2018', home: 'PSG', away: 'Liverpool', score: '2 - 1' },
      { date: 'Sep 2018', home: 'Liverpool', away: 'PSG', score: '3 - 2' }
    ],
    commentary: [
      { minute: 0, text: 'Warmups underway inside the electric Parc des Princes atmosphere.' }
    ]
  },
  {
    id: 'match-uzb-nas-bun',
    leagueId: 'uzbekistan',
    leagueName: "Uzbekistan Super League (O'zbekiston Superligasi)",
    leagueRound: 'Tur 23',
    status: 'SCHEDULED',
    minute: 0,
    homeTeam: {
      id: 'nasaf',
      name: 'FC Nasaf Qarshi',
      shortName: 'Nasaf',
      code: 'NAS',
      score: 0,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=160&auto=format&fit=crop&q=80',
      color: '#0054A6'
    },
    awayTeam: {
      id: 'bunyodkor',
      name: 'FC Bunyodkor',
      shortName: 'Bunyodkor',
      code: 'BUN',
      score: 0,
      penaltyScore: null,
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=160&auto=format&fit=crop&q=80',
      color: '#002B49'
    },
    venue: 'Markaziy Stadium Qarshi',
    referee: 'Valentin Kovalenko',
    attendance: '16,500 expected',
    startTime: 'Today, 19:00',
    votes: { home: 1850, draw: 380, away: 540 },
    odds: { home: '1.55', draw: '3.60', away: '5.80' },
    events: [],
    stats: {
      possession: [50, 50],
      expectedGoals: ['0.00', '0.00'],
      totalShots: [0, 0],
      shotsOnTarget: [0, 0],
      shotsOffTarget: [0, 0],
      blockedShots: [0, 0],
      cornerKicks: [0, 0],
      offsides: [0, 0],
      fouls: [0, 0],
      yellowCards: [0, 0],
      redCards: [0, 0],
      passes: [0, 0],
      passAccuracy: ['0%', '0%'],
      bigChances: [0, 0]
    },
    lineups: null,
    h2h: [
      { date: 'Jun 2024', home: 'Bunyodkor', away: 'Nasaf', score: '0 - 2' },
      { date: 'Nov 2023', home: 'Nasaf', away: 'Bunyodkor', score: '3 - 1' }
    ],
    commentary: [
      { minute: 0, text: 'Match begins at 19:00 Tashkent time.' }
    ]
  }
];

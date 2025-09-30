// Mock data for the Capital Reds team statistics

export interface TeamStanding {
  position: number
  team: string
  wins: number
  losses: number
  ties: number
  winPercentage: number
  gamesPlayed: number
  runsScored: number
  runsAllowed: number
  differential: number
}

export const standings: TeamStanding[] = [
  {
    position: 1,
    team: "TIBURONES",
    wins: 3,
    losses: 0,
    ties: 0,
    winPercentage: 1.0,
    gamesPlayed: 3,
    runsScored: 31,
    runsAllowed: 9,
    differential: 22,
  },
  {
    position: 2,
    team: "LA PLATA",
    wins: 2,
    losses: 0,
    ties: 0,
    winPercentage: 1.0,
    gamesPlayed: 2,
    runsScored: 16,
    runsAllowed: 9,
    differential: 7,
  },
  {
    position: 3,
    team: "FALCONS",
    wins: 2,
    losses: 1,
    ties: 0,
    winPercentage: 0.67,
    gamesPlayed: 3,
    runsScored: 23,
    runsAllowed: 18,
    differential: 5,
  },
  {
    position: 4,
    team: "DAOM",
    wins: 1,
    losses: 1,
    ties: 0,
    winPercentage: 0.5,
    gamesPlayed: 2,
    runsScored: 22,
    runsAllowed: 16,
    differential: 6,
  },
  {
    position: 5,
    team: "JUPITER",
    wins: 0,
    losses: 3,
    ties: 0,
    winPercentage: 0.0,
    gamesPlayed: 3,
    runsScored: 13,
    runsAllowed: 26,
    differential: -13,
  },
  {
    position: 6,
    team: "CAPITAL REDS",
    wins: 0,
    losses: 3,
    ties: 0,
    winPercentage: 0.0,
    gamesPlayed: 3,
    runsScored: 11,
    runsAllowed: 38,
    differential: -27,
  },
]


export interface Player {
  id: string
  name: string
  position: string
  number: number
  battingAverage: number
  homeRuns: number
  rbi: number
  stolenBases: number
  obp: number
  slugging: number
  errors: number
  assists: number
  gamesPlayed: number
}

export const players: Player[] = [
  {
    id: "aner-fanelli",
    name: "Aner FANELLI",
    position: "SS",
    number: 1,
    battingAverage: 0.750,
    homeRuns: 0,
    rbi: 0,
    stolenBases: 2,
    obp: 0.750,
    slugging: 0.750,
    errors: 0,
    assists: 2,
    gamesPlayed: 3,
  },
  {
    id: "alexander-arvelo",
    name: "Alexander ARVELO",
    position: "LF",
    number: 23,
    battingAverage: 0.160,
    homeRuns: 0,
    rbi: 4,
    stolenBases: 4,
    obp: 0.323,
    slugging: 0.200,
    errors: 2,
    assists: 2,
    gamesPlayed: 9,
  },
  {
    id: "carlos-pereira",
    name: "Carlos Javier PEREIRA",
    position: "C",
    number: 24,
    battingAverage: 0.500,
    homeRuns: 0,
    rbi: 1,
    stolenBases: 0,
    obp: 0.500,
    slugging: 0.667,
    errors: 1,
    assists: 3,
    gamesPlayed: 2,
  },
  {
    id: "cesar-romero",
    name: "Cesar ROMERO",
    position: "p",
    number: 21,
    battingAverage: 0.364,
    homeRuns: 0,
    rbi: 5,
    stolenBases: 2,
    obp: 0.467,
    slugging: 0.545,
    errors: 3,
    assists: 0,
    gamesPlayed: 5,
  },
  {
    id: "raul-aguin",
    name: "Raul AGUIN",
    position: "p",
    number: 9,
    battingAverage: 0.444,
    homeRuns: 0,
    rbi: 1,
    stolenBases: 2,
    obp: 0.545,
    slugging: 0.444,
    errors: 1,
    assists: 6,
    gamesPlayed: 7,
  },
  {
    id: "eugenio-de-oro",
    name: "Eugenio DE ORO",
    position: "1B",
    number: 22,
    battingAverage: 0.375,
    homeRuns: 0,
    rbi: 4,
    stolenBases: 1,
    obp: 0.476,
    slugging: 0.438,
    errors: 2,
    assists: 1,
    gamesPlayed: 5,
  },
  {
    id: "samir-guevara",
    name: "Samir GUEVARA",
    position: "2B",
    number: 15,
    battingAverage: 0.344,
    homeRuns: 0,
    rbi: 10,
    stolenBases: 6,
    obp: 0.463,
    slugging: 0.406,
    errors: 6,
    assists: 11,
    gamesPlayed: 10,
  },
  {
    id: "leivis-corrales",
    name: "Leivis CORRALES",
    position: "SS",
    number: 4,
    battingAverage: 0.333,
    homeRuns: 0,
    rbi: 0,
    stolenBases: 2,
    obp: 0.636,
    slugging: 0.333,
    errors: 1,
    assists: 3,
    gamesPlayed: 4,
  },
  {
    id: "jerry-lopez",
    name: "Jerry LOPEZ",
    position: "C",
    number: 10,
    battingAverage: 0.450,
    homeRuns: 0,
    rbi: 5,
    stolenBases: 3,
    obp: 0.560,
    slugging: 0.600,
    errors: 0,
    assists: 9,
    gamesPlayed: 6,
  },
  {
    id: "daniel-sulbaran",
    name: "Daniel SULBARAN",
    position: "2B",
    number: 27,
    battingAverage: 0.316,
    homeRuns: 0,
    rbi: 4,
    stolenBases: 2,
    obp: 0.519,
    slugging: 0.368,
    errors: 5,
    assists: 8,
    gamesPlayed: 9,
  },
  {
    id: "lester-vera",
    name: "Lester VERA",
    position: "RF",
    number: 31,
    battingAverage: 0.286,
    homeRuns: 0,
    rbi: 9,
    stolenBases: 9,
    obp: 0.429,
    slugging: 0.357,
    errors: 1,
    assists: 0,
    gamesPlayed: 11,
  },
  {
    id: "juan-rios",
    name: "Juan RIOS",
    position: "P",
    number: 18,
    battingAverage: 0.222,
    homeRuns: 0,
    rbi: 4,
    stolenBases: 4,
    obp: 0.600,
    slugging: 0.278,
    errors: 1,
    assists: 8,
    gamesPlayed: 9,
  },
  {
    id: "leo-hernandez",
    name: "Leonardo HERNANDEZ",
    position: "p",
    number: 12,
    battingAverage: 0.000,
    homeRuns: 0,
    rbi: 0,
    stolenBases: 0,
    obp: 1.000,
    slugging: 0.000,
    errors: 0,
    assists: 1,
    gamesPlayed: 8,
  },
  {
  id: "jose-salazar",
  name: "José SALAZAR",
  position: "3B",
  number: 10,
  battingAverage: 0.455,
  homeRuns: 1,
  rbi: 15,
  stolenBases: 5,
  obp: 0.500,
  slugging: 0.576,
  errors: 2,
  assists: 2,
  gamesPlayed: 11,
}

]


export interface GamePerformance {
  game: number
  date: string
  opponent: string
  hits: number
  atBats: number
  runs: number
  rbi: number
  avg: number
}

export function getPlayerGamePerformance(playerId: string): GamePerformance[] {
  // Mock game-by-game data - in a real app this would come from a database
  const games: GamePerformance[] = []
  const opponents = ["Tigres", "Águilas", "Leones", "Halcones", "Piratas"]

  for (let i = 1; i <= 10; i++) {
    const hits = Math.floor(Math.random() * 5)
    const atBats = 4
    const cumulativeAvg = 0.25 + Math.random() * 0.15

    games.push({
      game: i,
      date: `2025-0${Math.floor(Math.random() * 3) + 1}-${10 + i}`,
      opponent: opponents[Math.floor(Math.random() * opponents.length)],
      hits,
      atBats,
      runs: Math.floor(Math.random() * 3),
      rbi: Math.floor(Math.random() * 4),
      avg: cumulativeAvg,
    })
  }

  return games
}

export function getTopPlayers(limit = 5): Player[] {
  return [...players]
    .sort((a, b) => {
      // Calculate a simple performance score
      const scoreA = a.battingAverage * 100 + a.homeRuns * 2 + a.rbi + a.stolenBases * 0.5
      const scoreB = b.battingAverage * 100 + b.homeRuns * 2 + b.rbi + b.stolenBases * 0.5
      return scoreB - scoreA
    })
    .slice(0, limit)
}

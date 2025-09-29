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
    team: "Capital Reds",
    wins: 18,
    losses: 6,
    ties: 1,
    winPercentage: 0.74,
    gamesPlayed: 25,
    runsScored: 142,
    runsAllowed: 98,
    differential: 44,
  },
  {
    position: 2,
    team: "Tigres del Norte",
    wins: 16,
    losses: 8,
    ties: 1,
    winPercentage: 0.66,
    gamesPlayed: 25,
    runsScored: 128,
    runsAllowed: 105,
    differential: 23,
  },
  {
    position: 3,
    team: "Águilas Doradas",
    wins: 14,
    losses: 10,
    ties: 1,
    winPercentage: 0.58,
    gamesPlayed: 25,
    runsScored: 115,
    runsAllowed: 110,
    differential: 5,
  },
  {
    position: 4,
    team: "Leones Azules",
    wins: 12,
    losses: 12,
    ties: 1,
    winPercentage: 0.5,
    gamesPlayed: 25,
    runsScored: 108,
    runsAllowed: 112,
    differential: -4,
  },
  {
    position: 5,
    team: "Halcones Negros",
    wins: 9,
    losses: 15,
    ties: 1,
    winPercentage: 0.38,
    gamesPlayed: 25,
    runsScored: 95,
    runsAllowed: 125,
    differential: -30,
  },
  {
    position: 6,
    team: "Piratas del Sur",
    wins: 6,
    losses: 18,
    ties: 1,
    winPercentage: 0.26,
    gamesPlayed: 25,
    runsScored: 82,
    runsAllowed: 145,
    differential: -63,
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
    id: "aner",
    name: "Aner",
    position: "SS",
    number: 1,
    battingAverage: 0.342,
    homeRuns: 8,
    rbi: 32,
    stolenBases: 15,
    obp: 0.412,
    slugging: 0.548,
    errors: 4,
    assists: 78,
    gamesPlayed: 25,
  },
  {
    id: "alex",
    name: "Alex",
    position: "CF",
    number: 7,
    battingAverage: 0.318,
    homeRuns: 12,
    rbi: 38,
    stolenBases: 22,
    obp: 0.389,
    slugging: 0.592,
    errors: 2,
    assists: 5,
    gamesPlayed: 25,
  },
  {
    id: "carlos-pereira",
    name: "Carlos Pereira",
    position: "C",
    number: 24,
    battingAverage: 0.295,
    homeRuns: 6,
    rbi: 28,
    stolenBases: 3,
    obp: 0.358,
    slugging: 0.465,
    errors: 3,
    assists: 42,
    gamesPlayed: 24,
  },
  {
    id: "pacho",
    name: "Pacho",
    position: "1B",
    number: 33,
    battingAverage: 0.328,
    homeRuns: 15,
    rbi: 45,
    stolenBases: 5,
    obp: 0.402,
    slugging: 0.625,
    errors: 2,
    assists: 18,
    gamesPlayed: 25,
  },
  {
    id: "carlos-pena",
    name: "Carlos Peña",
    position: "3B",
    number: 5,
    battingAverage: 0.312,
    homeRuns: 9,
    rbi: 35,
    stolenBases: 8,
    obp: 0.378,
    slugging: 0.512,
    errors: 6,
    assists: 65,
    gamesPlayed: 25,
  },
  {
    id: "raul",
    name: "Raúl",
    position: "RF",
    number: 9,
    battingAverage: 0.288,
    homeRuns: 7,
    rbi: 26,
    stolenBases: 12,
    obp: 0.345,
    slugging: 0.478,
    errors: 3,
    assists: 8,
    gamesPlayed: 23,
  },
  {
    id: "leivis",
    name: "Leivis",
    position: "2B",
    number: 4,
    battingAverage: 0.305,
    homeRuns: 4,
    rbi: 22,
    stolenBases: 18,
    obp: 0.372,
    slugging: 0.425,
    errors: 5,
    assists: 72,
    gamesPlayed: 25,
  },
  {
    id: "cesar",
    name: "César",
    position: "LF",
    number: 21,
    battingAverage: 0.278,
    homeRuns: 5,
    rbi: 24,
    stolenBases: 9,
    obp: 0.338,
    slugging: 0.442,
    errors: 2,
    assists: 6,
    gamesPlayed: 24,
  },
  {
    id: "juan",
    name: "Juan",
    position: "P",
    number: 18,
    battingAverage: 0.185,
    homeRuns: 0,
    rbi: 5,
    stolenBases: 0,
    obp: 0.215,
    slugging: 0.205,
    errors: 1,
    assists: 15,
    gamesPlayed: 15,
  },
  {
    id: "eugenio",
    name: "Eugenio",
    position: "P",
    number: 22,
    battingAverage: 0.165,
    homeRuns: 1,
    rbi: 4,
    stolenBases: 0,
    obp: 0.198,
    slugging: 0.225,
    errors: 0,
    assists: 12,
    gamesPlayed: 14,
  },
  {
    id: "jerry",
    name: "Jerry",
    position: "DH",
    number: 10,
    battingAverage: 0.325,
    homeRuns: 11,
    rbi: 40,
    stolenBases: 4,
    obp: 0.395,
    slugging: 0.598,
    errors: 0,
    assists: 0,
    gamesPlayed: 22,
  },
  {
    id: "josue",
    name: "Josué",
    position: "OF",
    number: 8,
    battingAverage: 0.292,
    homeRuns: 6,
    rbi: 21,
    stolenBases: 14,
    obp: 0.352,
    slugging: 0.468,
    errors: 3,
    assists: 4,
    gamesPlayed: 20,
  },
  {
    id: "daniel",
    name: "Daniel",
    position: "P",
    number: 27,
    battingAverage: 0.142,
    homeRuns: 0,
    rbi: 2,
    stolenBases: 0,
    obp: 0.178,
    slugging: 0.158,
    errors: 2,
    assists: 18,
    gamesPlayed: 12,
  },
  {
    id: "leo",
    name: "Leo",
    position: "IF",
    number: 12,
    battingAverage: 0.268,
    homeRuns: 3,
    rbi: 15,
    stolenBases: 6,
    obp: 0.325,
    slugging: 0.395,
    errors: 4,
    assists: 28,
    gamesPlayed: 18,
  },
  {
    id: "lester",
    name: "Lester",
    position: "P",
    number: 31,
    battingAverage: 0.125,
    homeRuns: 0,
    rbi: 3,
    stolenBases: 0,
    obp: 0.165,
    slugging: 0.145,
    errors: 1,
    assists: 14,
    gamesPlayed: 10,
  },
  {
    id: "samir",
    name: "Samir",
    position: "OF",
    number: 15,
    battingAverage: 0.285,
    homeRuns: 5,
    rbi: 19,
    stolenBases: 11,
    obp: 0.348,
    slugging: 0.452,
    errors: 2,
    assists: 3,
    gamesPlayed: 21,
  },
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

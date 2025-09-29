import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { players } from "@/lib/data"
import { PlayerCard } from "@/components/player-card"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Award, Target } from "lucide-react"

export default function RosterPage() {
  const positionGroups = {
    Pitchers: players.filter((p) => p.position === "P"),
    Infielders: players.filter((p) => ["1B", "2B", "3B", "SS", "IF"].includes(p.position)),
    Outfielders: players.filter((p) => ["CF", "LF", "RF", "OF"].includes(p.position)),
    "Catcher & DH": players.filter((p) => ["C", "DH"].includes(p.position)),
  }

  const teamStats = {
    totalPlayers: players.length,
    avgBattingAverage: (players.reduce((sum, p) => sum + p.battingAverage, 0) / players.length).toFixed(3),
    totalHomeRuns: players.reduce((sum, p) => sum + p.homeRuns, 0),
    totalStolenBases: players.reduce((sum, p) => sum + p.stolenBases, 0),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-balance font-heading text-3xl font-bold sm:text-4xl">Roster del Equipo</h1>
            <p className="mt-2 text-muted-foreground">Conoce a todos los jugadores de Capital Reds</p>
          </div>

          {/* Team Stats Overview */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{teamStats.totalPlayers}</div>
                  <div className="text-sm text-muted-foreground">Jugadores</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{teamStats.avgBattingAverage}</div>
                  <div className="text-sm text-muted-foreground">AVG del Equipo</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{teamStats.totalHomeRuns}</div>
                  <div className="text-sm text-muted-foreground">Home Runs</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{teamStats.totalStolenBases}</div>
                  <div className="text-sm text-muted-foreground">Bases Robadas</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Players by Position */}
          {Object.entries(positionGroups).map(([groupName, groupPlayers]) => (
            <div key={groupName} className="mb-8">
              <h2 className="mb-4 font-heading text-2xl font-bold">{groupName}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupPlayers.map((player) => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

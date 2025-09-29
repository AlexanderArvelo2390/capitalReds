import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { players, getPlayerGamePerformance } from "@/lib/data"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, TrendingUp, Target, Zap, Shield } from "lucide-react"
import { PerformanceChart } from "@/components/performance-chart"
import { StatsPieChart } from "@/components/stats-pie-chart"
import { StatComparison } from "@/components/stat-comparison"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return players.map((player) => ({
    id: player.id,
  }))
}

export default function PlayerProfilePage({ params }: { params: { id: string } }) {
  const player = players.find((p) => p.id === params.id)

  if (!player) {
    notFound()
  }

  const gamePerformance = getPlayerGamePerformance(player.id)

  const teamAverages = {
    battingAverage: players.reduce((sum, p) => sum + p.battingAverage, 0) / players.length,
    homeRuns: players.reduce((sum, p) => sum + p.homeRuns, 0) / players.length,
    rbi: players.reduce((sum, p) => sum + p.rbi, 0) / players.length,
    stolenBases: players.reduce((sum, p) => sum + p.stolenBases, 0) / players.length,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-6 bg-transparent">
            <Link href="/roster">← Volver al Roster</Link>
          </Button>

          {/* Player Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-12 w-12" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="font-heading text-3xl font-bold sm:text-4xl">{player.name}</h1>
                    <Badge variant="default" className="text-lg">
                      #{player.number}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-base">
                      {player.position}
                    </Badge>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{player.gamesPlayed} juegos jugados</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">AVG</div>
                    <div className="text-2xl font-bold">{player.battingAverage.toFixed(3)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">OBP</div>
                    <div className="text-2xl font-bold">{player.obp.toFixed(3)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Zap className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">SLG</div>
                    <div className="text-2xl font-bold">{player.slugging.toFixed(3)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">HR</div>
                    <div className="text-2xl font-bold">{player.homeRuns}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">RBI</div>
                    <div className="text-2xl font-bold">{player.rbi}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            <PerformanceChart data={gamePerformance} />
            <StatsPieChart player={player} />
          </div>

          {/* Comparison and Detailed Stats */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas Completas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-semibold">Ofensiva</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Promedio de Bateo</span>
                          <span className="font-semibold">{player.battingAverage.toFixed(3)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">On-Base Percentage</span>
                          <span className="font-semibold">{player.obp.toFixed(3)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Slugging</span>
                          <span className="font-semibold">{player.slugging.toFixed(3)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Home Runs</span>
                          <span className="font-semibold">{player.homeRuns}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">RBI</span>
                          <span className="font-semibold">{player.rbi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bases Robadas</span>
                          <span className="font-semibold">{player.stolenBases}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">Defensiva</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Posición</span>
                          <span className="font-semibold">{player.position}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Errores</span>
                          <span className="font-semibold">{player.errors}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Asistencias</span>
                          <span className="font-semibold">{player.assists}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Juegos Jugados</span>
                          <span className="font-semibold">{player.gamesPlayed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <StatComparison player={player} teamAverage={teamAverages} />
          </div>

          {/* Game by Game Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Desempeño por Partido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Juego</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Oponente</TableHead>
                      <TableHead className="text-center">H</TableHead>
                      <TableHead className="text-center">AB</TableHead>
                      <TableHead className="text-center">R</TableHead>
                      <TableHead className="text-center">RBI</TableHead>
                      <TableHead className="text-center">AVG</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gamePerformance.map((game) => (
                      <TableRow key={game.game}>
                        <TableCell className="font-medium">{game.game}</TableCell>
                        <TableCell>{game.date}</TableCell>
                        <TableCell>{game.opponent}</TableCell>
                        <TableCell className="text-center">{game.hits}</TableCell>
                        <TableCell className="text-center">{game.atBats}</TableCell>
                        <TableCell className="text-center">{game.runs}</TableCell>
                        <TableCell className="text-center">{game.rbi}</TableCell>
                        <TableCell className="text-center">{game.avg.toFixed(3)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

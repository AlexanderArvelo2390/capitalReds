import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getTopPlayers } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, Target, Zap, Star, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedPlayerPage() {
  const topPlayers = getTopPlayers(5)
  const featuredPlayer = topPlayers[0]

  // Calculate performance score for display
  const performanceScore = Math.round(
    featuredPlayer.battingAverage * 100 +
      featuredPlayer.homeRuns * 2 +
      featuredPlayer.rbi +
      featuredPlayer.stolenBases * 0.5,
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-balance font-heading text-3xl font-bold sm:text-4xl">Jugador Destacado</h1>
            <p className="mt-2 text-muted-foreground">El jugador más valioso de la semana</p>
          </div>

          {/* Featured Player Hero */}
          <Card className="mb-8 overflow-hidden border-2 border-primary">
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary p-8 text-white">
              <div className="absolute right-4 top-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <Trophy className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>

              <div className="mb-6">
                <Badge className="mb-2 bg-accent text-accent-foreground">Jugador de la Semana</Badge>
                <h2 className="font-heading text-4xl font-bold sm:text-5xl">{featuredPlayer.name}</h2>
                <div className="mt-2 flex items-center gap-3">
                  <Badge variant="secondary" className="text-lg">
                    {featuredPlayer.position}
                  </Badge>
                  <span className="text-xl">#{featuredPlayer.number}</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="text-sm opacity-90">Promedio</div>
                  <div className="mt-1 font-heading text-2xl font-bold">{featuredPlayer.battingAverage.toFixed(3)}</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="text-sm opacity-90">Home Runs</div>
                  <div className="mt-1 font-heading text-2xl font-bold">{featuredPlayer.homeRuns}</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="text-sm opacity-90">RBI</div>
                  <div className="mt-1 font-heading text-2xl font-bold">{featuredPlayer.rbi}</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="text-sm opacity-90">Bases Robadas</div>
                  <div className="mt-1 font-heading text-2xl font-bold">{featuredPlayer.stolenBases}</div>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/player/${featuredPlayer.id}`}>Ver Perfil Completo</Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Performance Highlights */}
          <div className="mb-8">
            <h2 className="mb-4 font-heading text-2xl font-bold">Destacados de Rendimiento</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Puntuación</div>
                      <div className="text-2xl font-bold">{performanceScore}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">OBP</div>
                      <div className="text-2xl font-bold">{featuredPlayer.obp.toFixed(3)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Zap className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Slugging</div>
                      <div className="text-2xl font-bold">{featuredPlayer.slugging.toFixed(3)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Juegos</div>
                      <div className="text-2xl font-bold">{featuredPlayer.gamesPlayed}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top 5 Players */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold">Top 5 Jugadores</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {topPlayers.map((player, index) => {
                const score = Math.round(
                  player.battingAverage * 100 + player.homeRuns * 2 + player.rbi + player.stolenBases * 0.5,
                )

                return (
                  <Link key={player.id} href={`/player/${player.id}`}>
                    <Card className="group transition-all hover:shadow-lg hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-xl font-bold text-primary">
                            {index + 1}
                          </div>
                          {index === 0 && <Star className="h-5 w-5 fill-accent text-accent" />}
                        </div>

                        <h3 className="font-heading text-lg font-bold group-hover:text-primary">{player.name}</h3>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {player.position}
                          </Badge>
                          <span className="text-xs text-muted-foreground">#{player.number}</span>
                        </div>

                        <div className="mt-4 space-y-2 border-t border-border pt-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">AVG</span>
                            <span className="font-semibold">{player.battingAverage.toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">HR</span>
                            <span className="font-semibold">{player.homeRuns}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">RBI</span>
                            <span className="font-semibold">{player.rbi}</span>
                          </div>
                          <div className="mt-3 flex justify-between border-t border-border pt-2 text-sm">
                            <span className="text-muted-foreground">Puntuación</span>
                            <span className="font-bold text-primary">{score}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Algorithm Explanation */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="mb-2 font-heading text-lg font-bold">Cómo se calcula el Jugador Destacado</h3>
              <p className="text-sm text-muted-foreground">
                El jugador destacado se selecciona mediante un algoritmo que considera múltiples factores de
                rendimiento: promedio de bateo (×100), home runs (×2), carreras impulsadas (RBI), y bases robadas
                (×0.5). El jugador con la puntuación más alta es reconocido como el jugador más valioso de la semana.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

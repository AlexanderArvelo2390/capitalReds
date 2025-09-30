import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, TrendingUp, Award } from "lucide-react"
import { getTopPlayers } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const featuredPlayer = getTopPlayers(1)[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="text-balance">
                <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  Bienvenido a Capital Reds
                </h1>
                <p className="mt-4 text-lg text-white/90 sm:text-xl">
                  El equipo que está redefiniendo el béisbol amateur con pasión, talento y tecnología.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/roster">Ver Roster</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  >
                    <Link href="/standings">Posiciones</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/Cincinnati_Reds-Logo-PNG4-480x270.png"
                  alt="Capital Reds Logo"
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-md drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Jugador Destacado de la Semana</h2>
            </div>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex-1">
                    <Badge className="mb-2 bg-accent text-accent-foreground">MVP de la Semana</Badge>
                    <h3 className="font-heading text-3xl font-bold">{featuredPlayer.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="secondary">{featuredPlayer.position}</Badge>
                      <span className="text-muted-foreground">#{featuredPlayer.number}</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div>
                        <div className="text-sm text-muted-foreground">AVG</div>
                        <div className="text-xl font-bold">{featuredPlayer.battingAverage.toFixed(3)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">HR</div>
                        <div className="text-xl font-bold">{featuredPlayer.homeRuns}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">RBI</div>
                        <div className="text-xl font-bold">{featuredPlayer.rbi}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">SB</div>
                        <div className="text-xl font-bold">{featuredPlayer.stolenBases}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="default">
                      <Link href={`/player/${featuredPlayer.id}`}>Ver Perfil</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/featured">Ver Ranking</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-balance text-center font-heading text-3xl font-bold sm:text-4xl">
              Funcionalidades Principales
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">Tabla de Posiciones</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visualiza el rendimiento del equipo en tiempo real
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">Roster Completo</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Conoce a todos los jugadores del equipo</p>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">Estadísticas Avanzadas</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Análisis detallado de rendimiento</p>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">Jugador Destacado</h3>
                  <p className="mt-2 text-sm text-muted-foreground">El mejor jugador de la semana</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

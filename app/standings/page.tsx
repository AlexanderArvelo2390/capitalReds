import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { standings } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function StandingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-balance font-heading text-3xl font-bold sm:text-4xl">Tabla de Posiciones</h1>
            <p className="mt-2 text-muted-foreground">Rendimiento de los equipos en la liga amateur</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Temporada 2025</CardTitle>
              <CardDescription>Clasificación actualizada de todos los equipos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Pos</TableHead>
                      <TableHead>Equipo</TableHead>
                      <TableHead className="text-center">PJ</TableHead>
                      <TableHead className="text-center">G</TableHead>
                      <TableHead className="text-center">P</TableHead>
                      <TableHead className="text-center">E</TableHead>
                      <TableHead className="text-center">%</TableHead>
                      <TableHead className="text-center">CA</TableHead>
                      <TableHead className="text-center">CP</TableHead>
                      <TableHead className="text-center">Dif</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {standings.map((team) => (
                      <TableRow
                        key={team.position}
                        className={team.team === "Capital Reds" ? "bg-primary/5 font-medium" : ""}
                      >
                        <TableCell className="font-bold">{team.position}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {team.team}
                            {team.team === "Capital Reds" && (
                              <Badge variant="default" className="bg-primary text-primary-foreground">
                                Nuestro Equipo
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">{team.gamesPlayed}</TableCell>
                        <TableCell className="text-center font-semibold text-green-600">{team.wins}</TableCell>
                        <TableCell className="text-center font-semibold text-red-600">{team.losses}</TableCell>
                        <TableCell className="text-center text-muted-foreground">{team.ties}</TableCell>
                        <TableCell className="text-center font-bold">{team.winPercentage.toFixed(3)}</TableCell>
                        <TableCell className="text-center">{team.runsScored}</TableCell>
                        <TableCell className="text-center">{team.runsAllowed}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            {team.differential > 0 ? (
                              <>
                                <TrendingUp className="h-4 w-4 text-green-600" />
                                <span className="font-semibold text-green-600">+{team.differential}</span>
                              </>
                            ) : team.differential < 0 ? (
                              <>
                                <TrendingDown className="h-4 w-4 text-red-600" />
                                <span className="font-semibold text-red-600">{team.differential}</span>
                              </>
                            ) : (
                              <span className="text-muted-foreground">0</span>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">PJ:</span> Partidos Jugados
                </div>
                <div>
                  <span className="font-semibold">G:</span> Ganados
                </div>
                <div>
                  <span className="font-semibold">P:</span> Perdidos
                </div>
                <div>
                  <span className="font-semibold">E:</span> Empates
                </div>
                <div>
                  <span className="font-semibold">%:</span> Porcentaje de Victorias
                </div>
                <div>
                  <span className="font-semibold">CA:</span> Carreras Anotadas
                </div>
                <div>
                  <span className="font-semibold">CP:</span> Carreras Permitidas
                </div>
                <div>
                  <span className="font-semibold">Dif:</span> Diferencial
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Performance Summary */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">Posición</div>
                <div className="mt-2 font-heading text-3xl font-bold text-primary">1°</div>
                <p className="mt-1 text-xs text-muted-foreground">Líderes de la liga</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">Efectividad</div>
                <div className="mt-2 font-heading text-3xl font-bold text-primary">74%</div>
                <p className="mt-1 text-xs text-muted-foreground">Porcentaje de victorias</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">Diferencial</div>
                <div className="mt-2 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span className="font-heading text-3xl font-bold text-green-600">+44</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Carreras de diferencia</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">Racha</div>
                <div className="mt-2 font-heading text-3xl font-bold text-primary">18-6-1</div>
                <p className="mt-1 text-xs text-muted-foreground">Récord de la temporada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

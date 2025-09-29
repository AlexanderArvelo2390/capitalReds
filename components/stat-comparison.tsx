"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Player } from "@/lib/data"

interface StatComparisonProps {
  player: Player
  teamAverage: {
    battingAverage: number
    homeRuns: number
    rbi: number
    stolenBases: number
  }
}

export function StatComparison({ player, teamAverage }: StatComparisonProps) {
  const stats = [
    {
      label: "Batting Average",
      playerValue: player.battingAverage,
      teamValue: teamAverage.battingAverage,
      format: (v: number) => v.toFixed(3),
    },
    {
      label: "Home Runs",
      playerValue: player.homeRuns,
      teamValue: teamAverage.homeRuns,
      format: (v: number) => v.toString(),
    },
    {
      label: "RBI",
      playerValue: player.rbi,
      teamValue: teamAverage.rbi,
      format: (v: number) => v.toString(),
    },
    {
      label: "Stolen Bases",
      playerValue: player.stolenBases,
      teamValue: teamAverage.stolenBases,
      format: (v: number) => v.toString(),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparación con el Equipo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat) => {
          const percentage = (stat.playerValue / stat.teamValue) * 100
          const isAboveAverage = stat.playerValue > stat.teamValue

          return (
            <div key={stat.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{stat.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{stat.format(stat.playerValue)}</span>
                  <span className="text-muted-foreground">vs {stat.format(stat.teamValue)}</span>
                </div>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full transition-all ${isAboveAverage ? "bg-primary" : "bg-secondary"}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {isAboveAverage ? "Por encima" : "Por debajo"} del promedio del equipo
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts"
import type { Player } from "@/lib/data"

interface StatsPieChartProps {
  player: Player
}

export function StatsPieChart({ player }: StatsPieChartProps) {
  const data = [
    { name: "Bateo (AVG×100)", value: Math.round(player.battingAverage * 100), color: "hsl(var(--chart-1))" },
    { name: "Home Runs", value: player.homeRuns * 3, color: "hsl(var(--chart-2))" },
    { name: "RBI", value: player.rbi, color: "hsl(var(--chart-3))" },
    { name: "Bases Robadas", value: player.stolenBases * 2, color: "hsl(var(--accent))" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribución de Estadísticas</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

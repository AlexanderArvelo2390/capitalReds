import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Player } from "@/lib/data"
import { User } from "lucide-react"

interface PlayerCardProps {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link href={`/player/${player.id}`}>
      <Card className="group transition-all hover:shadow-lg hover:scale-[1.02]">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold group-hover:text-primary">{player.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="secondary">{player.position}</Badge>
                  <span className="text-sm text-muted-foreground">#{player.number}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
            <div>
              <div className="text-xs text-muted-foreground">AVG</div>
              <div className="mt-1 font-semibold">{player.battingAverage.toFixed(3)}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">HR</div>
              <div className="mt-1 font-semibold">{player.homeRuns}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">RBI</div>
              <div className="mt-1 font-semibold">{player.rbi}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

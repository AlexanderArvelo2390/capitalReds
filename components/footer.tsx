import { Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" />
            <span>Capital Reds Baseball Team</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Capital Reds. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from "react-router-dom"
import { rutasPrivadas } from "@/App"
import { 
  Package2,
  Settings,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"

const AsideDashboard = () => {

  return (
<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            to="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          {
            rutasPrivadas.map((value, key) => {
              const { ruta, Icono } = value
              const ruta2 = ruta.charAt(0).toUpperCase()+ruta.slice(1)
              return (
                <TooltipProvider key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={ruta}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-black hover:bg-accent transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Icono className="h-5 w-5" />
                        <span className="sr-only">{ruta2}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{ruta2}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })
          }
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
  )
}

export default AsideDashboard

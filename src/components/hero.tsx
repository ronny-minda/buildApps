import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioHero() {
  return (
    <div className="text-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Ronny Minda V
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            Desarrollador Web Full Stack
          </h2>
          <p className="mb-8 leading-relaxed max-w-lg">
            Creando experiencias web innovadoras y eficientes. Especializado en React, Node.js y diseño responsivo. Transformando ideas en aplicaciones web de alto rendimiento.
          </p>
          <div className="flex justify-center space-x-4">
            <Button><Link to="projects">Ver Proyectos</Link></Button>
            <Button variant="outline"><Link to="about">Contactar</Link></Button>
          </div>
          <div className="flex mt-6 justify-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="Juan Pérez"
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

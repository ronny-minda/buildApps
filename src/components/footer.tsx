import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">TuNombre</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollador web creando experiencias digitales únicas y funcionales.
            </p>
            <div className="flex space-x-4">
              <Link to="https://github.com/tuusuario" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="https://linkedin.com/in/tuusuario" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="https://twitter.com/tuusuario" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/proyectos" className="text-muted-foreground hover:text-foreground">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-muted-foreground hover:text-foreground">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/habilidades" className="text-muted-foreground hover:text-foreground">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/recursos/ebooks" className="text-muted-foreground hover:text-foreground">
                  eBooks
                </Link>
              </li>
              <li>
                <Link to="/recursos/tutoriales" className="text-muted-foreground hover:text-foreground">
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link to="/recursos/newsletter" className="text-muted-foreground hover:text-foreground">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Tu correo electrónico" />
              <Button type="submit" className="w-full">Suscribirse</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ronny Minda V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

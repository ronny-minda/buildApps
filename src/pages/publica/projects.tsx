import { useState } from 'react'
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"
import { motion } from 'framer-motion'

const projects = {
  frontend: [
    {
      id: 1,
      title: "E-commerce App",
      description: "Una aplicación de comercio electrónico con carrito de compras y diseño responsive.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Redux", "Tailwind CSS"],
      githubLink: "https://github.com/tuusuario/ecommerce-app",
      liveLink: "https://ecommerce-app-example.com",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Un dashboard que muestra pronósticos del tiempo en tiempo real utilizando una API de clima.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "Axios", "Chart.js"],
      githubLink: "https://github.com/tuusuario/weather-dashboard",
      liveLink: "https://weather-dashboard-example.com",
    },
  ],
  backend: [
    {
      id: 3,
      title: "API RESTful",
      description: "Una API RESTful completa para gestión de usuarios y autenticación.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/tuusuario/restful-api",
      liveLink: "https://api-example.com/docs",
    },
    {
      id: 4,
      title: "Microservicio de Pagos",
      description: "Un microservicio para procesar pagos de manera segura y eficiente.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Flask", "PostgreSQL"],
      githubLink: "https://github.com/tuusuario/payment-microservice",
      liveLink: "https://payment-service-example.com",
    },
  ],
}

const designs = [
  {
    id: 1,
    title: "App Dashboard UI",
    category: "UI/UX",
    image: "/placeholder.svg?height=400&width=600",
    description: "Diseño de interfaz de usuario para un dashboard de aplicación de análisis de datos.",
  },
  {
    id: 2,
    title: "Logo Marca Ecológica",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    description: "Logotipo minimalista para una marca de productos ecológicos.",
  },
  {
    id: 3,
    title: "Ilustración para Blog",
    category: "Ilustración",
    image: "/placeholder.svg?height=400&width=600",
    description: "Ilustración vectorial para un artículo de blog sobre tecnología y naturaleza.",
  },
  {
    id: 4,
    title: "Mockup App Móvil",
    category: "UI/UX",
    image: "/placeholder.svg?height=400&width=600",
    description: "Mockup de interfaz de usuario para una aplicación móvil de fitness.",
  },
]

const designCategories = ["Todos", "UI/UX", "Branding", "Ilustración", "Gráfico"]

function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <img
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <p className="teixt-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm" asChild>
            <Link to={project.githubLink}>
              <Github className="mr-2 h-4 w-4" />
              Código
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={project.liveLink}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend")
  const [designFilter, setDesignFilter] = useState("Todos")

  const filteredDesigns = designFilter === "Todos" 
    ? designs 
    : designs.filter(design => design.category === designFilter)

  return (
    <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
      className="container mx-auto py-12 px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Mis Proyectos y Diseños</h2>
      
      <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="design">Diseño</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.frontend.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.backend.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="design">
          <div className="flex flex-wrap gap-2 mb-8">
            {designCategories.map((category) => (
              <Button
                key={category}
                variant={designFilter === category ? "default" : "outline"}
                onClick={() => setDesignFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDesigns.map((design) => (
              <Dialog key={design.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={design.image}
                        alt={design.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">{design.title}</p>
                      </div>
                    </div>
                    <Badge className="mt-2">{design.category}</Badge>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogHeader>
                    <DialogTitle>{design.title}</DialogTitle>
                    <DialogDescription>{design.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={design.image}
                      alt={design.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        {activeTab !== "design" && (
          <Button onClick={() => alert(`Cargar más proyectos de ${activeTab}`)}>
            Cargar Más Proyectos de {activeTab === "frontend" ? "Frontend" : "Backend"}
          </Button>
        )}
      </div>
    </motion.section>
  )
}

export default Projects

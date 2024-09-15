import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

const About = () => {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"]

  return (
    <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
      className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mí</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
            Hola, soy Ronny Minda Vera, un desarrollador web apasionado con 3 años de experiencia 
            en la creación de aplicaciones web modernas y eficientes. Me especializo en 
            tecnologías front-end y tengo un fuerte interés en la experiencia del usuario y 
            el rendimiento de las aplicaciones.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
          <Button className="mt-4">
            <Download className="mr-2 h-4 w-4" /> Descargar CV
          </Button>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Foto de perfil"
              width={600}
              height={600}
              className="object-cover"
            />
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Mi Trayectoria</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Educación</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Graduado en Ingeniería Informática por la Universidad XYZ
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Experiencia</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                5+ años trabajando en startups y empresas tecnológicas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Proyectos</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                +20 proyectos completados para clientes de diversos sectores
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}

export default About


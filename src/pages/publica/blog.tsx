import { useState } from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { motion } from "framer-motion"
 
const blogPosts = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    summary: "Descubre cómo los Hooks de React pueden simplificar tu código y mejorar la reutilización de la lógica en tus componentes.",
    content: "Los React Hooks son una característica introducida en React 16.8 que permite usar el estado y otras características de React sin escribir una clase. Esto significa que puedes usar el estado y otros features de React directamente dentro de los componentes funcionales...",
    date: new Date('2023-05-15'),
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "JavaScript", "Hooks"],
  },
  {
    id: 2,
    title: "Optimización de rendimiento en aplicaciones Next.js",
    summary: "Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js y ofrecer una experiencia de usuario más rápida.",
    content: "Next.js ofrece varias características integradas para optimizar el rendimiento de tu aplicación. Algunas de las técnicas más efectivas incluyen el uso de imágenes optimizadas con el componente Image, la implementación de carga incremental con el componente Link, y la utilización de generación estática para páginas que no requieren datos en tiempo real...",
    date: new Date('2023-06-22'),
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Performance", "React"],
  },
  {
    id: 3,
    title: "Introducción a TypeScript para desarrolladores JavaScript",
    summary: "Descubre cómo TypeScript puede mejorar tu flujo de trabajo de desarrollo y ayudarte a escribir código más seguro y mantenible.",
    content: "TypeScript es un superconjunto tipado de JavaScript que compila a JavaScript plano. Proporciona características adicionales como tipos estáticos, interfaces, y otras características avanzadas que no están disponibles en JavaScript vanilla. Al usar TypeScript, puedes detectar errores durante el desarrollo, lo que resulta en un código más robusto y fácil de mantener...",
    date: new Date('2023-07-10'),
    image: "/placeholder.svg?height=200&width=300",
    tags: ["TypeScript", "JavaScript", "Programación"],
  },
  {
    id: 4,
    title: "Creando APIs RESTful con Node.js y Express",
    summary: "Aprende a construir APIs robustas y escalables utilizando Node.js y el framework Express.",
    content: "Node.js y Express son una combinación poderosa para crear APIs RESTful. Express proporciona una capa de abstracción sobre Node.js que facilita la creación de rutas, el manejo de middleware y la gestión de solicitudes y respuestas HTTP. En este artículo, exploraremos cómo configurar un proyecto básico de API, definir rutas, implementar middleware para autenticación y manejo de errores, y conectarnos a una base de datos...",
    date: new Date('2023-08-05'),
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
]

function BlogPostCard({ post, onReadMore }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <img
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="object-cover w-full h-48 rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="mb-2">{post.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {/* format(post.date, 'dd MMMM yyyy', { locale: es }) */}
        </span>
        <Button onClick={() => onReadMore(post)}>Leer más</Button>
      </CardFooter>
    </Card>
  )
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState(null)
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handleReadMore = (post) => {
    setSelectedPost(post)
  }

  return (
    <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
      className="container mx-auto py-12 px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Blog</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink 
                href="#" 
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Dialog>
        <DialogTrigger asChild>
          <span style={{ display: 'none' }}></span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedPost.title}</DialogTitle>
                <DialogDescription>
                  {format(selectedPost.date, 'dd MMMM yyyy', { locale: es })}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p>{selectedPost.content}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  )
}

export default Blog

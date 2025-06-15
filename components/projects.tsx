"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Folder, Star } from "lucide-react"
import { CustomAlert } from "@/components/ui/custom-alert"

const projects = [
  {
    title: "CASAPUS - UM6P",
    description:
      "A MERN-stack Platform for managing all UM6P Casablanca Services , including Access Management , Booking , Security, and more.",
    image: "/projects/casapus.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "UI/UX"],
    codeLink: "#",
    isPrivate: true,
    featured: true,
  },
  {
    title: "WePong",
    description:
      "A full-stack web application with real-time game mechanics and a comprehensive chat system. Implemented OAuth, WebSockets, and responsive design.",
    image: "/projects/ft_tr.png",
    tags: ["HTML", "CSS", "JavaScript", "DJango", "SQL", "Docker"],
    codeLink: "https://github.com/emohamedd/WePong",
    featured: true,
  },
  {
    title: "Facilipro",
    description:
      "A platform that facilitates the process of connecting individuals from Morocco with opportunities in Canada. Features include user profiles, application tracking, and resource management.",
    image: "/projects/facilipro.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "UI/UX", "Freelance"],
    codeLink: "https://www.facilipro.ma",
    featured: true,
  },
  {
    title: "7or Zahra",
    description:
      "A modern, responsive website for a honey-selling business. Features product showcase, order form, and contact section. Built as a freelance project for a local entrepreneur.",
    image: "/projects/7orzahra.png",
    tags: ["Next.js", "React", "Tailwind CSS", "UI/UX", "Freelance"],
    codeLink: "https://7or-zahra.vercel.app",
    isPrivate: false,
    featured: false,
  },
  {
    title: "WEBSERVER",
    description:
      "Built an HTTP server from scratch using C++. Implemented request parsing, response generation, and CGI handling with a focus on performance and standards compliance.",
    image: "/projects/webserver.png",
    tags: ["C++", "HTTP", "Networking", "Sockets", "Fast CGI"],
    demoLink: "#",
    codeLink: "https://github.com/emohamedd/webserver",
    featured: true,
  },
  {
    title: "INCEPTION",
    description:
      "Deployed a complete web stack using Docker containers. Set up Nginx, WordPress, and MariaDB with custom configurations and secure networking.",
    image: "/projects/inception.png",
    tags: ["Docker", "Nginx", "WordPress", "MariaDB", "DevOps"],
    demoLink: "#",
    codeLink: "https://github.com/emohamedd/Inception-docker",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [100, -100],
          y: [-100, 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [-100, 100],
          y: [100, -100],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Latest Projects</h2>
            <motion.div 
              className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"
              animate={{
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating innovative solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card 
                className="relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-muted/50 transition-all duration-300 hover:shadow-xl group cursor-pointer" 
                onClick={() => {
                  if (project.isPrivate) {
                    setIsAlertOpen(true)
                  } else {
                    window.open(project.codeLink, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative aspect-video overflow-hidden bg-muted/50">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-4 w-4 text-primary/80" />
                    {project.featured && <Star className="h-4 w-4 text-yellow-500/80" />}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-start">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <CustomAlert 
        isOpen={isAlertOpen} 
        onClose={() => setIsAlertOpen(false)} 
      />
    </section>
  )
}


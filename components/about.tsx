"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Laptop2, Brain, Sparkles, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Specialized in Frontend with big Knowledge of Backend.",
      color: "from-blue-500/20 to-cyan-500/20",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Laptop2,
      title: "UI Design",
      description: "Creating Beautiful and Intuitive User Interfaces.",
      color: "from-purple-500/20 to-pink-500/20",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical skills and algorithmic thinking for complex challenges .",
      color: "from-orange-500/20 to-red-500/20",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Passionate about exploring new technologies and creative solutions.",
      color: "from-green-500/20 to-emerald-500/20",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Remove the dark overlay and simplify the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5" />

      <div className="container relative px-4 md:px-6" ref={ref}>
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative h-full w-full overflow-hidden bg-black">
                  <img
                    src="/computers.gif"
                    alt="About Me"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-h-[300px] object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-semibold tracking-tight"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Passionate Full-Stack Developer & UI Designer
              </motion.h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a software engineer specializing in building exceptional digital experiences. 
                Currently, I'm focused on creating accessible, human-centered products while 
                continuously learning and exploring new technologies.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="relative overflow-hidden group bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="#contact">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center">
                      Get in Touch
                      <motion.span
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="group hover:bg-secondary/10 relative overflow-hidden"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10 flex items-center">
                      Download CV
                      <motion.span
                        className="ml-2"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Download className="h-4 w-4" />
                      </motion.span>
                    </span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-lg blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to right, ${item.color})` }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="relative bg-background/80 backdrop-blur-sm hover:bg-background/60 rounded-lg p-6 shadow-lg border transition-all duration-300 group-hover:border-primary/50">
                  <div className="mb-4">
                    <item.icon 
                      className={`h-10 w-10 text-gradient ${item.gradient} [--tw-text-opacity:1]`} 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote Section */}
          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border hover:border-primary/50 transition-all duration-300">
              <p className="text-lg leading-relaxed italic text-muted-foreground">
                "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."
              </p>
              <p className="mt-4 text-sm font-medium text-primary">- Bill Gates</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


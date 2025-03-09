"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        <motion.div
          className="absolute rounded-full opacity-20 dark:opacity-10 bg-primary blur-[100px]"
          animate={{
            x: mousePosition.x / 20 - window.innerWidth / 3,
            y: mousePosition.y / 20 - window.innerHeight / 3,
            scale: [1, 1.1, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            scale: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: "60vw",
            height: "60vw",
          }}
        />
        <motion.div
          className="absolute rounded-full opacity-10 dark:opacity-5 bg-secondary blur-[120px]"
          animate={{
            x: mousePosition.x / 30 - window.innerWidth / 4,
            y: mousePosition.y / 30 - window.innerHeight / 4,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 30,
            scale: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: "50vw",
            height: "50vw",
          }}
        />
      </div>

      <div className="container flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <motion.span
                className="absolute -left-2 -top-2 text-4xl md:text-6xl opacity-20"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {"<"}
              </motion.span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Mohamed Amine El Gaouej
              </h1>
              <motion.span
                className="absolute -right-2 -bottom-2 text-4xl md:text-6xl opacity-20"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {"/>"}
              </motion.span>
            </motion.div>
            
            <motion.div
              className="overflow-hidden relative"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full-Stack Developer | UI Designer | Problem Solver
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                asChild
                className="relative overflow-hidden group"
              >
                <a href="#contact">
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group">
                <a href="#projects">
                  <motion.span
                    className="absolute inset-0 bg-primary/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  View Projects
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[
                { href: "https://github.com/emohamedd", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mohamed-amine-el-gaouej-3a908623b/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:a.elgaouej03@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative group"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                        {social.label}
                      </span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
              }
            }}
          >
            <motion.div
              className="rounded-full overflow-hidden relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="absolute -inset-[3px] bg-gradient-to-tr from-primary to-secondary rounded-full" />
              <div className="absolute inset-[1px] bg-background rounded-full" />
              <div className="relative rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-transparent"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <img
                  src="/Me.jpg"
                  alt="Mohamed Amine El Gaouej"
                  className="w-full h-full object-cover scale-85 relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          aria-label="Scroll down"
          className="group flex flex-col items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  )
}


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

interface Star {
  id: number
  x: number
  y: number
  size: number
  brightness: number
  delay: number
  duration: number
  speed: number
  distance: number
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)
  const [blackHoleSize, setBlackHoleSize] = useState(0)

  
  const stars: Star[] = Array.from({ length: 50 }).map((_, i) => {
    const distance = Math.random()
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      brightness: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 3,
      speed: 0.2,
      distance: distance,
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setShowWelcome(true)
          return 100
        }
        return prev + 1
      })
    }, 20) 

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setBlackHoleSize(progress * 1 + 100) 
  }, [progress])

  useEffect(() => {
    if (showWelcome) {
      const welcomeTimer = setTimeout(() => {
        onLoadingComplete()
      }, 2500)
      return () => clearTimeout(welcomeTimer)
    }
  }, [showWelcome, onLoadingComplete])

  return (
    <AnimatePresence mode="wait">
      {!showWelcome ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden"
          exit={{ 
            scale: 0,
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
        >
          {}
          <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  background: `rgba(255, 255, 255, ${star.brightness})`,
                  boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.brightness * 0.5})`,
                }}
                animate={{
                  scale: [1, 0],
                  x: [0, `${50 - star.x}%`],
                  y: [0, `${50 - star.y}%`],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: star.duration * (1 / star.speed),
                  delay: star.delay,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,${star.brightness}) 0%, transparent 100%)`,
                    transform: 'scale(1, 0.1)',
                    transformOrigin: star.x > 50 ? 'left center' : 'right center',
                  }}
                  animate={{
                    opacity: [0, star.brightness * 0.3, 0],
                  }}
                  transition={{
                    duration: star.duration * 0.5,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Outer Glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: `${blackHoleSize * 2}px`,
                height: `${blackHoleSize * 2}px`,
                transform: 'translate(-50%, -50%)',
                background: `
                  radial-gradient(circle, 
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(255, 255, 255, 0.05) 30%,
                    transparent 70%
                  )
                `,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {}
            <motion.div
              style={{
                width: `${blackHoleSize}px`,
                height: `${blackHoleSize}px`,
              }}
              className="rounded-full relative"
              animate={{
                scale: showWelcome ? 0 : 1,
                rotate: showWelcome ? 720 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "black",
                  boxShadow: `
                    0 0 60px rgba(0, 0, 0, 0.8),
                    inset 0 0 40px rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                {}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      radial-gradient(circle, 
                        rgba(0, 0, 0, 1) 30%,
                        rgba(255, 255, 255, 0.15) 60%,
                        transparent 70%
                      )
                    `,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Progress Ring */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * progress) / 100}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Progress Counter */}
          <motion.span
            className="text-xl font-mono mt-12 text-white/70 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      ) : (
        <motion.div
          key="welcome"
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="text-center relative"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="relative"
              animate={{
                filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.span
                className="absolute -left-4 -top-4 text-4xl text-primary/20"
                animate={{ 
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {"<"}
              </motion.span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Welcome to
              </h1>
              <motion.p 
                className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                  opacity: [0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Mohamed Amine El Gaouej&apos;s Portfolio
              </motion.p>
              <motion.span
                className="absolute -right-4 -bottom-4 text-4xl text-primary/20"
                animate={{ 
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {"/>"}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
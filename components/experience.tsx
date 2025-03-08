"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const timelineItems = [
  {
    title: "Freelance UI Designer & Web Developer",
    organization: "Self-employed / Upwork",
    organizationUrl: "https://www.upwork.com",
    period: "2019 - Present",
    description:
      "Designed and developed custom websites and applications for various clients. Specialized in creating intuitive user interfaces and responsive designs.",
    type: "work",
  },
  {
    title: "Graduation Internship",
    organization: "UM6P",
    organizationUrl: "https://www.um6p.ma",
    period: "2025",
    description:
      "Worked on developing and implementing a new web application (UBS) for managing the access to the company, conference rooms bookings , catering and more.",
    type: "work",
  },
  {
    title: "Software Engineering",
    organization: "UM6P - 1337 Coding School",
    organizationUrl: "https://1337.ma",
    period: "2021 - 2025",
    description:
      "Completed an intensive peer-to-peer learning program focused on software engineering and computer science fundamentals. Worked on numerous projects covering algorithms, system programming, web development, and more.",
    type: "education",
  },
  {
    title: "Computer Science",
    organization: "FSSM University - SMIA",
    organizationUrl: "http://www.uca.ma/fssm",
    period: "2019 - 2021",
    description:
      "Studied computer science fundamentals, including data structures, algorithms, and software engineering principles.",
    type: "education",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {timelineItems.map((item, index) => (
            <motion.div key={index} className="relative pl-8 pb-12 last:pb-0" variants={itemVariants}>
              <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute top-0 left-0 -translate-x-1/2 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase className="h-3 w-3 text-primary" />
                  ) : (
                    <GraduationCap className="h-3 w-3 text-primary" />
                  )}
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-primary mb-3">
                  {item.organizationUrl !== "#" ? (
                    <a 
                      href={item.organizationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition-all duration-200"
                    >
                      {item.organization}
                    </a>
                  ) : (
                    item.organization
                  )}
                </p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


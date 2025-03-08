"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { FormAlert } from "@/components/ui/form-alert"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: 'success' as const,
    title: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setAlertState({
        isOpen: true,
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for your message. I will get back to you soon!'
      })

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setAlertState({
        isOpen: true,
        type: 'error',
        title: 'Error',
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary/80 mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-muted/50 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <Mail className="h-5 w-5 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                    <a href="mailto:email@example.com" className="hover:text-primary transition-colors">
                      a.elgaouej03@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Phone className="h-5 w-5 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                    <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                      +XX XX XX XX XX
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Github className="h-5 w-5 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                    <a
                      href="https://github.com/emohamedd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors truncate"
                    >
                      github.com/emohamedd
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Linkedin className="h-5 w-5 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                    <a
                      href="https://www.linkedin.com/in/mohamed-amine-el-gaouej-3a908623b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium mb-4 text-lg">Connect with me</h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-colors" asChild>
                      <a href="https://github.com/emohamedd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-colors" asChild>
                      <a
                        href="https://www.linkedin.com/in/mohamed-amine-el-gaouej-3a908623b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-colors" asChild>
                      <a href="mailto:email@example.com" aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-muted/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <div className="space-y-5">
                  <div>
                    <Input 
                      name="name" 
                      placeholder="Your Name" 
                      value={formState.name} 
                      onChange={handleChange} 
                      required 
                      className="bg-background/50 border-muted/50 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-muted/50 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-muted/50 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-background/50 border-muted/50 focus:border-primary/50 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <FormAlert 
        isOpen={alertState.isOpen}
        onClose={() => setAlertState(prev => ({ ...prev, isOpen: false }))}
        type={alertState.type}
        title={alertState.title}
        message={alertState.message}
      />
    </section>
  )
}


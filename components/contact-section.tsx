"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, Send, ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lopez.daisy2022@gmail.com',
      href: 'mailto:lopez.daisy2022@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'daisy-lopez',
      href: 'https://www.linkedin.com/in/daisy-lopez-7a3150278',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'lopezdaisy',
      href: 'https://github.com/lopezdaisy',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 732 050 089',
      href: 'tel:+254732050089',
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-muted-foreground">06</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Contact</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Heading and status */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
                Let&apos;s create something{' '}
                <span className="text-primary">beautiful.</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, 
                or opportunities to be part of your visions.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                <span className="text-sm text-foreground">Available for opportunities</span>
              </div>

              {/* Contact links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.label !== 'Phone' && link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Phone' && link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{link.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                          {link.value}
                          {(link.label === 'LinkedIn' || link.label === 'GitHub') && (
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Right side - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

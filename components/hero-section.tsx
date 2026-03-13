"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowDown, ArrowUpRight } from 'lucide-react'

const roles = [
  'UI/UX Designer',
  'IT Support Specialist',
  'Digital Growth Associate',
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nameChars = "Daisy Lopez Adhiambo".split('')

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        {/* Name with stagger animation */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 text-glow">
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Animated role */}
        <div className="h-10 md:h-12 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl md:text-2xl font-medium text-primary"
            >
              {roles[currentRole]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
        >
          Building intuitive digital experiences — from interfaces to infrastructure.
        </motion.p>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
          <span className="text-sm text-foreground">Available for opportunities</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/50 text-foreground hover:bg-primary/30 hover:border-primary transition-all duration-300"
          >
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 text-foreground transition-all duration-300"
          >
            Get In Touch
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Location card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 right-6 md:bottom-20 md:right-20 glass rounded-xl px-4 py-3 hidden sm:flex items-center gap-3"
      >
        <MapPin size={18} className="text-primary" />
        <div className="text-sm">
          <p className="text-foreground font-medium">Nairobi, Kenya</p>
          <p className="text-muted-foreground text-xs">Open to Remote</p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

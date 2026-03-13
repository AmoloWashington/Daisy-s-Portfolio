"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Built' },
  { value: '2', label: 'Industries Served' },
  { value: '3.8', label: 'GPA' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-sm text-muted-foreground">01</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl glass overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-serif text-4xl text-foreground">DL</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Daisy Lopez Adhiambo</p>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl -z-10 opacity-50" />
            </motion.div>

            {/* Bio content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m a versatile tech professional bridging the worlds of IT support, UX design, and digital marketing. 
                With a passion for creating seamless digital experiences, I bring a unique perspective that combines 
                technical expertise with creative problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor&apos;s in Information Technology at Masinde Muliro University, 
                I&apos;ve cultivated skills across hardware troubleshooting, interface design, and growth strategy. 
                My approach centers on understanding user needs and delivering solutions that are both 
                functional and delightful to use.
              </p>

              {/* Currently card */}
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Rocket size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Currently</p>
                  <p className="text-foreground font-medium">Growth & Marketing @ NaviSmart AI</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-serif text-3xl md:text-4xl text-primary font-semibold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

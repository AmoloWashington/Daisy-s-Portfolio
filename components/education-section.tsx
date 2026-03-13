"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react'

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-sm text-muted-foreground">05</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Education</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 relative overflow-hidden group"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap size={32} className="text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground font-semibold mb-2">
                      Bachelor of Information Technology
                    </h3>
                    <p className="text-primary font-medium text-lg">
                      Masinde Muliro University of Science and Technology
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">MMUST</p>
                  </div>

                  {/* GPA Badge */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
                  >
                    <Award size={18} className="text-yellow-400" />
                    <span className="font-semibold text-yellow-400">GPA: 3.8</span>
                  </motion.div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin size={16} />
                  <span className="text-sm">Kakamega, Kenya</span>
                </div>

                {/* Certifications */}
                <div className="glass rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="text-green-400 text-sm font-medium">Responsive Web Design</span>
                      <span className="text-muted-foreground text-xs">Cognifyz · March 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

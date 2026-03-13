"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, Monitor, Palette, Settings } from 'lucide-react'

const experiences = [
  {
    icon: Rocket,
    title: 'Growth & Marketing Associate',
    company: 'NaviSmart AI',
    location: 'Delaware',
    period: 'June 2025 – Present',
    description: 'Led outreach for recruitment agencies & immigration consultants, built digital campaigns on LinkedIn & email, produced marketing copy & outreach templates.',
    current: true,
  },
  {
    icon: Monitor,
    title: 'IT Support Specialist',
    company: 'Radio Africa Limited',
    location: 'Limuru',
    period: 'May 2024 – Aug 2024',
    description: 'Hardware/software troubleshooting, network maintenance (LAN/WAN/wireless), user account management.',
    current: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Designer',
    company: 'HerVoice',
    location: 'Remote',
    period: 'Jan 2024 – Present',
    description: 'Designed interfaces for gender-based violence data platform, user research, wireframes, accessibility-focused responsive design.',
    current: true,
  },
  {
    icon: Settings,
    title: 'Industrial Trainee – ICT',
    company: 'MMUST',
    location: 'Kakamega',
    period: 'May 2023 – Jul 2023',
    description: 'Built fullstack internal tools (Flask/Django) reducing workflow bottlenecks by 30%, developed REST APIs (FastAPI) with MongoDB/MySQL.',
    current: false,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-muted-foreground">02</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Experience</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            {/* Experience cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <motion.div
                    key={exp.title + exp.company}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Card */}
                    <div className="md:ml-20 glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                          <Icon size={22} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-primary font-medium mb-1">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {exp.location} · {exp.period}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

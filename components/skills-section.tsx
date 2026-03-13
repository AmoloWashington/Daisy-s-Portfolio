"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillsRow1 = [
  'User Interface Design', 'UX Design', 'Wireframing', 'Prototyping', 'Usability Testing',
  'User Flow', 'Responsive Design', 'HTML5', 'CSS3', 'JavaScript',
  'Hardware Troubleshooting', 'Helpdesk', 'System Configuration', 'Windows Admin',
]

const skillsRow2 = [
  'LAN/WAN', 'Wireless Setup', 'Router/Switch Config', 'Network Diagnostics',
  'Java', 'JavaFX', 'Java Swing', 'FastAPI', 'Flask', 'Django', 'REST APIs',
  'MongoDB', 'MySQL', 'Git', 'GitHub', 'Digital Strategy', 'Content Creation',
]

const skillsRow3 = [
  'LinkedIn Marketing', 'Partnership Development', 'Brand Communication',
  'Microsoft Office', 'Google Workspace', 'Technical Documentation',
  'Backup & Recovery', 'User Account Management', 'Responsive Layouts',
]

function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 mx-2 rounded-full glass text-sm font-mono text-foreground whitespace-nowrap hover:bg-white/15 hover:border-primary/50 transition-all duration-300 cursor-default">
      {skill}
    </span>
  )
}

function MarqueeRow({ skills, reverse = false }: { skills: string[], reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {/* Double the skills for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <SkillPill key={`${skill}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-muted-foreground">04</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Skills & Tools</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>
      </div>

      {/* Full-width marquee section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-4"
      >
        {/* Gradient fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <MarqueeRow skills={skillsRow1} />
          <MarqueeRow skills={skillsRow2} reverse />
          <MarqueeRow skills={skillsRow3} />
        </div>
      </motion.div>

      {/* Skill categories */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: 'UI/UX Design', color: 'primary', items: ['Interface Design', 'Wireframing', 'Prototyping', 'User Research'] },
            { title: 'Development', color: 'secondary', items: ['Java', 'Python', 'Flask/Django', 'REST APIs'] },
            { title: 'IT Support', color: 'accent', items: ['Hardware', 'Networking', 'System Admin', 'Troubleshooting'] },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className={`font-semibold text-lg mb-4 ${
                category.color === 'primary' ? 'text-primary' : 
                category.color === 'secondary' ? 'text-secondary' : 'text-accent'
              }`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      category.color === 'primary' ? 'bg-primary' : 
                      category.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

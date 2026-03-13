"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Cognifyz Internship Projects',
    description: 'Responsive web development tasks including form validation and dynamic UI components.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/lopezdaisy',
    featured: true,
    category: 'Web Dev',
  },
  {
    title: 'Resume Builder Application',
    description: 'Desktop GUI application for structured resume generation with intuitive interface.',
    tech: ['Java', 'JavaFX'],
    github: 'https://github.com/lopezdaisy',
    featured: true,
    category: 'Desktop',
  },
  {
    title: 'VetKonnect',
    description: 'Web platform connecting veterinary providers with pet owners for seamless service access.',
    tech: ['HTML', 'CSS', 'Web Design'],
    github: 'https://github.com/lopezdaisy',
    featured: false,
    category: 'Web Dev',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Showcasing projects, skills, and professional information with modern design.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/lopezdaisy',
    featured: false,
    category: 'Web Dev',
  },
]

const filters = ['All', 'Web Dev', 'UI/UX', 'Desktop']

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm text-muted-foreground">03</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary/20 border border-primary text-foreground'
                    : 'glass text-muted-foreground hover:text-foreground hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-primary/50 relative overflow-hidden">
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="font-semibold text-xl text-foreground mb-3 pr-20 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Project
                    </a>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:lopez.daisy2022@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daisy-lopez-7a3150278', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/lopezdaisy', label: 'GitHub' },
  ]

  return (
    <footer className="py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              &copy; 2025 Daisy Lopez Adhiambo · Designed & Built with{' '}
              <Heart size={14} className="text-secondary fill-secondary" />
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    aria-label={link.label}
                  >
                    <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

"use client"

import { motion } from 'framer-motion'
import { FloatingOrbs } from '@/components/floating-orbs'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-x-hidden"
    >
      {/* Background elements */}
      <FloatingOrbs />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      
      {/* Utilities */}
      <BackToTop />
    </motion.main>
  )
}

"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import ProjectsSection from "@/components/projects-section"
import CareerSection from "@/components/career-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollDownIndicator from "@/components/scroll-down-indicator"

export default function Home() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleUserInteraction = () => {
    setShowNav(true)
  }

  return (
    <main className="min-h-screen bg-background" onClick={handleUserInteraction}>
      {showNav && <Navigation />}
      <ScrollDownIndicator />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProjectsSection />
      <CareerSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

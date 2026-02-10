"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import ProjectsSection from "@/components/projects-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollDownIndicator from "@/components/scroll-down-indicator"

export default function Home() {
  const [showNav, setShowNav] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null)
  const hasScrolledRef = useRef(false)

  const handleUserInteraction = () => {
    setShowScrollIndicator(false)

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }

    inactivityTimerRef.current = setTimeout(() => {
      setShowScrollIndicator(true)
    }, 5000)
  }

  // 🔥 NAVBAR LOGIC (TEK SEFERLİK)
  useEffect(() => {
    const handleScroll = () => {
      handleUserInteraction()

      if (!hasScrolledRef.current && window.scrollY > 20) {
        hasScrolledRef.current = true
        setShowNav(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const events = ["click", "keydown", "touchstart"]

    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction)
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-background" onClick={handleUserInteraction}>
      {showNav && <Navigation />}
      {showScrollIndicator && <ScrollDownIndicator />}

      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}

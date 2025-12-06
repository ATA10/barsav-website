"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import ProjectsSection from "@/components/projects-section"
// import CareerSection from "@/components/career-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollDownIndicator from "@/components/scroll-down-indicator"

export default function Home() {
  const [showNav, setShowNav] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null)
  const userInteractedRef = useRef(false)

  const handleUserInteraction = () => {
  setShowScrollIndicator(false)

  if (inactivityTimerRef.current) {
    clearTimeout(inactivityTimerRef.current)
  }

  inactivityTimerRef.current = setTimeout(() => {
    setShowScrollIndicator(true)
  }, 5000)
}


  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 20)
      handleUserInteraction() // Scroll da bir etkileşimdir
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    inactivityTimerRef.current = setTimeout(() => {
      if (!userInteractedRef.current) {
        setShowScrollIndicator(true)
      }
    }, 5000)

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const events = ["click", "scroll", "keydown", "touchstart"]
    
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction)
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#contact") {
        setIsContactModalOpen(true)
      } else if (hash) {
        scrollToHash(hash)
      }
    }

    if (window.location.hash) {
      handleHashChange()
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <main className="min-h-screen bg-background" onClick={handleUserInteraction}>
      {showNav && <Navigation />}
      {showScrollIndicator && <ScrollDownIndicator />}
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProjectsSection />
      {/* <CareerSection /> */}
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

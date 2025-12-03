// "use client"

// import { useState, useEffect } from "react"
// import Navigation from "@/components/navigation"
// import HeroSection from "@/components/hero-section"
// import FeaturesSection from "@/components/features-section"
// import BenefitsSection from "@/components/benefits-section"
// import ProjectsSection from "@/components/projects-section"
// import CareerSection from "@/components/career-section"
// import BlogSection from "@/components/blog-section"
// import ContactSection from "@/components/contact-section"
// import ContactModal from "@/components/contact-modal"
// import Footer from "@/components/footer"
// import ScrollDownIndicator from "@/components/scroll-down-indicator"

// export default function Home() {
//   const [showNav, setShowNav] = useState(false)
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowNav(window.scrollY > 1000)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleUserInteraction = () => {
//     setShowNav(true)
//   }

//   useEffect(() => {
//     const handleHashChange = () => {
//       if (window.location.hash === "#contact") {
//         setIsContactModalOpen(true)
//       }
//     }

//     window.addEventListener("hashchange", handleHashChange)
//     return () => window.removeEventListener("hashchange", handleHashChange)
//   }, [])

//   return (
//     <main className="min-h-screen bg-background" onClick={handleUserInteraction}>
//       {showNav && <Navigation />}
//       <ScrollDownIndicator />
//       <HeroSection />
//       <FeaturesSection />
//       <BenefitsSection />
//       <ProjectsSection />
//       <CareerSection />
//       <BlogSection />
//       <ContactSection onContactClick={() => setIsContactModalOpen(true)} />
//       <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
//       <Footer />
//     </main>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import ProjectsSection from "@/components/projects-section"
import CareerSection from "@/components/career-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import ContactModal from "@/components/contact-modal"
import Footer from "@/components/footer"
import ScrollDownIndicator from "@/components/scroll-down-indicator"

export default function Home() {
  const [showNav, setShowNav] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null)
  const userInteractedRef = useRef(false)

  // Kullanıcı etkileşimlerini izle
  const handleUserInteraction = () => {
    userInteractedRef.current = true
    setShowScrollIndicator(false)
    
    // Timer'ı sıfırla
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }
    
    // 5 saniye etkileşim olmazsa scroll indicator'ı göster
    inactivityTimerRef.current = setTimeout(() => {
      if (!userInteractedRef.current) {
        setShowScrollIndicator(true)
      }
    }, 5000)
  }

  // Scroll ile navigation göster
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 1000)
      handleUserInteraction() // Scroll da bir etkileşimdir
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Sayfa yüklendiğinde timer'ı başlat
  useEffect(() => {
    // İlk yüklemede 8 saniye sonra scroll indicator'ı göster
    inactivityTimerRef.current = setTimeout(() => {
      if (!userInteractedRef.current) {
        setShowScrollIndicator(true)
      }
    }, 8000)

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
    }
  }, [])

  // Tüm etkileşimleri dinle
  useEffect(() => {
    const events = ["click", "scroll", "keydown", "touchstart", "mousemove"]
    
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction)
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  // Hash change için
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setIsContactModalOpen(true)
      }
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
      <CareerSection />
      <BlogSection />
      <ContactSection onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Footer />
    </main>
  )
}

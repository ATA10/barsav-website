"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "bg-background/80 backdrop-blur-sm border-b border-[color:var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">BA</span>
            </div>
            <span className="hidden sm:inline text-foreground font-semibold">Barsav</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-foreground hover:text-accent transition">
              Hakkımızda
            </Link>
            <Link href="#services" className="text-foreground hover:text-accent transition">
              Hizmetler
            </Link>
            <Link href="#projects" className="text-foreground hover:text-accent transition">
              Projeler
            </Link>
            <Link href="#blog" className="text-foreground hover:text-accent transition">
              Blog
            </Link>
            <Link href="#career" className="text-foreground hover:text-accent transition">
              Kariyer
            </Link>
            <Link href="#contact" className="text-foreground hover:text-accent transition">
              İletişim
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-card rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background/80 backdrop-blur-sm">
            <Link href="#about" className="block text-foreground hover:text-accent transition py-2">
              Hakkımızda
            </Link>
            <Link href="#services" className="block text-foreground hover:text-accent transition py-2">
              Hizmetler
            </Link>
            <Link href="#projects" className="block text-foreground hover:text-accent transition py-2">
              Projeler
            </Link>
            <Link href="#blog" className="block text-foreground hover:text-accent transition py-2">
              Blog
            </Link>
            <Link href="#career" className="block text-foreground hover:text-accent transition py-2">
              Kariyer
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-accent transition py-2">
              İletişim
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

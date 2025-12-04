"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const hash = href.replace('#', '')
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL without reload
      window.history.pushState(null, '', `#${hash}`)
    }
  }

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
            <Link href="/about" className="text-foreground hover:text-accent transition">
              Hakkımızda
            </Link>
            <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="text-foreground hover:text-accent transition cursor-pointer">
              Hizmetler
            </a>
            <a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')} className="text-foreground hover:text-accent transition cursor-pointer">
              Projeler
            </a>
            <a href="#blog" onClick={(e) => handleAnchorClick(e, '#blog')} className="text-foreground hover:text-accent transition cursor-pointer">
              Blog
            </a>
            <a href="#career" onClick={(e) => handleAnchorClick(e, '#career')} className="text-foreground hover:text-accent transition cursor-pointer">
              Kariyer
            </a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="text-foreground hover:text-accent transition cursor-pointer">
              İletişim
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-card rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background/80 backdrop-blur-sm">
            <Link href="/about" className="block text-foreground hover:text-accent transition py-2">
              Hakkımızda
            </Link>
            <a href="#services" onClick={(e) => { handleAnchorClick(e, '#services'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              Hizmetler
            </a>
            <a href="#projects" onClick={(e) => { handleAnchorClick(e, '#projects'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              Projeler
            </a>
            <a href="#blog" onClick={(e) => { handleAnchorClick(e, '#blog'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              Blog
            </a>
            <a href="#career" onClick={(e) => { handleAnchorClick(e, '#career'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              Kariyer
            </a>
            <a href="#contact" onClick={(e) => { handleAnchorClick(e, '#contact'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              İletişim
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

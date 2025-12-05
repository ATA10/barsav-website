"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import LanguageSelector from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export default function Navigation() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
    
    // Eğer ana sayfada değilsek, ana sayfaya yönlendir
    if (window.location.pathname !== '/') {
      window.location.href = `/#${hash}`
    } else {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${hash}`)
      }
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

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-foreground hover:text-accent transition">
              {getTranslation(language, "nav.about")}
            </Link>
            <Link href="/products" className="text-foreground hover:text-accent transition">
              {getTranslation(language, "nav.products")}
            </Link>
            <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="text-foreground hover:text-accent transition cursor-pointer">
              {getTranslation(language, "nav.services")}
            </a>
            <a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')} className="text-foreground hover:text-accent transition cursor-pointer">
              {getTranslation(language, "nav.projects")}
            </a>
            <a href="#blog" onClick={(e) => handleAnchorClick(e, '#blog')} className="text-foreground hover:text-accent transition cursor-pointer">
              {getTranslation(language, "nav.blog")}
            </a>
            <a href="#career" onClick={(e) => handleAnchorClick(e, '#career')} className="text-foreground hover:text-accent transition cursor-pointer">
              {getTranslation(language, "nav.career")}
            </a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="text-foreground hover:text-accent transition cursor-pointer">
              {getTranslation(language, "nav.contact")}
            </a>
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-card rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background/80 backdrop-blur-sm">
            <Link href="/about" className="block text-foreground hover:text-accent transition py-2">
              {getTranslation(language, "nav.about")}
            </Link>
            <Link href="/products" className="block text-foreground hover:text-accent transition py-2">
              {getTranslation(language, "nav.products")}
            </Link>
            <a href="#services" onClick={(e) => { handleAnchorClick(e, '#services'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              {getTranslation(language, "nav.services")}
            </a>
            <a href="#projects" onClick={(e) => { handleAnchorClick(e, '#projects'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              {getTranslation(language, "nav.projects")}
            </a>
            <a href="#blog" onClick={(e) => { handleAnchorClick(e, '#blog'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              {getTranslation(language, "nav.blog")}
            </a>
            <a href="#career" onClick={(e) => { handleAnchorClick(e, '#career'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              {getTranslation(language, "nav.career")}
            </a>
            <a href="#contact" onClick={(e) => { handleAnchorClick(e, '#contact'); setIsOpen(false); }} className="block text-foreground hover:text-accent transition py-2 cursor-pointer">
              {getTranslation(language, "nav.contact")}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
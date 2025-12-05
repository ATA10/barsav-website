"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { languages, Language } from "@/lib/translations"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentLanguage = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-[color:var(--border)] hover:border-accent transition text-foreground"
        aria-label="Select language"
      >
        <span className="text-xl" role="img" aria-label={currentLanguage.name}>{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.displayCode}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-[color:var(--border)] rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-background transition ${
                language === lang.code ? "bg-background" : ""
              }`}
            >
              <span className="text-xl" role="img" aria-label={lang.name}>{lang.flag}</span>
              <span className="text-foreground font-medium">{lang.displayCode}</span>
              {language === lang.code && (
                <span className="ml-auto text-accent">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


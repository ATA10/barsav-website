"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function ScrollDownIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 6000)

    const handleScroll = () => {
      setIsVisible(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-bounce">
      <button
        onClick={scrollToNext}
        aria-label="Aşağı kaydırın"
        className="
          flex flex-col items-center justify-center gap-1
          w-24 h-28
          bg-accent/20
          backdrop-blur-lg
          border border-accent/40
          shadow-xl shadow-accent/30
          text-accent
          hover:bg-accent/30
          hover:shadow-accent/50
          transition-all duration-300
        "
        style={{ 
          borderRadius: '50% / 40% 40% 60% 60%'
        }}
      >
        <span className="text-sm font-semibold tracking-wide">
          Aşağı
        </span>
        <span className="text-sm font-semibold tracking-wide">
          Kaydır
        </span>
        <ChevronDown className="w-8 h-8 mt-1" />
      </button>
    </div>
  )
}
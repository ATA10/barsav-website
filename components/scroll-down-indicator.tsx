"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function ScrollDownIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

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
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center gap-2 text-accent hover:text-accent/80 transition"
        aria-label="Aşağı kaydır"
      >
        <span className="text-sm font-medium">Aşağı Kaydır</span>
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  )
}

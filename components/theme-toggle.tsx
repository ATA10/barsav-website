"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // localStorage'dan tema tercihini al
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-[color:var(--border)] hover:border-accent transition"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-[color:var(--border)] hover:border-accent transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  )
}


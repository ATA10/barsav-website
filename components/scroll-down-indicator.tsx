// "use client"

// import { useState, useEffect } from "react"
// import { ChevronDown } from "lucide-react"

// export default function ScrollDownIndicator() {
//   const [isVisible, setIsVisible] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false)
//     }, 6000)

//     const handleScroll = () => {
//       setIsVisible(false)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       clearTimeout(timer)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   if (!isVisible) return null

//   const scrollToNext = () => {
//     window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
//   }

//   return (
//     <div className="fixed bottom-8 right-8 z-40 animate-bounce">
//       <button
//         onClick={scrollToNext}
//         className="flex flex-col items-center gap-2 text-accent hover:text-accent/80 transition"
//         aria-label="Aşağı kaydırın"
//       >
//         <span className="text-sm font-medium">Aşağı Kaydır</span>
//         <ChevronDown className="w-6 h-6" />
//       </button>
//     </div>
//   )
// }

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
          flex flex-col items-center gap-2
          px-4 py-2
          rounded-full
          bg-accent/20
          backdrop-blur-lg
          border border-accent/40
          shadow-xl shadow-accent/30
          text-accent
          hover:bg-accent/30
          hover:shadow-accent/50
          transition-all duration-300
        "
      >
        <span className="text-base font-semibold tracking-wide">
          Aşağı Kaydır
        </span>
        <ChevronDown className="w-12 h-10" />
      </button>
    </div>
  )
}

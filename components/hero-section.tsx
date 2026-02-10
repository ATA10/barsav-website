"use client"

  import { useEffect, useState } from "react"
  import Link from "next/link"
  import Image from "next/image"
  import ImageWithBasePath from "./image-with-basepath"
  import { useLanguage } from "@/contexts/language-context"
  import { getTranslation } from "@/lib/translations"

  export default function HeroSection() {
    const { language } = useLanguage()
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const hash = href.replace('#', '')
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${hash}`)
      }
    }

    return (
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="absolute inset-0">
          <ImageWithBasePath
            src="/a.png"
            alt="Background"
            fill
            className="object-cover blur-sm"
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] text-balance leading-tight">
                {getTranslation(language, "hero.title")}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
              <p className="text-3xl md:text-4xl text-white font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                {getTranslation(language, "hero.subtitle")}
              </p>
              <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto text-balance drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                {getTranslation(language, "hero.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="cursor-pointer">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
                  {getTranslation(language, "hero.exploreButton")}
                </button>
              </a>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="cursor-pointer">
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 rounded-lg font-semibold transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {getTranslation(language, "hero.contactButton")}
                </button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12">
              <div className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">100+</p>
                <p className="text-white font-semibold">{getTranslation(language, "hero.projects")}</p>
              </div>
              <div className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">20+</p>
                <p className="text-white font-semibold">{getTranslation(language, "hero.years")}</p>
              </div>
              <div className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">50+</p>
                <p className="text-white font-semibold">{getTranslation(language, "hero.professionals")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
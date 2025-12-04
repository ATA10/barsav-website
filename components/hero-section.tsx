"use client"

  import { useEffect, useState } from "react"
  import Link from "next/link"
  import Image from "next/image"

  export default function HeroSection() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d4d] via-[#0a5a6f] to-[#041e24]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-400" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-foreground text-balance leading-tight">BARSAV</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
              <p className="text-2xl md:text-3xl text-cyan-300 font-semibold">Havacılık, Elektronik & Savunma</p>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance">
                Yenilikçi teknoloji çözümleri, havaalanı ışıklandırması, elektronik üretim ve askeri/sivil araç
                simülasyonlarında lider.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="cursor-pointer">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-gray-900 font-bold rounded-lg transition transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                  Çözümlerimizi Keşfet
                </button>
              </a>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="cursor-pointer">
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 rounded-lg font-semibold transition">
                  İletişime Geç
                </button>
              </a>

            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12">
              <div className="space-y-2 backdrop-blur-md bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                <p className="text-4xl md:text-5xl font-bold text-cyan-300">50+</p>
                <p className="text-gray-400">Proje</p>
              </div>
              <div className="space-y-2 backdrop-blur-md bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                <p className="text-4xl md:text-5xl font-bold text-cyan-300">20+</p>
                <p className="text-gray-400">Yıl Deneyim</p>
              </div>
              <div className="space-y-2 backdrop-blur-md bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                <p className="text-4xl md:text-5xl font-bold text-cyan-300">500+</p>
                <p className="text-gray-400">Profesyonel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

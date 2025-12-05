"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { Building2, Users, Lightbulb, Shield, Heart, Target, Award } from "lucide-react"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getLocalizedAbout } from "@/lib/data-translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)
  const aboutData = getLocalizedAbout(language)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const iconMap: Record<string, any> = {
    Award,
    Lightbulb,
    Shield,
    Users,
    Building2,
    Heart,
    Target,
  }

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">{aboutData.title}</h1>
          <p className="text-xl text-muted-foreground text-balance">
            {aboutData.subtitle}
          </p>
        </div>
      </section>

      {/* Kurumsal Bilgiler */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.whoWeAre}</h2>

          <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-accent/20 to-primary/20 relative">
            <ImageWithBasePath src="/modern-aerospace-technology-facility.jpg" alt="Barsav Teknoloji" fill className="object-cover" />
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>{aboutData.description1}</p>
            <p>{aboutData.description2}</p>
            <p>{aboutData.description3}</p>
          </div>
        </div>
      </section>

      {/* Misyon ve Vizyon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">{aboutData.mission}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {aboutData.missionText}
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">{aboutData.vision}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {aboutData.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.values}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.valuesList.map((value: any, index: number) => {
              const IconComponent = iconMap[value.icon] || Award
              return (
                <div key={index} className="bg-background rounded-lg p-6 border border-[color:var(--border)]">
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-6 h-6 text-accent flex-shrink-0" />
                    <h3 className="text-xl font-bold text-accent">{value.title}</h3>
                  </div>
                  <p className="text-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.team}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {aboutData.teamImages.map((img: any, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
                <ImageWithBasePath src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {aboutData.teamDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutData.statistics.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

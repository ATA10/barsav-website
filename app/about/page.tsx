"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { Building2, Users, Lightbulb, Shield, Heart, Target, Award } from "lucide-react"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">{getTranslation(language, "about.title")}</h1>
          <p className="text-xl text-muted-foreground text-balance">
            {getTranslation(language, "about.subtitle")}
          </p>
        </div>
      </section>

      {/* Kurumsal Bilgiler */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{getTranslation(language, "about.whoWeAre")}</h2>

          <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-accent/20 to-primary/20 relative">
            <ImageWithBasePath src="/modern-aerospace-technology-facility.jpg" alt="Barsav Teknoloji" fill className="object-cover" />
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              {getTranslation(language, "about.description1")}
            </p>

            <p>
              {getTranslation(language, "about.description2")}
            </p>

            <p>
              {getTranslation(language, "about.description3")}
            </p>
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
                <h3 className="text-3xl font-bold text-accent">{getTranslation(language, "about.mission")}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {getTranslation(language, "about.missionText")}
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">{getTranslation(language, "about.vision")}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {getTranslation(language, "about.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{getTranslation(language, "about.values")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: getTranslation(language, "about.quality"),
                description: getTranslation(language, "about.qualityDesc"),
                icon: Award,
              },
              {
                title: getTranslation(language, "about.innovation"),
                description: getTranslation(language, "about.innovationDesc"),
                icon: Lightbulb,
              },
              {
                title: getTranslation(language, "about.reliability"),
                description: getTranslation(language, "about.reliabilityDesc"),
                icon: Shield,
              },
              {
                title: getTranslation(language, "about.collaboration"),
                description: getTranslation(language, "about.collaborationDesc"),
                icon: Users,
              },
              {
                title: getTranslation(language, "about.responsibility"),
                description: getTranslation(language, "about.responsibilityDesc"),
                icon: Building2,
              },
              {
                title: getTranslation(language, "about.customerSatisfaction"),
                description: getTranslation(language, "about.customerSatisfactionDesc"),
                icon: Heart,
              },
            ].map((value, index) => {
              const IconComponent = value.icon
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
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{getTranslation(language, "about.team")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/aerospace-engineer-team.jpg" alt="Mühendislik Ekibi" fill className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/manufacturing-facility-workers.jpg" alt="Üretim Tesisi" fill className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/simulation-control-room.jpg" alt="Simülasyon Merkezi" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {getTranslation(language, "about.teamDesc")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-foreground">{getTranslation(language, "about.employees")}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">25+</p>
                <p className="text-foreground">{getTranslation(language, "about.yearsExperience")}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-foreground">{getTranslation(language, "about.projects")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

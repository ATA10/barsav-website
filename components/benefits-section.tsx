"use client"

import { Award, Target, Zap, Smile } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export default function BenefitsSection() {
  const { language } = useLanguage()
  
  const benefits = [
    {
      label: getTranslation(language, "benefits.quality"),
      value: "%100",
      icon: Award,
    },
    {
      label: getTranslation(language, "benefits.successfulProjects"),
      value: "50+",
      icon: Target,
    },
    {
      label: getTranslation(language, "benefits.fastDelivery"),
      value: "%99.9",
      icon: Zap,
    },
    {
      label: getTranslation(language, "benefits.customerSatisfaction"),
      value: "%100",
      icon: Smile,
    },
  ]

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-accent" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{benefit.value}</p>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

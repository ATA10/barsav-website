"use client"

import { Award, Target, Zap, Smile } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      label: "Kalite",
      value: "%99.9",
      icon: Award,
    },
    {
      label: "Başarılı Projeler",
      value: "50+",
      icon: Target,
    },
    {
      label: "Hızlı Teslimat",
      value: "%98",
      icon: Zap,
    },
    {
      label: "Müşteri Memnuniyeti",
      value: "%99.5",
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

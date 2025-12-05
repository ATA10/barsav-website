"use client"

import { useState } from "react"
import ServiceModal from "./service-modal"
import ImageWithBasePath from "./image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getLocalizedServices } from "@/lib/data-translations"

interface Service {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  image: string
}

export default function FeaturesSection() {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithBasePath
            src="/b.png"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">{getTranslation(language, "services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getTranslation(language, "services.subtitle")}
          </p>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getLocalizedServices(language).map((service: Service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="p-8 bg-card border border-[color:var(--border)] rounded-lg hover:border-accent transition group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition relative">
                <ImageWithBasePath
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

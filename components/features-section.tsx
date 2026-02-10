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
      <section id="services" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{getTranslation(language, "services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getTranslation(language, "services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getLocalizedServices(language).map((service: Service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                {/* <div className="relative h-64 overflow-hidden bg-card rounded-lg">
                  <ImageWithBasePath
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div> */}

                {/* <div className="relative aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                  <ImageWithBasePath
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div> */}
                
                <div className="relative w-full h-[260px] bg-card rounded-lg flex items-center justify-center">
                  <ImageWithBasePath
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.shortDescription.length > 50 ? service.shortDescription.slice(0,50)+"......": service.shortDescription }</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
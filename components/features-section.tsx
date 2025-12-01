"use client"

import { useState } from "react"
import ServiceModal from "./service-modal"

interface Service {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  image: string
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Havaalanı Aydınlatma Sistemleri",
    shortDescription: "Profesyonel havaalanı ışıklandırma çözümleri",
    fullDescription:
      "Havaalanlarında kullanılan ileri teknoloji aydınlatma sistemleri. Enerji verimli, uzun ömürlü ve güvenilir çözümler. Gece ve gündüz operasyonları için optimize edilmiş sistemler.",
    features: ["LED teknoloji", "Akıllı kontrol sistemi", "Düşük enerji tüketimi", "Uzun lifespan"],
    image: "/airport-lighting.jpg",
  },
  {
    id: 2,
    title: "Askeri Simülasyon Sistemleri",
    shortDescription: "Gelişmiş askeri araç simülasyonları",
    fullDescription:
      "Gerçekçi ve yüksek doğruluklu askeri araç simülasyon sistemleri. Eğitim ve operasyon planlama için kullanılan profesyonel çözümler. Tam entegre kontrol ve gözlemci panelleri.",
    features: ["Gerçekçi fizik motoru", "Multi-channel görsel sistem", "Hareket platformu", "Gözlemci istasyonları"],
    image: "/military-simulation.jpg",
  },
  {
    id: 3,
    title: "Sivil Uçak Simülasyonu",
    shortDescription: "Pilot eğitimi için uçak simülasyonları",
    fullDescription:
      "Sivil havacılık için profesyonel pilot eğitim simülatörleri. Tamamen yenilemelenebilir komponent tasarımı ve gelişmiş hava dinamiği modeli.",
    features: ["FSTD sertifikalı", "Gerçekçi gösterge paneli", "Hareket sistemi", "Teknik destek"],
    image: "/civil-aircraft-simulator.jpg",
  },
  {
    id: 4,
    title: "Elektronik Üretim Hizmetleri",
    shortDescription: "Özel elektronik ürün tasarımı ve üretimi",
    fullDescription:
      "Savunma ve havacılık sektörü için özel elektronik ürünlerin tasarımı, prototipi ve seri üretimi. En yüksek kalite standartlarıyla üretim yapılmaktadır.",
    features: ["Özel tasarım", "Kalite kontrol", "Seri üretim", "Teknik desteği"],
    image: "/electronics-manufacturing-line.png",
  },
]

export default function FeaturesSection() {
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
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Savunma ve sivil sektörler için kapsamlı teknoloji çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="p-8 bg-card border border-[color:var(--border)] rounded-lg hover:border-accent transition group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition" />
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

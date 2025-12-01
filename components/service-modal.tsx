"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface Service {
  id: number
  title: string
  fullDescription: string
  features: string[]
  image: string
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: { service: Service | null; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !service) return null

  return (
    <>
      <div className="modal-blur" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition z-10 bg-card"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          {/* Content */}
          <div className="p-8">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.fullDescription}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Özellikler</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

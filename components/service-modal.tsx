"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import ImageWithBasePath from "./image-with-basepath"

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

      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="bg-card border border-[color:var(--border)] rounded-lg max-w-2xl w-full max-h-[90vh] modal-no-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-start z-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <ImageWithBasePath src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>

            {/* Description */}
            <div className="text-foreground space-y-4 mb-6">
              {service.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6 p-4 bg-background rounded-lg">
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
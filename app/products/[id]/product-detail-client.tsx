"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getLocalizedProduct } from "@/lib/data-translations"
import { withBasePath, getHomePath } from "@/lib/base-path"

interface Product {
  id: number
  name: string
  category: string
  subCategory?: string
  description: string
  fullDescription: string
  price: string
  features: string[]
  images?: string[]
  image: string
  status: string
  year: string
  technicalSpecs?: Record<string, string>
  documents?: {
    title: string
    file: string
  }[]
}

interface ProductDetailClientProps {
  product: Product
}

const defaultDocuments = [
  {
    title: "Barsav Havacılık - Firma Tanıtım Kataloğu",
    file: "/docs/tanıtım.pdf",
  },
  {
    title: "Barsav Company Profile",
    file: "/docs/kalite.pdf",
  },
]

export default function ProductDetailClient({ product: initialProduct }: ProductDetailClientProps) {
  const router = useRouter()
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)
  const hasScrolledRef = useRef(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const product = getLocalizedProduct(initialProduct.id, language) || initialProduct

  useEffect(() => {
      const handleScroll = () => {
        if (!hasScrolledRef.current && window.scrollY > 20) {
          hasScrolledRef.current = true
          setShowNav(true)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    const hash = href.replace("#", "")
    const homePath = getHomePath()
    const currentPath = window.location.pathname

    if (currentPath !== homePath && currentPath !== `${homePath}/`) {
      window.location.href = `${homePath}/#${hash}`
    } else {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        window.history.pushState(null, "", `${homePath}/#${hash}`)
      }
    }
  } 

  const images = product.images && product.images.length > 0 ? product.images : [product.image]

  // jsonda döküman eklenmedi iste standart pdflere yönlendirecek
  // const displayDocuments = product.documents && product.documents.length > 0 ? product.documents : defaultDocuments
  const displayDocuments = defaultDocuments

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10"
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <ImageWithBasePath
              src={images[selectedImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImageIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition ${
                    selectedImageIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithBasePath
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/products")}
            className="mb-6 text-accent hover:text-accent/80 flex items-center gap-2 transition bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <span>←</span> {getTranslation(language, "products.back")}
          </button>
          <div className="flex gap-2 mb-4">
            <span className="text-xs text-accent bg-accent/10 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20">
              {product.category}
              {product.subCategory ? ` / ${product.subCategory}` : ""}
            </span>
            <span className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              {product.year}
            </span>
            <span className="text-xs bg-accent/90 text-accent-foreground px-3 py-1 rounded-full">{product.status}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 drop-shadow-sm">{product.name}</h1>
          <p className="text-xl text-foreground/90 max-w-3xl drop-shadow-sm">{product.description}</p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div>
              <div
                className="relative w-full h-[500px] mb-4 rounded-lg overflow-hidden bg-card border border-[color:var(--border)] cursor-pointer"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
                // onClick={() => setIsImageModalOpen(true)}
              >
                <ImageWithBasePath
                  src={images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-200"
                  style={
                    isZoomed
                      ? {
                          transform: "scale(2)",
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : undefined
                  }
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition ${
                        selectedImageIndex === index
                          ? "border-accent"
                          : "border-[color:var(--border)] hover:border-accent/50"
                      }`}
                    >
                      <ImageWithBasePath
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} - Görsel ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {getTranslation(language, "products.description")}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">{product.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {getTranslation(language, "products.features")}
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground">
                      <span className="text-accent font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background/50 rounded-lg p-6 border border-[color:var(--border)]">
                <p className="text-foreground font-semibold mb-2">{getTranslation(language, "products.price")}</p>
                <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="cursor-pointer">
                  <p className="text-accent text-2xl font-bold">{product.price}</p>
                </a>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {getTranslation(language, "products.technicalSpecs")}
              </h2>
              <div className="bg-card border border-[color:var(--border)] rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-3 border-b border-[color:var(--border)] last:border-b-0"
                    >
                      <span className="text-foreground font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Dokümanlar</h2>

            <div className="space-y-10">
              {displayDocuments.map((doc, index) => (
                <div key={index} className="bg-card border border-[color:var(--border)] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{doc.title}</h3>

                    <a
                      href={withBasePath(doc.file)}
                      download
                      className="px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition"
                    >
                      PDF İndir
                    </a>
                  </div>

                  <div className="w-full h-[600px] border border-[color:var(--border)] rounded-lg overflow-hidden bg-background">
                    <iframe src={withBasePath(doc.file)} className="w-full h-full" title={doc.title} />
                  </div>
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

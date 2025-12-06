"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getLocalizedProduct } from "@/lib/data-translations"
import { withBasePath } from "@/lib/base-path"

interface Product {
  id: number
  name: string
  category: string
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

export default function ProductDetailClient({ product: initialProduct }: ProductDetailClientProps) {
  const router = useRouter()
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Dil desteği ile ürünü al
  const product = getLocalizedProduct(initialProduct.id, language) || initialProduct

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const images = product.images && product.images.length > 0 ? product.images : [product.image]

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd]">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/products")}
            className="mb-6 text-accent hover:text-accent/80 flex items-center gap-2 transition"
          >
            <span>←</span> {getTranslation(language, "products.back")}
          </button>
          <div className="flex gap-2 mb-4">
            <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full">
              {product.year}
            </span>
            <span className="text-xs bg-accent/90 text-accent-foreground px-3 py-1 rounded-full">
              {product.status}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">{product.name}</h1>
          <p className="text-xl text-gray-700 max-w-3xl">{product.description}</p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div>
              <div className="relative w-full h-96 mb-4 rounded-lg overflow-hidden bg-card border border-[color:var(--border)]">
                <ImageWithBasePath
                  src={images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
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
                        className="object-cover"
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
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {product.fullDescription}
                </p>
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
                <p className="text-foreground font-semibold mb-2">
                  {getTranslation(language, "products.price")}
                </p>
                <p className="text-accent text-2xl font-bold">{product.price}</p>
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
                    <div key={key} className="flex justify-between items-center py-3 border-b border-[color:var(--border)] last:border-b-0">
                      <span className="text-foreground font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews Section */}
          {/* {product.reviews && product.reviews.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {getTranslation(language, "products.reviews")}
              </h2>
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-card border border-[color:var(--border)] rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-foreground font-semibold">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < review.rating ? "text-yellow-400" : "text-gray-400"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )} */}
          {/* Documents Section */}
{product.documents && product.documents.length > 0 && (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-foreground mb-8">
      Dokümanlar
    </h2>

    <div className="space-y-10">
      {product.documents.map((doc, index) => (
        <div
          key={index}
          className="bg-card border border-[color:var(--border)] rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">
              {doc.title}
            </h3>

            <a
              href={doc.file}
              download
              className="px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition"
            >
              PDF İndir
            </a>
          </div>

          <div className="w-full h-[600px] border border-[color:var(--border)] rounded-lg overflow-hidden bg-background">
            <iframe
              src={withBasePath(doc.file)}
              className="w-full h-full"
              title={doc.title}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        </div>
      </section>

      <Footer />
    </main>
  )
}


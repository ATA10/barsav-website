"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageWithBasePath from "@/components/image-with-basepath"
import productsData from "@/dataa/products.json"

interface Product {
  id: number
  name: string
  category: string
  description: string
  fullDescription: string
  price: string
  features: string[]
  image: string
  status: string
  year: string
}

export default function ProductsPage() {
  const [showNav, setShowNav] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products: Product[] = productsData.products

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Kategorileri çıkar
  const categories = ["Tümü", ...Array.from(new Set(products.map((p) => p.category)))]

  // Filtreleme
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a3d4d] via-[#0a5a6f] to-[#041e24]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">Ürünlerimiz</h1>
          <p className="text-xl text-gray-300 text-balance">
            Havacılık, elektronik ve savunma sanayi için yenilikçi ürün çözümleri
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card/50 border-b border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-background border border-[color:var(--border)] text-foreground hover:border-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-muted-foreground text-sm">
            {filteredProducts.length} ürün bulundu
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="bg-card border border-[color:var(--border)] rounded-lg overflow-hidden hover:border-accent transition cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                    <ImageWithBasePath
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{product.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-semibold">{product.price}</span>
                      <button className="text-accent hover:text-accent/80 font-medium text-sm">
                        Detaylar →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={handleCloseModal}>
          <div
            className="bg-card border border-[color:var(--border)] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-start z-10">
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full">
                    {selectedProduct.year}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <ImageWithBasePath
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Açıklama</h3>
                  <p className="text-foreground leading-relaxed">{selectedProduct.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Özellikler</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                  <p className="text-foreground font-semibold mb-1">Fiyat</p>
                  <p className="text-accent text-lg">{selectedProduct.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}


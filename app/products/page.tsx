"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getLocalizedProducts } from "@/lib/data-translations"

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
  const router = useRouter()
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>(getTranslation(language, "products.all"))
  const [searchQuery, setSearchQuery] = useState("")

  const products: Product[] = getLocalizedProducts(language)

  // Dil değiştiğinde filtreyi sıfırla
  useEffect(() => {
    setSelectedCategory(getTranslation(language, "products.all"))
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Kategorileri çıkar
  const allCategories = Array.from(new Set(products.map((p) => p.category)))
  const categories = [getTranslation(language, "products.all"), ...allCategories]

  // Filtreleme
  const filteredProducts = products.filter((product) => {
    const allCategory = getTranslation(language, "products.all")
    const matchesCategory = selectedCategory === allCategory || product.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleProductClick = (product: Product) => {
    router.push(`/products/${product.id}`)
  }

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithBasePath
            src="/c.png"
            alt="Products Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            {getTranslation(language, "products.title")}
          </h1>
          <p className="text-xl text-gray-700 text-balance">
            {getTranslation(language, "products.subtitle")}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8  border-b border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder={getTranslation(language, "products.search")}
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
            {filteredProducts.length} {getTranslation(language, "products.found")}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8"> */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                {getTranslation(language, "products.notFound")}
              </p>
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
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-semibold">{product.price}</span>
                      <button className="text-accent hover:text-accent/80 font-medium text-sm">
                        {getTranslation(language, "products.details")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}



import { notFound } from "next/navigation"
import productsData from "@/dataa/products.json"
import ProductDetailClient from "./product-detail-client"

// Generate static params for static export (GitHub Pages)
export function generateStaticParams() {
  return productsData.products.map((product) => ({
    id: product.id.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const productId = parseInt(id)
  const product = productsData.products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} />
}

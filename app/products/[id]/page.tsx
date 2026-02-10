import { notFound } from "next/navigation"
import { getLocalizedProduct } from "@/lib/data-translations"
import productsDataTr from "@/data/tr/products.json"
import ProductDetailClient from "./product-detail-client"

// ID'leri TR dosyasından alıyoruz
export function generateStaticParams() {
  return productsDataTr.products.map((product) => ({
    id: product.id.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>   // ✅ Promise olarak tanımlandı
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params  // ✅ await ile unwrap edildi
  const productId = Number(id)

  // Default dil TR (detay client tarafında değişiyor)
  const product = productsDataTr.products.find((p) => p.id === productId)

  if (!product) notFound()

  return <ProductDetailClient product={product} />
}
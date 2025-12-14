// import { notFound } from "next/navigation"
// import productsData from "@/dataaa/products.json"
// import ProductDetailClient from "./product-detail-client"

// // Generate static params for static export (GitHub Pages)
// export function generateStaticParams() {
//   return productsData.products.map((product) => ({
//     id: product.id.toString(),
//   }))
// }

// interface PageProps {
//   params: Promise<{ id: string }>
// }

// export default async function ProductDetailPage({ params }: PageProps) {
//   const { id } = await params
//   const productId = parseInt(id)
//   const product = productsData.products.find((p) => p.id === productId)

//   if (!product) {
//     notFound()
//   }

//   return <ProductDetailClient product={product} />
// }

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
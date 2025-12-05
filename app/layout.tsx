import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

// Only enable Analytics on Vercel, not on GitHub Pages
const isVercel = process.env.VERCEL === "1"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BARSAV - Havacılık, Elektronik & Savunma Sanayi",
  description:
    "Havaalanı ışıklandırması, elektronik sistemleri ve askeri/sivil araç simülasyonları için yenilikçi teknoloji çözümleri",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className="dark">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {isVercel && <Analytics />}
      </body>
    </html>
  )
}

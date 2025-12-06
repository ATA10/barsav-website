// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { LanguageProvider } from "@/contexts/language-context"
// import "./globals.css"

// // Only enable Analytics on Vercel, not on GitHub Pages
// const isVercel = process.env.VERCEL === "1"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "BARSAV - Havacılık, Elektronik & Savunma Sanayi",
//   description:
//     "Havaalanı ışıklandırması, elektronik sistemleri ve askeri/sivil araç simülasyonları için yenilikçi teknoloji çözümleri",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="tr" suppressHydrationWarning className="root">
//       <body className={`font-sans antialiased`}>
//         <LanguageProvider>
//           {children}
//         </LanguageProvider>
//         {isVercel && <Analytics />}
//       </body>
//     </html>
//   )
// }

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "next-themes"
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="light">
      <body className="font-sans antialiased">
        {/* Sayfa render edilmeden önce light sınıfını garantiye alır */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('light');
              })();
            `,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>

        {isVercel && <Analytics />}
      </body>
    </html>
  )
}

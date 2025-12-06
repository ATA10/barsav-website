"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getBasePath, getHomePath } from "@/lib/base-path"

export default function Footer() {
  const router = useRouter()
  const { language } = useLanguage()
  
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const hash = href.replace('#', '')
    const homePath = getHomePath()
    const currentPath = window.location.pathname
    
    // Eğer ana sayfada değilsek, ana sayfaya yönlendir
    if (currentPath !== homePath && currentPath !== `${homePath}/`) {
      window.location.href = `${homePath}/#${hash}`
    } else {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `${homePath}/#${hash}`)
      }
    }
  }

  return (
    <footer className="bg-background border-t border-[color:var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            {/* <h3 className="text-3xl text-foreground font-semibold mb-4">{getTranslation(language, "footer.company")}</h3> */}
            <p className="text-muted-foreground text-sm">
              {getTranslation(language, "footer.description")}
            </p>
            {/* Logo 590x260 boyutunda - küçültülmüş hali */}
            <div className="relative w-[250px] h-[90px] mt-4">
              <ImageWithBasePath
                src="/logo.png"
                alt="Barsav Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">{getTranslation(language, "footer.quickLinks")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.about")}
                </Link>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.services")}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">{getTranslation(language, "footer.companyLinks")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {/* <li>
                <a href="#career" onClick={(e) => handleAnchorClick(e, '#career')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.career")}
                </a>
              </li> */}
              <li>
                <a href="#blog" onClick={(e) => handleAnchorClick(e, '#blog')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.blog")}
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleAnchorClick(e, '#blog')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "footer.pressRelease")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-accent transition cursor-pointer">
                  {getTranslation(language, "nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">{getTranslation(language, "footer.socialNetworks")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[color:var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; 2025 Barsav. {getTranslation(language, "footer.copyright")}</p>
          <div className="flex space-x-6 text-muted-foreground text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">
              {getTranslation(language, "footer.privacyPolicy")}
            </a>
            <a href="#" className="hover:text-accent transition">
              {getTranslation(language, "footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
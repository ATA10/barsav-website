// "use client"

// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { useState, useEffect } from "react"
// import { Building2, Users, Lightbulb, Shield, Heart, Target, Award, ChevronLeft, ChevronRight } from "lucide-react"
// import ImageWithBasePath from "@/components/image-with-basepath"
// import { useLanguage } from "@/contexts/language-context"
// import { getLocalizedAbout } from "@/lib/data-translations"

// export default function AboutPage() {
//   const { language } = useLanguage()
//   const [showNav, setShowNav] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [autoPlay, setAutoPlay] = useState(true)
//   const aboutData = getLocalizedAbout(language)

//   const itemsToShow = 3

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowNav(window.scrollY > 100)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Referanslar autoplay
//   useEffect(() => {
//     if (!autoPlay || !aboutData.references || aboutData.references.length <= itemsToShow) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % aboutData.references.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [autoPlay, aboutData.references, itemsToShow])

//   const iconMap: Record<string, any> = {
//     Award,
//     Lightbulb,
//     Shield,
//     Users,
//     Building2,
//     Heart,
//     Target,
//   }

//   const getVisibleReferences = () => {
//     if (!aboutData.references) return []
//     const visible = []
//     for (let i = 0; i < itemsToShow; i++) {
//       const index = (currentIndex + i) % aboutData.references.length
//       visible.push(aboutData.references[index])
//     }
//     return visible
//   }

//   const nextSlide = () => {
//     if (!aboutData.references) return
//     setCurrentIndex((prev) => (prev + 1) % aboutData.references.length)
//     setAutoPlay(true)
//   }

//   const prevSlide = () => {
//     if (!aboutData.references) return
//     setCurrentIndex((prev) => (prev - 1 + aboutData.references.length) % aboutData.references.length)
//     setAutoPlay(true)
//   }

//   return (
//     <main className="min-h-screen bg-background">
//       {showNav && <Navigation />}

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithBasePath
//             src="/d.png"
//             alt="About Background"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="relative z-10 max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">{aboutData.title}</h1>
//           <p className="text-xl text-muted-foreground text-balance">
//             {aboutData.subtitle}
//           </p>
//         </div>
//       </section>

//       {/* Kurumsal Bilgiler */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.whoWeAre}</h2>

//           <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-accent/20 to-primary/20 relative">
//             <ImageWithBasePath src="/modern-aerospace-technology-facility.jpg" alt="Barsav Teknoloji" fill className="object-cover" />
//           </div>

//           <div className="space-y-6 text-lg text-foreground leading-relaxed">
//             <p>{aboutData.description1}</p>
//             <p>{aboutData.description2}</p>
//             <p>{aboutData.description3}</p>
//             <p>{aboutData.description4}</p>
//             <p>{aboutData.description5}</p>
//           </div>
//         </div>
//       </section>

//       {/* Misyon ve Vizyon */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Misyon */}
//             <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
//               <div className="flex items-center gap-3 mb-4">
//                 <Target className="w-8 h-8 text-accent" />
//                 <h3 className="text-3xl font-bold text-accent">{aboutData.mission}</h3>
//               </div>
//               <p className="text-foreground leading-relaxed">
//                 {aboutData.missionText}
//               </p>
//             </div>

//             {/* Vizyon */}
//             <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
//               <div className="flex items-center gap-3 mb-4">
//                 <Lightbulb className="w-8 h-8 text-accent" />
//                 <h3 className="text-3xl font-bold text-accent">{aboutData.vision}</h3>
//               </div>
//               <p className="text-foreground leading-relaxed">
//                 {aboutData.visionText}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Değerlerimiz */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.values}</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {aboutData.valuesList.map((value: any, index: number) => {
//               const IconComponent = iconMap[value.icon] || Award
//               return (
//                 <div key={index} className="bg-background rounded-lg p-6 border border-[color:var(--border)]">
//                   <div className="flex items-center gap-3 mb-3">
//                     <IconComponent className="w-6 h-6 text-accent flex-shrink-0" />
//                     <h3 className="text-xl font-bold text-accent">{value.title}</h3>
//                   </div>
//                   <p className="text-foreground">{value.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Referanslarımız */}
//       {aboutData.references && aboutData.references.length > 0 && (
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">
//               {aboutData.referencesTitle || "Referanslarımız"}
//             </h2>

//             {/* Slider */}
//             <div
//               className="relative"
//               onMouseEnter={() => setAutoPlay(false)}
//               onMouseLeave={() => setAutoPlay(true)}
//             >
//               {/* Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {getVisibleReferences().map((reference: any, idx: number) => (
//                   <div
//                     key={idx}
//                     className="h-full rounded-lg border border-border bg-card/50 overflow-hidden transition hover:border-accent hover:shadow-lg flex flex-col"
//                   >
//                     <div className="p-8 flex flex-col flex-grow items-center justify-center text-center">
                      
//                       <Building2 className="w-12 h-12 text-accent mb-4" />

//                       <h3 className="text-lg font-semibold text-foreground mb-2">
//                         {reference.name}
//                       </h3>

//                       {reference.project && (
//                         <p className="text-sm text-muted-foreground mb-3">
//                           <span className="font-semibold text-accent">Proje:</span> {reference.project}
//                         </p>
//                       )}

//                       {reference.description && (
//                         <p className="text-muted-foreground text-sm flex-grow">
//                           {reference.description}
//                         </p>
//                       )}

//                       {reference.year && (
//                         <span className="mt-4 text-xs text-muted-foreground">
//                           {reference.year}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Ekip */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.team}</h2>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//             {aboutData.teamImages.map((img: any, index: number) => (
//               <div key={index} className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
//                 <ImageWithBasePath src={img.src} alt={img.alt} fill className="object-cover" />
//               </div>
//             ))}
//           </div>

//           <div className="bg-background rounded-lg p-8 border border-[color:var(--border)]">
//             <p className="text-lg text-foreground leading-relaxed mb-6">
//               {aboutData.teamDesc}
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {aboutData.statistics.map((stat: any, index: number) => (
//                 <div key={index} className="text-center">
//                   <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
//                   <p className="text-foreground">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { Building2, Users, Lightbulb, Shield, Heart, Target, Award, ChevronLeft, ChevronRight } from "lucide-react"
import ImageWithBasePath from "@/components/image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getLocalizedAbout } from "@/lib/data-translations"
import { withBasePath } from "@/lib/base-path"

export default function AboutPage() {
  const { language } = useLanguage()
  const [showNav, setShowNav] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const aboutData = getLocalizedAbout(language)

  const itemsToShow = 12

  const documents = [
    {
      title: language === "tr" ? "Kurumsal Broşür" : language === "de" ? "Unternehmensbroschüre" : language === "ru" ? "Корпоративная брошюра" : "Corporate Brochure",
      description: language === "tr" ? "Şirketimizin genel tanıtımı" : language === "de" ? "Allgemeine Vorstellung unseres Unternehmens" : language === "ru" ? "Общее представление о нашей компании" : "General overview of our company",
      file: "/docs/tanıtım.pdf",
    },
    {
      title: language === "tr" ? "Kalite & Güvenlik Politikası" : language === "de" ? "Qualitäts- & Sicherheitsrichtlinie" : language === "ru" ? "Политика качества и безопасности" : "Quality & Safety Policy",
      description: language === "tr" ? "Kalite ve güvenlik süreçlerimiz" : language === "de" ? "Unsere Qualitätssicherungs- und Sicherheitsprozesse" : language === "ru" ? "Наши процессы качества и безопасности" : "Our quality and safety processes",
      file: "/docs/kalite.pdf",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Referanslar autoplay
  useEffect(() => {
    if (!autoPlay || !aboutData.references || aboutData.references.length <= itemsToShow) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutData.references.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay, aboutData.references, itemsToShow])

  const iconMap: Record<string, any> = {
    Award,
    Lightbulb,
    Shield,
    Users,
    Building2,
    Heart,
    Target,
  }

  const getVisibleReferences = () => {
    if (!aboutData.references) return []
    const visible = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % aboutData.references.length
      visible.push(aboutData.references[index])
    }
    return visible
  }

  const nextSlide = () => {
    if (!aboutData.references) return
    setCurrentIndex((prev) => (prev + 1) % aboutData.references.length)
    setAutoPlay(true)
  }

  const prevSlide = () => {
    if (!aboutData.references) return
    setCurrentIndex((prev) => (prev - 1 + aboutData.references.length) % aboutData.references.length)
    setAutoPlay(true)
  }

  const goToSlide = (slideIndex: number) => {
    if (!aboutData.references) return
    setCurrentIndex(slideIndex)
    setAutoPlay(true)
  }

  // Toplam slider sayfa sayısını hesapla
  const totalSlides = aboutData.references ? Math.ceil(aboutData.references.length / itemsToShow) : 0
  const currentSlidePage = Math.floor(currentIndex / itemsToShow) + 1

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithBasePath
            src="/d.png"
            alt="About Background"
            fill
            className="object-cover blur-sm"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">{aboutData.title}</h1>
          <p className="text-xl text-muted-foreground text-balance text-white">
            {aboutData.subtitle}
          </p>
        </div>
      </section>

      {/* Kurumsal Bilgiler */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.whoWeAre}</h2>

          <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-accent/20 to-primary/20 relative">
            <ImageWithBasePath src="/modern-aerospace-technology-facility.jpg" alt="Barsav Teknoloji" fill className="object-cover" />
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>{aboutData.description1}</p>
            <p>{aboutData.description2}</p>
            <p>{aboutData.description3}</p>
            <p>{aboutData.description4}</p>
            <p>{aboutData.description5}</p>
          </div>
        </div>
      </section>

      {/* Misyon ve Vizyon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">{aboutData.mission}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {aboutData.missionText}
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">{aboutData.vision}</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                {aboutData.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dokümanlar (yan yana küçük kartlar) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            {language === "tr" ? "Dokümanlar" : language === "de" ? "Dokumente" : language === "ru" ? "Документы" : "Documents"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-card/60 border border-[color:var(--border)] rounded-lg p-5 shadow-sm hover:border-accent transition">
                <h4 className="text-xl font-semibold text-foreground mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                <div className="flex items-center gap-3 flex-wrap mb-4">
                  <a
                    href={withBasePath(doc.file)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-foreground font-semibold transition"
                  >
                    <span>{language === "tr" ? "Görüntüle" : language === "de" ? "Ansehen" : language === "ru" ? "Просмотр" : "View"}</span>
                    <span className="text-lg">↗</span>
                  </a>
                  <a
                    href={withBasePath(doc.file)}
                    download
                    className="inline-flex items-center gap-2 text-accent hover:text-foreground font-semibold transition"
                  >
                    <span>{language === "tr" ? "İndir" : language === "de" ? "Herunterladen" : language === "ru" ? "Скачать" : "Download"}</span>
                    <span className="text-lg">↓</span>
                  </a>
                </div>
                <div className="w-full h-48 md:h-56 border border-[color:var(--border)] rounded-md overflow-hidden bg-background">
                  <iframe
                    src={withBasePath(doc.file)}
                    title={doc.title}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.values}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.valuesList.map((value: any, index: number) => {
              const IconComponent = iconMap[value.icon] || Award
              return (
                <div key={index} className="bg-background rounded-lg p-6 border border-[color:var(--border)]">
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-6 h-6 text-accent flex-shrink-0" />
                    <h3 className="text-xl font-bold text-accent">{value.title}</h3>
                  </div>
                  <p className="text-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Referanslarımız */}
      {aboutData.references && aboutData.references.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
              {aboutData.referencesTitle || "Referanslarımız"}
            </h2>

            {/* Slider Container */}
            <div
              className="relative"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              {/* Yön Okları - Sadece 3'ten fazla referans varsa göster */}
              {aboutData.references.length > 12 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-background/80 hover:bg-background p-3 rounded-full border border-border shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Önceki referanslar"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-background/80 hover:bg-background p-3 rounded-full border border-border shadow-lg transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Sonraki referanslar"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </>
              )}

              {/* Cards */}
              <div className="overflow-hidden">
                <div className="grid grid-cols-10 md:grid-cols-6 gap-8">
                  {getVisibleReferences().map((reference: any, idx: number) => (
                    <div
                      key={idx}
                      className="h-full rounded-lg border border-border bg-card/50 overflow-hidden transition hover:border-accent hover:shadow-lg flex flex-col"
                    >
                      <div className="p-8 flex flex-col flex-grow items-center justify-center text-center">
                        <Building2 className="w-12 h-12 text-accent mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {reference.name}
                        </h3>
                        {reference.project && (
                          <p className="text-sm text-muted-foreground mb-3">
                            <span className="font-semibold text-accent">Proje:</span> {reference.project}
                          </p>
                        )}
                        {reference.description && (
                          <p className="text-muted-foreground text-sm flex-grow">
                            {reference.description}
                          </p>
                        )}
                        {reference.year && (
                          <span className="mt-4 text-xs text-muted-foreground">
                            {reference.year}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Göstergeleri (Dots) - Sadece 3'ten fazla referans varsa göster */}
              {aboutData.references.length > 12 && totalSlides > 1 && (
                <div className="mt-8 space-y-4">
                  {/* Nokta göstergeleri */}
                  <div className="flex justify-center items-center space-x-3">
                    {Array.from({ length: totalSlides }).map((_, index) => {
                      const isActive = Math.floor(currentIndex / itemsToShow) === index
                      return (
                        <button
                          key={index}
                          onClick={() => goToSlide(index * itemsToShow)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-accent scale-110'
                              : 'bg-border hover:bg-muted-foreground'
                          }`}
                          aria-label={`${index + 1}. sayfaya git`}
                        />
                      )
                    })}
                  </div>

                  {/* Sayfa bilgisi */}
                  {/* <div className="text-center text-sm text-muted-foreground">
                    {currentSlidePage} / {totalSlides}
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Ekip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">{aboutData.team}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {aboutData.teamImages.map((img: any, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
                <ImageWithBasePath src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg p-8 border border-[color:var(--border)]">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {aboutData.teamDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutData.statistics.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-foreground">{stat.label}</p>
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
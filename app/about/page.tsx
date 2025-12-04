"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { Building2, Users, Lightbulb, Shield, Heart, Target, Award } from "lucide-react"
import ImageWithBasePath from "@/components/image-with-basepath"

export default function AboutPage() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {showNav && <Navigation />}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">Hakkımızda</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Havacılık, elektronik ve savunma sanayi alanında yenilikçi teknoloji çözümleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Kurumsal Bilgiler */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Biz Kimiz?</h2>

          <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gradient-to-br from-accent/20 to-primary/20 relative">
            <ImageWithBasePath src="/modern-aerospace-technology-facility.jpg" alt="Barsav Teknoloji" fill className="object-cover" />
          </div>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              BARSAV, 1995 yılından beri havacılık, elektronik ve savunma sanayi alanında yenilikçi teknoloji çözümleri
              geliştiren ve üreten bir kuruluştur. Ülkemizin ve dünyanın önde gelen şirketleriyle çalışan BARSAV, her
              zaman kaliteyi ve yeniliği ön planda tutmuştur.
            </p>

            <p>
              Havaalanı ışıklandırma sistemlerinden tutun, askeri ve sivil araç simülasyonlarına kadar geniş bir ürün
              yelpazesine sahip olan BARSAV, müşteri memnuniyetini en üst seviyede tutmaya çalışmaktadır.
            </p>

            <p>
              Elektronik üretim alanında son teknoloji kullanarak, yüksek kaliteli ürünler sunmaktayız. Ar-Ge
              çalışmalarına büyük önem veren şirketimiz, sürekli olarak yeni ve geliştirilmiş ürünler sunmaya devam
              etmektedir.
            </p>
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
                <h3 className="text-3xl font-bold text-accent">Misyon</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Havacılık, elektronik ve savunma sanayi alanında müşteri beklentilerini aşan, kaliteli ve güvenilir ürün
                ve hizmetler sunmak. Teknolojik yenilikleri yakından takip ederek, endüstrinin gelişmesine katkıda
                bulunmaktır.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold text-accent">Vizyon</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Bölgenin ve dünyının saygın teknoloji şirketlerinden biri olmak. Yenilikçi ürün ve hizmetleriyle
                uluslararası pazarlarda tanınan, tercih edilen bir kuruluş haline gelmektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Değerlerimiz</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Kalite",
                description: "Her ürün ve hizmette en yüksek kalite standartlarına uyuyoruz.",
                icon: Award,
              },
              {
                title: "Yenilik",
                description: "Sürekli olarak yeni teknolojileri araştırıp geliştiriyoruz.",
                icon: Lightbulb,
              },
              {
                title: "Güvenilirlik",
                description: "Müşterilerimizin bize olan güvenini her zaman korumaya çalışırız.",
                icon: Shield,
              },
              {
                title: "İşbirliği",
                description: "Ekip çalışması ve iş birliğine inanıyoruz.",
                icon: Users,
              },
              {
                title: "Sorumluluk",
                description: "Çevreye ve topluma karşı sorumlu davranırız.",
                icon: Building2,
              },
              {
                title: "Müşteri Memnuniyeti",
                description: "Müşteri tatmini bizim için en önemli başarı ölçütüdür.",
                icon: Heart,
              },
            ].map((value, index) => {
              const IconComponent = value.icon
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

      {/* Ekip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Deneyimli Ekibimiz</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/aerospace-engineer-team.jpg" alt="Mühendislik Ekibi" fill className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/manufacturing-facility-workers.jpg" alt="Üretim Tesisi" fill className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden h-64 bg-gradient-to-br from-accent/20 to-primary/20 relative">
              <ImageWithBasePath src="/simulation-control-room.jpg" alt="Simülasyon Merkezi" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-card/50 rounded-lg p-8 border border-[color:var(--border)]">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              BARSAV'ın başarısı, alanında uzman ve deneyimli profesyonellerden oluşan ekibinin çalışkanlığı ve
              dedikasyonunun sonucudur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-foreground">Çalışan</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">25+</p>
                <p className="text-foreground">Yıl Tecrübe</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-foreground">Proje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

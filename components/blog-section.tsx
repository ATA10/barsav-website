"use client"

import { useState } from "react"
import BlogModal from "@/components/blog-modal"

interface BlogPost {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  author: string
  image: string
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Havacılık Endüstrisinde LED Teknolojisinin Yeri",
    date: "15 Kasım 2024",
    category: "Teknoloji",
    excerpt: "Modern havacılık endüstrisinde LED aydınlatma sistemlerinin rolü ve faydaları...",
    content:
      "Havacılık endüstrisinde LED teknolojisi devrim yaratmıştır. Enerji verimliliğinden güvenilirliğe kadar birçok avantaj sunmaktadır. Havaalanlarında kullanılan modern LED sistemleri, geleneksel aydınlatma çözümlerine kıyasla %60 daha az enerji tüketmektedir. Aynı zamanda daha uzun ömürlü olmaları nedeniyle bakım maliyetleri de önemli ölçüde düşmektedir. Bu teknolojiler, gece ve gündüz operasyonları için optimize edilmiş çözümler sunarak havaalanı operatörlerine önemli fayda sağlamaktadır.",
    author: "BARSAV Teknoloji Ekibi",
    image: "/led-aviation-lighting.jpg",
  },
  {
    id: 2,
    title: "Askeri Simülatörlerde Yapay Zeka Uygulamaları",
    date: "10 Kasım 2024",
    category: "Yapay Zeka",
    excerpt: "Askeri eğitim simülatörlerinde yapay zeka teknolojisinin kullanımı ve ilerlemeleri...",
    content:
      "Askeri simülatörlerde yapay zeka uygulamaları, eğitim kalitesini ve gerçekçiliğini önemli ölçüde artırmıştır. Günümüzde gelişmiş askeri simülatörlerde yapay zeka, gerçekçi muharebe senaryoları oluşturabilmekte ve adaptif eğitim programları sağlayabilmektedir. Bu teknoloji, pilotların ve askeri personelin daha etkili bir şekilde eğitim almasını sağlamakta, operasyon öncesi hata payını minimuma indirmektedir. Yapay zeka destekli simülatörler, çeşitli senaryolara hızlı bir şekilde uyum sağlayabilmekte ve gerçek zamanlı geri bildirim sunabilmektedir.",
    author: "BARSAV Ar-Ge Ekibi",
    image: "/ai-military-simulator.jpg",
  },
  {
    id: 3,
    title: "Elektronik Üretimde Kalite Kontrol Standartları",
    date: "5 Kasım 2024",
    category: "Üretim",
    excerpt: "Savunma endüstrisi elektronik ürünlerinde uygulanması gereken kalite standartları...",
    content:
      "Savunma endüstrisinde üretilen elektronik ürünlerin kalite kontrol standartları çok sıkı ve kapsamlıdır. Bu standartlar, ürünlerin güvenilirliğini ve dayanıklılığını sağlamak için belirlenmiştir. BARSAV, tüm elektronik üretiminde uluslararası standartlara uyarak, en yüksek kalite seviyesini hedeflemektedir. Her üretim aşamasında detaylı testler ve kontroller yapılmakta, en küçük sapma bile süreci durdurabilmektedir. Bu titiz yaklaşım, ürünlerimizin uzun ömürlü ve güvenilir olmasını garantilemektedir.",
    author: "BARSAV Kalite Ekibi",
    image: "/electronics-quality-control.jpg",
  },
]

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="blog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknoloji, inovasyon ve savunma sanayi üzerine yazılarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div
                  className="bg-card border border-[color:var(--border)] rounded-lg p-6 hover:border-accent transition h-full flex flex-col hover:shadow-lg hover:shadow-accent/20"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">{post.excerpt}</p>
                  <button className="text-accent hover:text-accent/80 font-medium mt-4 inline-block">
                    Devamını Oku →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogModal post={selectedPost} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

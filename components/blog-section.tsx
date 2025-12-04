// "use client"

// import { useState } from "react"
// import BlogModal from "@/components/blog-modal"

// interface BlogPost {
//   id: number
//   title: string
//   date: string
//   category: string
//   excerpt: string
//   content: string
//   author: string
//   image: string
// }

// const blogData: BlogPost[] = [
//   {
//     id: 1,
//     title: "Havacılık Endüstrisinde LED Teknolojisinin Yeri",
//     date: "15 Kasım 2024",
//     category: "Teknoloji",
//     excerpt: "Modern havacılık endüstrisinde LED aydınlatma sistemlerinin rolü ve faydaları...",
//     content:
//       "Havacılık endüstrisinde LED teknolojisi devrim yaratmıştır. Enerji verimliliğinden güvenilirliğe kadar birçok avantaj sunmaktadır. Havaalanlarında kullanılan modern LED sistemleri, geleneksel aydınlatma çözümlerine kıyasla %60 daha az enerji tüketmektedir. Aynı zamanda daha uzun ömürlü olmaları nedeniyle bakım maliyetleri de önemli ölçüde düşmektedir. Bu teknolojiler, gece ve gündüz operasyonları için optimize edilmiş çözümler sunarak havaalanı operatörlerine önemli fayda sağlamaktadır.",
//     author: "BARSAV Teknoloji Ekibi",
//     image: "/led-aviation-lighting.jpg",
//   },
//   {
//     id: 2,
//     title: "Askeri Simülatörlerde Yapay Zeka Uygulamaları",
//     date: "10 Kasım 2024",
//     category: "Yapay Zeka",
//     excerpt: "Askeri eğitim simülatörlerinde yapay zeka teknolojisinin kullanımı ve ilerlemeleri...",
//     content:
//       "Askeri simülatörlerde yapay zeka uygulamaları, eğitim kalitesini ve gerçekçiliğini önemli ölçüde artırmıştır. Günümüzde gelişmiş askeri simülatörlerde yapay zeka, gerçekçi muharebe senaryoları oluşturabilmekte ve adaptif eğitim programları sağlayabilmektedir. Bu teknoloji, pilotların ve askeri personelin daha etkili bir şekilde eğitim almasını sağlamakta, operasyon öncesi hata payını minimuma indirmektedir. Yapay zeka destekli simülatörler, çeşitli senaryolara hızlı bir şekilde uyum sağlayabilmekte ve gerçek zamanlı geri bildirim sunabilmektedir.",
//     author: "BARSAV Ar-Ge Ekibi",
//     image: "/ai-military-simulator.jpg",
//   },
//   {
//     id: 3,
//     title: "Elektronik Üretimde Kalite Kontrol Standartları",
//     date: "5 Kasım 2024",
//     category: "Üretim",
//     excerpt: "Savunma endüstrisi elektronik ürünlerinde uygulanması gereken kalite standartları...",
//     content:
//       "Savunma endüstrisinde üretilen elektronik ürünlerin kalite kontrol standartları çok sıkı ve kapsamlıdır. Bu standartlar, ürünlerin güvenilirliğini ve dayanıklılığını sağlamak için belirlenmiştir. BARSAV, tüm elektronik üretiminde uluslararası standartlara uyarak, en yüksek kalite seviyesini hedeflemektedir. Her üretim aşamasında detaylı testler ve kontroller yapılmakta, en küçük sapma bile süreci durdurabilmektedir. Bu titiz yaklaşım, ürünlerimizin uzun ömürlü ve güvenilir olmasını garantilemektedir.",
//     author: "BARSAV Kalite Ekibi",
//     image: "/electronics-quality-control.jpg",
//   },
// ]

// export default function BlogSection() {
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handlePostClick = (post: BlogPost) => {
//     setSelectedPost(post)
//     setIsModalOpen(true)
//   }

//   return (
//     <>
//       <section id="blog" className="py-24 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-foreground mb-4">Blog</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Teknoloji, inovasyon ve savunma sanayi üzerine yazılarımız
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {blogData.map((post) => (
//               <article key={post.id} className="group cursor-pointer">
//                 <div
//                   className="bg-card border border-[color:var(--border)] rounded-lg p-6 hover:border-accent transition h-full flex flex-col hover:shadow-lg hover:shadow-accent/20"
//                   onClick={() => handlePostClick(post)}
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
//                     <span className="text-xs text-muted-foreground">{post.date}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition">
//                     {post.title}
//                   </h3>
//                   <p className="text-muted-foreground flex-grow">{post.excerpt}</p>
//                   <button className="text-accent hover:text-accent/80 font-medium mt-4 inline-block">
//                     Devamını Oku →
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <BlogModal post={selectedPost} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   )
// }


"use client"

import { useState, useEffect } from "react"

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
  {
    id: 4,
    title: "Savunma Sanayinde Siber Güvenlik",
    date: "1 Kasım 2024",
    category: "Güvenlik",
    excerpt: "Modern savunma sistemlerinde siber güvenliğin önemi ve alınması gereken önlemler...",
    content:
      "Savunma sanayinde siber güvenlik, kritik öneme sahip bir konudur. Askeri sistemlerin dijitalleşmesi ile birlikte siber tehditler de artmıştır. BARSAV, tüm ürünlerinde en yüksek seviye siber güvenlik standartlarını uygular. Çok katmanlı güvenlik protokolleri, sürekli izleme sistemleri ve düzenli güvenlik testleri ile sistemlerimizi koruma altına alıyoruz.",
    author: "BARSAV Güvenlik Ekibi",
    image: "/cyber-security.jpg",
  },
  {
    id: 5,
    title: "Gelecek Nesil Simülatör Teknolojileri",
    date: "28 Ekim 2024",
    category: "İnovasyon",
    excerpt: "Sanal gerçeklik ve artırılmış gerçeklik teknolojilerinin askeri eğitimde kullanımı...",
    content:
      "Gelecek nesil simülatör teknolojileri, askeri eğitimi tamamen dönüştürmektedir. VR ve AR teknolojileri sayesinde, personel gerçek savaş ortamlarına çok daha yakın koşullarda eğitim alabilmektedir. Bu teknolojiler, eğitim maliyetlerini düşürürken eğitim kalitesini önemli ölçüde artırmaktadır. BARSAV olarak, bu alandaki en son gelişmeleri takip ediyor ve ürünlerimize entegre ediyoruz.",
    author: "BARSAV İnovasyon Ekibi",
    image: "/vr-training.jpg",
  },
]

// Modal Component
function BlogModal({ post, isOpen, onClose }: { post: BlogPost | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const itemsToShow = 3

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
    setAutoPlay(false) // Modal açıldığında otomatik oynatmayı durdur
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogData.length)
    setAutoPlay(true) // Manuel geçişte otomatik oynatmayı sıfırla
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogData.length) % blogData.length)
    setAutoPlay(true) // Manuel geçişte otomatik oynatmayı sıfırla
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(true) // Dot tıklandığında otomatik oynatmayı sıfırla
  }

  const getVisiblePosts = () => {
    const visible = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % blogData.length
      visible.push(blogData[index])
    }
    return visible
  }

  // Otomatik döngü efekti - 10 saniye
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % blogData.length)
      }, 5000) // 10 saniye
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoPlay])

  // Modal kapandığında otomatik oynatmayı yeniden başlat
  useEffect(() => {
    if (!isModalOpen) {
      setAutoPlay(true)
    }
  }, [isModalOpen])

  // Mouse hover durumunda otomatik oynatmayı durdur
  const handleMouseEnter = () => {
    setAutoPlay(false)
  }

  const handleMouseLeave = () => {
    setAutoPlay(true)
  }

  return (
    <>
      <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Teknoloji, inovasyon ve savunma sanayi üzerine yazılarımız
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {blogData.length > itemsToShow && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
                  aria-label="Önceki"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
                  aria-label="Sonraki"
                >
                  →
                </button>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisiblePosts().map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 transition h-full flex flex-col hover:shadow-lg hover:shadow-blue-500/20"
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
                      Devamını Oku →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {blogData.length > itemsToShow && (
              <div className="flex justify-center gap-2 mt-8">
                {blogData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition ${
                      index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Blog ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <BlogModal post={selectedPost} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
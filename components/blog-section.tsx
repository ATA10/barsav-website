// "use client"

// import { useState, useEffect } from "react"
// import { useLanguage } from "@/contexts/language-context"
// import { getTranslation } from "@/lib/translations"
// import { getLocalizedBlogPosts } from "@/lib/data-translations"

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

// // Modal Component
// function BlogModal({ post, isOpen, onClose }: { post: BlogPost | null; isOpen: boolean; onClose: () => void }) {
//   if (!isOpen || !post) return null

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
//       <div
//         className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-8">
//           <div className="flex justify-between items-start mb-4">
//             <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
//               ×
//             </button>
//           </div>
//           <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
//           <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
//             <span>{post.author}</span>
//             <span>•</span>
//             <span>{post.date}</span>
//           </div>
//           <div className="prose max-w-none">
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.content}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function BlogSection() {
//   const { language } = useLanguage()
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [autoPlay, setAutoPlay] = useState(true)
//   const itemsToShow = 3

//   const handlePostClick = (post: BlogPost) => {
//     setSelectedPost(post)
//     setIsModalOpen(true)
//     setAutoPlay(false) // Modal açıldığında otomatik oynatmayı durdur
//   }

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % posts.length)
//     setAutoPlay(true) // Manuel geçişte otomatik oynatmayı sıfırla
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
//     setAutoPlay(true) // Manuel geçişte otomatik oynatmayı sıfırla
//   }

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index)
//     setAutoPlay(true) // Dot tıklandığında otomatik oynatmayı sıfırla
//   }

//   const posts: BlogPost[] = getLocalizedBlogPosts(language)

//   const getVisiblePosts = () => {
//     const visible = []
//     for (let i = 0; i < itemsToShow; i++) {
//       const index = (currentIndex + i) % posts.length
//       visible.push(posts[index])
//     }
//     return visible
//   }

//   // Otomatik döngü efekti - 10 saniye
//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null
    
//     if (autoPlay) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % posts.length)
//       }, 5000) // 10 saniye
//     }
    
//     return () => {
//       if (interval) clearInterval(interval)
//     }
//   }, [autoPlay, posts.length])

//   // Modal kapandığında otomatik oynatmayı yeniden başlat
//   useEffect(() => {
//     if (!isModalOpen) {
//       setAutoPlay(true)
//     }
//   }, [isModalOpen])

//   // Mouse hover durumunda otomatik oynatmayı durdur
//   const handleMouseEnter = () => {
//     setAutoPlay(false)
//   }

//   const handleMouseLeave = () => {
//     setAutoPlay(true)
//   }

//   return (
//     <>
//       <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{getTranslation(language, "blog.title")}</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               {getTranslation(language, "blog.subtitle")}
//             </p>
//           </div>

//           <div 
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {posts.length > itemsToShow && (
//               <>
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
//                   aria-label="Önceki"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-lg"
//                   aria-label="Sonraki"
//                 >
//                   →
//                 </button>
//               </>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {getVisiblePosts().map((post) => (
//                 <article key={post.id} className="group cursor-pointer">
//                   <div
//                     className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 transition h-full flex flex-col hover:shadow-lg hover:shadow-blue-500/20"
//                     onClick={() => handlePostClick(post)}
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{post.category}</span>
//                       <span className="text-xs text-gray-500">{post.date}</span>
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
//                     <button className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
//                       {getTranslation(language, "blog.readMore")}
//                     </button>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {posts.length > itemsToShow && (
//               <div className="flex justify-center gap-2 mt-8">
//                 {posts.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`h-2 rounded-full transition ${
//                       index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
//                     }`}
//                     aria-label={`Blog ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       <BlogModal post={selectedPost} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { getLocalizedBlogPosts } from "@/lib/data-translations"

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

/* ---------- MODAL ---------- */
function BlogModal({
  post,
  isOpen,
  onClose,
}: {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !post) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 space-y-4">
          <div className="flex justify-between items-start">
            <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
              {post.category}
            </span>

            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl"
            >
              ×
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {post.title}
          </h2>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ---------- SECTION ---------- */

export default function BlogSection() {
  const { language } = useLanguage()

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const itemsToShow = 3
  const posts: BlogPost[] = getLocalizedBlogPosts(language)

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
    setAutoPlay(true)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
    setAutoPlay(true)
  }

  const getVisiblePosts = () => {
    const visible = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % posts.length
      visible.push(posts[index])
    }
    return visible
  }

  // autoplay
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, posts.length])

  return (
    <>
      <section id="blog" className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {getTranslation(language, "blog.title")}
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getTranslation(language, "blog.subtitle")}
            </p>
          </div>

          {/* Slider */}
          <div
            className="relative"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Arrows */}
            {posts.length > itemsToShow && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-accent-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                >
                  →
                </button>
              </>
            )}

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisiblePosts().map((post) => (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="cursor-pointer h-full rounded-lg border border-border bg-background p-6 transition hover:border-accent hover:shadow-lg flex flex-col"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-grow">
                    {post.excerpt}
                  </p>

                  <span className="mt-4 text-sm font-semibold text-accent">
                    {getTranslation(language, "blog.readMore")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import ImageWithBasePath from "./image-with-basepath"
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !post) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Görsel */}
        <div className="relative h-72 lg:h-96 overflow-hidden rounded-t-lg">
          <ImageWithBasePath
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

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

          {/* Özet */}
          <p className="text-lg text-muted-foreground italic border-l-4 border-accent pl-4 py-2">
            {post.excerpt}
          </p>

          {/* İçerik */}
          <div className="text-foreground space-y-4 leading-relaxed">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                  className="cursor-pointer h-full rounded-lg border border-border bg-background overflow-hidden transition hover:border-accent hover:shadow-lg flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-card">
                    <ImageWithBasePath
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
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
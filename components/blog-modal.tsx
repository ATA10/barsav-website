// "use client"

// import { useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import ImageWithBasePath from "./image-with-basepath"

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

// interface BlogModalProps {
//   post: BlogPost | null
//   isOpen: boolean
//   onClose: () => void
// }

// export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isOpen])

//   if (!isOpen || !post) return null

//   return (
//     <>
//       <div className="modal-blur" onClick={onClose} />

//       <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
//         <div
//           className="bg-card border border-[color:var(--border)] rounded-lg max-w-2xl w-full max-h-[90vh] modal-no-scroll"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Header */}
//           <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-start z-10">
//             <div>
//               <div className="flex gap-2 mb-2">
//                 <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
//                 <span className="text-xs text-muted-foreground">{post.date}</span>
//               </div>
//               <h2 className="text-2xl font-bold text-foreground">{post.title}</h2>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-muted-foreground hover:text-foreground text-2xl font-bold w-8 h-8 flex items-center justify-center"
//             >
//               ×
//             </button>
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
//               <ImageWithBasePath src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
//             </div>

//             <div className="prose prose-invert max-w-none">
//               <div className="text-muted-foreground mb-4">
//                 <p className="font-semibold text-foreground mb-2">Yazar: {post.author}</p>
//               </div>

//               <div className="text-foreground space-y-4">
//                 {post.content.split("\n\n").map((paragraph, index) => (
//                   <p key={index} className="leading-relaxed">
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
//               <Button onClick={onClose} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
//                 Kapat
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// "use client"

// import { useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import ImageWithBasePath from "./image-with-basepath"

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

// interface BlogModalProps {
//   post: BlogPost | null
//   isOpen: boolean
//   onClose: () => void
// }

// export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isOpen])

//   if (!isOpen || !post) return null

//   return (
//     <>
//       <div className="modal-blur" onClick={onClose} />

//       <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
//         <div
//           className="bg-card border border-[color:var(--border)] rounded-lg max-w-4xl w-full max-h-[90vh] modal-no-scroll"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Header - Başlık ve kategori bilgileri */}
//           <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-start z-10">
//             <div className="w-full">
//               <div className="flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
//                       {post.category}
//                     </span>
//                     <span className="text-sm text-muted-foreground">{post.date}</span>
//                   </div>
//                   <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
//                     {post.title}
//                   </h2>
//                   <p className="text-muted-foreground mt-2">Yazar: {post.author}</p>
//                 </div>
//                 <button
//                   onClick={onClose}
//                   className="text-muted-foreground hover:text-foreground text-2xl font-bold w-8 h-8 flex items-center justify-center flex-shrink-0"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Content - Geniş layout */}
// <div className="p-6">
//   {/* Resim - Üstte */}
//   <div className="relative w-full h-72 lg:h-96 mb-8 rounded-lg overflow-hidden">
//     <ImageWithBasePath 
//       src={post.image || "/placeholder.svg"} 
//       alt={post.title} 
//       fill 
//       className="object-cover" 
//     />
//   </div>

//   {/* Meta bilgiler */}
//   <div className="flex flex-wrap gap-4 mb-6">
//     <div className="flex items-center gap-3">
//       <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
//         {post.category}
//       </span>
//       <span className="text-sm text-muted-foreground">{post.date}</span>
//       <span className="text-sm text-muted-foreground">•</span>
//       <span className="text-sm text-muted-foreground">Yazar: {post.author}</span>
//     </div>
//   </div>

//   {/* Başlık */}
//   <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{post.title}</h2>

//   {/* Özet */}
//   <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-accent pl-6 py-2">
//     {post.excerpt}
//   </p>

//   {/* İçerik */}
//   <div className="prose prose-invert max-w-none">
//     <div className="text-foreground space-y-6">
//       {post.content.split("\n\n").map((paragraph, index) => (
//         <p key={index} className="leading-relaxed text-lg">
//           {paragraph}
//         </p>
//       ))}
//     </div>
//   </div>

//   {/* Footer */}
//   <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
//     <Button onClick={onClose} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
//       Kapat
//     </Button>
//   </div>
// </div>
          
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
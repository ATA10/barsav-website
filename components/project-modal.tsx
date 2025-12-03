// "use client"

// import { useEffect } from "react"
// import { X } from "lucide-react"

// interface Project {
//   id: number
//   title: string
//   category: string
//   fullDescription: string
//   year: string
//   status: string
//   client: string
//   image: string
// }

// export default function ProjectModal({
//   project,
//   isOpen,
//   onClose,
// }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
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

//   if (!isOpen || !project) return null

//   return (
//     <>
//       <div className="modal-blur" onClick={onClose} />

//       {/* Modal */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//         <div className="relative bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition z-10 bg-card"
//           >
//             <X className="w-6 h-6 text-foreground" />
//           </button>

//           {/* Content */}
//           <div className="p-8">
//             <img
//               src={project.image || "/placeholder.svg"}
//               alt={project.title}
//               className="w-full h-64 object-cover rounded-lg mb-6"
//             />
//             <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
//             <p className="text-accent mb-6">{project.category}</p>

//             {/* Project Info */}
//             <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-background rounded-lg">
//               <div>
//                 <p className="text-sm text-muted-foreground mb-1">Tarih</p>
//                 <p className="text-foreground font-semibold">{project.year}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground mb-1">Durum</p>
//                 <p className="text-foreground font-semibold">{project.status}</p>
//               </div>
//               <div className="col-span-2">
//                 <p className="text-sm text-muted-foreground mb-1">Müşteri</p>
//                 <p className="text-foreground font-semibold">{project.client}</p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-foreground leading-relaxed">{project.fullDescription}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  fullDescription: string
  year: string
  status: string
  client: string
  image: string
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: { project: Project | null; isOpen: boolean; onClose: () => void }) {
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

  if (!isOpen || !project) return null

  return (
    <>
      <div className="modal-blur" onClick={onClose} />

      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="bg-card border border-[color:var(--border)] rounded-lg max-w-2xl w-full max-h-[90vh] modal-no-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-start z-10">
            <div>
              <div className="flex gap-2 mb-2">
                <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">{project.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Project Info */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-background rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tarih</p>
                <p className="text-foreground font-semibold">{project.year}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Durum</p>
                <p className="text-foreground font-semibold">{project.status}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground mb-1">Müşteri</p>
                <p className="text-foreground font-semibold">{project.client}</p>
              </div>
            </div> */}

            {/* Description */}
            <div className="text-foreground space-y-4">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer */}
            {/* <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
              <Button onClick={onClose} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Kapat
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
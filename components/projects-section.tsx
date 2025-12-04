"use client"

import { useState } from "react"
import ProjectModal from "./project-modal"
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

const projectsData: Project[] = [
  {
    id: 1,
    title: "Havaalanı LED Aydınlatma Projesi",
    category: "Havaalanı Aydınlatması",
    fullDescription:
      "Türkiye'nin en büyük havaalanlarından biri için yapılan LED aydınlatma sistemi projesi. Başlangıç, iniş ve gemi güvenliği için optimize edilmiş sistemler.",
    year: "2023",
    status: "Tamamlandı",
    client: "Önde Gelen Havaalanı Operatörü",
    image: "/airport-led-lighting-system.jpg",
  },
  {
    id: 2,
    title: "Askeri Tanksimülatörü Sistemi",
    category: "Askeri Simülasyon",
    fullDescription:
      "Gelişmiş tank simülatörü sistemi. Gerçekçi fizik motoru, çoklu kanalı görsel sistem ve hareket platformuyla donatılmış. Eğitim ve operasyon planlama için kullanıldı.",
    year: "2022",
    status: "Tamamlandı",
    client: "Türk Silahlı Kuvvetleri",
    image: "/military-tank-simulator.jpg",
  },
  {
    id: 3,
    title: "Elektronik Kontrol Sistemi",
    category: "Elektronik Üretim",
    fullDescription:
      "Çok kanallı elektronik kontrol sistemi tasarımı ve üretimi. Savunma endüstrisi standartlarına uygun, teste tabi tutulmuş ve onaylanmış.",
    year: "2023",
    status: "Devam Ediyor",
    client: "Savunma Kontraktörü",
    image: "/electronic-control-system.jpg",
  },
  {
    id: 4,
    title: "Havacılık Simülatörü Eğitim Sistemi",
    category: "Sivil Simülasyon",
    fullDescription:
      "FSTD sertifikalı havacılık simülatörü. Gerçekçi gösterge paneli, hareket sistemi ve tam entegre kontrol yapısıyla. Pilot eğitim programları için kullanılıyor.",
    year: "2023",
    status: "Tamamlandı",
    client: "Havacılık Eğitim Merkezi",
    image: "/aviation-simulator-training.jpg",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Projelerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Başarıyla tamamlanmış ve devam eden projelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative h-64 overflow-hidden bg-card rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

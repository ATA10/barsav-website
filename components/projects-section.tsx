"use client"

import { useState } from "react"
import ProjectModal from "./project-modal"
import ImageWithBasePath from "./image-with-basepath"
import projectsData from "@/dataa/projects.json"

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
            {projectsData.projects.map((project: Project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative h-64 overflow-hidden bg-card rounded-lg">
                  <ImageWithBasePath
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

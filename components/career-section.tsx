"use client"

import ImageWithBasePath from "./image-with-basepath"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export default function CareerSection() {
  const { language } = useLanguage()
  return (
    <section id="career" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 hidden md:block">
            <ImageWithBasePath src="/team-collaboration-technology.jpg" alt="Kariyer" fill className="object-cover rounded-lg" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">{getTranslation(language, "career.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {getTranslation(language, "career.description")}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">{getTranslation(language, "career.softwareDeveloper")}</h3>
                <p className="text-muted-foreground">{getTranslation(language, "career.softwareDeveloperDesc")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{getTranslation(language, "career.hardwareEngineer")}</h3>
                <p className="text-muted-foreground">
                  {getTranslation(language, "career.hardwareEngineerDesc")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{getTranslation(language, "career.projectManager")}</h3>
                <p className="text-muted-foreground">{getTranslation(language, "career.projectManagerDesc")}</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition">
              {getTranslation(language, "career.viewOpportunities")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

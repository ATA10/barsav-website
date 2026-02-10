"use client"

import React from "react"
import emailjs from "emailjs-com"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

interface ContactSectionProps {
  onContactClick?: () => void
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const { language } = useLanguage()

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")

  // EmailJS init
  React.useEffect(() => {
    emailjs.init("TcEw31LxJWDSlk_N4") // <- BURAYA PUBLIC KEY
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_qrtcel9",   // <- BURAYA SERVICE ID
        "template_vl76jvt",  // <- BURAYA TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )

      setSubmitStatus("success")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.log("Email error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {getTranslation(language, "contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {getTranslation(language, "contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* SOL TARAF */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {getTranslation(language, "contact.contactInfo")}
              </h3>

              <div className="bg-card/50 rounded-lg p-4 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.6795092404099!2d32.77036890327922!3d39.94794411801186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348fde2c5597d%3A0xec041d88846c1d48!2zQVRCIMSwxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1770740945184!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                <p className="text-accent font-semibold mb-1">
                  {getTranslation(language, "contact.address")}
                </p>
                <p className="text-foreground">
                  MACUN MAHALLESİ BATI BULVARI ATB İŞ MERKEZİ NO:1/94 YENİMAHALLE 
                  <br />
                  ANKARA / TÜRKİYE
                </p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                <p className="text-accent font-semibold mb-1">
                  {getTranslation(language, "contact.phone")}
                </p>
                <p className="text-foreground">+90 (312) 232 61 11</p>
                <p className="text-foreground">+90 535 932 55 70</p>
              </div>

              <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                <p className="text-accent font-semibold mb-1">
                  {getTranslation(language, "contact.email")}
                </p>
                <p className="text-foreground">info@barsav.com.tr</p>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF - FORM */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {getTranslation(language, "contact.sendMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={getTranslation(language, "contact.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
              />

              <input
                type="email"
                name="email"
                placeholder={getTranslation(language, "contact.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
              />

              <input
                type="text"
                name="subject"
                placeholder={getTranslation(language, "contact.subjectPlaceholder")}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
              />

              <textarea
                name="message"
                placeholder={getTranslation(language, "contact.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                required
                rows={17}
                className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition"
              />

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-400">
                  {getTranslation(language, "contact.success")}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400">
                  {getTranslation(language, "contact.error")}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-accent-foreground rounded-lg font-semibold transition"
              >
                {isSubmitting
                  ? getTranslation(language, "contact.sending")
                  : getTranslation(language, "contact.send")}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

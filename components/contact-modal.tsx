"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setTimeout(() => {
          onClose()
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.log("[v0] Email error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-blur" onClick={onClose} />

      {/* Modal içeriği */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-card border border-[color:var(--border)] rounded-lg shadow-2xl w-full max-w-4xl modal-no-scroll max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-[color:var(--border)] p-6 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-foreground">Bize Ulaşın</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition">
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sol taraf - Harita ve İletişim Bilgileri */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">İletişim Bilgileri</h3>
                  <div className="bg-background rounded-lg p-4 mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.6262506623846!2d29.00596!3d41.04733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7c0e3f0001%3A0x1234567890abc!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: "8px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* İletişim Detayları */}
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                    <p className="text-accent font-semibold mb-1">Adres</p>
                    <p className="text-foreground">
                      Barsav Teknoloji A.Ş.
                      <br />
                      İstanbul, Türkiye
                    </p>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                    <p className="text-accent font-semibold mb-1">Telefon</p>
                    <p className="text-foreground">+90 (212) 555-0123</p>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                    <p className="text-accent font-semibold mb-1">E-mail</p>
                    <p className="text-foreground">info@barsav.com</p>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4 border border-[color:var(--border)]">
                    <p className="text-accent font-semibold mb-1">Çalışma Saatleri</p>
                    <p className="text-foreground">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi - Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Sağ taraf - İletişim Formu */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Mesaj Gönderin</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Adınız"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail Adresiniz"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Konu"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Mesajınız"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition modal-no-scroll"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-400">
                      Mesajınız başarıyla gönderildi!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400">
                      Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-accent-foreground rounded-lg font-semibold transition"
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

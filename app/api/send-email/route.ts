import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Gmail SMTP konfigürasyonu
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tüm alanlar gereklidir." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Geçersiz email formatı." }, { status: 400 })
    }

    // Email içeriği oluştur
    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: process.env.GMAIL_USER, 
      replyTo: email, 
      subject: `BARSAV İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">BARSAV İletişim Formu</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Konu:</strong> ${subject}</p>
            <p><strong>Gönderen:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gönderim Tarihi:</strong> ${new Date().toLocaleString("tr-TR")}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #555;">Mesaj:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Bu email BARSAV web sitesi iletişim formundan gönderilmiştir.</p>
            <p>Bu mesaja yanıt vermek için gönderenin email adresini kullanın: ${email}</p>
          </div>
        </div>
      `,
      text: `BARSAV İletişim Formu\n\nKonu: ${subject}\nGönderen: ${name}\nEmail: ${email}\n\nMesaj:\n${message}\n\n---\nBu email BARSAV web sitesi iletişim formundan gönderilmiştir.`,
    }

    // Email gönder
    const info = await transporter.sendMail(mailOptions)
    
    console.log("[v0] Email gönderildi:", {
      messageId: info.messageId,
      to: mailOptions.to,
      from: mailOptions.from,
      subject: mailOptions.subject,
      timestamp: new Date().toISOString(),
    })

    // Başarılı response
    return NextResponse.json({ 
      message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız." 
    }, { status: 200 })

  } catch (error) {
    console.error("[v0] Email gönderme hatası:", error)
    
    // Özel hata mesajları
    let errorMessage = "Mesaj gönderilirken hata oluştu."
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage = "Email servisi yapılandırmasında hata var."
      } else if (error.message.includes("ENOTFOUND")) {
        errorMessage = "Email servisine bağlanılamıyor."
      }
    }

    return NextResponse.json({ 
      error: errorMessage 
    }, { status: 500 })
  }
}
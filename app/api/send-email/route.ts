import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Email validasyonu
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tüm alanlar gereklidir." }, { status: 400 })
    }

    // Email gönderme simülasyonu
    // Gerçek senaryoda, burada nodemailer, sendgrid, vb. kullanılabilir
    console.log("[v0] Email gönderildi:", {
      to: "dash.aniltaha@gmail.com",
      from: email,
      subject: `BARSAV İletişim: ${subject}`,
      name,
      message,
    })

    // Basit bir success response döndür
    return NextResponse.json({ message: "Mesaj başarıyla gönderildi!" }, { status: 200 })
  } catch (error) {
    console.log("[v0] Email gönderme hatası:", error)
    return NextResponse.json({ error: "Mesaj gönderilirken hata oluştu." }, { status: 500 })
  }
}

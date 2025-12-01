export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Bize Ulaşın</h2>
          <p className="text-lg text-muted-foreground">Projeleriniz veya sorularınız için bize yazın</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Adınız"
              className="bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="E-mail Adresiniz"
              className="bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <input
            type="text"
            placeholder="Konu"
            className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="w-full bg-background border border-[color:var(--border)] rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />

          <button
            type="submit"
            className="w-full px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition"
          >
            Gönder
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-accent font-semibold mb-2">Telefon</p>
            <p className="text-muted-foreground">+90 (212) 555-0123</p>
          </div>
          <div className="text-center">
            <p className="text-accent font-semibold mb-2">E-mail</p>
            <p className="text-muted-foreground">info@baykartech.com</p>
          </div>
          <div className="text-center">
            <p className="text-accent font-semibold mb-2">Adres</p>
            <p className="text-muted-foreground">İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  )
}

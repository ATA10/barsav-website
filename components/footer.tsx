export default function Footer() {
  return (
    <footer className="bg-background border-t border-[color:var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-foreground font-semibold mb-4">Barsav</h3>
            <p className="text-muted-foreground text-sm">
              Havacılık ve savunma sanayi için yenilikçi teknoloji çözümleri
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Başın Özeti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Sosyal Ağlar</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[color:var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; 2025 Barsav. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 text-muted-foreground text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-accent transition">
              Hizmet Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

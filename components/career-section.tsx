import Image from "next/image"

export default function CareerSection() {
  return (
    <section id="career" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 hidden md:block">
            <Image src="/team-collaboration-technology.jpg" alt="Kariyer" fill className="object-cover rounded-lg" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Ekibimize Katılın</h2>
            <p className="text-lg text-muted-foreground">
              Baykar Tech'de kariyer yaparak teknolojinin geleceğini şekillendirin. Yaratıcı, özel ve profesyonel bir
              ortamda yeteneklerinizi geliştirin.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Yazılım Geliştirici</h3>
                <p className="text-muted-foreground">Python, C++ ve modern web teknolojileri alanlarında deneyim</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Donanım Mühendisi</h3>
                <p className="text-muted-foreground">
                  Elektronik tasarım ve simülasyon alanında uzmanlaşmış profesyoneller
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Proje Yöneticisi</h3>
                <p className="text-muted-foreground">Büyük ölçekli projeleri yönetme ve liderlik deneyimi</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition">
              Kariyer Fırsatlarını Gör
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

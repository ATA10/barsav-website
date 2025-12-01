export default function BenefitsSection() {
  const benefits = [
    { label: "Kalite", value: "%99.9" },
    { label: "Başarılı Projeler", value: "50+" },
    { label: "Hızlı Teslimat", value: "%98" },
    { label: "Müşteri Memnuniyeti", value: "%99.5" },
  ]

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{benefit.value}</p>
              <p className="text-muted-foreground">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

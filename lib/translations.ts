export type Language = "tr" | "en" | "ru" | "de"

export const languages: { code: Language; name: string; flag: string; displayCode: string }[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷", displayCode: "TR" },
  { code: "en", name: "English", flag: "🇬🇧", displayCode: "EN" },
  { code: "ru", name: "Русский", flag: "🇷🇺", displayCode: "RU" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", displayCode: "DE" },
]

export const translations = {
  tr: {
    nav: {
      about: "Hakkımızda",
      products: "Ürünler",
      services: "Hizmetler",
      projects: "Projeler",
      blog: "Blog",
      career: "Kariyer",
      contact: "İletişim",
    },
    products: {
      title: "Ürünlerimiz",
      subtitle: "Havacılık, elektronik ve savunma sanayi için yenilikçi ürün çözümleri",
      search: "Ürün ara...",
      all: "Tümü",
      found: "ürün bulundu",
      notFound: "Aradığınız kriterlere uygun ürün bulunamadı.",
      details: "Detaylar →",
      back: "Ürünlere Dön",
      description: "Açıklama",
      features: "Özellikler",
      price: "Fiyat",
      technicalSpecs: "Teknik Özellikler",
      reviews: "Yorumlar",
      productNotFound: "Ürün Bulunamadı",
    },
    hero: {
      title: "BARSAV",
      subtitle: "Havacılık, Elektronik & Savunma",
      description: "Yenilikçi teknoloji çözümleri, havaalanı ışıklandırması, elektronik üretim ve askeri/sivil araç simülasyonlarında lider.",
      exploreButton: "Çözümlerimizi Keşfet",
      contactButton: "İletişime Geç",
      projects: "Proje",
      years: "Yıl Deneyim",
      professionals: "Profesyonel",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "Savunma ve sivil sektörler için kapsamlı teknoloji çözümleri",
    },
    projects: {
      title: "Projelerimiz",
      subtitle: "Başarıyla tamamlanmış ve devam eden projelerimiz",
    },
    blog: {
      title: "Blog",
      subtitle: "Teknoloji, inovasyon ve savunma sanayi üzerine yazılarımız",
      readMore: "Devamını Oku →",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      career: "Career",
      contact: "Contact",
    },
    products: {
      title: "Our Products",
      subtitle: "Innovative product solutions for aviation, electronics and defense industry",
      search: "Search products...",
      all: "All",
      found: "products found",
      notFound: "No products found matching your criteria.",
      details: "Details →",
      back: "Back to Products",
      description: "Description",
      features: "Features",
      price: "Price",
      technicalSpecs: "Technical Specifications",
      reviews: "Reviews",
      productNotFound: "Product Not Found",
    },
    hero: {
      title: "BARSAV",
      subtitle: "Aviation, Electronics & Defense",
      description: "Leading in innovative technology solutions, airport lighting, electronics manufacturing and military/civil vehicle simulations.",
      exploreButton: "Explore Our Solutions",
      contactButton: "Contact Us",
      projects: "Projects",
      years: "Years Experience",
      professionals: "Professionals",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive technology solutions for defense and civil sectors",
    },
    projects: {
      title: "Our Projects",
      subtitle: "Successfully completed and ongoing projects",
    },
    blog: {
      title: "Blog",
      subtitle: "Articles on technology, innovation and defense industry",
      readMore: "Read More →",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      products: "Продукты",
      services: "Услуги",
      projects: "Проекты",
      blog: "Блог",
      career: "Карьера",
      contact: "Контакты",
    },
    products: {
      title: "Наши продукты",
      subtitle: "Инновационные продуктовые решения для авиации, электроники и оборонной промышленности",
      search: "Поиск продуктов...",
      all: "Все",
      found: "продуктов найдено",
      notFound: "Не найдено продуктов, соответствующих вашим критериям.",
      details: "Детали →",
      back: "Вернуться к продуктам",
      description: "Описание",
      features: "Особенности",
      price: "Цена",
      technicalSpecs: "Технические характеристики",
      reviews: "Отзывы",
      productNotFound: "Продукт не найден",
    },
    hero: {
      title: "BARSAV",
      subtitle: "Авиация, Электроника и Оборона",
      description: "Лидер в инновационных технологических решениях, аэропортовом освещении, производстве электроники и военных/гражданских симуляторах.",
      exploreButton: "Изучить наши решения",
      contactButton: "Связаться с нами",
      projects: "Проектов",
      years: "Лет опыта",
      professionals: "Профессионалов",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Комплексные технологические решения для оборонного и гражданского секторов",
    },
    projects: {
      title: "Наши проекты",
      subtitle: "Успешно завершенные и текущие проекты",
    },
    blog: {
      title: "Блог",
      subtitle: "Статьи о технологиях, инновациях и оборонной промышленности",
      readMore: "Читать далее →",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      products: "Produkte",
      services: "Dienstleistungen",
      projects: "Projekte",
      blog: "Blog",
      career: "Karriere",
      contact: "Kontakt",
    },
    products: {
      title: "Unsere Produkte",
      subtitle: "Innovative Produktlösungen für Luftfahrt, Elektronik und Verteidigungsindustrie",
      search: "Produkte suchen...",
      all: "Alle",
      found: "Produkte gefunden",
      notFound: "Es wurden keine Produkte gefunden, die Ihren Kriterien entsprechen.",
      details: "Details →",
      back: "Zurück zu Produkten",
      description: "Beschreibung",
      features: "Funktionen",
      price: "Preis",
      technicalSpecs: "Technische Spezifikationen",
      reviews: "Bewertungen",
      productNotFound: "Produkt nicht gefunden",
    },
    hero: {
      title: "BARSAV",
      subtitle: "Luftfahrt, Elektronik & Verteidigung",
      description: "Führend bei innovativen Technologielösungen, Flughafenbeleuchtung, Elektronikfertigung und militärischen/zivilen Fahrzeugsimulationen.",
      exploreButton: "Unsere Lösungen erkunden",
      contactButton: "Kontaktieren Sie uns",
      projects: "Projekte",
      years: "Jahre Erfahrung",
      professionals: "Fachkräfte",
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Umfassende Technologielösungen für Verteidigungs- und Zivilsektoren",
    },
    projects: {
      title: "Unsere Projekte",
      subtitle: "Erfolgreich abgeschlossene und laufende Projekte",
    },
    blog: {
      title: "Blog",
      subtitle: "Artikel zu Technologie, Innovation und Verteidigungsindustrie",
      readMore: "Weiterlesen →",
    },
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}


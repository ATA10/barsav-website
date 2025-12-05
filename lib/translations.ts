export type Language = "tr" | "en" | "ru" | "de"

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
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


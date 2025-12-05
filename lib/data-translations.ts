import { Language } from "./translations"
import productsData from "@/dataa/products.json"
import servicesData from "@/dataa/services.json"
import projectsData from "@/dataa/projects.json"

// Ürün çevirileri
const productTranslations: Record<Language, Record<number, any>> = {
  tr: {},
  en: {
    1: {
      name: "Airport LED Lighting System",
      category: "Airport Lighting",
      description: "Professional airport lighting solutions. Energy efficient and long-lasting systems with LED technology.",
      fullDescription: "Advanced lighting systems used in airports. Energy efficient, long-lasting and reliable solutions. Systems optimized for day and night operations. Designed and implemented in accordance with international standards.",
      price: "Contact Us for Price Quote",
      features: [
        "LED-based modern technology",
        "Energy savings and sustainability",
        "Automatic control systems",
        "Compliant with international standards",
        "24/7 operational reliability"
      ],
      status: "Active",
      technicalSpecs: {
        "Power Consumption": "50-200W",
        "Lifespan": "50,000+ hours",
        "Color Temperature": "4000K-6000K",
        "IP Rating": "IP65",
        "Operating Temperature": "-40°C to +60°C",
        "Standards": "ICAO Annex 14, FAA AC 150/5345-46"
      },
      reviews: [
        {
          id: 1,
          author: "Mehmet Yilmaz",
          rating: 5,
          comment: "Excellent system. Saved energy and reduced maintenance costs.",
          date: "2024-01-15"
        },
        {
          id: 2,
          author: "Ayse Demir",
          rating: 5,
          comment: "Fully compliant with international standards. Very satisfied.",
          date: "2024-02-20"
        }
      ]
    },
    2: {
      name: "Military Tank Simulator",
      category: "Military Simulation",
      description: "Advanced military vehicle simulations. Realistic physics engine and multi-channel visual system.",
      fullDescription: "Realistic and high-accuracy military vehicle simulation systems. Professional solutions used for training and operation planning. Fully integrated control and observer panels. Equipped with realistic physics engine, multi-channel visual system and motion platform.",
      price: "Contact Us for Price Quote",
      features: [
        "Realistic physics engine",
        "Multi-channel visual system",
        "Motion platform",
        "Observer stations",
        "AI-powered scenarios"
      ],
      status: "Active",
      technicalSpecs: {
        "Field of View": "360°",
        "Resolution": "4K per channel",
        "Motion Platform": "6 DOF",
        "Physics Engine": "Real-time",
        "AI Scenarios": "100+",
        "Concurrent Users": "1-4 people"
      },
      reviews: [
        {
          id: 1,
          author: "Ali Kaya",
          rating: 5,
          comment: "Significantly improved training quality. Realistic simulation experience.",
          date: "2024-03-10"
        }
      ]
    },
    3: {
      name: "Civil Aircraft Simulator",
      category: "Civil Simulation",
      description: "Aircraft simulations for pilot training. FSTD certified professional simulator.",
      fullDescription: "Professional pilot training simulators for civil aviation. Fully renewable component design and advanced aerodynamics model. FSTD certified systems with realistic instrument panel, motion system and fully integrated control structure.",
      price: "Contact Us for Price Quote",
      features: [
        "FSTD certified",
        "Realistic instrument panel",
        "Motion system",
        "Technical support",
        "Renewable components"
      ],
      status: "Active",
      technicalSpecs: {
        "Certification": "FSTD Level D",
        "Visual System": "180° x 40°",
        "Motion System": "6 DOF",
        "Aircraft Models": "10+",
        "Aerodynamics": "Real-time",
        "Instrument Panel": "Fully functional"
      },
      reviews: [
        {
          id: 1,
          author: "Pilot Ahmet Sahin",
          rating: 5,
          comment: "FSTD certified system is very close to real flight experience. Excellent training tool.",
          date: "2024-01-25"
        },
        {
          id: 2,
          author: "Training Manager Zeynep Oz",
          rating: 5,
          comment: "We use it in our pilot training programs. Very successful results.",
          date: "2024-02-14"
        }
      ]
    },
    4: {
      name: "Electronic Control System",
      category: "Electronics Manufacturing",
      description: "Multi-channel electronic control system design and manufacturing. Compliant with defense industry standards.",
      fullDescription: "Design, prototyping and mass production of special electronic products for defense and aviation sectors. Production is carried out with the highest quality standards. Multi-channel electronic control system design and manufacturing. Compliant with defense industry standards, tested and approved.",
      price: "Contact Us for Price Quote",
      features: [
        "Custom design",
        "Quality control",
        "Mass production",
        "Technical support",
        "Precision engineering"
      ],
      status: "Active",
      technicalSpecs: {
        "Channel Count": "8-64",
        "Processor": "ARM Cortex-A78",
        "Operating Voltage": "12V-48V DC",
        "Operating Temperature": "-55°C to +85°C",
        "Standards": "MIL-STD-810G, DO-160",
        "Interface": "CAN, RS485, Ethernet"
      },
      reviews: [
        {
          id: 1,
          author: "Engineer Can Arslan",
          rating: 5,
          comment: "We use it in our defense projects. Very reliable and durable system.",
          date: "2024-02-05"
        }
      ]
    },
    5: {
      name: "Aviation Simulator Training System",
      category: "Civil Simulation",
      description: "FSTD certified aviation simulator. Used for pilot training programs.",
      fullDescription: "FSTD certified aviation simulator. With realistic instrument panel, motion system and fully integrated control structure. Used for pilot training programs. Full immersive training environment is provided.",
      price: "Contact Us for Price Quote",
      features: [
        "FSTD certified",
        "Realistic instrument panel",
        "Motion system",
        "Fully integrated control",
        "Training programs"
      ],
      status: "Active",
      technicalSpecs: {
        "Certification": "FSTD Level C/D",
        "Visual Resolution": "1920x1080 per screen",
        "Motion System": "6 DOF electro-hydraulic",
        "Training Scenarios": "500+",
        "Air Traffic": "Real-time",
        "Weather": "Dynamic"
      },
      reviews: [
        {
          id: 1,
          author: "Training Coordinator Fatma Yildiz",
          rating: 5,
          comment: "We use it in our pilot training. Very effective training tool.",
          date: "2024-03-01"
        }
      ]
    },
    6: {
      name: "Electronic Component Production Line",
      category: "Electronics Manufacturing",
      description: "Modern production facility for high-tech electronic components.",
      fullDescription: "BARSAV production facility is specially designed for the production of precision electronic components. Quality control is ensured with fully automatic management system. The facility has a production capacity of 50,000+ components per year.",
      price: "Contact Us for Price Quote",
      features: [
        "Automatic production lines",
        "Precision quality control",
        "High capacity",
        "ISO certifications",
        "Environmentally friendly production"
      ],
      status: "Active",
      technicalSpecs: {
        "Production Capacity": "50,000+ components/year",
        "Automation Level": "95%",
        "Quality Control": "100% test",
        "Certifications": "ISO 9001, ISO 14001",
        "Clean Room": "ISO 7 (Class 10,000)",
        "Work Area": "2,500 m²"
      },
      reviews: [
        {
          id: 1,
          author: "Production Manager Serkan Dogan",
          rating: 5,
          comment: "Modern and efficient production line. Meets our quality standards.",
          date: "2024-01-10"
        }
      ]
    }
  },
  ru: {},
  de: {}
}

// Ürün verilerini dil desteği ile getir
export function getLocalizedProducts(lang: Language) {
  return productsData.products.map((product) => {
    const translation = productTranslations[lang]?.[product.id]
    if (translation && lang !== "tr") {
      return {
        ...product,
        ...translation,
        // Görseller ve teknik özellikler anahtarları çevrilmeli
        technicalSpecs: translation.technicalSpecs || product.technicalSpecs,
        images: product.images,
        image: product.image,
        year: product.year,
      }
    }
    return product
  })
}

// Tek bir ürünü dil desteği ile getir
export function getLocalizedProduct(productId: number, lang: Language) {
  const product = productsData.products.find((p) => p.id === productId)
  if (!product) return null

  const translation = productTranslations[lang]?.[productId]
  if (translation && lang !== "tr") {
    return {
      ...product,
      ...translation,
      technicalSpecs: translation.technicalSpecs || product.technicalSpecs,
      images: product.images,
      image: product.image,
      year: product.year,
    }
  }
  return product
}


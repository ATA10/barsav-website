import { Language } from "./translations"

// Dil koduna göre JSON dosyalarını import et
import productsDataTr from "@/data/tr/products.json"
import productsDataEn from "@/data/en/products.json"
import productsDataRu from "@/data/ru/products.json"
import productsDataDe from "@/data/de/products.json"

import servicesDataTr from "@/data/tr/services.json"
import servicesDataEn from "@/data/en/services.json"
import servicesDataRu from "@/data/ru/services.json"
import servicesDataDe from "@/data/de/services.json"

import projectsDataTr from "@/data/tr/projects.json"
import projectsDataEn from "@/data/en/projects.json"
import projectsDataRu from "@/data/ru/projects.json"
import projectsDataDe from "@/data/de/projects.json"

import blogDataTr from "@/data/tr/blog-posts.json"
import blogDataEn from "@/data/en/blog-posts.json"
import blogDataRu from "@/data/ru/blog-posts.json"
import blogDataDe from "@/data/de/blog-posts.json"

import aboutDataTr from "@/data/tr/about.json"
import aboutDataEn from "@/data/en/about.json"
import aboutDataRu from "@/data/ru/about.json"
import aboutDataDe from "@/data/de/about.json"

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
  ru: {
    1: {
      name: "Система LED-освещения аэропорта",
      category: "Аэропортовое освещение",
      description: "Профессиональные решения для освещения аэропортов. Энергоэффективные и долговечные системы с LED-технологией.",
      fullDescription: "Передовые системы освещения, используемые в аэропортах. Энергоэффективные, долговечные и надежные решения. Системы оптимизированы для дневных и ночных операций. Разработаны и реализованы в соответствии с международными стандартами.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Современная технология на основе LED",
        "Энергосбережение и устойчивость",
        "Автоматические системы управления",
        "Соответствие международным стандартам",
        "Надежность работы 24/7"
      ],
      status: "Активен",
      technicalSpecs: {
        "Потребление энергии": "50-200Вт",
        "Срок службы": "50,000+ часов",
        "Цветовая температура": "4000K-6000K",
        "Класс защиты IP": "IP65",
        "Рабочая температура": "-40°C до +60°C",
        "Стандарты": "ICAO Annex 14, FAA AC 150/5345-46"
      },
      reviews: [
        {
          id: 1,
          author: "Мехмет Йылмаз",
          rating: 5,
          comment: "Отличная система. Сэкономила энергию и снизила затраты на обслуживание.",
          date: "2024-01-15"
        },
        {
          id: 2,
          author: "Айше Демир",
          rating: 5,
          comment: "Полностью соответствует международным стандартам. Очень довольны.",
          date: "2024-02-20"
        }
      ]
    },
    2: {
      name: "Военный симулятор танка",
      category: "Военная симуляция",
      description: "Передовые симуляторы военных транспортных средств. Реалистичный физический движок и многоканальная визуальная система.",
      fullDescription: "Реалистичные и высокоточные системы симуляции военных транспортных средств. Профессиональные решения, используемые для обучения и планирования операций. Полностью интегрированные панели управления и наблюдения. Оснащены реалистичным физическим движком, многоканальной визуальной системой и платформой движения.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Реалистичный физический движок",
        "Многоканальная визуальная система",
        "Платформа движения",
        "Станции наблюдения",
        "Сценарии на базе ИИ"
      ],
      status: "Активен",
      technicalSpecs: {
        "Поле зрения": "360°",
        "Разрешение": "4K на канал",
        "Платформа движения": "6 степеней свободы",
        "Физический движок": "В реальном времени",
        "Сценарии ИИ": "100+",
        "Одновременные пользователи": "1-4 человека"
      },
      reviews: [
        {
          id: 1,
          author: "Али Кая",
          rating: 5,
          comment: "Значительно улучшило качество обучения. Реалистичный опыт симуляции.",
          date: "2024-03-10"
        }
      ]
    },
    3: {
      name: "Гражданский авиасимулятор",
      category: "Гражданская симуляция",
      description: "Авиасимуляторы для обучения пилотов. Сертифицированный профессиональный симулятор FSTD.",
      fullDescription: "Профессиональные симуляторы для обучения пилотов гражданской авиации. Полностью возобновляемая конструкция компонентов и передовая модель аэродинамики. Сертифицированные системы FSTD с реалистичной приборной панелью, системой движения и полностью интегрированной структурой управления.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Сертифицирован FSTD",
        "Реалистичная приборная панель",
        "Система движения",
        "Техническая поддержка",
        "Возобновляемые компоненты"
      ],
      status: "Активен",
      technicalSpecs: {
        "Сертификация": "FSTD Level D",
        "Визуальная система": "180° x 40°",
        "Система движения": "6 степеней свободы",
        "Модели самолетов": "10+",
        "Аэродинамика": "В реальном времени",
        "Приборная панель": "Полностью функциональна"
      },
      reviews: [
        {
          id: 1,
          author: "Пилот Ахмет Шахин",
          rating: 5,
          comment: "Сертифицированная система FSTD очень близка к реальному опыту полета. Отличный инструмент для обучения.",
          date: "2024-01-25"
        },
        {
          id: 2,
          author: "Менеджер по обучению Зейнеп Оз",
          rating: 5,
          comment: "Используем в наших программах обучения пилотов. Очень успешные результаты.",
          date: "2024-02-14"
        }
      ]
    },
    4: {
      name: "Электронная система управления",
      category: "Производство электроники",
      description: "Проектирование и производство многоканальной электронной системы управления. Соответствует стандартам оборонной промышленности.",
      fullDescription: "Проектирование, прототипирование и массовое производство специальных электронных продуктов для оборонного и авиационного секторов. Производство осуществляется с высочайшими стандартами качества. Проектирование и производство многоканальной электронной системы управления. Соответствует стандартам оборонной промышленности, протестировано и одобрено.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Индивидуальный дизайн",
        "Контроль качества",
        "Массовое производство",
        "Техническая поддержка",
        "Точная инженерия"
      ],
      status: "Активен",
      technicalSpecs: {
        "Количество каналов": "8-64",
        "Процессор": "ARM Cortex-A78",
        "Рабочее напряжение": "12В-48В постоянного тока",
        "Рабочая температура": "-55°C до +85°C",
        "Стандарты": "MIL-STD-810G, DO-160",
        "Интерфейс": "CAN, RS485, Ethernet"
      },
      reviews: [
        {
          id: 1,
          author: "Инженер Джан Арслан",
          rating: 5,
          comment: "Используем в наших оборонных проектах. Очень надежная и долговечная система.",
          date: "2024-02-05"
        }
      ]
    },
    5: {
      name: "Система обучения авиасимулятору",
      category: "Гражданская симуляция",
      description: "Сертифицированный авиасимулятор FSTD. Используется для программ обучения пилотов.",
      fullDescription: "Сертифицированный авиасимулятор FSTD. С реалистичной приборной панелью, системой движения и полностью интегрированной структурой управления. Используется для программ обучения пилотов. Обеспечивается полная иммерсивная среда обучения.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Сертифицирован FSTD",
        "Реалистичная приборная панель",
        "Система движения",
        "Полностью интегрированное управление",
        "Программы обучения"
      ],
      status: "Активен",
      technicalSpecs: {
        "Сертификация": "FSTD Level C/D",
        "Визуальное разрешение": "1920x1080 на экран",
        "Система движения": "6 степеней свободы электрогидравлическая",
        "Сценарии обучения": "500+",
        "Воздушное движение": "В реальном времени",
        "Погода": "Динамическая"
      },
      reviews: [
        {
          id: 1,
          author: "Координатор обучения Фатма Йылдыз",
          rating: 5,
          comment: "Используем в нашем обучении пилотов. Очень эффективный инструмент обучения.",
          date: "2024-03-01"
        }
      ]
    },
    6: {
      name: "Производственная линия электронных компонентов",
      category: "Производство электроники",
      description: "Современное производственное предприятие для высокотехнологичных электронных компонентов.",
      fullDescription: "Производственное предприятие BARSAV специально разработано для производства точных электронных компонентов. Контроль качества обеспечивается полностью автоматической системой управления. Предприятие имеет производственную мощность 50,000+ компонентов в год.",
      price: "Свяжитесь с нами для получения ценового предложения",
      features: [
        "Автоматические производственные линии",
        "Точный контроль качества",
        "Высокая мощность",
        "Сертификаты ISO",
        "Экологически чистое производство"
      ],
      status: "Активен",
      technicalSpecs: {
        "Производственная мощность": "50,000+ компонентов/год",
        "Уровень автоматизации": "95%",
        "Контроль качества": "100% тестирование",
        "Сертификаты": "ISO 9001, ISO 14001",
        "Чистое помещение": "ISO 7 (Класс 10,000)",
        "Рабочая зона": "2,500 м²"
      },
      reviews: [
        {
          id: 1,
          author: "Менеджер по производству Серкан Доган",
          rating: 5,
          comment: "Современная и эффективная производственная линия. Соответствует нашим стандартам качества.",
          date: "2024-01-10"
        }
      ]
    }
  },
  de: {
    1: {
      name: "Flughafen-LED-Beleuchtungssystem",
      category: "Flughafenbeleuchtung",
      description: "Professionelle Flughafenbeleuchtungslösungen. Energieeffiziente und langlebige Systeme mit LED-Technologie.",
      fullDescription: "Fortgeschrittene Beleuchtungssysteme, die in Flughäfen verwendet werden. Energieeffiziente, langlebige und zuverlässige Lösungen. Systeme optimiert für Tag- und Nachtbetrieb. Entworfen und implementiert in Übereinstimmung mit internationalen Standards.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "Moderne Technologie auf LED-Basis",
        "Energieeinsparung und Nachhaltigkeit",
        "Automatische Steuerungssysteme",
        "Konform mit internationalen Standards",
        "Betriebszuverlässigkeit 24/7"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Stromverbrauch": "50-200W",
        "Lebensdauer": "50,000+ Stunden",
        "Farbtemperatur": "4000K-6000K",
        "IP-Schutzklasse": "IP65",
        "Betriebstemperatur": "-40°C bis +60°C",
        "Standards": "ICAO Annex 14, FAA AC 150/5345-46"
      },
      reviews: [
        {
          id: 1,
          author: "Mehmet Yilmaz",
          rating: 5,
          comment: "Ausgezeichnetes System. Energie gespart und Wartungskosten reduziert.",
          date: "2024-01-15"
        },
        {
          id: 2,
          author: "Ayse Demir",
          rating: 5,
          comment: "Vollständig konform mit internationalen Standards. Sehr zufrieden.",
          date: "2024-02-20"
        }
      ]
    },
    2: {
      name: "Militärischer Panzersimulator",
      category: "Militärische Simulation",
      description: "Fortgeschrittene militärische Fahrzeugsimulationen. Realistische Physik-Engine und Mehrkanal-Visualsystem.",
      fullDescription: "Realistische und hochpräzise militärische Fahrzeugsimulationssysteme. Professionelle Lösungen für Training und Operationsplanung. Vollständig integrierte Steuerungs- und Beobachterpanels. Ausgestattet mit realistischer Physik-Engine, Mehrkanal-Visualsystem und Bewegungsplattform.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "Realistische Physik-Engine",
        "Mehrkanal-Visualsystem",
        "Bewegungsplattform",
        "Beobachterstationen",
        "KI-gestützte Szenarien"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Sichtfeld": "360°",
        "Auflösung": "4K pro Kanal",
        "Bewegungsplattform": "6 Freiheitsgrade",
        "Physik-Engine": "Echtzeit",
        "KI-Szenarien": "100+",
        "Gleichzeitige Benutzer": "1-4 Personen"
      },
      reviews: [
        {
          id: 1,
          author: "Ali Kaya",
          rating: 5,
          comment: "Trainingsqualität erheblich verbessert. Realistische Simulationserfahrung.",
          date: "2024-03-10"
        }
      ]
    },
    3: {
      name: "Ziviler Flugzeugsimulator",
      category: "Zivile Simulation",
      description: "Flugzeugsimulationen für Pilotenausbildung. FSTD-zertifizierter professioneller Simulator.",
      fullDescription: "Professionelle Pilotenausbildungssimulatoren für die zivile Luftfahrt. Vollständig erneuerbare Komponentenkonstruktion und fortgeschrittenes Aerodynamikmodell. FSTD-zertifizierte Systeme mit realistischer Instrumententafel, Bewegungssystem und vollständig integrierter Steuerungsstruktur.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "FSTD-zertifiziert",
        "Realistische Instrumententafel",
        "Bewegungssystem",
        "Technischer Support",
        "Erneuerbare Komponenten"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Zertifizierung": "FSTD Level D",
        "Visualsystem": "180° x 40°",
        "Bewegungssystem": "6 Freiheitsgrade",
        "Flugzeugmodelle": "10+",
        "Aerodynamik": "Echtzeit",
        "Instrumententafel": "Vollständig funktionsfähig"
      },
      reviews: [
        {
          id: 1,
          author: "Pilot Ahmet Sahin",
          rating: 5,
          comment: "FSTD-zertifiziertes System ist dem echten Flugerlebnis sehr nahe. Ausgezeichnetes Trainingswerkzeug.",
          date: "2024-01-25"
        },
        {
          id: 2,
          author: "Ausbildungsmanagerin Zeynep Oz",
          rating: 5,
          comment: "Wir verwenden es in unseren Pilotenausbildungsprogrammen. Sehr erfolgreiche Ergebnisse.",
          date: "2024-02-14"
        }
      ]
    },
    4: {
      name: "Elektronisches Steuerungssystem",
      category: "Elektronikfertigung",
      description: "Design und Fertigung eines Mehrkanal-Elektroniksteuerungssystems. Konform mit Verteidigungsindustriestandards.",
      fullDescription: "Design, Prototyping und Massenproduktion spezieller elektronischer Produkte für Verteidigungs- und Luftfahrtsektoren. Die Produktion erfolgt mit höchsten Qualitätsstandards. Design und Fertigung eines Mehrkanal-Elektroniksteuerungssystems. Konform mit Verteidigungsindustriestandards, getestet und genehmigt.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "Individuelles Design",
        "Qualitätskontrolle",
        "Massenproduktion",
        "Technischer Support",
        "Präzisionsingenieurwesen"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Kanalanzahl": "8-64",
        "Prozessor": "ARM Cortex-A78",
        "Betriebsspannung": "12V-48V Gleichstrom",
        "Betriebstemperatur": "-55°C bis +85°C",
        "Standards": "MIL-STD-810G, DO-160",
        "Schnittstelle": "CAN, RS485, Ethernet"
      },
      reviews: [
        {
          id: 1,
          author: "Ingenieur Can Arslan",
          rating: 5,
          comment: "Wir verwenden es in unseren Verteidigungsprojekten. Sehr zuverlässiges und langlebiges System.",
          date: "2024-02-05"
        }
      ]
    },
    5: {
      name: "Luftfahrtsimulator-Trainingssystem",
      category: "Zivile Simulation",
      description: "FSTD-zertifizierter Luftfahrtsimulator. Verwendet für Pilotenausbildungsprogramme.",
      fullDescription: "FSTD-zertifizierter Luftfahrtsimulator. Mit realistischer Instrumententafel, Bewegungssystem und vollständig integrierter Steuerungsstruktur. Verwendet für Pilotenausbildungsprogramme. Vollständige immersive Trainingsumgebung wird bereitgestellt.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "FSTD-zertifiziert",
        "Realistische Instrumententafel",
        "Bewegungssystem",
        "Vollständig integrierte Steuerung",
        "Ausbildungsprogramme"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Zertifizierung": "FSTD Level C/D",
        "Visuelle Auflösung": "1920x1080 pro Bildschirm",
        "Bewegungssystem": "6 Freiheitsgrade elektrohydraulisch",
        "Trainingsszenarien": "500+",
        "Luftverkehr": "Echtzeit",
        "Wetter": "Dynamisch"
      },
      reviews: [
        {
          id: 1,
          author: "Ausbildungskoordinatorin Fatma Yildiz",
          rating: 5,
          comment: "Wir verwenden es in unserer Pilotenausbildung. Sehr effektives Trainingswerkzeug.",
          date: "2024-03-01"
        }
      ]
    },
    6: {
      name: "Elektronikkomponenten-Produktionslinie",
      category: "Elektronikfertigung",
      description: "Moderne Produktionsanlage für Hightech-Elektronikkomponenten.",
      fullDescription: "Die Produktionsanlage BARSAV ist speziell für die Produktion präziser Elektronikkomponenten entwickelt. Qualitätskontrolle wird durch vollautomatisches Managementsystem gewährleistet. Die Anlage hat eine Produktionskapazität von 50,000+ Komponenten pro Jahr.",
      price: "Kontaktieren Sie uns für ein Preisangebot",
      features: [
        "Automatische Produktionslinien",
        "Präzise Qualitätskontrolle",
        "Hohe Kapazität",
        "ISO-Zertifizierungen",
        "Umweltfreundliche Produktion"
      ],
      status: "Aktiv",
      technicalSpecs: {
        "Produktionskapazität": "50,000+ Komponenten/Jahr",
        "Automatisierungsgrad": "95%",
        "Qualitätskontrolle": "100% Test",
        "Zertifizierungen": "ISO 9001, ISO 14001",
        "Reinraum": "ISO 7 (Klasse 10,000)",
        "Arbeitsbereich": "2,500 m²"
      },
      reviews: [
        {
          id: 1,
          author: "Produktionsmanager Serkan Dogan",
          rating: 5,
          comment: "Moderne und effiziente Produktionslinie. Erfüllt unsere Qualitätsstandards.",
          date: "2024-01-10"
        }
      ]
    }
  }
}

// Ürün verilerini dil desteği ile getir
export function getLocalizedProducts(lang: Language) {
  switch (lang) {
    case "tr":
      return productsDataTr.products
    case "en":
      return productsDataEn.products
    case "ru":
      return productsDataRu.products
    case "de":
      return productsDataDe.products
    default:
      return productsDataTr.products
  }
}

// Tek bir ürünü dil desteği ile getir
export function getLocalizedProduct(productId: number, lang: Language) {
  const products = getLocalizedProducts(lang)
  return products.find((p: any) => p.id === productId) || null
}

// Services çevirileri
const serviceTranslations: Record<Language, Record<number, any>> = {
  tr: {},
  en: {
    1: {
      title: "Airport Lighting",
      shortDescription: "Effective and safe lighting of aerodromes with state-of-the-art LED systems",
      fullDescription: "BARSAV's airport lighting systems are designed and implemented in accordance with international standards. High efficiency and energy savings are achieved using LED technology. The system guarantees the highest visibility quality even at night and in weather conditions.",
      features: [
        "LED-based modern technology",
        "Energy savings and sustainability",
        "Automatic control systems",
        "Compliant with international standards",
        "24/7 operational reliability"
      ]
    },
    2: {
      title: "Electronic Systems",
      shortDescription: "High-performance electronic components and control systems",
      fullDescription: "BARSAV electronics division produces high-performance control systems for military and civil applications. Every product is delivered to the highest standards with precision engineering and quality control. Customization is available according to special requirements.",
      features: [
        "Custom design and development",
        "High reliability and durability",
        "Precision quality control",
        "Rapid prototyping and testing",
        "Full technical support"
      ]
    },
    3: {
      title: "Vehicle Simulations",
      shortDescription: "Advanced simulation and training platforms for military and civil vehicles",
      fullDescription: "BARSAV's simulation systems provide realistic and fully controlled environments for pilot and operator training. Effectiveness is maximized with high-fidelity graphics and AI-powered scenarios. The system minimizes training costs by providing a real vehicle simulation experience.",
      features: [
        "High-fidelity graphics",
        "Realistic physics engines",
        "AI-powered scenarios",
        "Multi-player training support",
        "International certification"
      ]
    },
    4: {
      title: "Electronics Manufacturing",
      shortDescription: "Modern production facilities and control systems compliant with ISO standards",
      fullDescription: "BARSAV production facilities are equipped with the most modern technologies and quality control systems. Quality and environmental standards are met with ISO 9001 and ISO 14001 certifications. Large-scale projects are carried out with high-capacity production lines.",
      features: [
        "ISO certifications",
        "Automatic production lines",
        "Precision quality control",
        "Environmentally friendly production",
        "Flexible and fast production capacity"
      ]
    }
  },
  ru: {
    1: {
      title: "Аэропортовое освещение",
      shortDescription: "Эффективное и безопасное освещение аэродромов с помощью современных LED-систем",
      fullDescription: "Системы освещения аэропортов BARSAV разработаны и реализованы в соответствии с международными стандартами. Высокая эффективность и экономия энергии достигаются с использованием LED-технологии. Система гарантирует высочайшее качество видимости даже ночью и в погодных условиях.",
      features: [
        "Современная технология на основе LED",
        "Энергосбережение и устойчивость",
        "Автоматические системы управления",
        "Соответствие международным стандартам",
        "Надежность работы 24/7"
      ]
    },
    2: {
      title: "Электронные системы",
      shortDescription: "Высокопроизводительные электронные компоненты и системы управления",
      fullDescription: "Подразделение электроники BARSAV производит высокопроизводительные системы управления для военных и гражданских применений. Каждый продукт поставляется в соответствии с высочайшими стандартами с точной инженерией и контролем качества. Доступна кастомизация в соответствии с особыми требованиями.",
      features: [
        "Индивидуальный дизайн и разработка",
        "Высокая надежность и долговечность",
        "Точный контроль качества",
        "Быстрое прототипирование и тестирование",
        "Полная техническая поддержка"
      ]
    },
    3: {
      title: "Симуляторы транспортных средств",
      shortDescription: "Передовые платформы симуляции и обучения для военных и гражданских транспортных средств",
      fullDescription: "Системы симуляции BARSAV обеспечивают реалистичные и полностью контролируемые среды для обучения пилотов и операторов. Эффективность максимизируется с помощью высококачественной графики и сценариев на базе ИИ. Система минимизирует затраты на обучение, предоставляя опыт симуляции реального транспортного средства.",
      features: [
        "Высококачественная графика",
        "Реалистичные физические движки",
        "Сценарии на базе ИИ",
        "Поддержка многопользовательского обучения",
        "Международная сертификация"
      ]
    },
    4: {
      title: "Производство электроники",
      shortDescription: "Современные производственные объекты и системы управления, соответствующие стандартам ISO",
      fullDescription: "Производственные объекты BARSAV оснащены самыми современными технологиями и системами контроля качества. Стандарты качества и окружающей среды соблюдаются с сертификатами ISO 9001 и ISO 14001. Крупномасштабные проекты выполняются с производственными линиями высокой мощности.",
      features: [
        "Сертификаты ISO",
        "Автоматические производственные линии",
        "Точный контроль качества",
        "Экологически чистое производство",
        "Гибкая и быстрая производственная мощность"
      ]
    }
  },
  de: {
    1: {
      title: "Flughafenbeleuchtung",
      shortDescription: "Effektive und sichere Beleuchtung von Flugplätzen mit modernsten LED-Systemen",
      fullDescription: "Die Flughafenbeleuchtungssysteme von BARSAV sind in Übereinstimmung mit internationalen Standards entwickelt und implementiert. Hohe Effizienz und Energieeinsparungen werden durch den Einsatz von LED-Technologie erreicht. Das System garantiert höchste Sichtqualität auch bei Nacht und bei Wetterbedingungen.",
      features: [
        "Moderne Technologie auf LED-Basis",
        "Energieeinsparung und Nachhaltigkeit",
        "Automatische Steuerungssysteme",
        "Konform mit internationalen Standards",
        "Betriebszuverlässigkeit 24/7"
      ]
    },
    2: {
      title: "Elektronische Systeme",
      shortDescription: "Hochleistungselektronikkomponenten und Steuerungssysteme",
      fullDescription: "Die Elektronikabteilung von BARSAV produziert hochleistungsfähige Steuerungssysteme für militärische und zivile Anwendungen. Jedes Produkt wird nach höchsten Standards mit Präzisionsingenieurwesen und Qualitätskontrolle geliefert. Anpassung ist nach besonderen Anforderungen verfügbar.",
      features: [
        "Individuelles Design und Entwicklung",
        "Hohe Zuverlässigkeit und Haltbarkeit",
        "Präzise Qualitätskontrolle",
        "Schnelles Prototyping und Testing",
        "Vollständige technische Unterstützung"
      ]
    },
    3: {
      title: "Fahrzeugsimulationen",
      shortDescription: "Fortgeschrittene Simulations- und Trainingsplattformen für militärische und zivile Fahrzeuge",
      fullDescription: "Die Simulationssysteme von BARSAV bieten realistische und vollständig kontrollierte Umgebungen für Pilot- und Operatortraining. Die Effektivität wird mit hochwertiger Grafik und KI-gestützten Szenarien maximiert. Das System minimiert Trainingskosten, indem es eine echte Fahrzeugsimulationserfahrung bietet.",
      features: [
        "Hochwertige Grafik",
        "Realistische Physik-Engines",
        "KI-gestützte Szenarien",
        "Multi-Player-Trainingsunterstützung",
        "Internationale Zertifizierung"
      ]
    },
    4: {
      title: "Elektronikfertigung",
      shortDescription: "Moderne Produktionsanlagen und Steuerungssysteme, die ISO-Standards entsprechen",
      fullDescription: "Die Produktionsanlagen von BARSAV sind mit modernsten Technologien und Qualitätskontrollsystemen ausgestattet. Qualitäts- und Umweltstandards werden mit ISO 9001- und ISO 14001-Zertifizierungen erfüllt. Großprojekte werden mit Hochleistungsproduktionslinien durchgeführt.",
      features: [
        "ISO-Zertifizierungen",
        "Automatische Produktionslinien",
        "Präzise Qualitätskontrolle",
        "Umweltfreundliche Produktion",
        "Flexible und schnelle Produktionskapazität"
      ]
    }
  }
}

// Projects çevirileri
const projectTranslations: Record<Language, Record<number, any>> = {
  tr: {},
  en: {
    1: {
      title: "Airport LED Lighting Project",
      category: "Airport Lighting",
      fullDescription: "LED lighting system project for one of Turkey's largest airports. Systems optimized for approach, landing and runway safety.",
      status: "Completed",
      client: "Leading Airport Operator"
    },
    2: {
      title: "Military Tank Simulator System",
      category: "Military Simulation",
      fullDescription: "Advanced tank simulator system. Equipped with realistic physics engine, multi-channel visual system and motion platform. Used for training and operation planning.",
      status: "Completed",
      client: "Turkish Armed Forces"
    },
    3: {
      title: "Electronic Control System",
      category: "Electronics Manufacturing",
      fullDescription: "Multi-channel electronic control system design and manufacturing. Compliant with defense industry standards, tested and approved.",
      status: "Ongoing",
      client: "Defense Contractor"
    },
    4: {
      title: "Aviation Simulator Training System",
      category: "Civil Simulation",
      fullDescription: "FSTD certified aviation simulator. With realistic instrument panel, motion system and fully integrated control structure. Used for pilot training programs.",
      status: "Completed",
      client: "Aviation Training Center"
    }
  },
  ru: {
    1: {
      title: "Проект LED-освещения аэропорта",
      category: "Аэропортовое освещение",
      fullDescription: "Проект системы LED-освещения для одного из крупнейших аэропортов Турции. Системы оптимизированы для безопасности захода на посадку, посадки и взлетно-посадочной полосы.",
      status: "Завершен",
      client: "Ведущий оператор аэропорта"
    },
    2: {
      title: "Система симулятора военного танка",
      category: "Военная симуляция",
      fullDescription: "Передовая система симулятора танка. Оснащена реалистичным физическим движком, многоканальной визуальной системой и платформой движения. Используется для обучения и планирования операций.",
      status: "Завершен",
      client: "Вооруженные силы Турции"
    },
    3: {
      title: "Электронная система управления",
      category: "Производство электроники",
      fullDescription: "Проектирование и производство многоканальной электронной системы управления. Соответствует стандартам оборонной промышленности, протестирована и одобрена.",
      status: "В процессе",
      client: "Оборонный подрядчик"
    },
    4: {
      title: "Система обучения авиационному симулятору",
      category: "Гражданская симуляция",
      fullDescription: "Сертифицированный FSTD авиационный симулятор. С реалистичной приборной панелью, системой движения и полностью интегрированной структурой управления. Используется для программ обучения пилотов.",
      status: "Завершен",
      client: "Центр авиационного обучения"
    }
  },
  de: {
    1: {
      title: "Flughafen-LED-Beleuchtungsprojekt",
      category: "Flughafenbeleuchtung",
      fullDescription: "LED-Beleuchtungssystemprojekt für einen der größten Flughäfen der Türkei. Systeme optimiert für Anflug-, Lande- und Startbahn-Sicherheit.",
      status: "Abgeschlossen",
      client: "Führender Flughafenbetreiber"
    },
    2: {
      title: "Militärisches Panzersimulatorsystem",
      category: "Militärische Simulation",
      fullDescription: "Fortgeschrittenes Panzersimulatorsystem. Ausgestattet mit realistischer Physik-Engine, Mehrkanal-Visualsystem und Bewegungsplattform. Verwendet für Training und Operationsplanung.",
      status: "Abgeschlossen",
      client: "Türkische Streitkräfte"
    },
    3: {
      title: "Elektronisches Steuerungssystem",
      category: "Elektronikfertigung",
      fullDescription: "Design und Fertigung eines Mehrkanal-Elektroniksteuerungssystems. Konform mit Verteidigungsindustriestandards, getestet und genehmigt.",
      status: "Laufend",
      client: "Verteidigungsunternehmer"
    },
    4: {
      title: "Luftfahrtsimulator-Trainingssystem",
      category: "Zivile Simulation",
      fullDescription: "FSTD-zertifizierter Luftfahrtsimulator. Mit realistischer Instrumententafel, Bewegungssystem und vollständig integrierter Steuerungsstruktur. Verwendet für Pilotenausbildungsprogramme.",
      status: "Abgeschlossen",
      client: "Luftfahrtausbildungszentrum"
    }
  }
}

// Services verilerini dil desteği ile getir
export function getLocalizedServices(lang: Language) {
  switch (lang) {
    case "tr":
      return servicesDataTr.services
    case "en":
      return servicesDataEn.services
    case "ru":
      return servicesDataRu.services
    case "de":
      return servicesDataDe.services
    default:
      return servicesDataTr.services
  }
}

// Projects verilerini dil desteği ile getir
export function getLocalizedProjects(lang: Language) {
  switch (lang) {
    case "tr":
      return projectsDataTr.projects
    case "en":
      return projectsDataEn.projects
    case "ru":
      return projectsDataRu.projects
    case "de":
      return projectsDataDe.projects
    default:
      return projectsDataTr.projects
  }
}

// Blog çevirileri - Artık kullanılmıyor, JSON dosyalarından çekiliyor

const blogTranslations: Record<Language, Record<number, any>> = {
  tr: {},
  en: {
    1: {
      title: "The Place of LED Technology in the Aviation Industry",
      date: "November 15, 2024",
      category: "Technology",
      excerpt: "The role and benefits of LED lighting systems in the modern aviation industry...",
      content: "LED technology has revolutionized the aviation industry. It offers many advantages from energy efficiency to reliability. Modern LED systems used in airports consume 60% less energy compared to traditional lighting solutions. At the same time, maintenance costs are significantly reduced due to their longer lifespan. These technologies provide significant benefits to airport operators by offering solutions optimized for day and night operations.",
      author: "BARSAV Technology Team"
    },
    2: {
      title: "Artificial Intelligence Applications in Military Simulators",
      date: "November 10, 2024",
      category: "Artificial Intelligence",
      excerpt: "The use and advances of artificial intelligence technology in military training simulators...",
      content: "Artificial intelligence applications in military simulators have significantly increased training quality and realism. Today, artificial intelligence in advanced military simulators can create realistic combat scenarios and provide adaptive training programs. This technology enables pilots and military personnel to receive more effective training, minimizing the margin of error before operations. AI-powered simulators can quickly adapt to various scenarios and provide real-time feedback.",
      author: "BARSAV R&D Team"
    },
    3: {
      title: "Quality Control Standards in Electronics Manufacturing",
      date: "November 5, 2024",
      category: "Manufacturing",
      excerpt: "Quality standards that must be applied in defense industry electronic products...",
      content: "Quality control standards for electronic products manufactured in the defense industry are very strict and comprehensive. These standards have been established to ensure the reliability and durability of products. BARSAV aims for the highest quality level by complying with international standards in all electronics manufacturing. Detailed tests and controls are carried out at every stage of production, and even the smallest deviation can stop the process. This meticulous approach guarantees that our products are long-lasting and reliable.",
      author: "BARSAV Quality Team"
    },
    4: {
      title: "Cybersecurity in Defense Industry",
      date: "November 1, 2024",
      category: "Security",
      excerpt: "The importance of cybersecurity in modern defense systems and measures to be taken...",
      content: "Cybersecurity in the defense industry is a matter of critical importance. With the digitization of military systems, cyber threats have also increased. BARSAV applies the highest level of cybersecurity standards in all its products. We protect our systems with multi-layered security protocols, continuous monitoring systems and regular security tests.",
      author: "BARSAV Security Team"
    },
    5: {
      title: "Next Generation Simulator Technologies",
      date: "October 28, 2024",
      category: "Innovation",
      excerpt: "The use of virtual reality and augmented reality technologies in military training...",
      content: "Next generation simulator technologies are completely transforming military training. Thanks to VR and AR technologies, personnel can receive training in conditions much closer to real combat environments. These technologies significantly increase training quality while reducing training costs. As BARSAV, we follow the latest developments in this field and integrate them into our products.",
      author: "BARSAV Innovation Team"
    }
  },
  ru: {
    1: {
      title: "Место LED-технологии в авиационной промышленности",
      date: "15 ноября 2024",
      category: "Технология",
      excerpt: "Роль и преимущества систем LED-освещения в современной авиационной промышленности...",
      content: "LED-технология произвела революцию в авиационной промышленности. Она предлагает множество преимуществ от энергоэффективности до надежности. Современные LED-системы, используемые в аэропортах, потребляют на 60% меньше энергии по сравнению с традиционными решениями освещения. В то же время затраты на обслуживание значительно снижаются благодаря их более длительному сроку службы. Эти технологии предоставляют значительные преимущества операторам аэропортов, предлагая решения, оптимизированные для дневных и ночных операций.",
      author: "Команда BARSAV Technology"
    },
    2: {
      title: "Применение искусственного интеллекта в военных симуляторах",
      date: "10 ноября 2024",
      category: "Искусственный интеллект",
      excerpt: "Использование и достижения технологии искусственного интеллекта в военных учебных симуляторах...",
      content: "Применение искусственного интеллекта в военных симуляторах значительно повысило качество и реалистичность обучения. Сегодня искусственный интеллект в передовых военных симуляторах может создавать реалистичные боевые сценарии и предоставлять адаптивные программы обучения. Эта технология позволяет пилотам и военному персоналу получать более эффективное обучение, минимизируя вероятность ошибок перед операциями. Симуляторы на базе ИИ могут быстро адаптироваться к различным сценариям и предоставлять обратную связь в реальном времени.",
      author: "Команда BARSAV R&D"
    },
    3: {
      title: "Стандарты контроля качества в производстве электроники",
      date: "5 ноября 2024",
      category: "Производство",
      excerpt: "Стандарты качества, которые должны применяться в электронных продуктах оборонной промышленности...",
      content: "Стандарты контроля качества для электронных продуктов, производимых в оборонной промышленности, очень строгие и всеобъемлющие. Эти стандарты были установлены для обеспечения надежности и долговечности продуктов. BARSAV стремится к высочайшему уровню качества, соблюдая международные стандарты во всем производстве электроники. Подробные тесты и проверки проводятся на каждом этапе производства, и даже малейшее отклонение может остановить процесс. Этот тщательный подход гарантирует, что наши продукты долговечны и надежны.",
      author: "Команда BARSAV Quality"
    },
    4: {
      title: "Кибербезопасность в оборонной промышленности",
      date: "1 ноября 2024",
      category: "Безопасность",
      excerpt: "Важность кибербезопасности в современных оборонных системах и меры, которые необходимо принять...",
      content: "Кибербезопасность в оборонной промышленности имеет критическое значение. С оцифровкой военных систем киберугрозы также возросли. BARSAV применяет высочайшие стандарты кибербезопасности во всех своих продуктах. Мы защищаем наши системы многоуровневыми протоколами безопасности, системами непрерывного мониторинга и регулярными тестами безопасности.",
      author: "Команда BARSAV Security"
    },
    5: {
      title: "Технологии симуляторов следующего поколения",
      date: "28 октября 2024",
      category: "Инновации",
      excerpt: "Использование технологий виртуальной и дополненной реальности в военном обучении...",
      content: "Технологии симуляторов следующего поколения полностью преобразуют военное обучение. Благодаря технологиям VR и AR персонал может получать обучение в условиях, гораздо более близких к реальным боевым средам. Эти технологии значительно повышают качество обучения, одновременно снижая затраты на обучение. Как BARSAV, мы следим за последними разработками в этой области и интегрируем их в наши продукты.",
      author: "Команда BARSAV Innovation"
    }
  },
  de: {
    1: {
      title: "Der Platz der LED-Technologie in der Luftfahrtindustrie",
      date: "15. November 2024",
      category: "Technologie",
      excerpt: "Die Rolle und Vorteile von LED-Beleuchtungssystemen in der modernen Luftfahrtindustrie...",
      content: "LED-Technologie hat die Luftfahrtindustrie revolutioniert. Sie bietet viele Vorteile von Energieeffizienz bis Zuverlässigkeit. Moderne LED-Systeme, die in Flughäfen verwendet werden, verbrauchen 60% weniger Energie im Vergleich zu herkömmlichen Beleuchtungslösungen. Gleichzeitig werden die Wartungskosten aufgrund ihrer längeren Lebensdauer erheblich reduziert. Diese Technologien bieten erhebliche Vorteile für Flughafenbetreiber, indem sie Lösungen bieten, die für Tag- und Nachtbetrieb optimiert sind.",
      author: "BARSAV Technology Team"
    },
    2: {
      title: "Künstliche Intelligenz-Anwendungen in militärischen Simulatoren",
      date: "10. November 2024",
      category: "Künstliche Intelligenz",
      excerpt: "Die Verwendung und Fortschritte der Künstlichen Intelligenz-Technologie in militärischen Trainingssimulatoren...",
      content: "Künstliche Intelligenz-Anwendungen in militärischen Simulatoren haben die Trainingsqualität und Realismus erheblich erhöht. Heute kann künstliche Intelligenz in fortschrittlichen militärischen Simulatoren realistische Kampfszenarien erstellen und adaptive Trainingsprogramme bereitstellen. Diese Technologie ermöglicht es Piloten und militärischem Personal, effektiveres Training zu erhalten und die Fehlerquote vor Operationen zu minimieren. KI-gestützte Simulatoren können sich schnell an verschiedene Szenarien anpassen und Echtzeit-Feedback liefern.",
      author: "BARSAV R&D Team"
    },
    3: {
      title: "Qualitätskontrollstandards in der Elektronikfertigung",
      date: "5. November 2024",
      category: "Fertigung",
      excerpt: "Qualitätsstandards, die in elektronischen Produkten der Verteidigungsindustrie angewendet werden müssen...",
      content: "Qualitätskontrollstandards für elektronische Produkte, die in der Verteidigungsindustrie hergestellt werden, sind sehr streng und umfassend. Diese Standards wurden festgelegt, um die Zuverlässigkeit und Haltbarkeit der Produkte sicherzustellen. BARSAV strebt das höchste Qualitätsniveau an, indem es internationale Standards in der gesamten Elektronikfertigung einhält. Detaillierte Tests und Kontrollen werden in jeder Produktionsphase durchgeführt, und selbst die kleinste Abweichung kann den Prozess stoppen. Dieser sorgfältige Ansatz garantiert, dass unsere Produkte langlebig und zuverlässig sind.",
      author: "BARSAV Quality Team"
    },
    4: {
      title: "Cybersicherheit in der Verteidigungsindustrie",
      date: "1. November 2024",
      category: "Sicherheit",
      excerpt: "Die Bedeutung der Cybersicherheit in modernen Verteidigungssystemen und zu ergreifende Maßnahmen...",
      content: "Cybersicherheit in der Verteidigungsindustrie ist von entscheidender Bedeutung. Mit der Digitalisierung militärischer Systeme haben auch Cyber-Bedrohungen zugenommen. BARSAV wendet die höchsten Cybersicherheitsstandards in allen seinen Produkten an. Wir schützen unsere Systeme mit mehrschichtigen Sicherheitsprotokollen, kontinuierlichen Überwachungssystemen und regelmäßigen Sicherheitstests.",
      author: "BARSAV Security Team"
    },
    5: {
      title: "Simulatortechnologien der nächsten Generation",
      date: "28. Oktober 2024",
      category: "Innovation",
      excerpt: "Die Verwendung von Virtual Reality und Augmented Reality Technologien im militärischen Training...",
      content: "Simulatortechnologien der nächsten Generation transformieren das militärische Training vollständig. Dank VR- und AR-Technologien kann Personal unter Bedingungen trainieren, die viel näher an realen Kampfumgebungen liegen. Diese Technologien erhöhen die Trainingsqualität erheblich und senken gleichzeitig die Trainingskosten. Als BARSAV verfolgen wir die neuesten Entwicklungen auf diesem Gebiet und integrieren sie in unsere Produkte.",
      author: "BARSAV Innovation Team"
    }
  }
}

// Blog verilerini dil desteği ile getir
export function getLocalizedBlogPosts(lang: Language) {
  switch (lang) {
    case "tr":
      return blogDataTr.posts
    case "en":
      return blogDataEn.posts
    case "ru":
      return blogDataRu.posts
    case "de":
      return blogDataDe.posts
    default:
      return blogDataTr.posts
  }
}

// About çevirileri
const aboutTranslations: Record<Language, any> = {
  tr: {},
  en: {
    title: "About",
    subtitle: "We provide innovative technology solutions in aviation, electronics and defense industry.",
    whoWeAre: "Who We Are?",
    description1: "BARSAV is an organization that has been developing and producing innovative technology solutions in aviation, electronics and defense industry since 1995. Working with leading companies in our country and the world, BARSAV has always prioritized quality and innovation.",
    description2: "BARSAV, which has a wide range of products from airport lighting systems to military and civil vehicle simulations, strives to keep customer satisfaction at the highest level.",
    description3: "We offer high-quality products using the latest technology in electronics manufacturing. Our company, which attaches great importance to R&D studies, continues to offer new and improved products continuously.",
    mission: "Mission",
    missionText: "To provide quality and reliable products and services that exceed customer expectations in aviation, electronics and defense industry. To contribute to the development of the industry by closely following technological innovations.",
    vision: "Vision",
    visionText: "To be one of the respected technology companies in the region and the world. To become an organization recognized and preferred in international markets with innovative products and services.",
    values: "Our Values",
    valuesList: [
      {
        title: "Quality",
        description: "We comply with the highest quality standards in every product and service.",
        icon: "Award"
      },
      {
        title: "Innovation",
        description: "We continuously research and develop new technologies.",
        icon: "Lightbulb"
      },
      {
        title: "Reliability",
        description: "We always strive to maintain our customers' trust in us.",
        icon: "Shield"
      },
      {
        title: "Collaboration",
        description: "We believe in teamwork and cooperation.",
        icon: "Users"
      },
      {
        title: "Responsibility",
        description: "We act responsibly towards the environment and society.",
        icon: "Building2"
      },
      {
        title: "Customer Satisfaction",
        description: "Customer satisfaction is the most important success criterion for us.",
        icon: "Heart"
      }
    ],
    team: "Our Experienced Team",
    teamDesc: "BARSAV's success is the result of the hard work and dedication of its team consisting of experts and experienced professionals in their fields.",
    statistics: [
      {
        value: "500+",
        label: "Employees"
      },
      {
        value: "25+",
        label: "Years Experience"
      },
      {
        value: "100+",
        label: "Projects"
      }
    ]
  },
  ru: {
    title: "О нас",
    subtitle: "Мы предоставляем инновационные технологические решения в области авиации, электроники и оборонной промышленности.",
    whoWeAre: "Кто мы?",
    description1: "BARSAV - это организация, которая с 1995 года разрабатывает и производит инновационные технологические решения в области авиации, электроники и оборонной промышленности. Работая с ведущими компаниями нашей страны и мира, BARSAV всегда ставил качество и инновации на первое место.",
    description2: "BARSAV, имеющий широкий спектр продуктов от систем освещения аэропортов до военных и гражданских симуляторов транспортных средств, стремится поддерживать удовлетворенность клиентов на самом высоком уровне.",
    description3: "Мы предлагаем высококачественную продукцию, используя новейшие технологии в производстве электроники. Наша компания, придающая большое значение исследованиям и разработкам, продолжает постоянно предлагать новые и улучшенные продукты.",
    mission: "Миссия",
    missionText: "Предоставлять качественные и надежные продукты и услуги, превышающие ожидания клиентов в области авиации, электроники и оборонной промышленности. Вносить вклад в развитие отрасли, внимательно следя за технологическими инновациями.",
    vision: "Видение",
    visionText: "Быть одной из уважаемых технологических компаний в регионе и мире. Стать организацией, признанной и предпочитаемой на международных рынках благодаря инновационным продуктам и услугам.",
    values: "Наши ценности",
    valuesList: [
      {
        title: "Качество",
        description: "Мы соблюдаем самые высокие стандарты качества в каждом продукте и услуге.",
        icon: "Award"
      },
      {
        title: "Инновации",
        description: "Мы постоянно исследуем и разрабатываем новые технологии.",
        icon: "Lightbulb"
      },
      {
        title: "Надежность",
        description: "Мы всегда стремимся поддерживать доверие наших клиентов к нам.",
        icon: "Shield"
      },
      {
        title: "Сотрудничество",
        description: "Мы верим в командную работу и сотрудничество.",
        icon: "Users"
      },
      {
        title: "Ответственность",
        description: "Мы действуем ответственно по отношению к окружающей среде и обществу.",
        icon: "Building2"
      },
      {
        title: "Удовлетворенность клиентов",
        description: "Удовлетворенность клиентов является для нас самым важным критерием успеха.",
        icon: "Heart"
      }
    ],
    team: "Наша опытная команда",
    teamDesc: "Успех BARSAV является результатом упорного труда и преданности его команды, состоящей из экспертов и опытных профессионалов в своих областях.",
    statistics: [
      {
        value: "500+",
        label: "Сотрудников"
      },
      {
        value: "25+",
        label: "Лет опыта"
      },
      {
        value: "100+",
        label: "Проектов"
      }
    ]
  },
  de: {
    title: "Über uns",
    subtitle: "Wir bieten innovative Technologielösungen in den Bereichen Luftfahrt, Elektronik und Verteidigungsindustrie.",
    whoWeAre: "Wer sind wir?",
    description1: "BARSAV ist eine Organisation, die seit 1995 innovative Technologielösungen in den Bereichen Luftfahrt, Elektronik und Verteidigungsindustrie entwickelt und produziert. Durch die Zusammenarbeit mit führenden Unternehmen unseres Landes und der Welt hat BARSAV Qualität und Innovation immer in den Vordergrund gestellt.",
    description2: "BARSAV, das ein breites Produktspektrum von Flughafenbeleuchtungssystemen bis hin zu militärischen und zivilen Fahrzeugsimulationen hat, bemüht sich, die Kundenzufriedenheit auf höchstem Niveau zu halten.",
    description3: "Wir bieten hochwertige Produkte unter Verwendung modernster Technologie in der Elektronikfertigung an. Unser Unternehmen, das Forschung und Entwicklung große Bedeutung beimisst, bietet kontinuierlich neue und verbesserte Produkte an.",
    mission: "Mission",
    missionText: "Qualitative und zuverlässige Produkte und Dienstleistungen anzubieten, die die Kundenerwartungen in den Bereichen Luftfahrt, Elektronik und Verteidigungsindustrie übertreffen. Durch die enge Verfolgung technologischer Innovationen zur Entwicklung der Industrie beizutragen.",
    vision: "Vision",
    visionText: "Eines der angesehenen Technologieunternehmen in der Region und der Welt zu sein. Eine Organisation zu werden, die auf internationalen Märkten mit innovativen Produkten und Dienstleistungen anerkannt und bevorzugt wird.",
    values: "Unsere Werte",
    valuesList: [
      {
        title: "Qualität",
        description: "Wir halten die höchsten Qualitätsstandards in jedem Produkt und jeder Dienstleistung ein.",
        icon: "Award"
      },
      {
        title: "Innovation",
        description: "Wir erforschen und entwickeln kontinuierlich neue Technologien.",
        icon: "Lightbulb"
      },
      {
        title: "Zuverlässigkeit",
        description: "Wir bemühen uns immer, das Vertrauen unserer Kunden in uns zu bewahren.",
        icon: "Shield"
      },
      {
        title: "Zusammenarbeit",
        description: "Wir glauben an Teamarbeit und Zusammenarbeit.",
        icon: "Users"
      },
      {
        title: "Verantwortung",
        description: "Wir handeln verantwortungsbewusst gegenüber Umwelt und Gesellschaft.",
        icon: "Building2"
      },
      {
        title: "Kundenzufriedenheit",
        description: "Kundenzufriedenheit ist für uns das wichtigste Erfolgskriterium.",
        icon: "Heart"
      }
    ],
    team: "Unser erfahrenes Team",
    teamDesc: "BARSAVs Erfolg ist das Ergebnis der harten Arbeit und Hingabe seines Teams, das aus Experten und erfahrenen Fachkräften in ihren Bereichen besteht.",
    statistics: [
      {
        value: "500+",
        label: "Mitarbeiter"
      },
      {
        value: "25+",
        label: "Jahre Erfahrung"
      },
      {
        value: "100+",
        label: "Projekte"
      }
    ]
  }
}

// About verilerini dil desteği ile getir
export function getLocalizedAbout(lang: Language) {
  switch (lang) {
    case "tr":
      return aboutDataTr.about
    case "en":
      return aboutDataEn.about
    case "ru":
      return aboutDataRu.about
    case "de":
      return aboutDataDe.about
    default:
      return aboutDataTr.about
  }
}



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
  // tr: {},
  // en: {},
  // ru: {},
  // de: {}
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
  // tr: {},
  // en: {},
  // ru: {},
  // de: {}
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
  // tr: {},
  // en: {},
  // de: {},
  // ru: {},
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
  // tr: {},
  // en: {},
  // de: {},
  // ru: {},
 
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



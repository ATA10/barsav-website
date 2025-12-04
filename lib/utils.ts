import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add basePath to image URLs for GitHub Pages
export function getImagePath(path: string): string {
  // Hardcode basePath for GitHub Pages
  const basePath = '/barsav-website'
  
  // If path is absolute URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path
  }
  
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Return with basePath
  return `${basePath}/${cleanPath}`
}
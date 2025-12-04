import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add basePath to image URLs for GitHub Pages
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/barsav-website'
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path
  }
  // If path starts with /, remove it and add basePath
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${basePath}/${cleanPath}`
}
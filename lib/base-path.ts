// // Base path utility for GitHub Pages
// export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/barsav-website"

// export function getBasePath() {
//   return BASE_PATH
// }

// export function withBasePath(path: string) {
//   // Remove leading slash if present
//   const cleanPath = path.startsWith("/") ? path.slice(1) : path
//   // Ensure base path ends with /
//   const base = BASE_PATH.endsWith("/") ? BASE_PATH : `${BASE_PATH}/`
//   return `${base}${cleanPath}`
// }

// export function getHomePath() {
//   return BASE_PATH === "/" ? "/" : BASE_PATH
// }





// Base path utility for root domain (barsav.com.tr)

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/"

export function getBasePath() {
  return BASE_PATH
}

export function withBasePath(path: string) {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  // If base path is root, just return normal path
  if (BASE_PATH === "/") {
    return `/${cleanPath}`
  }

  const base = BASE_PATH.endsWith("/") ? BASE_PATH : `${BASE_PATH}/`
  return `${base}${cleanPath}`
}

export function getHomePath() {
  return "/"
}

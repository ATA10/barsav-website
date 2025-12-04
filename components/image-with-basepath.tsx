import { getImagePath } from "@/lib/utils"

interface ImageWithBasePathProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  fill?: boolean
}

export default function ImageWithBasePath({ src, fill, className, style, ...props }: ImageWithBasePathProps) {
  // If src already starts with basePath or is absolute URL, use as is
  const imageSrc = src.startsWith("http") || src.startsWith("//") 
    ? src 
    : getImagePath(src)
  
  const finalStyle = fill 
    ? { ...style, position: 'absolute' as const, inset: 0, width: '100%', height: '100%', objectFit: 'cover' as const }
    : style
  
  return (
    <img 
      src={imageSrc} 
      className={className}
      style={finalStyle}
      {...props} 
    />
  )
}


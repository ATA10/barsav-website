import Image from "next/image"
import { getImagePath } from "@/lib/utils"

interface ImageWithBasePathProps extends Omit<React.ComponentProps<typeof Image>, "src"> {
  src: string
}

export default function ImageWithBasePath({ src, ...props }: ImageWithBasePathProps) {
  // If src already starts with basePath or is absolute URL, use as is
  const imageSrc = src.startsWith("http") || src.startsWith("//") 
    ? src 
    : getImagePath(src)
  
  return <Image src={imageSrc} {...props} />
}


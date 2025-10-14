import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  className?: string
}

export function BlogImage({ 
  src, 
  alt, 
  caption, 
  size = 'medium',
  className 
}: BlogImageProps) {
  // Handle relative paths for blog images
  const imageSrc = src.startsWith('/') ? src : `/images/blog/${src}`
  
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-full'
  }

  return (
    <figure className={cn(
      'my-8 text-center bg-muted p-4 rounded-lg border',
      sizeClasses[size],
      className
    )}>
      <Image
        src={imageSrc}
        alt={alt}
        width={800}
        height={400}
        className="w-full h-auto object-cover rounded-lg border bg-muted"
        priority={size === 'full'}
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

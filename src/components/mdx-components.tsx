import type { MDXComponents } from 'mdx/types'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Custom components for MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight mt-12 mb-6 text-foreground border-b border-border pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-4 text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 mb-6 text-foreground">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link 
        href={href || '#'} 
        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base leading-7">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50 rounded-r-lg">
        <div className="text-muted-foreground italic">
          {children}
        </div>
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground border">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-6 rounded-lg overflow-x-auto my-6 border">
        <code className="text-sm font-mono text-foreground">
          {children}
        </code>
      </pre>
    ),
    hr: () => <Separator className="my-8" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-foreground">
        {children}
      </em>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-border">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-foreground">
        {children}
      </td>
    ),

    // Override img element for inline images
    img: ({ src, alt, title, ...props }: {
      src?: string,
      alt?: string,
      title?: string,
      [key: string]: any
    }) => {
      if (!src) return null
      
      // Handle relative paths for blog images
      const imageSrc = src.startsWith('/') ? src : `/images/blog/${src}`
      
      return (
        <figure className="my-8">
          <div className="relative overflow-hidden rounded-lg border bg-muted">
            <Image
              src={imageSrc}
              alt={alt || ''}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              {...props}
            />
          </div>
          {(alt || title) && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
              {title || alt}
            </figcaption>
          )}
        </figure>
      )
    },

    // Custom components
    Alert: ({ type = 'info', title, children }: { 
      type?: 'info' | 'warning' | 'success' | 'error', 
      title?: string, 
      children: React.ReactNode 
    }) => {
      const icons = {
        info: InfoIcon,
        warning: AlertTriangleIcon,
        success: CheckCircleIcon,
        error: XCircleIcon,
      }
      const Icon = icons[type]

      return (
        <Alert className="my-6">
          <Icon className="h-4 w-4" />
          {title && <AlertTitle>{title}</AlertTitle>}
          <AlertDescription>
            {children}
          </AlertDescription>
        </Alert>
      )
    },

    Card: ({ title, description, children }: {
      title?: string,
      description?: string,
      children: React.ReactNode
    }) => (
      <Card className="my-6">
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>
          {children}
        </CardContent>
      </Card>
    ),

    Badge: ({ variant = 'default', children }: {
      variant?: 'default' | 'secondary' | 'destructive' | 'outline',
      children: React.ReactNode
    }) => (
      <Badge variant={variant} className="mr-2 mb-2">
        {children}
      </Badge>
    ),

    Button: ({ variant = 'default', size = 'default', children, ...props }: {
      variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link',
      size?: 'default' | 'sm' | 'lg' | 'icon',
      children: React.ReactNode,
      [key: string]: any
    }) => (
      <Button variant={variant} size={size} className="my-2" {...props}>
        {children}
      </Button>
    ),

    Callout: ({ type = 'info', children }: {
      type?: 'info' | 'warning' | 'success' | 'error',
      children: React.ReactNode
    }) => {
      const styles = {
        info: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
        warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
        success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950',
        error: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950',
      }

      return (
        <div className={`border-l-4 p-4 my-6 rounded-r-lg ${styles[type]}`}>
          {children}
        </div>
      )
    },

    CodeBlock: ({ title, language, children }: {
      title?: string,
      language?: string,
      children: React.ReactNode
    }) => (
      <div className="my-6">
        {title && (
          <div className="bg-muted px-4 py-2 rounded-t-lg border-b font-mono text-sm text-muted-foreground">
            {title} {language && <span className="text-primary">({language})</span>}
          </div>
        )}
        <pre className={`bg-muted p-6 overflow-x-auto ${title ? 'rounded-b-lg' : 'rounded-lg'} border`}>
          <code className="text-sm font-mono text-foreground">
            {children}
          </code>
        </pre>
      </div>
    ),

    // Custom Image component for more control
    BlogImage: ({ src, alt, caption, size = 'full' }: {
      src: string,
      alt: string,
      caption?: string,
      size?: 'small' | 'medium' | 'full'
    }) => {
      const imageSrc = src.startsWith('/') ? src : `/images/blog/${src}`
      
      const sizeClasses = {
        small: 'max-w-sm mx-auto',
        medium: 'max-w-2xl mx-auto', 
        full: 'w-full'
      }
      
      return (
        <figure className={`my-8 ${sizeClasses[size]}`}>
          <div className="relative overflow-hidden rounded-lg border bg-muted">
            <Image
              src={imageSrc}
              alt={alt}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    },

    ...components,
  }
} 
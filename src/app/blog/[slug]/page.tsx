import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import ScrollHeader from '@/components/website/ScrollHeader'
import Footer from '@/components/website/Footer'
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { LinkIcon } from 'lucide-react'
import { TableOfContents } from './components/TableOfContents'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { HeroHeader } from '@/components/website/Header'
import CTA from '@/components/website/CTA'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Helper function to create heading anchors
function createHeadingAnchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Extract headings from markdown content for TOC
function extractHeadings(content: string) {
  const headings: { level: number; text: string; anchor: string }[] = []
  
  // Split content into lines
  const lines = content.split('\n')
  let inCodeBlock = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Check if we're entering or leaving a code block
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    
    // Skip if we're inside a code block
    if (inCodeBlock) {
      continue
    }
    
    // Check for headings (only outside code blocks)
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const text = headingMatch[2].trim()
      const anchor = createHeadingAnchor(text)
      headings.push({ level, text, anchor })
    }
  }

  return headings
}

// Heading component with anchor
function HeadingWithAnchor({ 
  level, 
  children, 
  className 
}: { 
  level: 1 | 2 | 3 | 4, 
  children: React.ReactNode, 
  className: string 
}) {
  const text = typeof children === 'string' ? children : children?.toString() || ''
  const anchor = createHeadingAnchor(text)

  const headingProps = {
    id: anchor,
    className: `${className} group scroll-mt-20`
  }

  const content = (
    <a href={`#${anchor}`} className="flex items-center gap-2 no-underline">
      {children}
      <LinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-50 transition-opacity" />
    </a>
  )

  switch (level) {
    case 1:
      return <h1 {...headingProps}>{content}</h1>
    case 2:
      return <h2 {...headingProps}>{content}</h2>
    case 3:
      return <h3 {...headingProps}>{content}</h3>
    case 4:
      return <h4 {...headingProps}>{content}</h4>
    default:
      return <h2 {...headingProps}>{content}</h2>
  }
}

async function getPostData(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/blog')
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTime = readingTime(content)

    // Check if post is published
    if (data.published === false) {
      return null
    }

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      content,
      date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '',
      author: data.author || '',
      tags: data.tags || [],
      readTime: readTime.text,
      published: data.published !== false,
      featuredImage: data.featuredImage || '',
      featuredImageAlt: data.featuredImageAlt || data.title || '',
    }
  } catch (error) {
    console.warn(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Warrn Blog',
    }
  }

  return {
    title: `${post.title} | Warrn Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  // Extract headings for table of contents (only H2)
  const allHeadings = extractHeadings(post.content)
  const headings = allHeadings.filter(heading => heading.level === 2)
  const showTOC = headings.length >= 2

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* <ScrollHeader /> */}
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Left Sidebar - TOC */}
            {showTOC && <TableOfContents headings={headings} />}

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Back Navigation for mobile/when no TOC */}
              {!showTOC && (
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors lg:hidden">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              )}

              {/* Article Header */}
              <header className="mb-16">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 text-foreground leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              )}

              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative mb-12 overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={post.featuredImage.startsWith('/') ? post.featuredImage : `/images/blog/${post.featuredImage}`}
                    alt={post.featuredImageAlt || post.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              )}

              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-b border-border">
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">
                          {post.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div className="font-medium text-foreground">
                        {post.author}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </header>

              {/* Article Content */}
              <div className="prose prose-gray dark:prose-invert max-w-none prose-lg prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <div className="text-foreground leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                    h1: ({ children }) => (
                      <HeadingWithAnchor 
                        level={1} 
                        className="text-3xl font-bold mt-12 mb-6 text-foreground first:mt-0"
                      >
                        {children}
                      </HeadingWithAnchor>
                    ),
                    h2: ({ children }) => (
                      <HeadingWithAnchor 
                        level={2} 
                        className="text-2xl font-semibold mt-10 mb-4 text-foreground border-b border-border pb-2"
                      >
                        {children}
                      </HeadingWithAnchor>
                    ),
                    h3: ({ children }) => (
                      <HeadingWithAnchor 
                        level={3} 
                        className="text-xl font-semibold mt-8 mb-3 text-foreground"
                      >
                        {children}
                      </HeadingWithAnchor>
                    ),
                    h4: ({ children }) => (
                      <HeadingWithAnchor 
                        level={4} 
                        className="text-lg font-semibold mt-6 mb-2 text-foreground"
                      >
                        {children}
                      </HeadingWithAnchor>
                    ),
                    p: ({ children }) => (
                      <p className="mb-6 text-foreground leading-7 text-base">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-6 space-y-2 text-foreground pl-4">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-6 space-y-2 text-foreground pl-4">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-foreground leading-6">
                        {children}
                      </li>
                    ),
                    code: ({ node, inline, className, children, ...props }: any) => {
                      const match = /language-(\w+)/.exec(className || '')
                      const language = match ? match[1] : ''
                      
                      if (inline) {
                        return (
                          <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground border" {...props}>
                            {children}
                          </code>
                        )
                      }

                      return (
                        <div className="my-8">
                          {language && (
                            <div className="bg-muted/50 px-4 py-2 text-xs font-mono text-muted-foreground border border-b-0 rounded-t-lg uppercase tracking-wide">
                              {language}
                            </div>
                          )}
                          <SyntaxHighlighter
                            language={language || 'text'}
                            PreTag="div"
                            className={`!mt-0 !mb-0 ${language ? '!rounded-t-none' : ''} !rounded-lg !border !border-border`}
                            customStyle={{
                              margin: 0,
                              background: 'hsl(var(--muted))',
                              fontSize: '14px',
                              lineHeight: '1.5',
                            }}
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        </div>
                      )
                    },
                    pre: ({ children }) => {
                      // Let the code component handle pre blocks
                      return <>{children}</>
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r-lg italic">
                        <div className="text-muted-foreground">
                          {children}
                        </div>
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <a 
                        href={href} 
                        className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    ),
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
                    hr: () => (
                      <hr className="my-12 border-border" />
                    ),
                    // Table components using shadcn/ui Table
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto">
                        <Table>
                          {children}
                        </Table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <TableHeader>
                        {children}
                      </TableHeader>
                    ),
                    tbody: ({ children }) => (
                      <TableBody>
                        {children}
                      </TableBody>
                    ),
                    tr: ({ children }) => (
                      <TableRow>
                        {children}
                      </TableRow>
                    ),
                    th: ({ children }) => (
                      <TableHead className="text-left font-semibold">
                        {children}
                      </TableHead>
                    ),
                    td: ({ children }) => (
                      <TableCell>
                        {children}
                      </TableCell>
                    ),
                    img: (props: any) => {
                      const { src, alt, title, ...rest } = props
                      if (!src) return null
                      
                      // Handle relative paths for blog images
                      const imageSrc = typeof src === 'string' && src.startsWith('/') ? src : `/images/blog/${src}`
                      
                      return (
                        <span className="block my-8 text-center bg-muted p-2 rounded-lg">
                          <Image
                            src={imageSrc}
                            alt={alt || ''}
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover rounded-lg border bg-muted"
                          />
                          {(alt || title) && (
                            <span className="block mt-3 text-sm text-muted-foreground italic">
                              {title || alt}
                            </span>
                          )}
                        </span>
                      )
                    },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-16 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Thanks for reading!
                  </div>
                  <Link href="/blog">
                    <Button variant="outline" className="font-mono">
                      More articles
                      <BookOpen className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  )
} 
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt?: string
  content: string
  date: string
  author?: string
  tags?: string[]
  readTime: string
  published?: boolean
  featuredImage?: string
  featuredImageAlt?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt?: string
  date: string
  author?: string
  tags?: string[]
  readTime: string
  published?: boolean
  featuredImage?: string
  featuredImageAlt?: string
}

// Ensure the posts directory exists
function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  ensurePostsDirectory()
  
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.mdx'))
        .map(async (name) => {
          const slug = name.replace(/\.mdx$/, '')
          const fullPath = path.join(postsDirectory, name)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          const readTime = readingTime(content)

          return {
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || '',
            date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : '',
            author: data.author || '',
            tags: data.tags || [],
            readTime: readTime.text,
            published: data.published !== false, // Default to true unless explicitly false
            featuredImage: data.featuredImage || '',
            featuredImageAlt: data.featuredImageAlt || data.title || '',
          }
        })
    )

    // Filter published posts and sort by date (newest first)
    return posts
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.warn('Error reading blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensurePostsDirectory()
  
  try {
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

export function getPostSlugs(): string[] {
  ensurePostsDirectory()
  
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''))
  } catch (error) {
    console.warn('Error reading post slugs:', error)
    return []
  }
} 
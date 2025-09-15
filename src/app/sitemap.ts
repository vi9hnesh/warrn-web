import { MetadataRoute } from 'next'
// import { getAllPosts } from '@/lib/blog' // Commented out during early access
import { SITE_CONFIG } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url

  // Only include accessible pages during early access
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    // Commented out pages that are restricted during early access
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/features`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'daily' as const,
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/labs`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/terms`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.5,
    // },
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: new Date('2025-07-21'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.5,
    // },
  ]

  // Blog posts are also restricted during early access
  // const posts = await getAllPosts()
  // const blogPages = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.date),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  return staticPages
} 
import { getAllPosts } from '@/lib/blog'
import { SITE_CONFIG } from '@/lib/seo'

export async function GET() {
  const posts = await getAllPosts()

  const rssItems = posts
    .slice(0, 20) // Limit to 20 most recent posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString()
      const link = `${SITE_CONFIG.url}/blog/${post.slug}`
      
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.excerpt}]]></description>
          <link>${link}</link>
          <guid isPermaLink="true">${link}</guid>
          <pubDate>${pubDate}</pubDate>
          <author>support@warrn.com (${post.author})</author>
          ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
        </item>
      `
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_CONFIG.name} Blog]]></title>
    <description><![CDATA[${SITE_CONFIG.description}]]></description>
    <link>${SITE_CONFIG.url}/blog</link>
    <language>en-US</language>
    <managingEditor>support@warrn.com (${SITE_CONFIG.author})</managingEditor>
    <webMaster>support@warrn.com (${SITE_CONFIG.author})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_CONFIG.url}/logo.svg</url>
      <title><![CDATA[${SITE_CONFIG.name} Blog]]></title>
      <link>${SITE_CONFIG.url}/blog</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
} 
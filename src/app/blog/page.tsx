import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ScrollHeader from '@/components/website/ScrollHeader'
import Footer from '@/components/website/Footer'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { HeroHeader } from '@/components/website/Header'
import CTA from '@/components/website/CTA'

export const metadata: Metadata = {
  title: 'Blog | Warrn - Incident Management Insights',
  description: 'Latest insights, best practices, and updates from the Warrn team on incident management, DevOps, and reliability engineering.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* <ScrollHeader /> */}
      <HeroHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mx-auto max-w-xl space-y-6 text-center mb-20">
                <h2 className="text-balance text-4xl font-medium lg:text-5xl">We are opinionated</h2>
                <hr />
                {/* <p>Our blog</p> */}
            </div>

            {/* Featured Post */}
            {/* {posts.length > 0 && (
              <div className="mb-20">
                <Link href={`/blog/${posts[0].slug}`} className="block group">
                  <Card className="overflow-hidden hover:border-black transition-all duration-300 border-gray-500 bg-gradient-to-br from-background to-muted/20 p-0 cursor-pointer">
                    {posts[0].featuredImage && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={posts[0].featuredImage.startsWith('/') ? posts[0].featuredImage : `/images/blog/${posts[0].featuredImage}`}
                          alt={posts[0].featuredImageAlt || posts[0].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {posts[0].title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          {posts[0].author && (
                            <div className="font-medium">
                              By {posts[0].author}
                            </div>
                          )}
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {posts[0].readTime}
                          </div>
                        </div>
                        <Button className="font-mono group">
                          Read Article
                          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            )} */}

            {/* All Posts */}
            <div>
                {posts.length === 0 ? (
                <Card className="text-center p-12">
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
                    <p className="text-muted-foreground">
                      We're working on some great content. Check back soon!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {posts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                      <Card className="group hover:border-black transition-all duration-300 border-gray-200 bg-gradient-to-br from-background to-muted/20 overflow-hidden flex flex-col h-full cursor-pointer shadow-none p-0">
                        {post.featuredImage && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.featuredImage.startsWith('/') ? post.featuredImage : `/images/blog/${post.featuredImage}`}
                              alt={post.featuredImageAlt || post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 text-md leading-relaxed flex-1">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto space-y-4">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              {post.author && (
                                <div className="font-medium">
                                  By {post.author}
                                </div>
                              )}
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  )
} 
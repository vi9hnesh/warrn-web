import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ScrollHeader from '@/components/website/ScrollHeader'
import Footer from '@/components/website/Footer'
import { ArrowLeft, FileX } from 'lucide-react'

export default function BlogPostNotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ScrollHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">

            <Card className="p-8 border-none shadow-none">
              <CardHeader className="pb-4">
                <div className="text-8xl font-bold">404</div>
                <CardTitle className="text-2xl">Post Not Found</CardTitle>
                <CardDescription className="text-base">
                  The blog post you're looking for doesn't exist or may have been moved.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Link href="/blog">
                      <Button variant="default" className="font-mono">
                        Browse All Posts
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="font-mono">
                        Go Home
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 
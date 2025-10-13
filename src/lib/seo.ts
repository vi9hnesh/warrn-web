export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogImageAlt?: string
  twitterHandle?: string
  noIndex?: boolean
  noFollow?: boolean
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  type?: 'website' | 'article' | 'product' | 'organization'
}

export interface BlogPostSEO {
  slug: string
  title: string
  excerpt: string
  readTime?: string
  publishedTime: string
  modifiedTime?: string
  author: string
  tags: string[]
  featuredImage?: string
  featuredImageAlt?: string
}

// Base site configuration
export const SITE_CONFIG = {
  name: 'Warrn',
  description: 'AI-powered incident management platform that transforms how teams handle disruptions and maintain system reliability with intelligent triage, automated response, and continuous learning.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://warrn.io',
  ogImage: '/images/warrn-og-image.jpg',
  twitterHandle: '@warrnplatform',
  keywords: [
    'incident management',
    'AI-powered monitoring',
    'DevOps tools',
    'system reliability',
    'automated incident response',
    'intelligent triage',
    'SaaS platform',
    'multi-tenant',
    'uptime monitoring',
    'alerting system',
    'observability',
    'site reliability engineering',
    'SRE tools',
    'incident response automation'
  ],
  author: 'Warrn Team',
  company: {
    name: 'Warrn',
    legalName: 'Warrn Inc.',
    url: 'https://warrn.io',
    logo: '/logo.svg',
    description: 'AI-powered incident management platform for modern teams',
    foundingDate: '2024',
    address: {
      streetAddress: '',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '',
      addressCountry: 'IN'
    },
    contactPoint: {
      telephone: '',
      contactType: 'customer service',
      email: 'support@warrn.io'
    },
    sameAs: [
      'https://twitter.com/warrnplatform',
      'https://linkedin.com/company/warrn',
      'https://github.com/warrn'
    ]
  }
}

export function generateMetadata(config: SEOConfig) {
  const {
    title,
    description,
    keywords = SITE_CONFIG.keywords,
    canonicalUrl,
    ogImage = SITE_CONFIG.ogImage,
    ogImageAlt,
    twitterHandle = SITE_CONFIG.twitterHandle,
    noIndex = false,
    noFollow = false,
    publishedTime,
    modifiedTime,
    author = SITE_CONFIG.author,
    section,
    tags,
    type = 'website'
  } = config

  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`
  const url = canonicalUrl || SITE_CONFIG.url

  const metadata: any = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_CONFIG.name,
    robots: {
      index: !noIndex,
      follow: !noFollow,
    },
    openGraph: {
      type: type as any,
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt || `${title} - ${SITE_CONFIG.name}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: twitterHandle,
      site: twitterHandle,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }

  // Add verification only if environment variables exist
  if (process.env.GOOGLE_SITE_VERIFICATION || process.env.YANDEX_VERIFICATION || process.env.BING_SITE_VERIFICATION) {
    metadata.verification = {
      ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
      ...(process.env.YANDEX_VERIFICATION && { yandex: process.env.YANDEX_VERIFICATION }),
      ...(process.env.BING_SITE_VERIFICATION && { bing: process.env.BING_SITE_VERIFICATION }),
    }
  }

  return metadata
}

export function generateBlogPostMetadata(post: BlogPostSEO) {
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${post.slug}`
  
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [...SITE_CONFIG.keywords, ...post.tags],
    canonicalUrl,
    ogImage: post.featuredImage ? `/images/blog/${post.featuredImage}` : SITE_CONFIG.ogImage,
    ogImageAlt: post.featuredImageAlt,
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    author: post.author,
    section: 'Technology',
    tags: post.tags,
    type: 'article',
  })
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.company.name,
    legalName: SITE_CONFIG.company.legalName,
    url: SITE_CONFIG.company.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.company.logo}`,
    description: SITE_CONFIG.company.description,
    foundingDate: SITE_CONFIG.company.foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.company.address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...SITE_CONFIG.company.contactPoint,
    },
    sameAs: SITE_CONFIG.company.sameAs,
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.company.name,
      logo: `${SITE_CONFIG.url}${SITE_CONFIG.company.logo}`,
    },
  }
}

export function generateSoftwareApplicationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    operatingSystem: 'Web Browser',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Incident Management',
    offers: {
      '@type': 'Offer',
      category: 'SaaS',
      businessFunction: 'http://purl.org/goodrelations/v1#Sell',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.company.name,
      url: SITE_CONFIG.company.url,
    },
    featureList: [
      'AI-powered incident triage',
      'Automated response workflows',
      'Intelligent alerting',
      'Multi-tenant architecture',
      'Real-time monitoring',
      'Custom integrations',
    ],
  }
}

export function generateBlogPostStructuredData(post: BlogPostSEO) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? `${SITE_CONFIG.url}/images/blog/${post.featuredImage}` : SITE_CONFIG.ogImage,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime || post.publishedTime,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.company.name,
      logo: `${SITE_CONFIG.url}${SITE_CONFIG.company.logo}`,
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    wordCount: post.readTime ? parseInt(post.readTime.split(' ')[0]) * 200 : undefined, // Rough estimate
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
} 
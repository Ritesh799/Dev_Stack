import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/_next/',
        '/temp/',
        '/*.json$',
        '/*.xml$',
      ],
    },
    sitemap: 'https://patilritesh.in/sitemap.xml',
    host: 'https://patilritesh.in',
  }
}

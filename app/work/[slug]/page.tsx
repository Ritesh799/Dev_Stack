import React from 'react'
import { notFound } from 'next/navigation'
import WorkDetailLayout from '@/components/work/work-detail-layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { Metadata } from 'next'

// Generate metadata for work pages
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  // Get the work item data
  const workData = await getWorkData(slug)
  
  if (!workData) {
    return {
      title: 'Work Not Found | Ritesh Patil',
      description: 'The requested work item could not be found.'
    }
  }
  
  const { frontmatter } = workData
  const title = frontmatter.title || 'Work Project'
  const description = frontmatter.description || `Learn about ${title} - a project by Ritesh Patil, AI/ML Developer specializing in ML and GenAI .`
  
  return {
    title: `${title} | Ritesh Patil`,
    description,
    keywords: [
      title,
      'Ritesh Patil work',
      'AI Full stack project',
      'Machine Learning',
      'Generative AI',
      ...(frontmatter.technologies || [])
    ],
    openGraph: {
      title: `${title} | Ritesh Patil`,
      description,
      url: `https://Riteshpatil.me/work/${slug}`,
      type: 'article',
      images: [
        {
          url: frontmatter.heroImage || '/me.jpg',
          width: 1200,
          height: 630,
          alt: `${title} - Ritesh Patil`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Ritesh Patil`,
      description,
      images: [frontmatter.heroImage || '/me.jpg']
    },
    alternates: {
      canonical: `https://Riteshpatil.me/work/${slug}`
    }
  }
}

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>
}

// Function to get work data from markdown file
async function getWorkData(slug: string) {
  try {
    const workDirectory = path.join(process.cwd(), 'data/work')
    const filePath = path.join(workDirectory, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(fileContents)
    
    // Process markdown content
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml, { sanitize: false })
      .process(content)

    const htmlContent = processedContent.toString()
    
    return {
      frontmatter,
      content: htmlContent,
      slug
    }
  } catch (error) {
    console.error('Error reading work data:', error)
    return null
  }
}

const WorkDetailPage = async ({ params }: WorkDetailPageProps) => {
  const { slug } = await params
  const workData = await getWorkData(slug)
  
  if (!workData) {
    notFound()
  }
  
  const { frontmatter, content } = workData
  
  return (
    <WorkDetailLayout
      heroImage={frontmatter.heroImage}
      heroImageAlt={frontmatter.heroImageAlt}
      sidebarItems={frontmatter.sidebar || []}
    >
      <div className="prose prose-theme max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </WorkDetailLayout>
  )
}

export default WorkDetailPage
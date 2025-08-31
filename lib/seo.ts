import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
    type?: string
    siteName?: string
    locale?: string
  }
  twitter?: {
    card?: string
    site?: string
    creator?: string
    title?: string
    description?: string
    images?: string[]
  }
  keywords?: string[]
  robots?: {
    index?: boolean
    follow?: boolean
    googleBot?: string
  }
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  authors?: Array<{
    name: string
    url?: string
  }>
  creator?: string
  publisher?: string
  category?: string
  verification?: {
    google?: string
    yandex?: string
    yahoo?: string
  }
}

// Base SEO configuration
export const baseSEOConfig: SEOConfig = {
  title: "Ritesh Patil | Full-Stack & Gen-AI Developer",
  description: "Building innovative digital solutions across web, mobile, and AI platforms. Specializing in full-stack development, generative AI, cloud architecture, and scalable system design. Open-source contributor passionate about creating accessible technology.",
  canonical: "https://Riteshp.me",
  openGraph: {
    title: "Ritesh Patil | Full-Stack & Gen-AI Developer",
    description: "Building innovative digital solutions across web, mobile, and AI platforms. Full Stack Developer specializing in modern frameworks, cloud technologies, and open source contributions.",
    type: "website",
    siteName: "RITESH PATIL",
    locale: "en_US",
    images: [
      {
        url: "https://riteshpatil.me/og_image.jpeg",
        width: 1200,
        height: 630,
        alt: "RITESH PATIL - AI/ML Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ritesh_patil",
    title: "Ritesh Patil | Full-Stack & Gen-AI Developer",
    description: "Building innovative digital solutions across web, mobile, and AI platforms. Full Stack Developer specializing in modern frameworks, cloud technologies, and open source contributions.",
    images: ["https://Riteshp.me/me.jpg", "https://Riteshp.me/og_image.jpeg"]
  },
  keywords: [
    "Full stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MERN stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "Python developer",
    "Gen-AI developer",
    "Machine learning engineer",
    "AI/ML developer",
    "Cloud architect",
    "AWS developer",
    "GCP developer",
    "Azure developer",
    "Mobile app developer",
    "React Native developer",
    "DevOps engineer",
    "Software engineer",
    "System architect",
    "Database architect",
    "PostgreSQL developer",
    "MongoDB developer",
    "Redis developer",
    "Docker specialist",
    "Kubernetes developer",
    "Microservices architect",
    "API developer",
    "GraphQL developer",
    "REST API developer",
    "Open source contributor",
    "Tech consultant",
    "Software architect",
    "Bengaluru developer",
    "Indian developer",
    "Freelance developer"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
  },
  authors: [
    {
      name: "RITESH PATIL",
      url: "https://riteshpatil.me"
    }
  ],
  creator: "RITESH PATIL",
  publisher: "RITESH PATIL",
  category: "Technology",
  verification: {
    google: "G-PPV7T8F7NT" // Your Google Analytics ID
  }
}

// Page-specific SEO configurations
export const pageSEOConfig = {
  home: {
    title: "RITESH PATIL | AI/ML Developer",
    description: "Specializing in AI/ML development with expertise in Generative AI, LLMs, and Machine Learning. Currently pursuing B.Tech in Computer Science with AI-ML specialization.",
    canonical: "https://riteshpatil.me",
    keywords: [
      "RITESH PATIL",
      "AI/ML Developer",
      "Machine Learning Engineer",
      "LangChain Developer",
      "Google Gemini",
      "LangGraph",
      "Generative AI",
      "AI Engineer",
      "Bengaluru developer",
      "Indian developer",
      "Portfolio"
    ]
  },
  about: {
    title: "About RITESH PATIL | AI/ML Developer",
    description: "Learn about RITESH PATIL's journey as an AI/ML Developer. Experience with Generative AI, LLMs, Machine Learning, and cutting-edge AI technologies.",
    canonical: "https://riteshpatil.me/about",
    keywords: [
      "About Ritesh Patil",
      "Full stack developer experience",
      "Modern web frameworks",
      "Cloud technologies",
      "AI/ML expertise",
      "Mobile development",
      "Open source contributor",
      "Software engineer background",
      "P.E.S University",
      "RK University"
    ]
  },
  work: {
    title: "Work Experience | Ritesh Patil",
    description: "Explore Ritesh Patil's professional work experience, including enterprise projects, freelance development work, and major open source contributions across various technologies.",
    canonical: "https://Riteshp.me/work",
    keywords: [
      "Ritesh Patil work experience",
      "Enterprise development",
      "Freelance developer",
      "Full stack projects",
      "Modern framework projects",
      "Cloud solutions",
      "AI/ML projects",
      "Mobile app projects",
      "Open source contributions",
      "Apache Beam",
      "Monkeytype",
      "Internet Archive"
    ]
  },
  contact: {
    title: "Contact Ritesh Patil | Full-Stack & Gen-AI Developer",
    description: "Get in touch with Ritesh Patil for full stack development projects, AI/ML solutions, cloud architecture, mobile development, or technical consultation. Based in Bengaluru, India.",
    canonical: "https://Riteshp.me/contact",
    keywords: [
      "Contact Ritesh Patil",
      "Hire full stack developer",
      "AI/ML consultation",
      "Cloud architecture services",
      "Mobile development services",
      "Technical consultation",
      "Collaboration opportunities",
      "Development services",
      "Bengaluru developer contact"
    ]
  },
//   projects: {
//     title: "Projects | Ritesh Patil",
//     description: "Discover Ritesh Patil's portfolio of projects including web applications, mobile apps, AI/ML solutions, and cloud-native applications built with cutting-edge technologies.",
//     canonical: "https://Riteshp.me/projects",
//     keywords: [
//       "Ritesh Patil projects",
//       "Full stack applications",
//       "Mobile applications",
//       "AI/ML projects",
//       "Cloud-native solutions",
//       "Next.js projects",
//       "React projects",
//       "Node.js projects",
//       "Python projects",
//       "Open source projects"
//     ]
//   }
}

// Generate metadata for Next.js
export function generateSEOMetadata(pageConfig: Partial<SEOConfig> = {}): Metadata {
  const config = { ...baseSEOConfig, ...pageConfig }
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: config.authors,
    creator: config.creator,
    publisher: config.publisher,
    category: config.category,
    robots: config.robots,
    alternates: {
      canonical: config.canonical,
      ...config.alternates
    },
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      url: config.canonical,
      siteName: config.openGraph?.siteName,
      locale: config.openGraph?.locale,
      type: config.openGraph?.type as undefined,
      images: config.openGraph?.images?.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt
      }))
    },
    twitter: {
      card: config.twitter?.card as undefined,
      site: config.twitter?.site,
      creator: config.twitter?.creator,
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.images
    },
    verification: config.verification
  }
}

// JSON-LD structured data
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ritesh Patil",
    "jobTitle": "Full Stack & Gen-AI Developer",
    "description": "Building innovative digital solutions across web, mobile, and AI platforms. Full Stack & Gen-AI Developer specializing in modern frameworks, cloud technologies, and open source contributions.",
    "url": "https://Riteshp.me",
    "image": "https://Riteshp.me/me.jpg",
    "email": "Ritesh.Patil@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/RiteshPatil",
      "https://linkedin.com/in/Ritesh-Patil",
      "https://x.com/Ritesh-Patil"
    ],
    "alumniOf": [
      {
        "@type": "University",
        "name": "P.E.S University",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "India"
        }
      },
      {
        "@type": "University",
        "name": "RK University",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        }
      }
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Next.js",
      "React",
      "Node.js",
      "MERN Stack",
      "TypeScript",
      "JavaScript",
      "Python",
      "Generative AI",
      "Machine Learning",
      "Cloud Computing",
      "AWS",
      "GCP",
      "Azure",
      "Mobile Development",
      "React Native",
      "Flutter",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Microservices",
      "GraphQL",
      "REST APIs",
      "DevOps",
      "CI/CD",
      "Open Source Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack & Gen-AI Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Bengaluru, India"
      },
      "skills": [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Generative AI",
        "Machine Learning",
        "Cloud Architecture",
        "AWS",
        "GCP",
        "Mobile Development",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes"
      ]
    }
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ritesh Patil",
    "url": "https://Riteshp.me",
    "description": "Personal portfolio and blog of Ritesh Patil, Full Stack & Gen-AI Developer specializing in modern frameworks, cloud technologies, and open source contributions.",
    "author": {
      "@type": "Person",
      "name": "Ritesh Patil"
    },
    "inLanguage": "en-US",
    "copyrightYear": 2025,
    "copyrightHolder": {
      "@type": "Person",
      "name": "Ritesh Patil"
    }
  },

  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ritesh Patil",
    "url": "https://Riteshp.me",
    "logo": "https://Riteshp.me/me.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Ritesh.Patil@gmail.com",
      "contactType": "customer service"
    },
    "founder": {
      "@type": "Person",
      "name": "Ritesh Patil"
    }
  },

  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ritesh Patil - Full Stack & AI Development Services",
    "url": "https://Riteshp.me",
    "description": "Professional full stack development services including modern web applications, mobile apps, AI/ML solutions, cloud architecture, and technical consultation.",
    "provider": {
      "@type": "Person",
      "name": "Ritesh Patil"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Complete web application development using modern frameworks like Next.js, React, and Node.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Cross-platform mobile application development using React Native and Flutter"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI/ML Solutions",
            "description": "Generative AI applications, machine learning models, and intelligent automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Architecture",
            "description": "Scalable cloud infrastructure design and deployment on AWS, GCP, and Azure"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Consultation",
            "description": "Architecture decisions, technology stack selection, and technical guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps & CI/CD",
            "description": "Automated deployment pipelines, containerization, and infrastructure management"
          }
        }
      ]
    }
  }
}
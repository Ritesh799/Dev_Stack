"use client"

import MainLayout from '@/components/main-layout'
import React from 'react'
import ProfileSection from '@/components/about/profile-section'
import SectionHeader from '@/components/about/section-header'
import ExperienceItem, { ExperienceData } from '@/components/about/experience-item'
import SkillCategory, { SkillCategoryData } from '@/components/about/skill-category'
import EducationItem, { EducationData } from '@/components/about/education-item'
import { useGSAP } from '@/hooks/useGSAP'

const Page = () => {
  const { containerRef } = useGSAP()

  // Profile data
  const profileData = {
    name: "RITESH PATIL",
    role: "AI/ML Developer",
    description: [
      `<span class="text-theme">I'm an </span><span class="font-bogue-semibold text-theme">AI/ML Developer</span><span class="text-theme"> specializing in </span><span class="font-bogue-semibold text-theme">Generative AI & LLMs</span><span class="text-theme">.</span>`,
      `<span class="text-theme">Completed my </span><span class="font-bogue-semibold text-theme">B.Tech in Computer Science & Engineering </span><span class="text-theme"> with specialization in AI-ML.</span>`
    ],
    imageSrc: "/me.jpg",
    imageAlt: "Ritesh Patil's profile picture"
  }

  // Experience data
  const experienceData: ExperienceData[] = [
    {
      title: "AI/ML Intern",
      company: "OnPoint Software Services",
      location: "Remote",
      year: "Jul 2025 - Present",
      
    }
  ]

  // Skills data
  const skillsData: SkillCategoryData[] = [
    {
      title: "Generative AI & LLMs",
      skills: [
        { name: "LangChain", isHighlighted: true },
        { name: "Google Gemini" },
        { name: "LangGraph" },
        { name: "Hugging Face" },
        { name: "RAG (PGVector)" },
        { name: "Pydantic" }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn" },
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "Python" },
        { name: "MLflow" },
        { name: "DVC" }
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "Power BI" },
        { name: "Excel" }
      ]
    },
    {
      title: "Development & APIs",
      skills: [
        { name: "Flask" },
        { name: "Django" },
        { name: "FastAPI" },
        { name: "Streamlit" },
        { name: "Docker" },
        { name: "Git" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "PGVector" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Jupyter Notebooks" },
        { name: "Google Colab" },
        { name: "Postman" },
        { name: "Google Sheets API" }
      ]
    }
  ]

  // Education data
  const educationData: EducationData[] = [
    {
      institution: "Bharati Vidyapeeth College of Engineering",
      degree: "Bachelor of Technology",
      focus: "Computer Science & Engineering, Specialization in AI-ML",
      period: "2021 - 2025",
      cgpa: "8.57/10"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen">
      <MainLayout renderGradient={true} renderGradientOnMobile={false}>
        <div className="mx-auto">
          {/* SEO Component */}

          {/* Hero Section */}
          <section className="hero-title">
            <ProfileSection
              name={profileData.name}
              role={profileData.role}
              description={profileData.description}
              imageSrc={profileData.imageSrc}
              imageAlt={profileData.imageAlt}
            />
          </section>

          {/* About Me Section */}
          <section className="mt-12 sm:mt-16 lg:mt-20 parallax-slow">
            <div className="section-header-reveal">
              <SectionHeader title="About me" />
            </div>

            <div className="space-y-6">
              <div className="about-text-item">
                <p className="text-base sm:text-lg md:text-xl font-saprona-light text-theme leading-relaxed">
      I&apos;m <span className="font-saprona-semibold text-theme">RITESH PATIL</span>, an <span className="font-saprona-semibold text-theme">AI/ML Developer</span> specializing in
      <span className="font-saprona-semibold text-theme">Generative AI &amp; LLMs</span>. Completed my <span className="font-saprona-semibold text-theme">B.Tech in Computer Science &amp; Engineering (AI-ML)</span>.
    </p>
              </div>

              <div className="about-text-item">
                <p className="text-base sm:text-lg md:text-xl font-saprona-light text-theme leading-relaxed">
                  Based in Kolhapur, India. I build innovative AI-powered applications using <span className="font-saprona-semibold text-theme">Traditional AI / ML Frameworks</span>, 
                   and modern frameworks like 
                  <span className="font-saprona-semibold text-theme"> LangChain &amp; LangGraph</span>. I&apos;m passionate about creating 
                  intelligent solutions that solve real-world problems.
                </p>
              </div>

            </div>
          </section>


          {/* Experience Section */}
          <section className="mt-12 sm:mt-16 lg:mt-20 parallax-medium">
            <div className="section-header-reveal">
              <SectionHeader title="Experience" />
            </div>

            <div className="space-y-0">
              {experienceData.map((experience, index) => (
                <div key={index} className="work-item">
                  <ExperienceItem
                    experience={experience}
                    showBorder={index < experienceData.length - 1}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mt-12 sm:mt-16 lg:mt-20 parallax-fast">
            <div className="section-header-reveal">
              <SectionHeader title="Skills & Technologies" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {skillsData.map((category, index) => (
                <div key={index} className="project-item">
                  <SkillCategory category={category} />
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mt-12 sm:mt-16 lg:mt-20 parallax-slow">
            <div className="section-header-reveal">
              <SectionHeader title="Certifications" />
            </div>

            <div className="space-y-4">
              <div className="certification-item">
                <a 
                  href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=437422F93A9467CA8A4D60291BC37E8244EEC8BA196C1CEE71233A122076ABF4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl font-saprona-light text-theme hover:font-saprona-semibold transition-all duration-200 hover:text-accent"
                >
                  Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
                </a>
              </div>
              
              <div className="certification-item">
                <a 
                  href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=58CCB636D811C9FAF46A22D65E1B51B73A41448EDCB5750A869246B0828D5CE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl font-saprona-light text-theme hover:font-saprona-semibold transition-all duration-200 hover:text-accent"
                >
                  Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate
                </a>
              </div>
              
              <div className="certification-item">
                <a 
                  href="https://www.credly.com/badges/62fe2e19-f5df-49a9-b0a4-51d54535e2e3/linked_in?t=s4zag3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl font-saprona-light text-theme hover:font-saprona-semibold transition-all duration-200 hover:text-accent"
                >
                  Machine Learning Fundamentals (Alteryx Micro-Credential)
                </a>
              </div>
            </div>
          </section>
          
          {/* Education Section */}
          <section className="mt-12 sm:mt-16 lg:mt-20 parallax-slow">
            <div className="section-header-reveal">
              <SectionHeader title="Education" />
            </div>

            <div className="space-y-6 lg:space-y-8">
              {educationData.map((education, index) => (
                <div key={index} className="testimonial-card">
                  <EducationItem education={education} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </MainLayout>
    </div>
  )
}

export default Page

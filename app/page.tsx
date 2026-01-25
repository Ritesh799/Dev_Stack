'use client'

import MainLayout from "@/components/main-layout"
import HeroSection from "@/components/work/hero-section"
import SectionHeader from "@/components/work/section-header"
import WorkItem from "@/components/work/work-item"
import ProjectItem from "@/components/work/project-item"
import { useGSAP } from "@/hooks/useGSAP"

const Page = () => {
  const { containerRef } = useGSAP()

  return (
    <div ref={containerRef} className="min-h-screen">
      <MainLayout renderGradient={true}>
        {/* Hero Section */}
        <section className="hero-title flex items-center">
          <HeroSection 
            title="Ritesh Patil."
            subtitle={
              <span className="hero-subtitle">

                A <span className="font-saprona-medium text-theme">Gen-AI Developer</span>
                <br />
                living in <span className="font-saprona-regular text-theme">Kolhapur, India.</span>
              </span>
            }
          />
        </section>

        {/* Work Section */}
        <section className="mt-12 sm:mt-20 lg:mt-32">
          <div className="section-header-reveal">
            <SectionHeader title="Experience" />
          </div>

          {/* Work Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            
            <div className="work-item parallax-slow">
              <WorkItem
                title={["AI Engineering Intern"]}
                company="ONPOINT SOFTWARE SERVICES PVT. LTD."
                companyLogo="/work/ONPOINT-IMG.png"
                period="Jul 2025 - Dec 2025"
                type="On Site • Intern"
                slug="onpoint"
              />
            </div>
          </div>
        </section>

          {/* Side Projects Section */}
          <section className="mt-12 sm:mt-20 lg:mt-32 mb-12 sm:mb-20 lg:mb-32">
            <div className="section-header-reveal">
              <SectionHeader title="Side projects" />
            </div>

              <div className="project-item parallax-medium">
                <ProjectItem
                  title="VitalVoice AI"
                  description={
                    <>
                      Built an AI voice assistant for real-time gym training and nutrition guidance through natural conversations. Features personalized workout coaching and meal planning.<br />
                      <span className="font-saprona-medium text-theme">Tech Stack: FastAPI, LiveKit , Google Gemini, LangGraph, PostgreSQL</span>
                    </>
                  }
                  buttonText="View Preview"
                  buttonHref="/work/voicegym"
                  imagePosition="right"
                  imageSrc="/side-projects/gymaivoice.png"
                />
              </div><br/>

	      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              <div className="project-item parallax-medium">
                <ProjectItem
                  title="Scribble.io"
                  description={
                    <>
                      Built a tool using Django and OpenCV that lets users draw math problems in the air using hand gestures. The system recognizes and solves equations in real-time using AI.<br />
                      <span className="font-saprona-medium text-theme">Tech Stack : Gemini, Django, OpenCV, Cvzone</span>.
                    </>
                  }
                  buttonText="View Repo"
                  buttonHref="https://github.com/Ritesh799/scribble.io"
                  imagePosition="left"
                  imageSrc="/side-projects/scribble.png"
                />
              </div>

            </div>
          </section>

        
        {/* What Colleagues Have Said Section 
        <section className="mt-12 sm:mt-20 lg:mt-32">
          <div className="section-header-reveal">
            <SectionHeader title="What colleagues have said" />
          </div>*/}

          {/* Testimonials Grid 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            <div className="testimonial-card parallax-fast">
              <TestimonialCard
                name="Kaushal Rola"
                title="Founder"
                company="Imobile Designs"
                initials="KR"
                profileImage="/testimonials/kaushal-rola.jpg"
                testimonial={
                  <>
                    <p className="text-sm sm:text-base lg:text-lg font-saprona-light text-theme leading-relaxed">
                      Ritesh is one of the most <span className="font-saprona-medium text-theme">talented developers</span> and <span className="font-saprona-medium text-theme">tech leaders</span> I&apos;ve known in my career.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-bogue-light text-theme-alt italic leading-relaxed">
                      He is incredibly versatile and knowledgeable and has super strong communication and story telling skills.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-saprona-light text-theme leading-relaxed">
                      He is one of the rare developers that excels at everything - <span className="font-saprona-medium text-theme">leadership, full-stack development </span> and <span className="font-saprona-medium text-theme">user experience design</span>.
                    </p>
                  </>
                }
              />
            </div>

            {/* <div className="testimonial-card parallax-fast">
              <TestimonialCard
                name="Dinesh Raju"
                title="CEO"
                company="ReferralCandy"
                initials="DR"
                testimonial={
                  <>
                    <p className="text-sm sm:text-base lg:text-lg font-saprona-light text-theme leading-relaxed">
                      Ritesh focused the development team and entire company around a <span className="font-saprona-medium text-theme">customer centric approach</span> for our product development.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-bogue-light text-theme-alt italic leading-relaxed">
                      This resulted in <span className="font-saprona-medium text-theme">rave reviews</span> from our merchants and significantly upgraded our technical architecture.
                    </p>
                  </>
                }
              />
            </div> 
          </div>
        </section>*/}  
      </MainLayout>
    </div>
  )
}

export default Page
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-theme-alt pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            {/* HELLO Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-saprona-semibold text-theme uppercase tracking-wider">
                HELLO
              </h3>
              <nav className="space-y-2">
                <Link href="/about" className="block text-sm font-saprona-regular text-theme-alt hover:text-theme transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="block text-sm font-saprona-regular text-theme-alt hover:text-theme transition-colors duration-200">
                  Contact
                </Link>
                <Link href="/resume.pdf" target="_blank" className="block text-sm font-saprona-regular text-theme-alt hover:text-theme transition-colors duration-200">
                  Resume
                </Link>
              </nav>
            </div>

            {/* SOCIAL Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-saprona-semibold text-theme uppercase tracking-wider">
                SOCIAL
              </h3>
              <nav className="space-y-2">
                <Link href="https://www.linkedin.com/in/riteshpatil2003/" target="_blank" className="block text-sm font-saprona-regular text-theme-alt hover:text-theme transition-colors duration-200">
                  LinkedIn
                </Link>
                <Link href="https://github.com/Ritesh799" target="_blank" className="block text-sm font-saprona-regular text-theme-alt hover:text-theme transition-colors duration-200">
                  GitHub
                </Link>
                
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm font-saprona-regular text-theme-alt">
              © Ritesh Patil 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

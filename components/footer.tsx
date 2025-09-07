import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/river-valley-logo.png"
                alt="River Valley Analytics Logo"
                width={40}
                height={40}
                className="w-10 h-10 invert"
              />
              <h3 className="font-black text-2xl uppercase tracking-tight">River Valley Analytics</h3>
            </div>
            <p className="font-bold">Data strategy, analytics training, and hands-on insights.</p>
          </div>

          <div>
            <h4 className="font-black text-lg uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@rivervalleyanalytics.com"
                className="flex items-center space-x-2 font-bold hover:text-emerald-400 transition-colors"
              >
                <Mail size={20} />
                <span>contact@rivervalleyanalytics.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gravesmitchell/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-bold hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg uppercase tracking-wide mb-4">Newsletter</h4>
            <p className="font-bold mb-4">Stay updated with The Everyday Analyst</p>
            <button className="bg-emerald-600 text-white font-black px-6 py-3 border-2 border-white uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t-2 border-white mt-8 pt-8 text-center">
          <p className="font-bold">© 2025 River Valley Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

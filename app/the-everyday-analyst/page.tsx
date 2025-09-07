import { Mail, Users } from "lucide-react"

export default function EverydayAnalystPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-black text-4xl md:text-5xl uppercase tracking-tight mb-4">
            THE <span className="text-emerald-600">EVERYDAY</span>
            <br />
            <span className="text-gray-700">ANALYST</span>
          </h1>
          <div className="w-16 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-lg font-medium max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Practical insights, training, and community for professionals who want to level up their skills, feel more
            comfortable leveraging data, and make a bigger impact.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter Section */}
          <div className="bg-slate-600 text-white p-8 rounded-none">
            <div className="flex items-center space-x-3 mb-6">
              <Mail size={24} />
              <h2 className="font-bold text-xl uppercase tracking-wide">NEWSLETTER</h2>
            </div>

            <p className="text-base mb-6 leading-relaxed">
              A free weekly newsletter for professionals across operations, marketing, finance, product, customer
              success, and beyond who want to upskill and thrive in a data-driven world.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 mt-2 flex-shrink-0 rounded-full"></div>
                <span className="text-sm">Practical tips you can apply immediately</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 mt-2 flex-shrink-0 rounded-full"></div>
                <span className="text-sm">Real-world case studies and examples</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 mt-2 flex-shrink-0 rounded-full"></div>
                <span className="text-sm">Career advice for analytics professionals</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm uppercase tracking-wide mb-4">PERFECT FOR:</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white text-slate-600 px-3 py-2 text-sm font-medium text-center">
                  Aspiring Data Analysts
                </div>
                <div className="bg-white text-slate-600 px-3 py-2 text-sm font-medium text-center">
                  Product Managers
                </div>
                <div className="bg-white text-slate-600 px-3 py-2 text-sm font-medium text-center">
                  Marketing Specialists
                </div>
                <div className="bg-white text-slate-600 px-3 py-2 text-sm font-medium text-center">
                  Financial Analysts
                </div>
              </div>
            </div>

            <a
              href="https://theeverydayanalyst.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white font-bold px-6 py-3 uppercase tracking-wide text-sm hover:bg-emerald-700 transition-colors"
            >
              READ ON SUBSTACK
            </a>
          </div>

          {/* Live Training Section */}
          <div className="bg-stone-600 text-white p-8 rounded-none">
            <div className="flex items-center space-x-3 mb-6">
              <Users size={24} />
              <h2 className="font-bold text-xl uppercase tracking-wide">LIVE TRAINING</h2>
            </div>

            <h3 className="font-bold text-lg uppercase mb-4">THINK LIKE AN ANALYST</h3>
            <p className="text-base mb-6 leading-relaxed">
              Coming this winter, a live cohort-based course that teaches the analytical mindset and problem-solving
              frameworks used by top analysts.
            </p>

            <div className="bg-white text-stone-600 p-4 mb-4">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3">WHAT YOU'LL LEARN:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Structured problem-solving methodologies</li>
                <li>• How to avoid common data traps</li>
                <li>• Executive communication strategies</li>
                <li>• How to influence using data</li>
              </ul>
            </div>

            <div className="bg-emerald-600 text-white p-4">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-3">WHO SHOULD JOIN:</h4>
              <p className="text-sm leading-relaxed">
                Anyone who wants to build skills and confidence in using data to make smarter decisions on a daily
                basis.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Feed Section */}
        <div className="mt-16">
          

          
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-black text-white p-8 text-center">
          <h2 className="font-bold text-2xl uppercase mb-4">Join the Community</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get notified about upcoming cohorts, new training offerings, and exclusive content.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@rivervalleyanalytics.com?subject=Training Waitlist&body=Hi Mitch,%0D%0A%0D%0APlease add me to the waitlist for upcoming training programs.%0D%0A%0D%0AName:%0D%0ARole:%0D%0AExperience Level:%0D%0AInterested In:"
              className="bg-emerald-600 text-white font-bold px-6 py-3 uppercase tracking-wide text-sm hover:bg-emerald-700 transition-colors"
            >
              Join Waitlist
            </a>

            <a
              href="https://theeverydayanalyst.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-600 text-white font-bold px-6 py-3 uppercase tracking-wide text-sm hover:bg-stone-700 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>

          
        </div>
      </div>
    </div>
  )
}

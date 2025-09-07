import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/river-valley-logo.png"
              alt="River Valley Analytics Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight mb-4">
            About <span className="text-slate-600">Mitch Graves</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="neubrutalist-card bg-slate-600 text-white">
              <h2 className="font-bold text-2xl uppercase mb-6">Philosophy</h2>
              <div className="space-y-4 text-base font-normal leading-relaxed">
                <p>
                  Technical skills are just one piece of the puzzle. Where many analysts fall short is in identifying
                  the most valuable problems to solve, communicating their insights clearly, and turning analysis into
                  action.
                </p>
                <p>
                  My goal is to help everyone, regardless of job title or function, to think like an analyst. That means
                  learning how to spot opportunities, structure your thinking, quantify impact, and communicate findings
                  in a way that actually drives decisions.
                </p>
              </div>
            </div>

            <div className="neubrutalist-card">
              <h2 className="font-bold text-2xl uppercase mb-6">Background</h2>
              <div className="space-y-4 text-base font-normal leading-relaxed text-gray-700">
                <p>
                  I'm a data scientist with over 8 years of experience across diverse roles, including data
                  architecture, product analytics, and strategy. I specialize in breaking down complex systems and
                  business problems to uncover insights that drive high-value, data-informed decisions. I like to get
                  things done, stay curious, and keep communication simple, whether I'm working with engineers or
                  executive teams. If you're looking for someone who can cut through the noise and help you use data in
                  a way that actually makes a difference, you're in the right place.
                </p>
                <p>
                  I've helped health systems, startups, and enterprise software companies turn messy data into clear
                  insights that drive action. Whether it's leading high-stakes reporting during a crisis, building
                  analytics infrastructure from scratch, or partnering with executives to shape strategy, I bring a mix
                  of technical depth, business intuition, and a bias for impact. My experience includes reporting to
                  federal agencies during COVID-19, measuring clinical and financial outcomes at Virta Health, and
                  driving product strategy at athenahealth, one of the largest healthcare software companies in the
                  United States.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="neubrutalist-card text-center">
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden border-2 border-black">
                <Image
                  src="/images/mitch-headshot.jpeg"
                  alt="Mitch Graves - Analytics Leader"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl uppercase">Mitch Graves</h3>
              <p className="font-medium text-gray-600">Data Guy</p>
            </div>

            <div className="neubrutalist-card bg-stone-600 text-white">
              <h3 className="font-bold text-xl uppercase mb-6">Highlights</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm uppercase mb-2 text-emerald-300">Years of Experience</h4>
                  <p className="font-medium text-lg">8+</p>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase mb-2 text-emerald-300">Industries</h4>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">Digital Health</p>
                    <p className="font-medium text-sm">Technology</p>
                    <p className="font-medium text-sm">Healthcare Providers</p>
                    <p className="font-medium text-sm">Healthcare Payers</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase mb-2 text-emerald-300">Toolset</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">SQL</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Python</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Airflow</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">dbt</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Tableau</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Looker</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Sigma</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">Snowflake</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">BigQuery</span>
                    <span className="bg-white text-stone-600 px-2 py-1 font-medium">SQL Server</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

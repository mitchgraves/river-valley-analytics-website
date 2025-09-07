import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Prominent logo display */}
                <div className="flex items-center justify-center lg:justify-start mb-8">
                  <Image
                    src="/images/river-valley-logo.png"
                    alt="River Valley Analytics Logo"
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
                    priority
                  />
                </div>

                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-center lg:text-left text-slate-700">
                  River Valley
                  <span className="block text-slate-700">Analytics</span>
                </h1>
                <div className="w-24 h-1 bg-emerald-600 mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-gray-700 text-center lg:text-left">
                Data strategy consulting, analytics training, and hands-on support for your data needs.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/about" className="flex-1 neubrutalist-button text-center">
                  About Mitch
                </Link>
                <Link
                  href="/work-with-me"
                  className="flex-1 neubrutalist-button bg-slate-600 text-white hover:bg-slate-700 text-center"
                >
                  Work With Me
                </Link>
                <Link
                  href="/the-everyday-analyst"
                  className="flex-1 neubrutalist-button bg-stone-600 text-white hover:bg-stone-700 text-center"
                >
                  The Everyday Analyst
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Decorative elements pushed to background */}
              <div className="absolute -top-8 -right-8 w-24 h-24 color-block-earth transform rotate-12 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 color-block-forest transform -rotate-12 -z-10"></div>

              <div className="neubrutalist-card bg-slate-600 text-white text-center relative z-10">
                <h3 className="font-bold text-2xl uppercase mb-4">Put Your Data to Work</h3>
                <p className="font-medium text-lg">
                  From strategy to execution, I help organizations unlock the power of their data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl uppercase tracking-tight mb-4">What I Do</h2>
            <div className="w-16 h-1 bg-stone-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neubrutalist-card">
              <div className="w-12 h-12 bg-emerald-600 mb-6"></div>
              <h3 className="font-bold text-xl uppercase mb-4">Strategy</h3>
              <p className="font-medium text-gray-700">
                Analytics strategy and roadmap development for data-driven organizations.
              </p>
            </div>

            <div className="neubrutalist-card">
              <div className="w-12 h-12 bg-slate-600 mb-6"></div>
              <h3 className="font-bold text-xl uppercase mb-4">Training</h3>
              <p className="font-medium text-gray-700">
                Hands-on training in Excel, SQL, and data visualization for teams and individuals.
              </p>
            </div>

            <div className="neubrutalist-card">
              <div className="w-12 h-12 bg-stone-600 mb-6"></div>
              <h3 className="font-bold text-xl uppercase mb-4">Insights</h3>
              <p className="font-medium text-gray-700">
                Data storytelling and executive communication that drives decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Mail } from "lucide-react"

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight mb-4">
            Work <span className="text-stone-600">With Me</span>
          </h1>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <p className="text-lg font-medium max-w-3xl mx-auto text-gray-700">
            Ready to transform your organization's relationship with data? Let's work together to build analytics
            capabilities that drive real business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="neubrutalist-card bg-slate-600 text-white">
              <h2 className="font-bold text-2xl uppercase mb-6">Consulting Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Automation & AI Agents</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">Stop wasting time on repetitive tasks.</p>
                  <p className="font-normal text-sm">
                    We build custom automation and AI-powered agents to streamline manual processes, reduce errors, and
                    free up your team's time for higher-impact work.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Dashboard & Reporting Design</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">See what matters, clearly.</p>
                  <p className="font-normal text-sm">
                    We design intuitive, actionable dashboards and reports that turn complex data into clear, compelling
                    stories. The goal is to empower better decisions at every level of your organization.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Analysis & Forecasting</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">Answers, not just data.</p>
                  <p className="font-normal text-sm">
                    From customer insights to marketing effectiveness to revenue forecasting, we transform raw data into
                    the insights you need to grow and adapt.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Data Tooling & Setup Advisory</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">Start smart with the right tools.</p>
                  <p className="font-normal text-sm">
                    Just getting started? We'll help you choose and implement the best data stack for your needs. We
                    focus on balancing cost, scalability, and long-term flexibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Natural Language Processing</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">Unlock the voice of your customers.</p>
                  <p className="font-normal text-sm">
                    We use advanced NLP techniques to analyze unstructured data like reviews, feedback, and transcripts.
                    This helps uncover sentiment, themes, and areas for improvement.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Not Sure Where to Start?</h3>
                  <p className="font-medium text-sm text-emerald-300 mb-2">Let's talk.</p>
                  <p className="font-normal text-sm">
                    We begin every engagement with a free 30-minute discovery call. Even if we're not the right fit,
                    we're happy to help point you in the right direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="neubrutalist-card bg-emerald-600 text-white">
              <h2 className="font-bold text-2xl uppercase mb-6">Training & Workshops</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Individual & Group Training</h3>
                  <p className="font-normal">
                    Hands-on training sessions in Excel, SQL, and data visualization tools. Customized to your team's
                    skill level and business needs.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">"Data Fluency" Team Upskilling</h3>
                  <p className="font-normal">
                    Comprehensive programs designed to elevate your entire team's data literacy, from basic concepts to
                    advanced analytical thinking.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg uppercase mb-2">Custom Workshops</h3>
                  <p className="font-normal">
                    Tailored workshops addressing your specific challenges, whether it's dashboard design, data
                    governance, or analytical methodology.
                  </p>
                </div>
              </div>
            </div>

            <div className="neubrutalist-card bg-stone-600 text-white">
              <h3 className="font-bold text-xl uppercase mb-4">Typical Engagement</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-stone-600 font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <span className="font-medium">Discovery & Assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-stone-600 font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <span className="font-medium">Strategy Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-stone-600 font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <span className="font-medium">Implementation & Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-stone-600 font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <span className="font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="neubrutalist-card bg-black text-white text-center">
          <h2 className="font-bold text-3xl uppercase mb-6">Ready to Get Started?</h2>
          <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to unlock your organization's analytical potential.
          </p>

          <a
            href="mailto:contact@rivervalleyanalytics.com?subject=Work With Me Inquiry&body=Hi Mitch,%0D%0A%0D%0AI'm interested in learning more about your consulting and training services.%0D%0A%0D%0A[Please share details about your organization and what you're looking to achieve]"
            className="inline-flex items-center space-x-3 bg-emerald-600 text-white font-bold px-6 py-3 border-2 border-white uppercase tracking-wide text-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#fff]"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>

          <p className="font-medium mt-6 text-gray-300">Typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  )
}

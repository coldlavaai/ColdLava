import { FadeIn, StaggerChildren, StaggerItem, TechTicker } from '@/components'

const services = [
  {
    title: 'Business systems built to spec',
    description: 'CRMs, platforms, and internal tools designed around your workflows. No adapting your business to fit the software.',
  },
  {
    title: 'Voice and chat agents that work 24/7',
    description: 'Custom-built AI that handles calls, qualifies leads, books appointments, and answers questions — trained on your business, in your tone.',
  },
  {
    title: 'Workflows that run without you',
    description: 'Connect your systems, eliminate manual tasks, and build processes that scale. From simple integrations to complex multi-step automation.',
  },
  {
    title: 'AI strategy without the jargon',
    description: 'Not sure where to start with AI? We assess your operations, identify opportunities, and build a roadmap you can actually execute.',
  },
]

const caseStudies = [
  {
    label: 'Vehicle Detailing',
    title: 'Detail Dynamics',
    problem: 'Missed calls and manual booking were costing jobs.',
    outcome: 'Every enquiry captured. Admin time cut by half.',
  },
  {
    label: 'Renewable Energy',
    title: 'Greenstar Solar',
    problem: 'Outdated site with no lead qualification.',
    outcome: '3x faster load times. Higher quality leads.',
  },
  {
    label: 'Multi-industry',
    title: 'Database Reactivation',
    problem: 'Thousands of old leads sitting untouched.',
    outcome: '£100k+ in recovered revenue.',
  },
]

const process = [
  {
    num: '01',
    title: 'Diagnose',
    description: 'We start by understanding your business, not just your requirements.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'Clear scope, timeline, and cost before we write a line of code.',
  },
  {
    num: '03',
    title: 'Build',
    description: 'We build in short cycles with regular check-ins. You see progress weekly.',
  },
  {
    num: '04',
    title: 'Support',
    description: 'Launch isn\'t the end. We optimise and evolve as your business grows.',
  },
]

const techStack = ['Next.js', 'Supabase', 'n8n', 'Vercel', 'GitHub', 'TypeScript']

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container-default text-center">
          <FadeIn>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
              Consultancy & Software Development
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl mx-auto mb-8">
              We build the systems your business actually needs
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
              Custom software, AI agents, and automation for companies done with off-the-shelf compromises.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/coldlava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a discovery call
              </a>
              <a href="#work" className="btn-secondary">
                View our work
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Subtle gradient orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)',
          }}
        />
      </section>

      {/* Tech Section */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="container-default text-center">
          <FadeIn>
            <p className="text-sm text-white/30 mb-8">
              Modern stack. Serious security. UK-based. GDPR-aware.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <TechTicker />
          </FadeIn>
        </div>
      </section>

      {/* Proof Band */}
      <section className="py-16 border-t border-white/5">
        <div className="container-default">
          <FadeIn>
            <p className="text-sm text-white/30 text-center mb-10">
              Trusted by operators who needed more than templates
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">100%</p>
                <p className="text-xs text-white/40 mt-1">5-star reviews</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">40%</p>
                <p className="text-xs text-white/40 mt-1">avg. admin time saved</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">£100k+</p>
                <p className="text-xs text-white/40 mt-1">revenue recovered</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-t border-white/5">
        <div className="container-default">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Systems that work around your business
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-white/50 leading-relaxed">
                We build software and automation tailored to how you actually operate — not how a product manager in San Francisco thinks you should.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 h-full">
                  <h3 className="text-lg md:text-xl font-medium mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* BOS Section */}
      <section id="bos" className="py-24 md:py-32 border-t border-white/5">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-sm uppercase tracking-[0.2em] text-orange-500 mb-4">
                  Coming 2026
                </p>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                  BOS
                </h2>
                <p className="text-xl md:text-2xl text-white/50 mb-6">
                  Business Operating System
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  We built BOS because CRMs are broken. An AI-native operating system designed for how modern businesses actually run.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <ul className="space-y-3 mb-10">
                  {[
                    'Not another CRM. A complete operating system.',
                    'AI built in from the start, not bolted on.',
                    'One system instead of twelve integrations.',
                    'Built for operators, not administrators.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50">
                      <span className="text-orange-500 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a href="#contact" className="btn-accent inline-flex">
                  Join the waitlist
                </a>
                <p className="text-sm text-white/30 mt-3">
                  For operators done stitching together tools.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="right">
              <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center">
                <div className="text-white/20 text-sm">
                  [Product visualization]
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 border-t border-white/5">
        <div className="container-default">
          <div className="mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Results, not promises
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-white/50 max-w-xl">
                A few of the systems we've built and the outcomes they've delivered.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="space-y-4">
            {caseStudies.map((study, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30 mb-2">
                        {study.label}
                      </p>
                      <h3 className="text-xl md:text-2xl font-medium mb-2">
                        {study.title}
                      </h3>
                      <p className="text-white/50 text-sm md:text-base">
                        {study.outcome}
                      </p>
                    </div>
                    <span className="text-sm text-white/30 group-hover:text-white/60 transition-colors whitespace-nowrap">
                      View case study →
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="container-default">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                No surprises. No black boxes.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-white/50 leading-relaxed">
                Every project follows a clear structure — whether it's a two-week automation or a six-month platform build.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {process.map((step, i) => (
              <StaggerItem key={i}>
                <div>
                  <span className="text-4xl md:text-5xl font-semibold text-white/10 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-t border-white/5">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Who we are
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-white/50 mb-16 leading-relaxed">
              Cold Lava is a consultancy and software development company based in Liverpool. We exist because off-the-shelf software fails most businesses — and AI has finally made custom solutions accessible.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-12 md:gap-16 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 mb-4 mx-auto" />
                <h3 className="font-medium mb-1">Oliver</h3>
                <p className="text-sm text-white/40 mb-2">Systems & Operations</p>
                <p className="text-sm text-white/30 max-w-[200px] mx-auto">
                  Builds the systems. Obsessed with workflows that work.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 mb-4 mx-auto" />
                <h3 className="font-medium mb-1">Jacob</h3>
                <p className="text-sm text-white/40 mb-2">Sales & Strategy</p>
                <p className="text-sm text-white/30 max-w-[200px] mx-auto">
                  Leads the conversations. Turns cold leads into closed deals.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm text-white/30 max-w-md mx-auto">
              We're operators first. We've run businesses, felt the pain of bad software, and built Cold Lava to fix it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 border-t border-white/5">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Let&apos;s talk
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-white/50 mb-12 leading-relaxed">
              Ready to build something? Book a discovery call or send us a message. No pitch decks, no pressure.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/coldlava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a discovery call
              </a>
              <a href="mailto:hello@coldlava.ai" className="btn-secondary">
                hello@coldlava.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

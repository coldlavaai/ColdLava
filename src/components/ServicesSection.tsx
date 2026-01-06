'use client'

import { motion } from 'framer-motion'
import { GridOverlay } from './GridOverlay'

const services = [
  {
    num: '01',
    title: 'Business systems built to spec',
    problem: 'Off-the-shelf software forces you to adapt your workflows. Spreadsheets break at scale.',
    description: 'Dashboards, platforms, internal tools and full-scale business operating systems designed around your workflows.',
    details: [
      'Custom dashboards and analytics',
      'Client portals and management systems',
      'Internal automation platforms',
      'Database design and migration',
      'Multi-user access control',
      'Real-time reporting'
    ],
    solutions: [
      'Stop losing leads in email chains and spreadsheets',
      'See your entire business in one place, not ten tabs',
      'Give clients visibility without chasing updates',
      'Scale operations without hiring another admin'
    ],
    featured: true
  },
  {
    num: '02',
    title: 'Voice and chat agents that work 24/7',
    problem: 'Missed calls = lost revenue. Your team can\'t answer every lead instantly.',
    description: 'Custom AI that handles inbound and outbound calls, qualifies leads, and books appointments while you sleep.',
    details: [
      'Inbound call handling',
      'Outbound calling campaigns',
      'Lead qualification and routing',
      'Appointment scheduling',
      'Multi-language support',
      'CRM integration'
    ],
    solutions: [
      'Never miss an inbound lead again',
      'Qualify prospects before they hit your calendar',
      'Follow up on dead leads automatically',
      'Book appointments 24/7'
    ]
  },
  {
    num: '03',
    title: 'Make the tools you use work together',
    problem: 'Your team wastes hours on copy-paste between systems. Data gets lost in the gaps.',
    description: 'Connect the platforms you already use through intelligent workflows. No need to rip and replace — just make everything talk to each other.',
    details: [
      'Connect Google Sheets, Xero, HubSpot, etc.',
      'Two-way data sync across platforms',
      'Email and SMS automation',
      'Auto-generate documents and invoices',
      'Payment processing workflows',
      'Smart notification systems'
    ],
    solutions: [
      'Leads from ads flow into your existing systems automatically',
      'Job updates sync across all your tools in real-time',
      'Invoices generate and send without manual work',
      'Everyone stays updated without checking five apps'
    ]
  },
  {
    num: '04',
    title: 'AI strategy without the jargon',
    problem: 'You know AI could help, but don\'t know where to start or what\'s actually possible.',
    description: 'Assess operations, identify opportunities, and build executable roadmaps. No buzzwords, just ROI.',
    details: [
      'Process audit and mapping',
      'ROI analysis and forecasting',
      'Technology selection',
      'Implementation planning',
      'Team training',
      'Ongoing optimization'
    ],
    solutions: [
      'Identify high-impact automation opportunities',
      'Build phased implementation roadmap',
      'Select the right tools for your budget',
      'Train your team on new systems'
    ]
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 border-t border-white/5 relative overflow-hidden">
      <GridOverlay spacing={32} opacity={0.01} />

      <div className="container-default relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
              Services / Capabilities
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Systems that <span className="text-cyan-500">work</span> around your business
          </h2>
        </motion.div>

        {/* Coordinate System Overlay */}
        <div className="absolute top-20 left-0 right-0 pointer-events-none">
          <div className="container-default relative">
            {/* X-axis coordinates */}
            <div className="flex justify-between items-center">
              <span className="font-mono text-[8px] text-white/20">X: 0.00</span>
              <span className="font-mono text-[8px] text-white/20">X: 1.00</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Service Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Y-axis dimension markers */}
          <div className="absolute -left-16 top-0 bottom-0 hidden xl:flex flex-col justify-between py-4 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-white/20">Y: 1.0</span>
              <div className="w-4 h-px bg-cyan-500/20" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-white/20">Y: 0.5</span>
              <div className="w-4 h-px bg-cyan-500/20" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-white/20">Y: 0.0</span>
              <div className="w-4 h-px bg-cyan-500/20" />
            </div>
          </div>

          {/* Left Column - Featured + Consulting */}
          <div className="space-y-8 lg:space-y-12">
            {/* Featured Service - Business Systems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
            {/* Outer technical frame */}
            <div className="absolute -inset-4 border border-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-700" />

            {/* Corner markers */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-500" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-500" />

            {/* Technical annotation */}
            <div className="absolute -top-3 left-8 bg-black px-3 z-10">
              <span className="font-mono text-[10px] text-cyan-500/60 uppercase tracking-wider">Featured / 01</span>
            </div>

            {/* Main card */}
            <div className="relative h-full bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/10 p-8 lg:p-10 overflow-hidden">
              {/* Animated scan line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent translate-y-0 group-hover:translate-y-full transition-transform duration-[3000ms] ease-linear" />

              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="font-mono text-[9px] text-cyan-500/60 uppercase tracking-wider">Active System</span>
              </div>

              {/* Content */}
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {services[0].title}
              </h3>

              {/* Problem statement */}
              <div className="mb-6 p-4 border-l-2 border-cyan-500/30 bg-cyan-500/5">
                <span className="font-mono text-[8px] text-cyan-500/60 uppercase tracking-wider block mb-2">Problem</span>
                <p className="text-white/70 text-sm leading-relaxed">{services[0].problem}</p>
              </div>

              <p className="text-white/60 mb-8 leading-relaxed text-lg">
                {services[0].description}
              </p>

              {/* Technical divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cyan-500/40" />
                <span className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-wider">Capabilities</span>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
              </div>

              {/* Capability grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {services[0].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="flex items-start gap-2 text-sm text-white/60 group/item hover:text-white/80 transition-colors"
                  >
                    <div className="w-1 h-1 bg-cyan-500/40 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-cyan-500/60" />
                    <span className="leading-relaxed">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Solutions section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-green-500/40" />
                  <span className="font-mono text-[9px] text-green-500/40 uppercase tracking-wider">Solutions</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/20 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {services[0].solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-white/50">
                      <div className="w-1 h-1 bg-green-500/40 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom metrics bar */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500/40 rotate-45" />
                    <span className="text-white/30">Production Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/30">Full Ownership</span>
                    <div className="w-1.5 h-1.5 bg-cyan-500/40 rotate-45" />
                  </div>
                </div>
              </div>

              {/* Hover grid overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
            </div>
          </motion.div>

            {/* Consulting Service */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Technical frame */}
              <div className="absolute -inset-2 border border-white/5 group-hover:border-cyan-500/10 transition-all duration-500" />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Service number */}
              <div className="absolute -top-2.5 left-6 bg-black px-2 z-10">
                <span className="font-mono text-[10px] text-cyan-500/60">{services[3].num}</span>
              </div>

              {/* Corner coordinates */}
              <div className="absolute bottom-0 left-0 translate-y-full pl-2 pt-1">
                <span className="font-mono text-[8px] text-white/15">[0.0, 0.0]</span>
              </div>

              {/* Dimension line connector from featured card */}
              <div className="absolute -top-6 left-1/2 w-px h-4 bg-gradient-to-b from-cyan-500/30 to-transparent hidden lg:block" />

              <div className="relative bg-white/[0.01] border border-white/5 p-6 lg:p-8 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-wider">Advisory</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {services[3].title}
                </h3>

                {/* Problem statement */}
                <div className="mb-4 p-3 border-l-2 border-purple-500/30 bg-purple-500/5">
                  <span className="font-mono text-[8px] text-purple-500/60 uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-white/70 text-xs leading-relaxed">{services[3].problem}</p>
                </div>

                <p className="text-white/50 mb-5 leading-relaxed">
                  {services[3].description}
                </p>

                {/* Compact capabilities */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-cyan-500/30" />
                    <span className="font-mono text-[8px] text-cyan-500/40 uppercase tracking-wider">Capabilities</span>
                  </div>
                  <div className="space-y-2">
                    {services[3].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-px h-3 bg-cyan-500/30" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-green-500/30" />
                    <span className="font-mono text-[8px] text-green-500/40 uppercase tracking-wider">Solutions</span>
                  </div>
                  <div className="space-y-2">
                    {services[3].solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 bg-green-500/40 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diagonal scan line effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Center dividing line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden lg:block pointer-events-none">
            <div className="relative h-full flex flex-col items-center">
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
              <div className="absolute top-1/2 -translate-y-1/2 bg-black px-2 py-1">
                <span className="font-mono text-[8px] text-white/20 uppercase tracking-wider">Cross Section</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Services */}
          <div className="space-y-8 lg:space-y-12">
            {/* Voice/Chat Agents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Technical frame */}
              <div className="absolute -inset-2 border border-white/5 group-hover:border-cyan-500/10 transition-all duration-500" />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Service number */}
              <div className="absolute -top-2.5 left-6 bg-black px-2 z-10">
                <span className="font-mono text-[10px] text-cyan-500/60">{services[1].num}</span>
              </div>

              {/* Corner coordinates */}
              <div className="absolute top-0 right-0 -translate-y-full pr-2 pb-1">
                <span className="font-mono text-[8px] text-white/15">[1.0, 0.66]</span>
              </div>

              <div className="relative bg-white/[0.01] border border-white/5 p-6 lg:p-8 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Status light */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-wider">24/7 Active</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {services[1].title}
                </h3>

                {/* Problem statement */}
                <div className="mb-4 p-3 border-l-2 border-green-500/30 bg-green-500/5">
                  <span className="font-mono text-[8px] text-green-500/60 uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-white/70 text-xs leading-relaxed">{services[1].problem}</p>
                </div>

                <p className="text-white/50 mb-5 leading-relaxed">
                  {services[1].description}
                </p>

                {/* Compact capabilities */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-cyan-500/30" />
                    <span className="font-mono text-[8px] text-cyan-500/40 uppercase tracking-wider">Capabilities</span>
                  </div>
                  <div className="space-y-2">
                    {services[1].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-px h-3 bg-cyan-500/30" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-green-500/30" />
                    <span className="font-mono text-[8px] text-green-500/40 uppercase tracking-wider">Solutions</span>
                  </div>
                  <div className="space-y-2">
                    {services[1].solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 bg-green-500/40 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diagonal scan line effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 pointer-events-none" />
              </div>

              {/* Dimension marker between cards */}
              <div className="absolute -bottom-6 left-0 right-0 flex items-center justify-center gap-2 hidden lg:flex">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/20" />
                <span className="font-mono text-[8px] text-white/20">Δ 120px</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/20" />
              </div>
            </motion.div>

            {/* Workflows */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Technical frame */}
              <div className="absolute -inset-2 border border-white/5 group-hover:border-cyan-500/10 transition-all duration-500" />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Service number */}
              <div className="absolute -top-2.5 left-6 bg-black px-2 z-10">
                <span className="font-mono text-[10px] text-cyan-500/60">{services[2].num}</span>
              </div>

              {/* Corner coordinates */}
              <div className="absolute top-0 right-0 -translate-y-full pr-2 pb-1">
                <span className="font-mono text-[8px] text-white/15">[1.0, 0.33]</span>
              </div>

              <div className="relative bg-white/[0.01] border border-white/5 p-6 lg:p-8 hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-wider">Automated</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {services[2].title}
                </h3>

                {/* Problem statement */}
                <div className="mb-4 p-3 border-l-2 border-cyan-500/30 bg-cyan-500/5">
                  <span className="font-mono text-[8px] text-cyan-500/60 uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-white/70 text-xs leading-relaxed">{services[2].problem}</p>
                </div>

                <p className="text-white/50 mb-5 leading-relaxed">
                  {services[2].description}
                </p>

                {/* Compact capabilities */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-cyan-500/30" />
                    <span className="font-mono text-[8px] text-cyan-500/40 uppercase tracking-wider">Capabilities</span>
                  </div>
                  <div className="space-y-2">
                    {services[2].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-px h-3 bg-cyan-500/30" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-green-500/30" />
                    <span className="font-mono text-[8px] text-green-500/40 uppercase tracking-wider">Solutions</span>
                  </div>
                  <div className="space-y-2">
                    {services[2].solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 bg-green-500/40 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diagonal scan line effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* One-liner testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <p className="text-white/40 italic text-base md:text-lg leading-relaxed mb-3">
            "They helped us automate our whole sales process and built us a website that represents the business brilliantly."
          </p>
          <p className="text-white/30 text-sm">— Jason Wides, Greenstar Solar</p>
        </motion.div>
      </div>
    </section>
  )
}

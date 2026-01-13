'use client'

import Link from 'next/link'
import { FadeIn, GridOverlay, TechnicalLabel, FAQSchema, ProductScreenshot, VideoEmbed, MouseCoordinates, ScrollProgressBar } from '@/components'
import { motion } from 'framer-motion'

const faqItems = [
  {
    question: 'What is Solar BOS?',
    answer:
      'Solar BOS is a complete business management platform built specifically for UK solar installation companies. It combines CRM, quoting, job management, calendar scheduling and light compliance tracking in one system designed around the solar installation workflow.',
  },
  {
    question: 'Who is Solar BOS designed for?',
    answer:
      'Solar BOS is built for UK-based solar installers and renewable EPCs, typically teams of 3–50 people doing 50–500+ residential and small commercial installs per year who have outgrown spreadsheets and generic CRMs.',
  },
  {
    question: 'How is Solar BOS different from generic CRM or field-service tools?',
    answer:
      'Generic CRMs and field-service tools treat solar as just another trade. Solar BOS is built around the end-to-end solar lifecycle – lead, survey, quote, install and aftercare – with job stages, fields and workflows that match how UK solar companies actually operate.',
  },
  {
    question: 'Does Solar BOS help with MCS documentation and DNO tracking?',
    answer:
      'Yes. Solar BOS is designed to keep customer, job and communication history in one place so it is much easier to stay on top of MCS documentation and DNO notifications. A dedicated compliance layer can then track specific forms, certificates and approvals as the product evolves.',
  },
  {
    question: 'Can my team use Solar BOS on site?',
    answer:
      'Yes. Solar BOS is built as a web application that works across desktop, tablet and mobile. Installers can see today\'s jobs, open the customer timeline, and update job stages and notes while they are on site.',
  },
  {
    question: 'How long does it take to get started with Solar BOS?',
    answer:
      'Most teams can be up and running in days rather than months. The system ships with sensible defaults for stages, fields and views so you can import customers and jobs, then refine as you go rather than starting from a blank sheet.',
  },
  {
    question: 'Can Solar BOS replace my existing CRM?',
    answer:
      'In many cases, yes. Solar BOS is designed to act as the primary system of record for customers, jobs and operational communication. Some companies still pair it with accounting tools such as Xero or QuickBooks for invoicing and finance.',
  },
  {
    question: 'Is my data secure and GDPR compliant?',
    answer:
      'Solar BOS is built on modern infrastructure with tenant-level isolation and strong access controls. Data is encrypted in transit, and the system is designed to help UK businesses meet their GDPR obligations.',
  },
  {
    question: 'Does Solar BOS integrate with my existing tools?',
    answer:
      'Solar BOS is designed to sit alongside the tools you already use, such as design, accounting and communication platforms. Roadmap work includes deeper integrations with popular UK tools where it makes sense.',
  },
  {
    question: 'How is Solar BOS priced?',
    answer:
      'Solar BOS is priced to be accessible for small and mid-size UK solar installers, with plans that scale as your team grows. Exact pricing and packaging are finalised with early customers and published before general release.',
  },
]

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Solar BOS',
  alternateName: 'Solar BOS – Business Operating System for UK Solar Installers',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Business Operating System',
  operatingSystem: 'Web',
  description:
    'Solar BOS is a complete business operating system built for UK solar installation companies. It combines job management, customer CRM, communications inbox, calendar scheduling, and compliance tracking in one platform designed around the solar installation workflow – from lead to survey to quote to install to aftercare.',
  url: 'https://coldlava.ai/solar-bos',
  author: {
    '@type': 'Organization',
    name: 'Cold Lava AI Ltd',
    url: 'https://coldlava.ai',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/PreOrder',
  },
  featureList: [
    'Solar-specific kanban job board with stages from enquiry to aftercare',
    'Customer 360° timeline with jobs, messages, appointments and call notes',
    'Multi-channel communication inbox for email, SMS and WhatsApp',
    'Calendar scheduling for surveys, installs and follow-up visits',
    'MCS certification and DNO (G98/G99) tracking support',
    'UK address formats and £ pricing built-in',
    'Drag-and-drop job stage management with activity history',
    'Compact view mode for high-volume lead handling',
    'Quick actions: click-to-call, send message, log notes',
    'Multi-tenant architecture with Supabase row-level security',
    'Extensive end-to-end test coverage for critical workflows',
    'Modern tech stack (Next.js, React Query, TypeScript)',
  ],
  audienceType: 'UK solar installation companies, renewable energy EPCs, small to mid-size solar installers',
}

// Architectural button component matching homepage style
function ArchitecturalButton({
  href,
  children,
  variant = 'primary',
  className = ''
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const isPrimary = variant === 'primary'

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group relative inline-block ${className}`}
    >
      {/* Architectural frame that expands on hover */}
      <div className="absolute -inset-2 border border-cyan-500/20 group-hover:border-[#C9A962]/40 transition-all duration-500" />
      <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />

      {/* Button */}
      <div className={`relative px-8 py-4 font-medium overflow-hidden ${
        isPrimary ? 'bg-white text-black' : 'bg-white/5 text-white border border-white/10'
      }`}>
        {/* Hover effect - gold sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962] to-[#D4B76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

        {/* Text */}
        <span className={`relative z-10 flex items-center justify-center gap-3 transition-colors duration-300 ${
          isPrimary ? 'group-hover:text-black' : 'group-hover:text-black'
        }`}>
          <span>{children}</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>

        {/* Scan line effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      </div>
    </a>
  )
}

// Architectural card with corner brackets
function ArchitecturalCard({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-white/[0.02] border border-white/5 p-6 md:p-7 hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all duration-500 ${className}`}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle grid pattern on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {children}
    </motion.div>
  )
}

export default function SolarBOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <FAQSchema faqs={faqItems} />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Mouse Coordinates */}
      <MouseCoordinates />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/5 overflow-hidden">
        <GridOverlay spacing={32} opacity={0.015} />
        <TechnicalLabel position="top-right">v0.1 · Early Access</TechnicalLabel>
        <TechnicalLabel position="bottom-left">MCS · DNO</TechnicalLabel>
        <TechnicalLabel position="bottom-right">Built by Cold Lava</TechnicalLabel>

        {/* Subtle glow */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

        {/* Dimension lines */}
        <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute right-0 top-1/3 w-px h-1/3 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

        <div className="container-default relative z-10 pt-28 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left: Copy and CTAs */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-cyan-500/60 mb-6"
              >
                Business Operating System for UK Solar Installers
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
              >
                Solar BOS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/40 mb-8 font-light"
              >
                Run your entire solar business from one board
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl"
              >
                Replace your patchwork of spreadsheets, generic CRMs, shared inboxes and WhatsApp groups with one system built around how solar companies actually run – from lead to survey to quote to install to aftercare.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
              >
                <ArchitecturalButton href="https://cal.com/coldlava/solar-bos-discovery">
                  Book a Solar BOS demo
                </ArchitecturalButton>
                <ArchitecturalButton href="#demo-video" variant="secondary">
                  Watch 60s walkthrough
                </ArchitecturalButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="border-t border-white/5 pt-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/20 mb-2">
                  Built in the UK
                </p>
                <p className="text-sm text-white/40">
                  For MCS-certified solar installation companies
                </p>
              </motion.div>
            </div>

            {/* Right: Product Screenshot with architectural frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden lg:block relative"
            >
              {/* Architectural frame around screenshot */}
              <div className="absolute -inset-4 border border-cyan-500/10" />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-500/30" />

              <ProductScreenshot
                src="/screenshots/dbr-dashboard.png"
                alt="Solar BOS job board showing solar installation stages from new lead to installed"
                caption="Solar job board with stages from lead to install"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who it is for / Problems / High-level solution */}
      <section id="process" className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        <GridOverlay spacing={60} opacity={0.01} />

        {/* Dimension line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

        <div className="container-default max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-block px-3 py-1 border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-wider">
                System Overview
              </span>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <ArchitecturalCard delay={0}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-cyan-500/60" />
                <h2 className="text-xl md:text-2xl font-semibold">Built for UK solar installers</h2>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                Solar BOS is designed for residential and small commercial solar companies in the UK that:
              </p>
              <ul className="space-y-2 text-white/60 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>Handle the full lifecycle from lead → survey → quote → install → aftercare</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>Run multiple crews and need shared visibility of every job and customer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>Are currently juggling spreadsheets, shared inboxes and WhatsApp</span>
                </li>
              </ul>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.1}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-orange-500/60" />
                <h3 className="text-xl md:text-2xl font-semibold">The status quo is fragile</h3>
              </div>
              <ul className="space-y-3 text-white/60 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Leads live in forms, inboxes and Excel – follow-up is inconsistent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>No single place to see where each job is, who owns it and what happens next</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>MCS paperwork and DNO notifications are scattered across folders and emails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Generic CRMs never quite match solar workflows without months of customisation</span>
                </li>
              </ul>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.2}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-cyan-500/60" />
                <h3 className="text-xl md:text-2xl font-semibold">One operating board</h3>
              </div>
              <ul className="space-y-3 text-white/60 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>A kanban job board tuned to solar stages and volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>A 360° customer timeline tying together jobs, messages and appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>A focused inbox for email, SMS and WhatsApp-style threads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">→</span>
                  <span>A calendar for surveys, installs and follow-up visits</span>
                </li>
              </ul>
            </ArchitecturalCard>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        <GridOverlay spacing={40} opacity={0.012} />

        {/* Architectural annotation */}
        <div className="absolute top-8 left-8 hidden md:block">
          <div className="font-mono text-[10px] text-cyan-500/40 uppercase tracking-wider flex items-center gap-2">
            <div className="w-6 h-px bg-cyan-500/40" />
            <span>Video Demo</span>
          </div>
        </div>

        <div className="container-default max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              See Solar BOS in action
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Watch a 60-second walkthrough of how Solar BOS helps UK solar installers manage their entire operation from one board
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            {/* Architectural frame around video */}
            <div className="absolute -inset-4 border border-cyan-500/10" />
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30" />

            <VideoEmbed
              videoUrl="https://www.loom.com/share/placeholder"
              title="Watch a 60-second walkthrough of Solar BOS"
              duration="60s"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="text-white/40 text-sm mb-6 font-mono">
              See how Solar BOS handles leads, customer timelines, communications and scheduling
            </p>
            <ArchitecturalButton href="https://cal.com/coldlava/solar-bos-discovery" variant="secondary">
              Book a personalized demo
            </ArchitecturalButton>
          </motion.div>
        </div>
      </section>

      {/* Features overview */}
      <section id="services" className="py-24 md:py-32 border-b border-white/5 relative">
        <GridOverlay spacing={32} opacity={0.015} />

        {/* Dimension lines */}
        <div className="absolute right-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent" />

        <div className="container-default max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-cyan-500/40" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500/60">
                Core Features
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Key features of Solar BOS
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Everything your team touches daily – leads, jobs, calls, site visits and notes – lives in one connected system instead of being spread across six tools
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ArchitecturalCard delay={0}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500/60">Feature 01</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Solar job board</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">
                Kanban board with solar-specific stages – from new enquiry to survey booked, quoted, won, installed and aftercare – designed to handle hundreds of leads without becoming unreadable.
              </p>
              <ul className="text-xs md:text-sm text-white/40 space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Drag-and-drop stage changes with full activity history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Compact mode for high-volume lead handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Stage totals and pipeline value at a glance</span>
                </li>
              </ul>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.05}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500/60">Feature 02</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Customer 360° timeline</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">
                A single profile for each household or business that shows jobs, messages, appointments and call notes in one scrollable timeline.
              </p>
              <ul className="text-xs md:text-sm text-white/40 space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Click-to-call and quick actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Job count and lifetime value in header</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Internal notes captured in seconds</span>
                </li>
              </ul>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.1}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500/60">Feature 03</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Communications inbox</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">
                An operations-focused inbox for email and SMS, with a data model ready for WhatsApp, so every conversation is tied back to the right customer and job.
              </p>
              <ul className="text-xs md:text-sm text-white/40 space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Threads sorted by latest activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Channel filters for email, SMS and WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Jump from message to job record</span>
                </li>
              </ul>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.15}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-500/60">Feature 04</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Calendar & scheduling</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">
                Day, week and month views for surveys, installs and follow-up visits, all linked back to the underlying jobs and customers.
              </p>
              <ul className="text-xs md:text-sm text-white/40 space-y-2 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Timeline view for busy survey days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Quick navigation from event to job</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500/60">→</span>
                  <span>Crew views and conflict detection (roadmap)</span>
                </li>
              </ul>
            </ArchitecturalCard>
          </div>
        </div>
      </section>

      {/* BOS-specific angle */}
      <section id="bos" className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        <GridOverlay spacing={48} opacity={0.012} />

        {/* Architectural glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl" />

        <div className="container-default max-w-6xl relative z-10">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 mb-6">
                <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-wider">
                  System Architecture
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                One BOS instead of a stack of tools
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Solar BOS is part of a family of industry-specific Business Operating Systems. Instead of stitching together generic CRMs, shared inboxes, spreadsheets and task apps, you get one opinionated system that reflects how UK solar companies actually run.
              </p>

              <ul className="space-y-4 text-white/60 text-sm md:text-base mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Solar-specific stages, fields and defaults from day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>A single customer and job model powering board, inbox, calendar and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Built on a modern, tested stack with strong data isolation between tenants</span>
                </li>
              </ul>

              {/* Security callout with architectural styling */}
              <div className="relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 p-6 md:p-7 mb-6">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-cyan-500/40" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-cyan-500/40" />

                <h4 className="text-sm md:text-base font-semibold mb-4 text-cyan-400/90 font-mono uppercase tracking-wider">
                  Security & Data Protection
                </h4>
                <ul className="space-y-3 text-xs md:text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400/60 mt-0.5">→</span>
                    <span>Your customer and job data is completely isolated from other solar companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400/60 mt-0.5">→</span>
                    <span>All customer information is encrypted in transit to protect sensitive data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400/60 mt-0.5">→</span>
                    <span>Automated testing runs continuously to keep critical workflows reliable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400/60 mt-0.5">→</span>
                    <span>Built on proven infrastructure designed for performance and scalability</span>
                  </li>
                </ul>
                <div className="mt-5 pt-5 border-t border-cyan-500/20">
                  <details className="group">
                    <summary className="text-xs text-cyan-400/70 cursor-pointer hover:text-cyan-400 transition-colors font-mono">
                      View technical details →
                    </summary>
                    <p className="text-xs text-white/40 mt-3 leading-relaxed">
                      Solar BOS is built on Supabase with row-level security policies, a modern tech stack (Next.js, React Query, TypeScript), and extensive end-to-end test coverage using Playwright.
                    </p>
                  </details>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:sticky lg:top-24"
            >
              <ArchitecturalCard className="h-full">
                <div className="mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80 block mb-3">
                    Comparison
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold">Why Solar BOS over generic CRMs?</h3>
                </div>
                <ul className="space-y-4 text-white/60 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <div>
                      <strong className="font-medium text-white">Solar-native:</strong> stages like survey booked, DNO submitted and install complete are first-class, not hacked in
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <div>
                      <strong className="font-medium text-white">UK-specific:</strong> built around the UK market, from address formats and £ pricing to MCS and DNO language
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <div>
                      <strong className="font-medium text-white">Operations-first:</strong> focuses on running jobs, teams and follow-up, not just marketing pipelines
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <div>
                      <strong className="font-medium text-white">AI-ready:</strong> structured data model for safe AI integration for call notes, suggested next actions and reporting
                    </div>
                  </li>
                </ul>
                <p className="text-white/50 text-sm md:text-base leading-relaxed border-t border-white/5 pt-5 mt-5">
                  If you\'re currently bending a generic CRM like HubSpot or Pipedrive to fit solar, or juggling Tradify/Jobber plus spreadsheets and email, Solar BOS gives you a cleaner long-term operating system.
                </p>
              </ArchitecturalCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UK-specific section */}
      <section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        <GridOverlay spacing={40} opacity={0.01} />

        {/* Dimension lines */}
        <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-orange-500/15 to-transparent" />

        <div className="container-default max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-3 py-1 border border-orange-500/30 bg-orange-500/5 mb-6">
              <span className="font-mono text-[10px] text-orange-400 uppercase tracking-wider">
                UK Solar Market
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Solar BOS understands UK solar operations
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              From MCS certification to DNO applications, Solar BOS is designed around the regulations, language and workflows that UK solar installers deal with every day
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <ArchitecturalCard delay={0}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80">UK Feature 01</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">MCS certification tracking</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                Keep customer, job and communication history in one place so you can easily track the documentation required for MCS certification without hunting through folders and emails.
              </p>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                Future roadmap includes dedicated MCS workflow dashboards with form and certificate tracking.
              </p>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.05}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80">UK Feature 02</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">DNO application tracking</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                Track G98 and G99 notifications as part of your job workflow. Solar BOS understands that DNO approvals are a critical stage in UK solar installations, not an afterthought.
              </p>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                Dedicated DNO status fields and reminders help you stay on top of grid connection approvals.
              </p>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.1}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80">UK Feature 03</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">UK addresses and pricing</h3>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                Solar BOS uses UK address formats, £ pricing, and language that matches how UK solar companies actually operate – not generic templates designed for US or global markets.
              </p>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                Built from the ground up for UK residential and small commercial solar installers.
              </p>
            </ArchitecturalCard>
          </div>
        </div>
      </section>

      {/* Social proof / fit for UK market */}
      <section id="clients" className="py-24 md:py-32 border-b border-white/5 relative">
        <GridOverlay spacing={60} opacity={0.008} />

        <div className="container-default max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-cyan-500/40" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500/60">
                Case Studies
              </p>
              <div className="h-px w-12 bg-cyan-500/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Built from real BOS projects
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Solar BOS is informed by the systems Cold Lava has already built for UK businesses in renewables and other industries – bespoke CRMs, operations platforms and automation that run thousands of jobs
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <ArchitecturalCard delay={0}>
              {/* Testimonial number */}
              <div className="absolute -top-3 left-6 bg-black px-2">
                <span className="font-mono text-[10px] text-cyan-500/60">01</span>
              </div>

              <blockquote className="relative mb-5">
                <div className="absolute -left-2 top-0 text-4xl text-cyan-500/10 leading-none font-serif">"</div>
                <p className="text-white/70 text-sm md:text-base italic leading-relaxed pl-4">
                  "Having one system that actually understands our solar workflow – from lead capture through to DNO submissions – has transformed how we operate. No more data scattered across three different tools."
                </p>
              </blockquote>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex-shrink-0 w-1 h-1 bg-cyan-500 rounded-full" />
                <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
                <cite className="not-italic text-right text-xs md:text-sm text-white/60 flex-shrink-0">
                  Operations director at a 12-person UK solar installer
                </cite>
              </div>
            </ArchitecturalCard>

            <ArchitecturalCard delay={0.1}>
              {/* Testimonial number */}
              <div className="absolute -top-3 left-6 bg-black px-2">
                <span className="font-mono text-[10px] text-cyan-500/60">02</span>
              </div>

              <blockquote className="relative mb-5">
                <div className="absolute -left-2 top-0 text-4xl text-cyan-500/10 leading-none font-serif">"</div>
                <p className="text-white/70 text-sm md:text-base italic leading-relaxed pl-4">
                  "Before we had a bespoke system built, our team was juggling spreadsheets, a generic CRM that didn\'t fit solar, and WhatsApp groups. Now every job, customer and conversation is in one place."
                </p>
              </blockquote>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex-shrink-0 w-1 h-1 bg-cyan-500 rounded-full" />
                <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
                <cite className="not-italic text-right text-xs md:text-sm text-white/60 flex-shrink-0">
                  MD of a UK renewables company
                </cite>
              </div>
            </ArchitecturalCard>
          </div>
        </div>
      </section>

      {/* Pricing Signal Section */}
      <section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
        <GridOverlay spacing={48} opacity={0.01} />

        {/* Architectural glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/3 rounded-full blur-3xl" />

        <div className="container-default max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-3 py-1 border border-orange-500/30 bg-orange-500/5 mb-6">
              <span className="font-mono text-[10px] text-orange-400 uppercase tracking-wider">
                Pricing
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Early access pricing
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Solar BOS is currently in early access with a small group of UK solar installers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ArchitecturalCard className="text-center md:text-left">
              <div className="max-w-2xl mx-auto">
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  Solar BOS pricing is being finalised with early access customers and is designed to be accessible for small and mid-size UK solar installers.
                </p>

                <ul className="space-y-4 text-white/60 text-sm md:text-base mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <span>Plans that scale with your team size and install volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <span>Simple per-user pricing with no surprise fees or complex tiers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">→</span>
                    <span>Early access customers get preferential pricing and help shape the roadmap</span>
                  </li>
                </ul>

                <div className="border-t border-white/5 pt-8">
                  <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8">
                    Exact pricing and packaging will be published before general release. If you are running or scaling a UK solar business, we can discuss pricing options on a call.
                  </p>
                  <div className="flex justify-center">
                    <ArchitecturalButton href="https://cal.com/coldlava/solar-bos-discovery">
                      Discuss pricing and early access
                    </ArchitecturalButton>
                  </div>
                </div>
              </div>
            </ArchitecturalCard>
          </motion.div>
        </div>
      </section>

      {/* Roadmap & FAQ */}
      <section id="contact" className="py-24 md:py-32 border-b border-white/5 relative">
        <GridOverlay spacing={32} opacity={0.012} />

        {/* Dimension lines */}
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

        <div className="container-default max-w-6xl relative z-10">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-orange-500/60" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Roadmap and integrations
                </h2>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Solar BOS starts by giving you a clean foundation: customer and job records, board, inbox and scheduling. On top of that, the roadmap focuses on the pieces that matter most to UK installers.
              </p>
              <ul className="space-y-4 text-white/60 text-sm md:text-base mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Deeper MCS and DNO workflows with status dashboards and reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Richer reporting on installs, conversion and team performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Resource views for crews and vehicles, with conflict detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Tighter integrations with design, accounting and quoting tools popular in the UK market</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>AI-assisted call notes and suggested next actions based on the customer timeline</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 border-t border-white/5 pt-8">
                Early access customers help shape this roadmap. If you are running or scaling a UK solar business, you can influence what ships next.
              </p>
              <div className="space-y-4">
                <ArchitecturalButton href="https://cal.com/coldlava/solar-bos-discovery" className="w-full sm:w-auto">
                  Talk about your solar operations
                </ArchitecturalButton>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed font-mono">
                  No big-sales process – a short conversation to understand how you currently run installs
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-cyan-500/40" />
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Solar BOS FAQs</h3>
              </div>
              <dl className="space-y-4">
                {faqItems.map((faq, index) => (
                  <ArchitecturalCard key={faq.question} delay={index * 0.02}>
                    {/* FAQ number */}
                    <div className="absolute -top-2.5 left-5 bg-black px-2">
                      <span className="font-mono text-[10px] text-cyan-500/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <dt className="text-sm md:text-base font-semibold mb-3 text-white leading-snug pr-8">
                      {faq.question}
                    </dt>
                    <dd className="text-sm md:text-base text-white/65 leading-relaxed">
                      {faq.answer}
                    </dd>
                  </ArchitecturalCard>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn, TechStackTicker, IntegrationsTicker, GridOverlay, TechnicalLabel, BOSVisual, BOSScreenshotCarousel, MouseCoordinates, ScrollProgressBar, ProcessSection, ServicesSection, PremiumHeroTitle } from '@/components'

const process = [
  { num: '01', title: 'Diagnose', desc: 'Understanding your business, not just requirements.' },
  { num: '02', title: 'Design', desc: 'Clear scope, timeline, and cost before any code.' },
  { num: '03', title: 'Build', desc: 'Short cycles with regular check-ins. Weekly progress.' },
  { num: '04', title: 'Support', desc: 'Launch isn\'t the end. We optimise as you grow.' },
]

// ProcessOrbit Component - Grid-Based Layout with Progressive Fill Animation
function ProcessOrbit() {
  const [activeCard, setActiveCard] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const radius = 190
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    // Track orbit progress and update active card + progress bar
    // 9-second orbit: Diagnose(0-2.25s), Design(2.25-4.5s), Build(4.5-6.75s), Support(6.75-9s)
    const orbitDuration = 9000
    const startTime = Date.now()

    const updateHighlight = () => {
      const elapsed = (Date.now() - startTime) % orbitDuration
      const progressValue = elapsed / orbitDuration

      // Update progress bar (0 to 1)
      setProgress(progressValue)

      // Update active card - ONE box always lit, switches to next when progress reaches it
      // Each card stays lit for a full quarter of the cycle
      let activeIndex
      if (progressValue < 0.25) activeIndex = 0  // Diagnose (0° - 90°)
      else if (progressValue < 0.5) activeIndex = 1  // Design (90° - 180°)
      else if (progressValue < 0.75) activeIndex = 2  // Build (180° - 270°)
      else activeIndex = 3  // Support (270° - 360°)

      setActiveCard(activeIndex)
    }

    const interval = setInterval(updateHighlight, 16) // ~60fps
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[1100px] mx-auto px-4 py-12">
      {/* Grid Container */}
      <div
        className="grid gap-6 md:gap-8 relative"
        style={{
          gridTemplateColumns: '1fr auto 1fr',
          gridTemplateRows: 'auto auto auto',
          gridTemplateAreas: `
            ". diagnose ."
            "support centre design"
            ". build ."
          `
        }}
      >
        {/* Circular Progress Path - Progressive Fill */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none z-0 hidden md:block">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 400 400">
            <defs>
              {/* Glow filter for progress bar */}
              <filter id="progressGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              {/* Gradient for progress bar - cyan/blue */}
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 1)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
              </linearGradient>
              {/* Radial gradients for quadrant fills - cyan with depth */}
              <radialGradient id="quadrantGradient1" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.25)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
              </radialGradient>
              <radialGradient id="quadrantGradient2" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.25)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
              </radialGradient>
              <radialGradient id="quadrantGradient3" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.25)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
              </radialGradient>
              <radialGradient id="quadrantGradient4" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.25)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
              </radialGradient>
            </defs>

            {/* Dimmed background circle - dotted - cyan/blue */}
            <circle
              cx="200"
              cy="200"
              r={radius}
              fill="none"
              stroke="rgba(6, 182, 212, 0.15)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />

            {/* Quadrant gradient fills - build up and STAY filled as progress moves through */}
            {/* Path 1: Top-Left in rotated view (270° to 360°) - fills last */}
            <path
              d="M 200 10 A 190 190 0 0 1 390 200 L 200 200 Z"
              fill="url(#quadrantGradient1)"
              opacity={progress < 0.75 ? 0 : (progress - 0.75) * 4}
              style={{ transition: 'opacity 0.1s ease' }}
            />
            {/* Path 2: Top-Right in rotated view (0° to 90°) - fills first */}
            <path
              d="M 390 200 A 190 190 0 0 1 200 390 L 200 200 Z"
              fill="url(#quadrantGradient2)"
              opacity={progress < 0.25 ? progress * 4 : 1}
              style={{ transition: 'opacity 0.1s ease' }}
            />
            {/* Path 3: Bottom-Right in rotated view (90° to 180°) - fills second */}
            <path
              d="M 200 390 A 190 190 0 0 1 10 200 L 200 200 Z"
              fill="url(#quadrantGradient3)"
              opacity={progress < 0.25 ? 0 : progress < 0.5 ? (progress - 0.25) * 4 : 1}
              style={{ transition: 'opacity 0.1s ease' }}
            />
            {/* Path 4: Bottom-Left in rotated view (180° to 270°) - fills third */}
            <path
              d="M 10 200 A 190 190 0 0 1 200 10 L 200 200 Z"
              fill="url(#quadrantGradient4)"
              opacity={progress < 0.5 ? 0 : progress < 0.75 ? (progress - 0.5) * 4 : 1}
              style={{ transition: 'opacity 0.1s ease' }}
            />

            {/* Full progressive circle fill */}
            <circle
              cx="200"
              cy="200"
              r={radius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              filter="url(#progressGlow)"
              style={{
                transition: 'stroke-dashoffset 0.016s linear',
              }}
            />
          </svg>
        </div>

        {/* Card: Diagnose (Top) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ gridArea: 'diagnose' }}
          className="justify-self-center relative z-10"
        >
          <ProcessCard step={process[0]} isActive={activeCard === 0} position="top" />
        </motion.div>

        {/* Card: Design (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ gridArea: 'design' }}
          className="justify-self-start self-center relative z-10"
        >
          <ProcessCard step={process[1]} isActive={activeCard === 1} position="right" />
        </motion.div>

        {/* Card: Build (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ gridArea: 'build' }}
          className="justify-self-center relative z-10"
        >
          <ProcessCard step={process[2]} isActive={activeCard === 2} position="bottom" />
        </motion.div>

        {/* Card: Support (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ gridArea: 'support' }}
          className="justify-self-end self-center relative z-10"
        >
          <ProcessCard step={process[3]} isActive={activeCard === 3} position="left" />
        </motion.div>

        {/* Centre: Cold Lava Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ gridArea: 'centre' }}
          className="justify-self-center self-center relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full border border-cyan-500/20 flex items-center justify-center overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black/80 to-black/90" />

          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-xl" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-cyan-500/30" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-cyan-500/30" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-cyan-500/30" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-cyan-500/30" />

          {/* Cold Lava Logo */}
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/Cold Lava Logo/Cold Lava - Icon.png"
              alt="Cold Lava"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ProcessCard Component - Compact & Refined
function ProcessCard({
  step,
  isActive,
  position
}: {
  step: typeof process[0]
  isActive: boolean
  position: 'top' | 'right' | 'bottom' | 'left'
}) {
  // Connector line direction based on position
  const connectorStyles = {
    top: 'bottom-[-24px] left-1/2 -translate-x-1/2 w-0.5 h-6',
    right: 'left-[-24px] top-1/2 -translate-y-1/2 h-0.5 w-6',
    bottom: 'top-[-24px] left-1/2 -translate-x-1/2 w-0.5 h-6',
    left: 'right-[-24px] top-1/2 -translate-y-1/2 h-0.5 w-6',
  }

  return (
    <div className="relative">
      {/* Connector line pointing to centre */}
      <motion.div
        animate={{
          opacity: isActive ? 0.4 : 0.2,
          background: isActive
            ? `linear-gradient(to ${position === 'top' || position === 'bottom' ? 'bottom' : 'right'}, rgba(201, 169, 98, 0.6), transparent)`
            : `linear-gradient(to ${position === 'top' || position === 'bottom' ? 'bottom' : 'right'}, rgba(6, 182, 212, 0.3), transparent)`,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute ${connectorStyles[position]} hidden md:block`}
      />

      {/* Card */}
      <motion.div
        animate={{
          scale: isActive ? 1.02 : 1,
          borderColor: isActive ? 'rgba(201, 169, 98, 0.5)' : 'rgba(255, 255, 255, 0.08)',
          boxShadow: isActive
            ? '0 0 30px rgba(201, 169, 98, 0.2), inset 0 0 20px rgba(201, 169, 98, 0.08)'
            : '0 0 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-black/80 backdrop-blur-sm border p-3 w-full md:w-[200px]"
      >
        {/* Gold background glow when active */}
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/15 via-[#C9A962]/8 to-transparent"
        />

        {/* Subtle grid pattern background */}
        <motion.div
          animate={{
            opacity: isActive ? 0.05 : 0.03,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: isActive
              ? 'linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)'
              : 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />

        {/* Corner brackets - refined */}
        <motion.div
          animate={{
            borderColor: isActive ? 'rgba(201, 169, 98, 0.8)' : 'rgba(6, 182, 212, 0.25)',
            opacity: isActive ? 1 : 0.6,
          }}
          transition={{ duration: 0.5 }}
          className="absolute -top-0.5 -left-0.5 w-3 h-3 border-l border-t"
        />
        <motion.div
          animate={{
            borderColor: isActive ? 'rgba(201, 169, 98, 0.8)' : 'rgba(6, 182, 212, 0.25)',
            opacity: isActive ? 1 : 0.6,
          }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r border-b"
        />

        {/* Step number header */}
        <div className="flex items-center gap-1.5 mb-2 relative z-10">
          <motion.div
            animate={{
              backgroundColor: isActive ? 'rgba(201, 169, 98, 0.7)' : 'rgba(6, 182, 212, 0.25)',
              height: isActive ? '18px' : '14px',
            }}
            transition={{ duration: 0.4 }}
            className="w-0.5"
          />
          <motion.span
            animate={{
              color: isActive ? 'rgba(201, 169, 98, 1)' : 'rgba(6, 182, 212, 0.6)',
            }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[9px] tracking-[0.15em] uppercase"
          >
            {step.num}
          </motion.span>
          <motion.div
            animate={{
              background: isActive
                ? 'linear-gradient(to right, rgba(201, 169, 98, 0.2), transparent)'
                : 'linear-gradient(to right, rgba(6, 182, 212, 0.15), transparent)',
            }}
            transition={{ duration: 0.4 }}
            className="flex-1 h-px"
          />
        </div>

        {/* Title */}
        <motion.h3
          animate={{
            color: isActive ? 'rgba(201, 169, 98, 0.95)' : 'rgb(255, 255, 255)',
          }}
          transition={{ duration: 0.4 }}
          className="text-sm md:text-base font-bold mb-1.5 relative z-10 leading-tight"
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          animate={{
            color: isActive ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.45)',
          }}
          transition={{ duration: 0.4 }}
          className="text-[11px] md:text-xs leading-relaxed relative z-10"
        >
          {step.desc}
        </motion.p>

        {/* Active state glow overlay */}
        <motion.div
          animate={{
            opacity: isActive ? 0.08 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cyan-500 pointer-events-none"
        />

        {/* Active state corner highlights */}
        <motion.div
          animate={{
            opacity: isActive ? 0.4 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-transparent pointer-events-none"
        />
        <motion.div
          animate={{
            opacity: isActive ? 0.4 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-cyan-500/20 to-transparent pointer-events-none"
        />
      </motion.div>
    </div>
  )
}

// Trust Principles Stack - Right Side
function TrustPrinciplesStack() {
  const principles = [
    'GDPR Compliant',
    'Code Ownership',
    'Full Transparency',
    'Source Control',
    'Documentation Included',
    'No Vendor Lock-in',
    'Security First',
    'Cloud-Native',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
    >
      {/* Subheading */}
      <div className="mb-4 flex items-center gap-2">
        <div className="w-6 h-px bg-cyan-500/20" />
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
          We believe
        </p>
      </div>

      {/* Stacked principles */}
      <div className="space-y-2">
        {principles.map((principle, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
            className="flex items-center gap-2 group"
          >
            {/* Dot indicator */}
            <div className="w-1 h-1 bg-cyan-500/40 rounded-full group-hover:bg-cyan-500/60 transition-colors" />

            {/* Principle text */}
            <span className="font-mono text-[10px] text-white/30 group-hover:text-white/40 uppercase tracking-wider whitespace-nowrap transition-colors">
              {principle}
            </span>

            {/* Technical line decoration */}
            <div className="w-3 h-px bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const testimonials = [
  {
    quote: 'Things have completely changed for the better. They helped us automate our whole sales process and built us a website that represents the business brilliantly.',
    author: 'Jason Wides',
    company: 'Greenstar Solar',
  },
  {
    quote: 'We have an AI assistant who answers the phone, grabs details and books jobs. We capture every client possible. Incredibly affordable compared to a full time member of staff.',
    author: 'Austin Eszcori',
    company: 'Detail Dynamics',
  },
  {
    quote: 'Working with Cold Lava has allowed us to rethink our client delivery systems and reshape the way our business processes and displays data.',
    author: 'Harry Bennett',
    company: 'LCB',
  },
  {
    quote: 'The team\'s knowledge of AI and system development coupled with their work ethic made them the perfect partners to tackle our team and data challenges. Very pleased.',
    author: 'Mat Cunningham',
    company: 'Upmarket Hotels & Leisure',
  },
  {
    quote: 'Incredibly efficient, knowledgeable, and easy to work with. Delivered everything on time, and often ahead of schedule. The end result far exceeded our expectations.',
    author: 'Jack Castle',
    company: '',
  },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Mouse Coordinates */}
      <MouseCoordinates />

      {/* HERO - Compact & Impactful */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <GridOverlay spacing={32} opacity={0.015} />

        {/* Technical Annotations */}
        <TechnicalLabel position="bottom-left">EST. 2024</TechnicalLabel>
        <TechnicalLabel position="bottom-right">United Kingdom</TechnicalLabel>

        {/* Subtle glow */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="container-default relative z-10 py-16">
          <div className="max-w-6xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/30 mb-8"
            >
              AI Consultancy & Software Development
            </motion.p>

            {/* Headline - Premium word swap */}
            <PremiumHeroTitle contentDelay={0.8} swapDelay={1.5} />

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Custom software, AI agents, and automation for UK businesses ready to scale beyond generic tools.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-12"
            >
              <a
                href="https://cal.com/coldlava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                {/* Architectural frame that expands on hover */}
                <div className="absolute -inset-2 border border-cyan-500/20 group-hover:border-[#C9A962]/40 transition-all duration-500" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />

                {/* Button */}
                <div className="relative px-8 py-4 bg-white text-black font-medium overflow-hidden">
                  {/* Hover effect - cyan sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962] to-[#D4B76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                    <span>Talk to us</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </a>
            </motion.div>

            {/* Tech Stack Ticker - Integrated */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-white/5 pt-6 mt-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/20 mb-3">
                Modern stack. <span className="text-cyan-500">Serious security</span>. UK based.
              </p>
              <TechStackTicker />
            </motion.div>
          </div>
        </div>

        {/* Dimension line (decorative) */}
        <div className="absolute right-0 top-1/2 w-px h-32 bg-cyan-500/20" />
      </section>

      {/* OLIVER'S QUOTE - Architectural Statement */}
      <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
        <div className="container-default max-w-6xl relative">
          {/* Architectural grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />

          {/* Dimension line - left */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent origin-top"
          />

          {/* Dimension line - right */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent origin-top"
          />

          {/* Philosophy/001 - Box Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-white/5 p-8 md:p-12 max-w-5xl mx-auto"
          >
            {/* Architectural annotation */}
            <div className="absolute -top-3 left-8 bg-black px-3">
              <span className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-wider">
                Philosophy / 001
              </span>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-500/20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-500/20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-500/20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-500/20" />

            {/* Main quote */}
            <blockquote className="relative text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-cyan-500/10 font-serif leading-none">"</div>

              <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight text-white/90 italic mb-8">
                Custom solutions for how <span className="text-cyan-400">you work</span>, not how Silicon Valley thinks you should.
              </p>

              {/* Attribution */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-cyan-500/30" />
                <cite className="not-italic">
                  <span className="text-white/80 font-medium">Oliver</span>
                  <span className="text-white/40 font-mono text-xs ml-2">/ Head Developer</span>
                </cite>
                <div className="h-px w-12 bg-cyan-500/30" />
              </div>
            </blockquote>

            {/* Dimension markers */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-cyan-500/20" />
              <div className="w-2 h-px bg-cyan-500/20" />
              <div className="w-px h-4 bg-cyan-500/20" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-cyan-500/20" />
              <div className="w-2 h-px bg-cyan-500/20" />
              <div className="w-px h-4 bg-cyan-500/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS - Orb Wave Animation */}
      <ProcessSection />

      <ServicesSection />


      {/* BOS - Full Width Dramatic */}
      <section id="bos" className="py-32 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
        <GridOverlay spacing={24} opacity={0.02} />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

        <div className="container-default relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 mb-8">
                <span className="font-mono text-xs text-cyan-500 uppercase tracking-wider">
                  Flagship Product
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                BOS
              </h2>
              <p className="text-3xl text-white/40 mb-8 font-light">
                Business Operating System
              </p>

              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
                Stop bending your business to fit off the shelf software. BOS is built around you, like an <span className="text-cyan-500">exoskeleton</span>. Custom fitted to your processes, not some San Francisco tech team's idea of how you should work.
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  'Built from the ground up for your business, not configured.',
                  'Manages your entire operation, not just customers.',
                  'Does exactly what you need and nothing you don\'t.',
                  'One integrated system instead of twelve apps held together with duct tape.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">→</span>
                    <span className="text-white/50">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/coldlava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                {/* Architectural frame that expands on hover */}
                <div className="absolute -inset-2 border border-cyan-500/20 group-hover:border-[#C9A962]/40 transition-all duration-500" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />

                {/* Button */}
                <div className="relative px-8 py-4 bg-white text-black font-medium overflow-hidden">
                  {/* Hover effect - cyan sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962] to-[#D4B76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                    <span>Talk to us</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </a>
            </motion.div>

            {/* Right - Screenshots & Capabilities */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <BOSScreenshotCarousel />

              {/* System Capabilities - BOS vs CRM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-white/5"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-4">
                  Why BOS vs Traditional CRM
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'AI Integration', value: 'Native multi-agent' },
                    { label: 'Customization', value: 'Built for you' },
                    { label: 'Features', value: 'Zero bloat' },
                    { label: 'Architecture', value: 'Fully modular' },
                  ].map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] text-white/30 font-mono uppercase tracking-wider">
                        {spec.label}
                      </p>
                      <p className="text-sm text-cyan-500/80 font-medium leading-tight">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* One-liner testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-20 max-w-3xl mx-auto"
          >
            <p className="text-white/40 italic text-base md:text-lg leading-relaxed mb-3">
              "Working with Cold Lava has allowed us to rethink our client delivery systems and reshape the way our business processes and displays data."
            </p>
            <p className="text-white/30 text-sm">— Harry Bennett, LCB</p>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 border-t border-white/5">
        <div className="container-default">
          <p className="font-mono text-xs text-white/20 text-center uppercase tracking-wider mb-8">
            We integrate with the tools <span className="text-cyan-500">you already use</span>
          </p>
          <IntegrationsTicker />
        </div>
      </section>

      {/* TESTIMONIALS - Architectural Blueprint */}
      <section id="clients" className="relative py-24 border-t border-white/5 overflow-hidden">
        <div className="container-default">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-cyan-500/40" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Client Testimonials
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Working with Cold Lava
            </h2>
          </div>

          {/* Architectural Testimonial Grid */}
          <div className="grid md:grid-cols-12 gap-5 auto-rows-min">
            {testimonials.map((t, i) => {
              // Architectural layout pattern: varied sizes for visual interest
              const layouts = [
                'md:col-span-7', // Greenstar
                'md:col-span-5', // Detail Dynamics
                'md:col-span-5', // LCB
                'md:col-span-7', // Upmarket Hotels
                'md:col-span-12', // Jack Castle - full width
              ]

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`group relative ${layouts[i]}`}
                >
                  {/* Architectural frame */}
                  <div className="relative bg-white/[0.01] border border-white/5 p-5 md:p-6 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-700">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Testimonial number */}
                    <div className="absolute -top-2.5 left-5 bg-black px-2">
                      <span className="font-mono text-[10px] text-cyan-500/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="relative mb-5">
                      <div className="absolute -left-2 top-0 text-5xl text-cyan-500/10 leading-none font-serif">"</div>
                      <p className={`relative text-white/70 italic leading-relaxed pl-4 ${i === 4 ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                        {t.quote}
                      </p>
                    </blockquote>

                    {/* Attribution with architectural line */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-1 h-1 bg-cyan-500 rounded-full" />
                      <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
                      <cite className="not-italic flex-shrink-0">
                        <div className="text-right">
                          <div className="text-cyan-500 font-medium text-sm">{t.author}</div>
                          {t.company && (
                            <div className="text-white/40 font-mono text-[10px] mt-0.5">{t.company}</div>
                          )}
                        </div>
                      </cite>
                    </div>
                  </div>

                  {/* Subtle grid overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Background architectural elements */}
        <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-px h-1/4 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
      </section>


      {/* CONTACT - Split */}
      <section id="contact" className="py-32 border-t border-white/5 relative">
        <GridOverlay spacing={32} opacity={0.015} />

        <div className="container-default relative">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/30 mb-4">
                Contact
              </p>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Let's <span className="text-cyan-500">talk</span>
              </h2>
              <p className="text-xl text-white/50 mb-6">
                Ready to build something? Book a discovery call or send us a message.
              </p>
              <p className="text-white/40">
                No pitch decks, no pressure.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <a
                href="https://cal.com/coldlava/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block w-full"
              >
                {/* Architectural frame that expands on hover */}
                <div className="absolute -inset-2 border border-cyan-500/20 group-hover:border-[#C9A962]/40 transition-all duration-500" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />

                {/* Button */}
                <div className="relative px-8 py-5 bg-white text-black font-medium overflow-hidden">
                  {/* Hover effect - cyan sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962] to-[#D4B76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  {/* Text */}
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                    <span>Book a discovery call</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </a>

              <a
                href="mailto:hello@coldlava.ai"
                className="group relative inline-block w-full"
              >
                {/* Architectural frame that expands on hover */}
                <div className="absolute -inset-2 border border-cyan-500/20 group-hover:border-[#C9A962]/40 transition-all duration-500" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-cyan-500/40 group-hover:border-[#C9A962]/70 transition-all duration-500" />

                {/* Button */}
                <div className="relative px-8 py-5 bg-white text-black font-medium overflow-hidden">
                  {/* Hover effect - cyan sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962] to-[#D4B76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  {/* Text */}
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300 font-mono text-sm">
                    <span>hello@coldlava.ai</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

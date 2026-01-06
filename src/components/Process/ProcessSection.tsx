'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { WaveOrb } from './WaveOrb'
import { StageCard } from './StageCard'

const processStages = [
  { num: '01', title: 'Diagnose', desc: 'Understanding your business, not just requirements.', position: 'top' as const },
  { num: '02', title: 'Design', desc: 'Clear scope, timeline, and cost before any code.', position: 'bottom' as const },
  { num: '03', title: 'Build', desc: 'Short cycles with regular check-ins. Weekly progress.', position: 'top' as const },
  { num: '04', title: 'Support', desc: 'Launch isn\'t the end. We optimise as you grow.', position: 'bottom' as const },
]

export function ProcessSection() {
  const [activeStage, setActiveStage] = useState<number>(0)
  const [startTime, setStartTime] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Start animation immediately on mount
  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  // Update active stage based on timer
  // Stages positioned at: 12%, 37%, 62%, 87% along the path
  // With 12s total duration, that's: 1.44s, 4.44s, 7.44s, 10.44s
  useEffect(() => {
    if (!startTime) return

    const totalDuration = 12000 // 12 seconds total

    // Stage timing based on orb position along path (starts immediately)
    const stageTimes = [
      { start: 0, end: 3000 },      // Diagnose: 0-3s
      { start: 3000, end: 6000 },   // Design: 3-6s
      { start: 6000, end: 9000 },   // Build: 6-9s
      { start: 9000, end: 12000 },  // Support: 9-12s
    ]

    const updateStage = () => {
      const elapsed = (Date.now() - startTime) % totalDuration

      let newStage = -1
      for (let i = 0; i < stageTimes.length; i++) {
        if (elapsed >= stageTimes[i].start && elapsed < stageTimes[i].end) {
          newStage = i
          break
        }
      }

      if (newStage !== activeStage) {
        setActiveStage(newStage)
      }
    }

    // Update immediately
    updateStage()

    // Update every 100ms
    const interval = setInterval(updateStage, 100)

    return () => clearInterval(interval)
  }, [startTime, activeStage])

  return (
    <section id="process" ref={sectionRef} className="py-16 md:py-24 lg:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="container-default relative">
        {/* Section Header - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="h-px w-8 md:w-12 bg-cyan-500/40" />
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30">
              Process / Methodology
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            No <span className="text-cyan-500">surprises</span>
            <br />
            No black boxes
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[35%_65%] gap-12 md:gap-16 items-start">
          {/* Left Column - Philosophy & Priorities */}
          <div className="space-y-12">
            {/* Philosophy Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative border border-white/5 p-6 md:p-8"
            >
              {/* Architectural annotation */}
              <div className="absolute -top-3 left-6 bg-black px-3">
                <span className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-wider">
                  Philosophy / 002
                </span>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-cyan-500/20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-cyan-500/20" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-cyan-500/20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-cyan-500/20" />

              <p className="font-mono text-xs md:text-sm lg:text-base text-white/50 leading-relaxed">
                Good, fast, cheap. You can only pick two. We optimise for <span className="text-cyan-500/80">good</span>.
              </p>

              {/* Dimension markers - Hidden on mobile */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-1 hidden md:flex">
                <div className="w-px h-4 bg-cyan-500/20" />
                <div className="w-2 h-px bg-cyan-500/20" />
                <div className="w-px h-4 bg-cyan-500/20" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-1 hidden md:flex">
                <div className="w-px h-4 bg-cyan-500/20" />
                <div className="w-2 h-px bg-cyan-500/20" />
                <div className="w-px h-4 bg-cyan-500/20" />
              </div>
            </motion.div>

            {/* Development Priorities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Label with architectural line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-cyan-500/20" />
                <span className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-wider">
                  Development Priorities
                </span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* Priorities Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Security First',
                  'Code Ownership',
                  'Transparent Pricing',
                  'GDPR Compliant',
                  'Full Transparency',
                  'No Vendor Lock-in',
                  'Documentation Included',
                  'Source Control',
                ].map((priority, idx) => (
                  <motion.div
                    key={priority}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                    className="flex items-center gap-2 group"
                  >
                    {/* Technical marker */}
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                      <div className="w-2 h-px bg-cyan-500/20" />
                    </div>

                    {/* Priority text */}
                    <span className="font-mono text-[10px] text-white/40 group-hover:text-white/50 uppercase tracking-wider transition-colors">
                      {priority}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom technical annotation */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 border border-cyan-500/30 rotate-45" />
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-wider">
                    System Parameters / Non-Negotiable
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Wave Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Stage cards positioned along wave */}
            <div className="relative">
              {/* Cards container - positioned relative to wave */}
              <div className="relative">
                {/* Top row cards */}
                <div className="absolute top-0 left-0 w-full flex justify-between px-8 z-10">
                  <div className="relative" style={{ marginLeft: '8%' }}>
                    <StageCard
                      num={processStages[0].num}
                      title={processStages[0].title}
                      description={processStages[0].desc}
                      isActive={activeStage === 0}
                      position="top"
                    />
                  </div>
                  <div className="relative" style={{ marginRight: '8%' }}>
                    <StageCard
                      num={processStages[2].num}
                      title={processStages[2].title}
                      description={processStages[2].desc}
                      isActive={activeStage === 2}
                      position="top"
                    />
                  </div>
                </div>

                {/* Wave with orb - behind cards */}
                <div className="relative z-0">
                  <WaveOrb isAnimating={true} />
                </div>

                {/* Bottom row cards */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-8 z-10">
                  <div className="relative" style={{ marginLeft: '28%' }}>
                    <StageCard
                      num={processStages[1].num}
                      title={processStages[1].title}
                      description={processStages[1].desc}
                      isActive={activeStage === 1}
                      position="bottom"
                    />
                  </div>
                  <div className="relative" style={{ marginRight: '0%' }}>
                    <StageCard
                      num={processStages[3].num}
                      title={processStages[3].title}
                      description={processStages[3].desc}
                      isActive={activeStage === 3}
                      position="bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom annotation */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-8 bg-cyan-500/20" />
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                    Continuous Development Cycle
                  </p>
                  <div className="h-px w-8 bg-cyan-500/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Fallback - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {processStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-white/5 p-6 bg-white/[0.01]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-0.5 h-4 bg-cyan-500/40" />
                  <span className="font-mono text-[9px] text-cyan-500/60 uppercase tracking-wider">
                    {stage.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}

            <div className="text-center pt-6">
              <div className="inline-flex items-center gap-3">
                <div className="h-px w-8 bg-cyan-500/20" />
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                  Continuous Development Cycle
                </p>
                <div className="h-px w-8 bg-cyan-500/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

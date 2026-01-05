'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Tech Stack - Engineering credibility logos
const techStackLogos = [
  { name: 'Next.js', path: '/logos/nextjs.png' },
  { name: 'TypeScript', path: '/logos/typescript.svg' },
  { name: 'React', path: '/logos/react.svg' },
  { name: 'Node.js', path: '/logos/nodejs.svg' },
  { name: 'Python', path: '/logos/python.svg' },
  { name: 'Supabase', path: '/logos/supabase.svg' },
  { name: 'PostgreSQL', path: '/logos/postgresql.svg' },
  { name: 'AWS', path: '/logos/aws.svg' },
  { name: 'Vercel', path: '/logos/vercel.svg' },
  { name: 'Docker', path: '/logos/docker.svg' },
  { name: 'GitHub', path: '/logos/github.png' },
]

// Integrations - Business utility logos
const integrationsLogos = [
  { name: 'HubSpot', path: '/logos/hubspot.png' },
  { name: 'Xero', path: '/logos/xero.png' },
  { name: 'Stripe', path: '/logos/stripe.svg' },
  { name: 'Twilio', path: '/logos/twilio.svg' },
  { name: 'WhatsApp', path: '/logos/whatsapp.svg' },
  { name: 'Shopify', path: '/logos/shopify.svg' },
  { name: 'Cal.com', path: '/logos/cal.svg' },
  { name: 'Google', path: '/logos/google.png' },
  { name: 'Zapier', path: '/logos/zapier.png' },
  { name: 'Make', path: '/logos/make.png' },
  { name: 'n8n', path: '/logos/n8n.svg' },
  { name: 'Airtable', path: '/logos/airtable.png' },
  { name: 'OpenAI', path: '/logos/openai.svg' },
  { name: 'Claude', path: '/logos/claude.svg' },
  { name: 'Anthropic', path: '/logos/anthropic.svg' },
  { name: 'ElevenLabs', path: '/logos/elevenlabs.svg' },
  { name: 'Retell', path: '/logos/retell.png' },
  { name: 'VAPI', path: '/logos/VAPIFULL.png' },
]

type Logo = { name: string; path: string }

function LogoTicker({ logos }: { logos: Logo[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const repeatedLogos = [...logos, ...logos, ...logos]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSpotlight = () => {
      const items = container.querySelectorAll('[data-logo-item]')
      const centerX = window.innerWidth / 2

      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const itemCenterX = rect.left + rect.width / 2
        const distanceFromCenter = Math.abs(centerX - itemCenterX)

        // Spotlight radius - sized to ensure at least one logo is always lit
        const spotlightRadius = 140

        if (distanceFromCenter < spotlightRadius) {
          item.classList.add('in-spotlight')
        } else {
          item.classList.remove('in-spotlight')
        }
      })
    }

    // Update continuously as ticker animates
    const interval = setInterval(updateSpotlight, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Subtle gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Spotlight beam indicator (subtle) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex items-center animate-ticker relative z-[1]"
        style={{ width: 'max-content' }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            data-logo-item
            className="flex-shrink-0 px-8 md:px-10"
          >
            <div className="h-12 w-32 flex items-center justify-center">
              <Image
                src={logo.path}
                alt={logo.name}
                width={140}
                height={48}
                className="logo-img h-10 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-500"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStackTicker() {
  return (
    <div className="py-6">
      <LogoTicker logos={techStackLogos} />
    </div>
  )
}

export function IntegrationsTicker() {
  return (
    <div className="py-6">
      <LogoTicker logos={integrationsLogos} />
    </div>
  )
}

// Legacy export for backward compatibility
export function TechTicker() {
  return <TechStackTicker />
}

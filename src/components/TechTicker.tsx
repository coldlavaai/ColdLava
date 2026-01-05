'use client'

import Image from 'next/image'

// Using working logos - mix of wordmarks and icons
const allLogos = [
  { name: 'React', path: '/logos/react.svg' },
  { name: 'TypeScript', path: '/logos/typescript.svg' },
  { name: 'Node.js', path: '/logos/nodejs.svg' },
  { name: 'Next.js', path: '/logos/nextjs.png' },
  { name: 'Supabase', path: '/logos/supabase.svg' },
  { name: 'PostgreSQL', path: '/logos/postgresql.svg' },
  { name: 'Docker', path: '/logos/docker.svg' },
  { name: 'OpenAI', path: '/logos/openai.svg' },
  { name: 'Claude', path: '/logos/claude.svg' },
  { name: 'Anthropic', path: '/logos/anthropic.svg' },
  { name: 'ElevenLabs', path: '/logos/elevenlabs.svg' },
  { name: 'Retell', path: '/logos/retell.png' },
  { name: 'VAPI', path: '/logos/vapi.png' },
  { name: 'Twilio', path: '/logos/twilio.svg' },
  { name: 'Telegram', path: '/logos/telegram.svg' },
  { name: 'WhatsApp', path: '/logos/whatsapp.svg' },
  { name: 'Sanity', path: '/logos/sanity.svg' },
  { name: 'Shopify', path: '/logos/shopify.svg' },
  { name: 'WordPress', path: '/logos/wordpress.svg' },
  { name: 'Stripe', path: '/logos/stripe.svg' },
  { name: 'Vercel', path: '/logos/vercel.svg' },
  { name: 'AWS', path: '/logos/aws.svg' },
  { name: 'GitHub', path: '/logos/github.png' },
  { name: 'n8n', path: '/logos/n8n.svg' },
  { name: 'Google', path: '/logos/google.svg' },
  { name: 'Cal.com', path: '/logos/cal.svg' },
  { name: 'Meta', path: '/logos/meta.png' },
  { name: 'Tailwind', path: '/logos/tailwind.svg' },
]

function LogoTicker({ logos, reverse = false }: { logos: typeof allLogos; reverse?: boolean }) {
  // Triple for smooth infinite
  const repeatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="relative overflow-hidden">
      {/* Subtle gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center ${reverse ? 'animate-ticker-reverse' : 'animate-ticker'}`}
        style={{ width: 'max-content' }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 md:px-10 group"
          >
            <div className="h-12 w-32 flex items-center justify-center">
              <Image
                src={logo.path}
                alt={logo.name}
                width={140}
                height={48}
                className="h-10 w-auto max-w-full object-contain grayscale brightness-200 opacity-70 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechTicker() {
  return (
    <div className="py-6 space-y-6">
      {/* Single continuous ticker */}
      <LogoTicker logos={allLogos} />
    </div>
  )
}

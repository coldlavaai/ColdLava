import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How we handle your data. The short version: we respect it.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-cyan-400/50">LEGAL</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-3">
            The short version: we're not in the business of selling your data.
            We're in the business of building automation systems. Here's the full picture.
          </p>
          <p className="font-mono text-sm text-white/30">
            Last updated: January 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <Section
            number="01"
            title="Who we are"
            content={
              <>
                <p>
                  We're Cold Lava AI Ltd, a company registered in England and Wales
                  (Company Number: 16492732). Our registered address is United Kingdom.
                  When we say "we", "us", or "our", that's who we mean.
                </p>
              </>
            }
          />

          <Section
            number="02"
            title="What we collect"
            content={
              <>
                <p className="mb-4">We only collect what we need. Nothing more.</p>
                <ul className="space-y-3">
                  <ListItem>
                    <strong className="text-white font-semibold">Contact info</strong> — When you fill out a form or email us,
                    we keep your name, email, and whatever you've written to us.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Usage data</strong> — Basic analytics: what pages you visit,
                    how long you stay, what you click. We use this to make the site better,
                    not to build a profile on you.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Cookies</strong> — Small files that help the site work properly.
                    See our{' '}
                    <Link href="/cookies" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors">
                      Cookie Policy
                    </Link>
                    {' '}for the details.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="03"
            title="What we do with it"
            content={
              <>
                <ul className="space-y-2 mb-4">
                  <ListItem>Respond to your enquiries</ListItem>
                  <ListItem>Send you information you've asked for</ListItem>
                  <ListItem>Improve our website and services</ListItem>
                  <ListItem>Comply with legal obligations</ListItem>
                </ul>
                <p className="text-white/90 font-medium">
                  We don't sell your data. We don't share it with advertisers.
                  We don't do anything creepy with it.
                </p>
              </>
            }
          />

          <Section
            number="04"
            title="Who else sees it"
            content={
              <>
                <p className="mb-4">We use a few trusted services to run our business:</p>
                <ul className="space-y-2 mb-4">
                  <ListItem><strong className="text-white font-semibold">Hosting</strong> — Vercel (our website lives there)</ListItem>
                  <ListItem><strong className="text-white font-semibold">Analytics</strong> — Meta Pixel (for understanding visitor behavior)</ListItem>
                  <ListItem><strong className="text-white font-semibold">Email</strong> — Standard email providers</ListItem>
                  <ListItem><strong className="text-white font-semibold">Booking</strong> — Cal.com (for scheduling calls)</ListItem>
                </ul>
                <p>
                  These services have their own privacy policies. We've chosen them
                  because they take data protection seriously.
                </p>
              </>
            }
          />

          <Section
            number="05"
            title="Your rights"
            content={
              <>
                <p className="mb-4">Under UK GDPR, you have the right to:</p>
                <ul className="space-y-2 mb-4">
                  <ListItem>Access the data we hold about you</ListItem>
                  <ListItem>Correct any inaccuracies</ListItem>
                  <ListItem>Request deletion of your data</ListItem>
                  <ListItem>Object to how we process your data</ListItem>
                  <ListItem>Request we transfer your data elsewhere</ListItem>
                </ul>
                <p>
                  Want to exercise any of these? Email us at{' '}
                  <a
                    href="mailto:hello@coldlava.ai"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-mono"
                  >
                    hello@coldlava.ai
                  </a>
                  . We'll sort it within 30 days.
                </p>
              </>
            }
          />

          <Section
            number="06"
            title="How long we keep it"
            content={
              <>
                <p>
                  We keep your data for as long as necessary to provide our services
                  or comply with legal requirements. If you're a client, we keep project
                  records for 6 years (UK tax requirements). If you just enquired but
                  didn't become a client, we'll delete your info after 2 years of no contact.
                </p>
              </>
            }
          />

          <Section
            number="07"
            title="Security"
            content={
              <>
                <p className="mb-4">
                  We use industry-standard security measures. HTTPS everywhere,
                  encrypted databases, access controls, the works. No system is
                  100% secure, but we take it seriously.
                </p>
                <p className="mb-4">
                  <strong className="text-white font-semibold">Cyber & Data Protection Insurance:</strong>{' '}
                  We maintain comprehensive Cyber & Data Protection insurance with a UK-regulated insurer.
                  This covers incidents related to data breaches, cyber attacks, and privacy violations, including
                  notification costs, regulatory fines, and remediation expenses.
                </p>
                <p className="text-white/90">
                  In the unlikely event of a security incident affecting your data, our insurance provides
                  additional financial protection beyond our technical safeguards. This demonstrates our
                  commitment to protecting your information both technically and financially.
                </p>
              </>
            }
          />

          <Section
            number="08"
            title="Changes to this policy"
            content={
              <>
                <p>
                  If we update this policy, we'll post the new version here with
                  a new "last updated" date. For significant changes, we'll make
                  reasonable efforts to notify you.
                </p>
              </>
            }
          />

          <Section
            number="09"
            title="Questions?"
            content={
              <>
                <p className="mb-4">
                  Email us at{' '}
                  <a
                    href="mailto:hello@coldlava.ai"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-mono"
                  >
                    hello@coldlava.ai
                  </a>
                  . We're happy to explain anything that's unclear.
                </p>
                <p>
                  If you're not satisfied with our response, you can complain to the
                  Information Commissioner's Office (ICO) at{' '}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-mono"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </>
            }
          />
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors group flex items-center gap-2"
            >
              <span className="text-cyan-400 group-hover:translate-x-[-4px] transition-transform">←</span>
              Back to home
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/terms"
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Section Component
function Section({
  number,
  title,
  content
}: {
  number: string
  title: string
  content: React.ReactNode
}) {
  return (
    <section className="group">
      <div className="flex items-start gap-6 mb-4">
        <span className="font-mono text-xs text-cyan-400/50 mt-1 group-hover:text-cyan-400/80 transition-colors">
          {number}
        </span>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {title}
          </h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            {content}
          </div>
        </div>
      </div>
    </section>
  )
}

// List Item Component
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-cyan-400 mt-1 text-xs">▸</span>
      <span className="flex-1">{children}</span>
    </li>
  )
}

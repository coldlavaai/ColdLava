import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The rules of engagement. Fair and straightforward.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="font-mono text-xs text-cyan-400/50">LEGAL</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-3">
            These terms govern the provision of our services. They're designed
            to set clear expectations and protect both parties.
          </p>
          <p className="font-mono text-sm text-white/30">
            Last updated: January 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <Section
            number="01"
            title="Definitions and Interpretation"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    <strong className="text-white font-semibold">Cold Lava</strong> means COLD LAVA AI LTD,
                    a company incorporated in England and Wales (Company Number: 16492732).
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Client</strong> means the entity entering into
                    an agreement with Cold Lava for the provision of the Services.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">BOS</strong> means the Business Operating System,
                    being a bespoke, AI-assisted software system designed to support and enhance the Client's business
                    operations by centralising data, automating defined workflows, and providing operational visibility,
                    while remaining subject to human oversight and management decision-making.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Services</strong> means the design, development,
                    configuration, implementation, and support of the BOS as agreed between the parties.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Agreement</strong> means these Terms of Service
                    together with any Client Contract and applicable Statement of Work.
                  </ListItem>
                  <ListItem>
                    References to writing include email. References to clauses are to clauses of these Terms of Service
                    unless stated otherwise.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="02"
            title="Scope of Services"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Cold Lava shall provide the Services on a bespoke basis, tailored to the Client's operational
                    requirements as agreed in writing.
                  </ListItem>
                  <ListItem>
                    The BOS is intended to support, coordinate, and automate defined business workflows. It does not
                    replace management oversight, human decision-making, third-party systems, or external services where required.
                  </ListItem>
                  <ListItem>
                    Cold Lava does not warrant that the BOS will eliminate inefficiencies, reduce costs, remove reliance
                    on third parties, or achieve specific business outcomes.
                  </ListItem>
                  <ListItem>
                    The Services may include integration with third-party platforms, communication providers, or software
                    tools. Such integrations remain subject to the terms and availability of those third parties.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="03"
            title="AI-Assisted Functionality"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Certain elements of the BOS utilise AI-assisted functionality designed to support and augment
                    operational processes.
                  </ListItem>
                  <ListItem>
                    AI-assisted outputs are human-led and subject to review. The Client remains responsible for
                    decisions taken based on such outputs.
                  </ListItem>
                  <ListItem>
                    Cold Lava does not warrant that AI-assisted outputs will be error-free or suitable for use
                    without human oversight.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="04"
            title="Hosting, Infrastructure and Security"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Elements of the BOS may be self-hosted by Cold Lava, while other elements, including data storage,
                    may be hosted using established global infrastructure providers selected for reliability, scalability,
                    and security.
                  </ListItem>
                  <ListItem>
                    Cold Lava implements reasonable technical and organisational measures designed to protect system access,
                    credentials, and integrations, including periodic credential and access management practices aligned
                    with industry standards.
                  </ListItem>
                  <ListItem>
                    Cold Lava does not guarantee absolute security. The Client acknowledges that no digital system can be
                    entirely immune from risk.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="05"
            title="Maintenance and Support"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Maintenance and support services are intended to ensure the stability, performance, and ongoing
                    usability of the BOS.
                  </ListItem>
                  <ListItem>
                    Maintenance may include system updates, configuration changes, workflow refinement, and issue resolution.
                  </ListItem>
                  <ListItem>
                    Maintenance does not include major development, material new functionality, system redesign, or new
                    services unless separately agreed.
                  </ListItem>
                  <ListItem>
                    Where practicable, maintenance activities shall be carried out outside of the Client's normal operating
                    hours to minimise disruption.
                  </ListItem>
                  <ListItem>
                    Support services are provided subject to the scope and hours agreed in the Client Contract.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="06"
            title="Client Responsibilities"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    The Client shall provide timely access to information, systems, stakeholders, and feedback reasonably
                    required for the provision of the Services.
                  </ListItem>
                  <ListItem>
                    The effectiveness of the BOS depends on collaboration between Cold Lava and the Client, including
                    review during development and stabilisation phases.
                  </ListItem>
                  <ListItem>
                    Delays or failures caused by incomplete, inaccurate, or late information provided by the Client shall
                    not constitute a breach by Cold Lava.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="07"
            title="Fees, Payment and Suspension"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Fees shall be payable in accordance with the Client Contract.
                  </ListItem>
                  <ListItem>
                    Invoices are payable within fourteen (14) days of issue unless otherwise agreed.
                  </ListItem>
                  <ListItem>
                    Cold Lava may suspend Services in the event of non-payment of any undisputed invoice, following
                    reasonable notice.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="08"
            title="Intellectual Property"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Ownership of the BOS shall vest in the Client upon completion of the Services and full payment of
                    all fees, subject to the provisions of the Client Contract.
                  </ListItem>
                  <ListItem>
                    Cold Lava retains ownership of all pre-existing tools, methodologies, frameworks, and know-how.
                  </ListItem>
                  <ListItem>
                    To the extent pre-existing materials are incorporated into the BOS, the Client is granted a perpetual,
                    non-exclusive licence to use such materials solely as part of the BOS.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="09"
            title="Continuity and Insolvency"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    The BOS shall be delivered in a manner that supports continuity of the Client's operations following
                    completion of the Services.
                  </ListItem>
                  <ListItem>
                    In the event of termination or insolvency of Cold Lava, the Client's ownership rights in the BOS
                    shall remain unaffected.
                  </ListItem>
                  <ListItem>
                    Where reasonably practicable, Cold Lava may provide assistance to support the Client in identifying
                    third-party providers for ongoing support, without liability for such providers.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="10"
            title="Limitation of Liability"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    Nothing limits liability for death or personal injury caused by negligence, fraud, or liability that
                    cannot be excluded by law.
                  </ListItem>
                  <ListItem>
                    Cold Lava shall not be liable for indirect or consequential losses, including loss of profit, revenue,
                    business, data, or goodwill.
                  </ListItem>
                  <ListItem>
                    Cold Lava's total liability shall not exceed the fees paid in the twelve (12) months preceding the
                    event giving rise to the claim.
                  </ListItem>
                  <ListItem>
                    Cold Lava is not liable for third-party platforms or services.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="11"
            title="Insurance Coverage"
            content={
              <>
                <p className="mb-4">
                  Cold Lava maintains comprehensive insurance coverage to protect both our business and our clients:
                </p>
                <ul className="space-y-4">
                  <ListItem>
                    <strong className="text-white font-semibold">Professional Indemnity Insurance</strong> —
                    Protects clients against financial losses arising from professional negligence, errors, or omissions
                    in the delivery of our services. This coverage provides assurance that claims related to the quality
                    or suitability of our work are backed by appropriate financial protection.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Cyber & Data Protection Insurance</strong> —
                    Covers incidents related to data breaches, cyber attacks, and privacy violations. This insurance
                    ensures that clients are protected in the unlikely event of a security incident affecting data we
                    process or systems we manage, including notification costs, regulatory fines, and remediation expenses.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white font-semibold">Key Persons Insurance</strong> —
                    Provides business continuity protection by ensuring that critical operations can continue and client
                    commitments can be met in the event of unforeseen circumstances affecting key personnel. This
                    demonstrates our commitment to service continuity and project completion.
                  </ListItem>
                </ul>
                <p className="mt-4 text-white/90">
                  All policies are maintained with UK-regulated insurers and are reviewed annually to ensure adequate coverage
                  levels. Insurance certificates are available upon request for client due diligence purposes.
                </p>
              </>
            }
          />

          <Section
            number="12"
            title="General"
            content={
              <>
                <ul className="space-y-3">
                  <ListItem>
                    This Agreement constitutes the entire agreement between the parties.
                  </ListItem>
                  <ListItem>
                    Cold Lava may assign its rights and obligations as part of a corporate restructuring or transfer of business.
                  </ListItem>
                  <ListItem>
                    This Agreement is governed by the laws of England and Wales, and the courts of England and Wales shall
                    have exclusive jurisdiction.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="13"
            title="Website Terms"
            content={
              <>
                <p className="mb-4">
                  In addition to the service terms above, the following applies to your use of this website:
                </p>
                <ul className="space-y-3">
                  <ListItem>
                    This website provides information about our services. It's not a substitute for professional advice.
                  </ListItem>
                  <ListItem>
                    All content on this site — design, text, graphics, code — belongs to Cold Lava or our licensors.
                  </ListItem>
                  <ListItem>
                    Don't use this site to do anything illegal, attempt to hack or break things, scrape content without
                    permission, send spam through our contact forms, or impersonate someone else.
                  </ListItem>
                  <ListItem>
                    We may link to third-party websites. We don't control them and aren't responsible for their content.
                  </ListItem>
                  <ListItem>
                    This site is provided "as is". We keep it accurate and working, but can't guarantee it's error-free
                    or always available.
                  </ListItem>
                </ul>
              </>
            }
          />

          <Section
            number="14"
            title="Contact"
            content={
              <>
                <p>
                  Questions about these terms? Email{' '}
                  <a
                    href="mailto:hello@coldlava.ai"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-mono"
                  >
                    hello@coldlava.ai
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
                href="/privacy"
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
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

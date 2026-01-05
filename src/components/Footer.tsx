import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container-full py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-3">
            <Image
              src="/Cold Lava Logo/Cold Lava - Icon.png"
              alt="Cold Lava"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <div className="text-sm text-white/30">
              <div>© {new Date().getFullYear()} Cold Lava Ltd. United Kingdom.</div>
              <div>Company No. [XXXXXXXX]</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-white/40">
            <Link href="#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#bos" className="hover:text-white transition-colors">
              BOS
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="mailto:hello@coldlava.ai"
              className="hover:text-white transition-colors"
            >
              hello@coldlava.ai
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

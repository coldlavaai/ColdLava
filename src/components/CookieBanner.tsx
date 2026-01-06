'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    localStorage.setItem('cookie_consent_date', new Date().toISOString())
    setShowBanner(false)

    // Initialize analytics if needed
    if (typeof window !== 'undefined' && 'fbq' in window && typeof (window as any).fbq === 'function') {
      (window as any).fbq('consent', 'grant')
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined')
    localStorage.setItem('cookie_consent_date', new Date().toISOString())
    setShowBanner(false)

    // Disable analytics
    if (typeof window !== 'undefined' && 'fbq' in window && typeof (window as any).fbq === 'function') {
      (window as any).fbq('consent', 'revoke')
    }
  }

  if (!mounted || !showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-cyan-400/20 bg-black/95 backdrop-blur-xl"
      >
        <div className="container-full py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Message */}
            <div className="flex-1">
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="font-mono text-xs text-cyan-400/60 mr-2">[NOTICE]</span>
                We use cookies to understand how you use our site. Nothing creepy.{' '}
                <Link
                  href="/cookies"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                >
                  Learn more
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded transition-all duration-300"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="group relative px-4 py-2 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Accept</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-8 w-px h-3 bg-gradient-to-b from-cyan-400/50 to-transparent" />
        <div className="absolute top-0 right-8 w-3 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
      </motion.div>
    </AnimatePresence>
  )
}

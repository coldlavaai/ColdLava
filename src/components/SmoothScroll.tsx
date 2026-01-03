'use client'

import { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenisRef.current = lenis

    // Expose Lenis instance globally for hooks
    ;(window as any).__lenis = lenis

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP ticker to drive Lenis (instead of standalone RAF)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP's lag smoothing for smoother integration
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
      delete (window as any).__lenis
    }
  }, [])

  return <>{children}</>
}

'use client'

import { useEffect, useState } from 'react'
import type Lenis from 'lenis'

interface LenisState {
  lenis: Lenis | null
  scrollProgress: number    // 0 to 1
  scrollVelocity: number    // Current velocity
  direction: 'up' | 'down' | null
}

export function useLenis() {
  const [state, setState] = useState<LenisState>({
    lenis: null,
    scrollProgress: 0,
    scrollVelocity: 0,
    direction: null
  })

  useEffect(() => {
    // Access the global Lenis instance set by SmoothScroll
    const lenis = (window as any).__lenis as Lenis | undefined

    if (!lenis) {
      console.warn('Lenis not found. Make sure SmoothScroll is mounted.')
      return
    }

    setState(prev => ({ ...prev, lenis }))

    const handleScroll = ({ scroll, limit, velocity, direction }: any) => {
      setState(prev => ({
        ...prev,
        scrollProgress: limit > 0 ? scroll / limit : 0,
        scrollVelocity: velocity,
        direction: direction === 1 ? 'down' : direction === -1 ? 'up' : null
      }))
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [])

  return state
}

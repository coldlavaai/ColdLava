'use client'

import { useState, useEffect } from 'react'

interface PerformanceSettings {
  shouldRender: boolean
  quality: number
  pixelRatio: number
  isMobile: boolean
}

export function usePerformance(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    shouldRender: true,
    quality: 1.0,
    pixelRatio: 1,
    isMobile: false
  })

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Check for mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    // Check hardware capabilities
    const hardwareConcurrency = navigator.hardwareConcurrency || 4
    const hasLowCores = hardwareConcurrency <= 4

    // Check memory (if available)
    const deviceMemory = (navigator as any).deviceMemory
    const hasLowMemory = deviceMemory && deviceMemory < 4

    // Determine pixel ratio
    const basePixelRatio = Math.min(window.devicePixelRatio, 2)

    // Decide on quality tier
    if (prefersReducedMotion) {
      // Respect user preference - disable
      setSettings({
        shouldRender: false,
        quality: 0,
        pixelRatio: 1,
        isMobile
      })
    } else if (isMobile || hasLowMemory || hasLowCores) {
      // Low-end device - simplified render
      setSettings({
        shouldRender: true,
        quality: 0.5,
        pixelRatio: 1,
        isMobile: true
      })
    } else if (hasLowCores) {
      // Mid-range device
      setSettings({
        shouldRender: true,
        quality: 0.75,
        pixelRatio: Math.min(basePixelRatio, 1.5),
        isMobile: false
      })
    } else {
      // High-end device - full quality
      setSettings({
        shouldRender: true,
        quality: 1.0,
        pixelRatio: basePixelRatio,
        isMobile: false
      })
    }
  }, [])

  return settings
}

'use client'

import { useEffect, useLayoutEffect, useId, type RefObject } from 'react'
import { useLavaContext } from '@/contexts/LavaContext'

interface UseLavaRepulsionOptions {
  strength?: number
  id?: string
}

export function useLavaRepulsion(
  ref: RefObject<HTMLElement>,
  options?: UseLavaRepulsionOptions
) {
  const { registerZone, unregisterZone } = useLavaContext()
  const autoId = useId()
  const id = options?.id || autoId
  const strength = options?.strength ?? 1.0

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()

      // Convert to normalized coordinates [-1, 1]
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 2 - 1
      const y = -(((rect.top + rect.height / 2) / window.innerHeight) * 2 - 1)
      const w = (rect.width / window.innerWidth) * 2
      const h = (rect.height / window.innerHeight) * 2

      registerZone(id, { x, y, width: w, height: h, strength })
    }

    // Initial update
    updatePosition()

    // Update on scroll and resize
    const lenis = (window as any).__lenis
    lenis?.on('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)

    return () => {
      unregisterZone(id)
      lenis?.off('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [id, ref, registerZone, unregisterZone, strength])
}

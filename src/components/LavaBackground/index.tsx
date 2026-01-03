'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { LavaScene } from './LavaScene'
import { usePerformance } from './usePerformance'
import { LavaBackgroundFallback } from './LavaBackgroundFallback'

export function LavaBackground() {
  const { shouldRender, quality, pixelRatio, isMobile } = usePerformance()

  if (!shouldRender) {
    return null
  }

  // Use CSS fallback for low-quality mobile
  if (isMobile && quality < 0.6) {
    return <LavaBackgroundFallback />
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={pixelRatio}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false
        }}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <LavaScene quality={quality} />
        </Suspense>
      </Canvas>
    </div>
  )
}

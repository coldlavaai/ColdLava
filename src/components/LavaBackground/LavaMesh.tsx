import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ShaderMaterial } from 'three'
import { useLavaContext, type RepulsionZone } from '@/contexts/LavaContext'
import { useLenis } from '@/hooks/useLenis'
import { vertexShader, fragmentShader } from './lavaShader'

interface LavaMeshProps {
  quality: number
}

export function LavaMesh({ quality }: LavaMeshProps) {
  const materialRef = useRef<ShaderMaterial>(null)
  const { size } = useThree()
  const { zones } = useLavaContext()
  const { scrollProgress, scrollVelocity } = useLenis()

  // Initialize blob positions
  const blobPositions = useMemo(() => {
    const positions = new Float32Array(40) // 10 blobs * 4 (xyzw)
    const blobCount = quality < 0.6 ? 4 : quality < 0.9 ? 7 : 10

    for (let i = 0; i < blobCount; i++) {
      const angle = (i / blobCount) * Math.PI * 2
      const radius = 0.5 + Math.random() * 0.3

      positions[i * 4 + 0] = Math.cos(angle) * radius  // x
      positions[i * 4 + 1] = Math.sin(angle) * radius  // y
      positions[i * 4 + 2] = (Math.random() - 0.5) * 0.5  // z
      positions[i * 4 + 3] = 0.3 + Math.random() * 0.2   // radius
    }

    return positions
  }, [quality])

  const blobCount = quality < 0.6 ? 4 : quality < 0.9 ? 7 : 10

  // Initialize shader uniforms
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: [size.width, size.height] },
    uScrollProgress: { value: 0 },
    uScrollVelocity: { value: 0 },
    uQuality: { value: quality },

    // Blobs
    uBlobPositions: { value: blobPositions },
    uBlobCount: { value: blobCount },

    // Repulsion zones
    uRepulsionZones: { value: new Float32Array(40) },  // 10 zones * 4 (xyxy)
    uRepulsionStrengths: { value: new Float32Array(10) },
    uRepulsionCount: { value: 0 },
  }), [quality, blobPositions, blobCount, size.width, size.height])

  // Update repulsion zones from context
  const updateRepulsionUniforms = (zones: RepulsionZone[]) => {
    if (!materialRef.current) return

    const mat = materialRef.current
    const zoneData = new Float32Array(40)
    const strengthData = new Float32Array(10)

    zones.forEach((zone, i) => {
      if (i >= 10) return

      zoneData[i * 4 + 0] = zone.x
      zoneData[i * 4 + 1] = zone.y
      zoneData[i * 4 + 2] = zone.width
      zoneData[i * 4 + 3] = zone.height
      strengthData[i] = zone.strength
    })

    mat.uniforms.uRepulsionZones.value = zoneData
    mat.uniforms.uRepulsionStrengths.value = strengthData
    mat.uniforms.uRepulsionCount.value = Math.min(zones.length, 10)
  }

  // Animation loop
  useFrame((state) => {
    if (!materialRef.current) return

    const mat = materialRef.current

    // Slow, viscous time (Cold Lava brand)
    mat.uniforms.uTime.value = state.clock.elapsedTime * 0.2

    // Update scroll data
    mat.uniforms.uScrollProgress.value = scrollProgress
    mat.uniforms.uScrollVelocity.value = scrollVelocity

    // Update repulsion zones
    updateRepulsionUniforms(zones)

    // Update resolution if changed
    mat.uniforms.uResolution.value = [size.width, size.height]
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface RepulsionZone {
  id: string
  x: number      // Normalized screen coords [-1, 1]
  y: number
  width: number  // Normalized dimensions
  height: number
  strength: number
}

interface LavaContextValue {
  zones: RepulsionZone[]
  registerZone: (id: string, zone: Omit<RepulsionZone, 'id'>) => void
  unregisterZone: (id: string) => void
}

const LavaContext = createContext<LavaContextValue | null>(null)

export function LavaProvider({ children }: { children: ReactNode }) {
  const [zones, setZones] = useState<RepulsionZone[]>([])

  const registerZone = useCallback((id: string, zone: Omit<RepulsionZone, 'id'>) => {
    setZones(prev => {
      const existing = prev.find(z => z.id === id)
      if (existing) {
        // Update existing zone
        return prev.map(z => z.id === id ? { id, ...zone } : z)
      }
      // Add new zone (max 10 for performance)
      if (prev.length >= 10) {
        return [...prev.slice(1), { id, ...zone }]
      }
      return [...prev, { id, ...zone }]
    })
  }, [])

  const unregisterZone = useCallback((id: string) => {
    setZones(prev => prev.filter(z => z.id !== id))
  }, [])

  return (
    <LavaContext.Provider value={{ zones, registerZone, unregisterZone }}>
      {children}
    </LavaContext.Provider>
  )
}

export function useLavaContext() {
  const context = useContext(LavaContext)
  if (!context) {
    throw new Error('useLavaContext must be used within a LavaProvider')
  }
  return context
}

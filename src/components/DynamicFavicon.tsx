'use client'

import { useEffect } from 'react'

export function DynamicFavicon() {
  useEffect(() => {
    // Favicon paths - using the actual Cold Lava logo
    const defaultFavicon = '/Cold Lava Logo/Cold Lava - Icon.png' // Blue version when tab is active
    const awayFavicon = '/Cold Lava Logo/ColdLava-GOLD.png' // Gold/amber version when tab is inactive

    const setFavicon = (href: string) => {
      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement

      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }

      link.href = href
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is not visible - switch to gold/amber
        setFavicon(awayFavicon)
      } else {
        // Tab is visible - switch back to blue
        setFavicon(defaultFavicon)
      }
    }

    // Set initial favicon
    setFavicon(defaultFavicon)

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null
}

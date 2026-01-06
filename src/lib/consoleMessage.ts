// Flag to ensure message only prints once
let hasBeenPrinted = false

export function printConsoleMessage() {
  // Only run in browser
  if (typeof window === 'undefined') return

  // Prevent duplicate messages (React Strict Mode runs effects twice)
  if (hasBeenPrinted) return
  hasBeenPrinted = true

  // ASCII art logo
  const logo = `
   ____      _     _   _
  / ___|___ | | __| | | |    __ ___   ____ _
 | |   / _ \\| |/ _\` | | |   / _\` \\ \\ / / _\` |
 | |__| (_) | | (_| | | |__| (_| |\\ V / (_| |
  \\____\\___/|_|\\__,_| |_____\\__,_| \\_/ \\__,_|
  `

  // Styled console output
  console.log(
    `%c${logo}`,
    'color: #00D4D4; font-family: monospace; font-size: 12px;'
  )

  console.log(
    '%cLooking under the hood? We like you already.',
    'color: #888; font-size: 14px; font-weight: bold; margin-top: 8px;'
  )

  console.log(
    "%cWe're always looking for sharp people.",
    'color: #666; font-size: 12px;'
  )

  console.log(
    '%cDrop us a line: hello@coldlava.ai',
    'color: #00D4D4; font-size: 12px;'
  )

  console.log('%c ', 'margin-bottom: 16px;')
}

export function LavaBackgroundFallback() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(249,115,22,0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 60% at 70% 70%, rgba(124,45,18,0.25) 0%, transparent 50%),
            radial-gradient(ellipse 70% 40% at 50% 90%, rgba(234,88,12,0.15) 0%, transparent 50%)
          `
        }}
      />
    </div>
  )
}

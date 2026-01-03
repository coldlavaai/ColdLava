import { LavaMesh } from './LavaMesh'

interface LavaSceneProps {
  quality: number
}

export function LavaScene({ quality }: LavaSceneProps) {
  return (
    <>
      <LavaMesh quality={quality} />
    </>
  )
}

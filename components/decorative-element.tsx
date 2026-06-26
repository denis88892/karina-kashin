'use client'

interface DecorativeElementProps {
  image: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  width: number
  height: number
  rotation?: number
  animationDuration?: string
  animationDelay?: string
  zIndex?: number
  opacity?: number
}

export function DecorativeElement({
  image,
  position,
  width,
  height,
  rotation = 0,
  animationDuration = '5.5s',
  animationDelay = '0s',
  zIndex = 5,
  opacity = 0.8,
}: DecorativeElementProps) {
  const style: React.CSSProperties = {
    position: 'absolute',
    ...position,
    width,
    height,
    backgroundImage: `url('${image}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    pointerEvents: 'none',
    zIndex,
    opacity,
    animation: `float ${animationDuration} ease-in-out infinite`,
    animationDelay,
    transform: `rotate(${rotation}deg)`,
  }

  return <div style={style} />
}

// Based on image dimensions and sizing requirements:
// Large (70-90%): moon, lotus, hourglass, ribbon
// Medium (50-70%): compass, butterfly, branch, feather
// Small (20-40%): heart, sphere

export type DecorationSize = 'large' | 'medium' | 'small';

export interface Decoration {
  id: string;
  image: string;
  size: DecorationSize;
  section: string;
}

export const DECORATIONS: Decoration[] = [
  // Large objects (70-90% scale)
  { id: 'moon', image: '/decorations/слой 4.png', size: 'large', section: 'hero' },
  { id: 'lotus', image: '/decorations/слой 5.png', size: 'large', section: 'hero' },
  { id: 'hourglass', image: '/decorations/слой 6.png', size: 'large', section: 'changes' },
  { id: 'ribbon', image: '/decorations/слой 11.png', size: 'large', section: 'journey' },
  
  // Medium objects (50-70% scale)
  { id: 'compass', image: '/decorations/слой 8.png', size: 'medium', section: 'hero' },
  { id: 'butterfly', image: '/decorations/слой 9.png', size: 'medium', section: 'recognize' },
  { id: 'branch', image: '/decorations/слой 10.png', size: 'medium', section: 'audience' },
  { id: 'feather', image: '/decorations/слой 12.png', size: 'medium', section: 'mission' },
  
  // Small objects (20-40% scale)
  { id: 'heart', image: '/decorations/слой 7.png', size: 'small', section: 'changes' },
];

export function getSizePercent(size: DecorationSize): { min: number; max: number } {
  switch (size) {
    case 'large':
      return { min: 70, max: 90 };
    case 'medium':
      return { min: 50, max: 70 };
    case 'small':
      return { min: 20, max: 40 };
  }
}

export function getRandomRotation(): number {
  return (Math.random() * 20 - 10); // ±10 degrees
}

export function getRandomDelay(): number {
  return Math.random() * 2;
}

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function MissionBanner() {
  return (
    <section className="relative text-primary-foreground overflow-hidden" style={{ backgroundColor: '#251D1A' }}>
      {/* Decorative golden elements on dark background */}
      
      {/* Feather — top right area, medium (50-70% scale) — 20% smaller */}
      <div
        className="absolute -top-20 -right-16 w-44 h-44 opacity-28 pointer-events-none animate-float"
        style={{
          backgroundImage: 'url(/decorations/fon-12.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          animation: 'float 6.0s ease-in-out infinite',
          animationDelay: '0.4s',
          zIndex: 4,
          transform: 'rotate(-25deg)',
        }}
      />

      {/* Lotus — bottom left area, large (70-90% scale) — 20% smaller */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-64 opacity-18 pointer-events-none animate-float"
        style={{
          backgroundImage: 'url(/decorations/fon-5.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          animation: 'float 6.8s ease-in-out infinite',
          animationDelay: '0.7s',
          zIndex: 3,
          transform: 'rotate(10deg)',
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 relative z-10">
        <div className="px-5 py-16 md:px-10 lg:py-24">
          <h2 className="font-serif text-3xl font-medium italic leading-tight md:text-[2.6rem] text-balance" style={{ color: '#fefdfd' }}>
            Моя миссия — создавать пространство, в котором человек снова начинает
            слышать себя.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed font-sans" style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: '"Manrope", sans-serif' }}>
            Я знаю, что каждый обладает уникальной мудростью, красотой и
            внутренней опорой. Иногда достаточно убрать шум, сомнения и чужие
            ожидания, чтобы вновь услышать себя.
          </p>
          <a
            href="#about"
            className="mt-9 inline-flex items-center gap-2 rounded-full border px-7 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)', fontFamily: '"Manrope", sans-serif' }}
          >
            Подробнее обо мне
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="relative min-h-[360px] self-stretch lg:min-h-[560px]">
          <Image
            src="/images/mission-portrait.png"
            alt="Карина Кашина"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

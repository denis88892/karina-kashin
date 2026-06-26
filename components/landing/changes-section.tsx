'use client'

import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const leaveItems = [
  { label: 'Тревога', icon: 'knot' },
  { label: 'Внутренний шум', icon: 'sound' },
  { label: 'Усталость', icon: 'bed' },
  { label: 'Страхи', icon: 'cloud' },
  { label: 'Сомнения', icon: 'question' },
  { label: 'Напряжение', icon: 'lightning' },
]

const arriveItems = [
  { label: 'Спокойствие', icon: 'lotus' },
  { label: 'Ясность мышления', icon: 'sun' },
  { label: 'Лёгкость', icon: 'feather' },
  { label: 'Энергия', icon: 'star' },
  { label: 'Уверенность', icon: 'shield' },
  { label: 'Новые идеи и возможности', icon: 'sparkle' },
]

// Decorative background gradients and patterns
const DecorativeBackground = () => (
  <>
    {/* Subtle radial gradient circles */}
    <div
      className="absolute top-40 left-1/4 w-96 h-96 opacity-5 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, #C9A063 0%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
    <div
      className="absolute bottom-20 right-1/3 w-80 h-80 opacity-3 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, #C9A063 0%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
    
    {/* Decorative gold lotus sculpture - top left */}
    <div
      className="absolute -top-16 -left-20 w-48 h-48 opacity-70 pointer-events-none"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BB%D0%BE%D0%B9%208-q3jUI6u8cvkTdOCklS1FRl8rXFji2u.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    />
    
    {/* Floating gold spheres - right side */}
    <div
      className="absolute top-48 right-12 w-20 h-20 opacity-50 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #E8D4B8, #C9A063)',
        borderRadius: '50%',
        boxShadow: '0 15px 40px rgba(201, 160, 99, 0.2)',
      }}
    />
    <div
      className="absolute bottom-40 right-28 w-12 h-12 opacity-40 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #E8D4B8, #C9A063)',
        borderRadius: '50%',
        boxShadow: '0 8px 20px rgba(201, 160, 99, 0.15)',
      }}
    />

  </>
)

// Icon components
const LeaveIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'knot':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8C8 4 12 2 12 2C12 2 16 4 16 8M16 16C16 20 12 22 12 22C12 22 8 20 8 16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      )
    case 'sound':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8V16M10 6V18M14 8V16M18 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'bed':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case 'cloud':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14C4 14 2 15.5 2 17.5C2 19.5 4 21 6 21M18 14C16 14 14 15.5 14 17.5C14 19.5 16 21 18 21M10 16L9 19M14 14L13 17M6 14L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6C9.5 3 15 3 17 6C20 6 22 8.5 22 11.5C22 14.5 20 17 17 17H7C4 17 2 15 2 12.5C2 10 4 7 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'question':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9.5 10C9.5 9 10.5 8 12 8C13.5 8 14.5 9 14.5 10C14.5 11 13.5 11.5 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
        </svg>
      )
    case 'lightning':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L6 13H11L10 22L18 10H13L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}

const ArriveIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'lotus':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 8 6 8 10C8 14 10 17 12 17C14 17 16 14 16 10C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12C6 12 3 11 2 14C1 17 3 20 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12C18 12 21 11 22 14C23 17 21 20 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="18" r="2" fill="currentColor"/>
        </svg>
      )
    case 'sun':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.08 4.92L17.65 6.35M6.35 17.65L4.92 19.08M19.08 19.08L17.65 17.65M6.35 6.35L4.92 4.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'feather':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C6 2 4 6 4 10C4 15 6 20 10 21C14 22 16 18 16 14L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 4L12 6M8 8L14 10M8 12L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case 'star':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 10H23L17 15L19 23L12 18L5 23L7 15L1 10H9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'shield':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 6V12C3 18 12 22 12 22C12 22 21 18 21 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'sparkle':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="3" cy="5" r="1" fill="currentColor"/>
          <circle cx="20" cy="7" r="1" fill="currentColor"/>
          <circle cx="21" cy="18" r="1" fill="currentColor"/>
        </svg>
      )
    default:
      return null
  }
}

export function ChangesSection() {
  return (
    <section id="changes" className="relative overflow-hidden" style={{ backgroundColor: '#F8F4EE', paddingTop: '36px', paddingBottom: '2px', borderRadius: '771px' }}>
      {/* Background decorative elements */}
      <DecorativeBackground />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12" style={{ marginLeft: '273px' }}>
        {/* Section header */}
        <AnimatedFadeUp>
          <div className="text-center">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight" style={{ color: '#2E2019' }}>
              Какие изменения
            </h2>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight" style={{ color: '#2E2019' }}>
              замечают мои клиенты
            </h2>
          </div>
        </AnimatedFadeUp>

        {/* Description */}
        <AnimatedFadeUp delay={0.1}>
          <p className="mt-8 max-w-2xl mx-auto text-center text-base md:text-lg leading-relaxed" style={{ color: '#7A6F64' }}>
            Работаем с тем, что мешает жить полной жизнью. Приходим к тому, что делает её лёгкой и наполненной.
          </p>
        </AnimatedFadeUp>

        {/* Decorative divider */}
        <AnimatedFadeUp delay={0.15}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px flex-grow max-w-24" style={{ backgroundColor: '#C9A06340' }} />
            <svg className="w-6 h-6 opacity-60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#C9A063' }}>
              <path d="M12 2C12 2 8 6 8 10C8 14 10 17 12 17C14 17 16 14 16 10C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 12C6 12 3 11 2 14C1 17 3 20 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 12C18 12 21 11 22 14C23 17 21 20 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="18" r="2" fill="currentColor"/>
            </svg>
            <div className="h-px flex-grow max-w-24" style={{ backgroundColor: '#C9A06340' }} />
          </div>
        </AnimatedFadeUp>

        {/* Two-column cards layout */}
        <AnimatedFadeUp delay={0.2} className="mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row justify-center items-start gap-9 lg:gap-9" style={{ marginLeft: '8px', paddingTop: '-37px', paddingRight: '18px', gap: '267px' }}>
            {/* Left card - What leaves */}
            <div 
              className="w-full lg:w-96 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-6px]"
              style={{ 
                backgroundColor: '#FFFFFF', 
                boxShadow: '0 12px 40px rgba(47, 36, 29, 0.08)',
              }}
            >
              {/* Card header with decorative dots */}
              <div className="px-8 py-7 border-b" style={{ borderColor: '#EFE6DA' }}>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A063', opacity: 0.6 }} />
                  <h3 className="text-sm uppercase tracking-widest font-semibold" style={{ color: '#C9A063', letterSpacing: '0.12em' }}>
                    Что уходит
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A063', opacity: 0.6 }} />
                </div>
              </div>

              {/* Card items */}
              <div className="divide-y" style={{ '--tw-divide-opacity': '1', borderColor: '#EFE6DA' } as any}>
                {leaveItems.map((item) => (
                  <AnimatedItem key={item.label}>
                    <div 
                      className="px-8 py-6 flex items-center gap-5 group transition-all min-h-[80px]" 
                      style={{ color: '#2F241D' }}
                    >
                      <span 
                        className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full group-hover:scale-125 transition-transform duration-300" 
                        style={{ backgroundColor: '#FCFAF6', color: '#C9A063' }}
                      >
                        <LeaveIcon type={item.icon} />
                      </span>
                      <span className="text-base font-light">{item.label}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#C9A063' }}>
                        •
                      </span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>

            {/* Right card - What appears */}
            <div 
              className="w-full lg:w-96 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-6px]"
              style={{ 
                backgroundColor: '#FFFFFF', 
                boxShadow: '0 12px 40px rgba(47, 36, 29, 0.08)',
              }}
            >
              {/* Card header with decorative dots */}
              <div className="px-8 py-7 border-b" style={{ borderColor: '#EFE6DA' }}>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A063', opacity: 0.6 }} />
                  <h3 className="text-sm uppercase tracking-widest font-semibold" style={{ color: '#C9A063', letterSpacing: '0.12em' }}>
                    Что появляется
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A063', opacity: 0.6 }} />
                </div>
              </div>

              {/* Card items */}
              <div className="divide-y" style={{ '--tw-divide-opacity': '1', borderColor: '#EFE6DA' } as any}>
                {arriveItems.map((item) => (
                  <AnimatedItem key={item.label}>
                    <div 
                      className="px-8 py-6 flex items-center gap-5 group transition-all min-h-[80px]" 
                      style={{ color: '#2F241D' }}
                    >
                      <span 
                        className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full group-hover:scale-125 transition-transform duration-300" 
                        style={{ backgroundColor: '#FCFAF6', color: '#C9A063' }}
                      >
                        <ArriveIcon type={item.icon} />
                      </span>
                      <span className="text-base font-light">{item.label}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#C9A063' }}>
                        •
                      </span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedFadeUp>

        {/* Premium quote section */}
        <AnimatedFadeUp delay={0.3} className="mt-24 md:mt-32">
          <div 
            className="rounded-3xl overflow-hidden p-8 md:p-12"
            style={{ 
              backgroundColor: '#FFFFFF', 
              boxShadow: '0 12px 40px rgba(47, 36, 29, 0.08)',
            }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
              {/* Quote text - left side */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <span className="text-7xl md:text-8xl font-serif leading-none opacity-30" style={{ color: '#C9A063' }}>
                    "
                  </span>
                  <div className="pt-3">
                    <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: '#2E2019' }}>
                      Когда уходит лишний шум, появляется пространство для настоящей жизни.
                    </p>
                    <p className="mt-6" style={{ color: '#C9A063', fontSize: '14px', letterSpacing: '0.05em', marginLeft: '16px' }}>
                      — Карина Кашина
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative composition - right side */}
              <div className="hidden lg:flex items-end justify-end h-48 relative w-48">
                {/* Gold lotus */}
                <div
                  className="absolute bottom-12 right-8 w-32 h-32"
                  style={{
                    backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BB%D0%BE%D0%B9%208-q3jUI6u8cvkTdOCklS1FRl8rXFji2u.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.8,
                  }}
                />
                

              </div>
            </div>
          </div>
        </AnimatedFadeUp>
      </div>
    </section>
  )
}

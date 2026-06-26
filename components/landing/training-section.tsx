'use client'

import { ArrowRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const cards = [
  {
    img: '/images/training-self.png',
    tag: 'Для себя',
    text: 'Научиться помогать себе и своим близким.',
  },
  {
    img: '/images/training-family.png',
    tag: 'Для семьи',
    text: 'Создать больше лёгкости в отношениях и жизни.',
  },
  {
    img: '/images/training-profession.png',
    tag: 'Для новой профессии',
    text: 'Начать практику и помогать другим.',
  },
]

export function TrainingSection() {
  return (
    <section id="training" className="bg-background md:py-40 overflow-hidden" style={{ paddingTop: '0px', paddingBottom: '125px', marginTop: '163px' }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedFadeUp>
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
              Обучение Access Bars
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
        </AnimatedFadeUp>

        <AnimatedContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {cards.map((card) => (
            <AnimatedItem key={card.tag}>
              <article
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={card.img || '/placeholder.svg'}
                  alt={card.tag}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="font-serif text-xl text-foreground">{card.tag}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Узнать больше
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
            </AnimatedItem>
          ))}

          <AnimatedItem>
            <article className="flex flex-col justify-between rounded-2xl p-6 text-primary-foreground" style={{ backgroundColor: '#251D1A', paddingBottom: '15px', gap: '56px' }}>
            <div>
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-foreground/10" style={{ color: '#ffffff' }}>
                <GraduationCap className="size-6" strokeWidth={1.5} />
              </span>
              <p className="leading-relaxed" style={{ fontFamily: '"Manrope", sans-serif', color: 'rgba(255, 255, 255, 0.9)', marginTop: '17px', fontSize: '19px' }}>
                На обучении вы получите не только знания, но и глубокий личный
                опыт трансформации.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#ffffff', color: '#000000', paddingTop: '10px', paddingBottom: '10px' }}
            >
              Смотреть расписание
            </a>
            </article>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
    </section>
  )
}

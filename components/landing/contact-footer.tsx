'use client'

import { useState } from 'react'
import { ShieldCheck, Send, MessageCircle, Phone } from 'lucide-react'
import { AnimatedFadeUp } from '../animated-fade-up'

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer id="contact" className="text-primary-foreground" style={{ backgroundColor: '#251D1A' }}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <AnimatedFadeUp>
              <h2 className="font-serif text-3xl font-medium leading-tight md:text-[2.6rem] text-balance" style={{ color: '#ffffff' }}>
                Возможно, именно сейчас начинается новая глава вашей жизни.
              </h2>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ fontFamily: '"Manrope", sans-serif', color: 'rgba(255, 255, 255, 0.7)' }}>
                Каждая перемена начинается с одного вопроса: что ещё возможно для
                вас? Оставьте контакты — и я свяжусь с вами, чтобы подобрать формат
                работы.
              </p>
            </AnimatedFadeUp>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full min-h-44 flex-col items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center">
                <ShieldCheck className="size-8 text-gold" />
                <p className="mt-3 font-serif text-xl">Спасибо!</p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Ваше имя"
                    aria-label="Ваше имя"
                    className="w-full rounded-full border px-5 py-4 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.05)', focusBorderColor: '#dabc90' }}
                  />
                  <input
                    required
                    type="text"
                    placeholder="Телефон / WhatsApp"
                    aria-label="Телефон или WhatsApp"
                    className="w-full rounded-full border px-5 py-4 text-sm placeholder:text-primary-foreground/50 focus:outline-none"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.05)', focusBorderColor: '#dabc90' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full px-6 py-4 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#dabc90', color: '#000000', fontFamily: '"Manrope", sans-serif' }}
                >
                  Записаться на сессию
                </button>
                <p className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'rgba(210, 199, 191, 0.55)' }}>
                  <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                  Нажимая на кнопку, вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', color: '#ffffff' }}>
          <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            <p>© Карина Кашина, 2024</p>
            <p style={{ fontFamily: '"Manrope", sans-serif' }}>Access Consciousness</p>
          </div>
          <div className="flex items-center gap-3">
            {[Send, MessageCircle, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Связаться"
                className="flex size-10 items-center justify-center rounded-full border transition-colors hover:text-gold"
                style={{ color: '#ffffff', borderColor: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0)' }}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useMood, MOODS } from '@/contexts/MoodContext'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MoodSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false)
  const { mood, setMood } = useMood()
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Mobile variant: just a row of dots */
  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        {MOODS.map((m) => (
          <button
            key={m.id}
            onClick={() => setMood(m.id)}
            title={lang === 'kr' ? m.labelKr : m.label}
            className={`w-5 h-5 rounded-full transition-all duration-200 flex-shrink-0 ${
              mood === m.id ? 'ring-2 ring-white/60 ring-offset-1 ring-offset-transparent scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            style={{ backgroundColor: m.color }}
          />
        ))}
      </div>
    )
  }

  /* Desktop variant: dropdown panel */
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        title="Change mood"
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ${
          open
            ? 'bg-white/10 text-white'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <Palette className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-11 w-48 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-deep)] shadow-2xl p-3 z-10"
          >
            <p className="text-[var(--text-faint)] text-[10px] font-bold uppercase tracking-widest mb-2.5 px-1">
              {lang === 'kr' ? '테마' : 'Mood'}
            </p>

            <div className="grid grid-cols-2 gap-1.5">
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setMood(m.id); setOpen(false) }}
                  className={`group flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-all duration-150 ${
                    mood === m.id
                      ? 'bg-white/10 text-[var(--text-base)]'
                      : 'text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text-base)]'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-150 group-hover:scale-110"
                    style={{ backgroundColor: m.color }}
                  >
                    {mood === m.id && <Check className="w-2.5 h-2.5 text-white drop-shadow" />}
                  </span>
                  <span className="text-xs font-medium leading-none">
                    {lang === 'kr' ? m.labelKr : m.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Active mood indicator strip */}
            <div
              className="mt-3 mx-1 h-0.5 rounded-full opacity-60 transition-all duration-300"
              style={{ backgroundColor: MOODS.find((m) => m.id === mood)?.color }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

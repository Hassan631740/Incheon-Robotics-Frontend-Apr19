'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Mood = 'ocean' | 'violet' | 'emerald' | 'rose' | 'solar' | 'light'

export const MOODS: { id: Mood; label: string; color: string; labelKr: string }[] = [
  { id: 'ocean',   label: 'Ocean',   labelKr: '오션',   color: '#0ea5e9' },
  { id: 'violet',  label: 'Violet',  labelKr: '바이올렛', color: '#8b5cf6' },
  { id: 'emerald', label: 'Emerald', labelKr: '에메랄드', color: '#10b981' },
  { id: 'rose',    label: 'Rose',    labelKr: '로즈',   color: '#f43f5e' },
  { id: 'solar',   label: 'Solar',   labelKr: '솔라',   color: '#f59e0b' },
  { id: 'light',   label: 'Light',   labelKr: '라이트',  color: '#0284c7' },
]

type MoodContextType = {
  mood: Mood
  setMood: (m: Mood) => void
}

const MoodContext = createContext<MoodContextType>({ mood: 'ocean', setMood: () => {} })

export function MoodProvider({ children }: { children: ReactNode }) {
  const [mood, setMoodState] = useState<Mood>('ocean')

  useEffect(() => {
    const valid = MOODS.map((m) => m.id)
    const saved = localStorage.getItem('ir_mood') as Mood | null
    if (saved && valid.includes(saved)) {
      setMoodState(saved)
      document.documentElement.setAttribute('data-mood', saved)
    }
  }, [])

  const setMood = (m: Mood) => {
    setMoodState(m)
    document.documentElement.setAttribute('data-mood', m)
    localStorage.setItem('ir_mood', m)
  }

  return <MoodContext.Provider value={{ mood, setMood }}>{children}</MoodContext.Provider>
}

export const useMood = () => useContext(MoodContext)

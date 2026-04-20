'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import { MoodProvider } from '@/contexts/MoodContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MoodProvider>{children}</MoodProvider>
    </LanguageProvider>
  )
}

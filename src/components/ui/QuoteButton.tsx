'use client'

import { useState } from 'react'
import { FileText } from 'lucide-react'
import QuoteModal from './QuoteModal'

interface QuoteButtonProps {
  label: string
  variant?: 'primary' | 'outline' | 'callout'
  className?: string
  showIcon?: boolean
}

export default function QuoteButton({
  label,
  variant = 'primary',
  className = '',
  showIcon = true,
}: QuoteButtonProps) {
  const [open, setOpen] = useState(false)

  const base =
    'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--accent-dark)',
      color: '#fff',
    },
    outline: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'var(--accent-border)',
      color: 'var(--text-muted)',
    },
    callout: {
      background: 'linear-gradient(135deg, var(--accent-dark), var(--accent))',
      color: '#fff',
      boxShadow: '0 4px 20px var(--accent-glow)',
    },
  }

  const sizeClass =
    variant === 'callout' ? 'px-6 py-3 text-sm' : 'px-7 py-3.5 text-base'

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${sizeClass} ${className} hover:opacity-90 hover:scale-105 active:scale-100`}
        style={styles[variant]}
        onMouseEnter={(e) => {
          if (variant === 'outline') {
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'outline') {
            ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-border)'
          }
        }}
      >
        {showIcon && <FileText className="w-4 h-4" />}
        {label}
      </button>
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

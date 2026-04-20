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

  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30',
    outline:
      'px-7 py-3.5 border border-sky-500/30 hover:border-sky-400 text-gray-300 hover:text-sky-400',
    callout:
      'px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-105 text-sm',
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {showIcon && <FileText className="w-4 h-4" />}
        {label}
      </button>
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

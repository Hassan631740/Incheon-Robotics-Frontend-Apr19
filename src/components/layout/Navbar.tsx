'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot, LogIn } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Lang } from '@/lib/translations'
import QuoteButton from '@/components/ui/QuoteButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`flex items-center rounded-lg border border-white/10 overflow-hidden ${mobile ? 'w-fit' : ''}`}
    >
      {(['en', 'kr'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === l
              ? 'bg-sky-500 text-white'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {l === 'en' ? 'EN' : '한'}
        </button>
      ))}
    </div>
  )

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050a14]/90 backdrop-blur-xl border-b border-sky-500/10 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              Incheon <span className="text-sky-400">Robotics</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-sky-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            <LangToggle />

            <Link
              href="/login"
              className="flex items-center gap-1.5 text-gray-300 hover:text-sky-400 transition-colors text-sm font-medium"
            >
              <LogIn className="w-4 h-4" />
              {t.nav.login}
            </Link>

            <QuoteButton
              label={t.nav.quote}
              variant="callout"
              showIcon={false}
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-sky-500/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-sky-400 py-2.5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-3 pb-1">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 text-gray-300 hover:text-sky-400 text-sm font-medium transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  {t.nav.login}
                </Link>
                <LangToggle mobile />
              </div>

              <div className="mt-2">
                <QuoteButton
                  label={t.nav.quote}
                  variant="callout"
                  showIcon={false}
                  className="w-full justify-center"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

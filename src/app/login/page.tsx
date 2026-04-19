'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bot, Eye, EyeOff, ArrowLeft, LogIn } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Lang } from '@/lib/translations'

const inputClass =
  'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-sky-500/60 focus:bg-white/[0.07] transition-all'

export default function LoginPage() {
  const { t, lang, setLang } = useLanguage()
  const l = t.login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setError('Invalid credentials. Please contact your administrator.')
  }

  return (
    <div className="min-h-screen bg-[#050a14] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      {/* Lang toggle — top right */}
      <div className="absolute top-6 right-6 flex items-center rounded-lg border border-white/10 overflow-hidden">
        {(['en', 'kr'] as Lang[]).map((lc) => (
          <button
            key={lc}
            onClick={() => setLang(lc)}
            className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
              lang === lc
                ? 'bg-sky-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lc === 'en' ? 'EN' : '한'}
          </button>
        ))}
      </div>

      {/* Back home */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-1.5 text-gray-500 hover:text-sky-400 text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {l.back_home}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">{l.title}</h1>
            <p className="text-gray-400 text-sm mt-1">{l.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">
                {l.email_label}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={l.email_placeholder}
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-gray-400">{l.password_label}</label>
                <button
                  type="button"
                  className="text-xs text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {l.forgot}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={l.password_placeholder}
                  className={`${inputClass} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  {l.btn}
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              {l.no_account}{' '}
              <a
                href="mailto:admin@incheonrobotics.com"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                {l.contact_admin}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, FileImage, CheckCircle2, Send, FileText } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

const inputClass =
  'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-sky-500/60 focus:bg-white/[0.07] transition-all'

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { t } = useLanguage()
  const q = t.quote

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const acceptFile = useCallback((f: File) => {
    if (f.size > 10 * 1024 * 1024) return
    setFile(f)
    if (f.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target?.result as string)
      reader.readAsDataURL(f)
    } else {
      setPreview(null)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const f = e.dataTransfer.files[0]
      if (f) acceptFile(f)
    },
    [acceptFile],
  )

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) acceptFile(f)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', message: '' })
      setFile(null)
      setPreview(null)
      setSubmitted(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a1628] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{q.title}</h2>
                    <p className="text-gray-400 text-xs mt-0.5">{q.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-sky-400 mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{q.success_title}</h3>
                    <p className="text-gray-400 text-sm max-w-sm">{q.success_desc}</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 text-sm font-semibold rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          {q.name_label}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={q.name_placeholder}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          {q.email_label}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={q.email_placeholder}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">
                        {q.company_label}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={q.company_placeholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Floor Plan Upload */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">
                        {q.floorplan_label}
                      </label>

                      {file ? (
                        <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-4">
                          <div className="flex items-center gap-3">
                            {preview ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={preview}
                                alt="Floor plan preview"
                                className="w-16 h-16 object-cover rounded-lg border border-sky-500/20"
                              />
                            ) : (
                              <div className="w-16 h-16 flex items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10">
                                <FileImage className="w-7 h-7 text-sky-400" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium truncate">{file.name}</p>
                              <p className="text-gray-400 text-xs mt-0.5">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => fileRef.current?.click()}
                              className="text-sky-400 text-xs hover:text-sky-300 transition-colors flex-shrink-0"
                            >
                              {q.floorplan_change}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                          onDragLeave={() => setDragging(false)}
                          onDrop={handleDrop}
                          onClick={() => fileRef.current?.click()}
                          className={`relative rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200 ${
                            dragging
                              ? 'border-sky-400 bg-sky-500/10'
                              : 'border-white/15 hover:border-sky-500/50 hover:bg-white/[0.02]'
                          }`}
                        >
                          <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                          <p className="text-gray-300 text-sm font-medium">
                            {q.floorplan_hint}
                          </p>
                        </div>
                      )}

                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">
                        {q.message_label}
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={q.message_placeholder}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {q.submit_btn}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

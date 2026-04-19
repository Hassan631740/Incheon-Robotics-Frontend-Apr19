'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

const inputClass =
  'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-sky-500/60 focus:bg-white/[0.07] transition-all'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-[#070d1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get In Touch"
          subtitle="Ready to transform your warehouse operations? Let's discuss how our robotics solutions can work for you."
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach out to learn how Incheon Robotics can revolutionize your warehouse operations
                with cutting-edge robotic solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500 text-xs mb-1">Email</div>
                  <a
                    href="mailto:admin@incheonrobotics.com"
                    className="text-white text-sm hover:text-sky-400 transition-colors"
                  >
                    admin@incheonrobotics.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500 text-xs mb-1">Address</div>
                  <div className="text-white text-sm leading-relaxed">
                    인천글로벌캠퍼스 컴플렉스센터 B1006
                    <br />
                    Incheon Global Campus
                    <br />
                    South Korea 21985
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 h-full">
                <CheckCircle2 className="w-14 h-14 text-sky-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your warehouse automation needs..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

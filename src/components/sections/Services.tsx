'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Cpu, BarChart3, Settings, Shield, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'

const icons = [Bot, Cpu, BarChart3, Settings, Shield, Zap]
const accents = ['sky', 'blue', 'indigo', 'sky', 'blue', 'indigo']

const accentClasses: Record<string, string> = {
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-500/20',
}

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-sky-500/20 transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${accentClasses[accents[i]]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

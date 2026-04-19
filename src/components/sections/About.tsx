'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Building, BadgeCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={a.badge} title={a.title} subtitle={a.subtitle} />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{a.mission_title}</h3>
            <p className="text-gray-400 leading-relaxed mb-5">{a.mission_p1}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{a.mission_p2}</p>

            <div className="space-y-3">
              {a.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {a.stats.map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium text-sm mb-1">{a.office_label}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    인천글로벌캠퍼스 컴플렉스센터 B1006
                    <br />
                    송도문화로 119, 연수구
                    <br />
                    인천광역시, South Korea 21985
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-500 text-xs">{a.reg_label}</div>
                  <div className="text-white text-sm font-mono mt-0.5">348-86-03747</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

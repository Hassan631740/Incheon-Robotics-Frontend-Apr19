'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Zap } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import QuoteButton from '@/components/ui/QuoteButton'

/* ── Warehouse floor-plan visualization ─────────────────────────── */
const shelves = [
  { left: '8%', top: '8%', width: '36%', height: '19%' },
  { left: '56%', top: '8%', width: '36%', height: '19%' },
  { left: '8%', top: '40%', width: '36%', height: '19%' },
  { left: '56%', top: '40%', width: '36%', height: '19%' },
  { left: '8%', top: '72%', width: '36%', height: '19%' },
  { left: '56%', top: '72%', width: '36%', height: '19%' },
]

const robots = [
  {
    initial: { left: '46%', top: '6%' },
    keyframes: { y: [0, 85, 170, 255, 170, 85, 0] },
    color: 'bg-sky-400',
    glow: 'shadow-sky-400/70',
    duration: 6,
    delay: 0,
  },
  {
    initial: { left: '4%', top: '30%' },
    keyframes: { x: [0, 70, 140, 210, 140, 70, 0] },
    color: 'bg-blue-400',
    glow: 'shadow-blue-400/70',
    duration: 5,
    delay: 1,
  },
  {
    initial: { left: '88%', top: '62%' },
    keyframes: { x: [0, -70, -140, -210, -140, -70, 0] },
    color: 'bg-indigo-400',
    glow: 'shadow-indigo-400/70',
    duration: 7,
    delay: 0.5,
  },
]

function WarehouseViz() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full h-72 sm:h-80 lg:h-[420px] rounded-2xl border border-sky-500/20 bg-[#070d1b] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,165,233,0.06),transparent_70%)]" />

      {/* Shelf units */}
      {shelves.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 + i * 0.07 }}
          className="absolute rounded-md bg-sky-500/[0.08] border border-sky-500/25"
          style={s}
        >
          <div className="absolute inset-x-2 top-[33%] border-t border-sky-500/15" />
          <div className="absolute inset-x-2 top-[66%] border-t border-sky-500/15" />
        </motion.div>
      ))}

      {/* Robot dots */}
      {robots.map((r, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 rounded-full ${r.color} shadow-md ${r.glow}`}
          style={r.initial}
          animate={r.keyframes}
          transition={{
            duration: r.duration,
            repeat: Infinity,
            delay: r.delay,
            ease: 'linear',
          }}
        >
          <div className={`absolute inset-0 rounded-full ${r.color} opacity-40 animate-ping`} />
        </motion.div>
      ))}

      {/* Corner labels */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-[10px] font-mono tracking-wider uppercase">Live</span>
      </div>
      <div className="absolute top-3 right-3 text-sky-400/40 text-[10px] font-mono tracking-wider">
        FLOOR PLAN
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 border-t border-sky-500/10 bg-[#050a14]/60 backdrop-blur-sm flex items-center gap-6">
        {[
          { value: '3', label: 'Robots Active' },
          { value: '98%', label: 'Efficiency' },
          { value: '0', label: 'Collisions' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-sky-400 text-sm font-bold leading-none">{s.value}</div>
            <div className="text-gray-600 text-[10px] mt-0.5">{s.label}</div>
          </div>
        ))}
        <div className="ml-auto text-[10px] text-sky-400/40 font-mono">3D SIM READY ↗</div>
      </div>
    </motion.div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────── */
export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050a14]">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium mb-6"
            >
              <Zap className="w-3.5 h-3.5" />
              {h.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-tight mb-5"
            >
              {h.heading_before && <>{h.heading_before}{' '}</>}
              <span className="gradient-text">{h.heading_highlight}</span>
              <br />
              {h.heading_after}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed mb-9 max-w-xl"
            >
              {h.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              {/* PRIMARY — Get a Quote Now */}
              <QuoteButton
                label={t.quote.cta}
                variant="primary"
                className="text-base"
              />

              {/* SECONDARY — Try Simulation */}
              <a
                href="http://sim.incheonrobotics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-sky-500/30 hover:border-sky-400 text-gray-300 hover:text-sky-400 font-semibold rounded-xl transition-all duration-300 text-base"
              >
                <Globe className="w-5 h-5" />
                {h.cta_primary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-8"
            >
              {h.stats.map((stat, i) => (
                <div key={stat.label}>
                  {i > 0 && <div className="hidden sm:block absolute w-px h-8 bg-white/10 -ml-4" />}
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Warehouse Viz ── */}
          <div className="w-full">
            <WarehouseViz />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-sky-500/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-sky-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

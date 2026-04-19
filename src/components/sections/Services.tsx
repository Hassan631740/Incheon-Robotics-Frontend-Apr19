'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Cpu, BarChart3, Settings, Shield, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const services = [
  {
    icon: Bot,
    title: 'Warehouse Robotics',
    description:
      'Advanced robotic systems designed for warehouse environments, optimizing picking, sorting, and transportation tasks.',
    accent: 'sky',
  },
  {
    icon: Cpu,
    title: '3D Simulation',
    description:
      'Preview robot movements in a 3D environment matching your real-world warehouse before any physical deployment.',
    accent: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Logistics Analytics',
    description:
      'Real-time data analytics and reporting to monitor performance, identify bottlenecks, and continuously optimize operations.',
    accent: 'indigo',
  },
  {
    icon: Settings,
    title: 'Custom Integration',
    description:
      'Seamless integration with your existing WMS, ERP, and enterprise systems with minimal disruption to operations.',
    accent: 'sky',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description:
      'Multi-layer safety protocols ensuring human-robot collaboration remains safe and compliant with international standards.',
    accent: 'blue',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Continuous AI-driven optimization of robot paths and schedules to maximize throughput and minimize energy usage.',
    accent: 'indigo',
  },
]

const accentClasses: Record<string, string> = {
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-500/20',
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="End-to-End Robotics Solutions"
          subtitle="From simulation to deployment, we provide comprehensive warehouse automation services tailored to your specific needs."
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-sky-500/20 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 ${accentClasses[service.accent]}`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

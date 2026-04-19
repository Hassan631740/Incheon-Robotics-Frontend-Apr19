'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const projects = [
  {
    title: 'Smart Warehouse Simulation Platform',
    description:
      'A real-time 3D simulation platform that models robot movements and warehouse layouts before physical deployment, reducing setup time significantly.',
    tags: ['3D Simulation', 'Real-time', 'WebGL'],
    gradient: 'from-sky-500/25 via-blue-500/10 to-transparent',
    link: 'http://sim.incheonrobotics.com',
    live: true,
  },
  {
    title: 'Multi-Robot Coordination System',
    description:
      'AI-powered coordination system that manages a fleet of robots simultaneously, optimizing paths and preventing collisions in real-time.',
    tags: ['AI/ML', 'Fleet Management', 'Path Planning'],
    gradient: 'from-blue-600/25 via-indigo-500/10 to-transparent',
    link: '#',
    live: false,
  },
  {
    title: 'Logistics Automation Suite',
    description:
      'End-to-end warehouse management integration connecting robotic systems with WMS and ERP platforms for seamless, unified operation.',
    tags: ['WMS Integration', 'ERP', 'Automation'],
    gradient: 'from-indigo-500/25 via-sky-500/10 to-transparent',
    link: '#',
    live: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 bg-[#070d1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Projects & Portfolio"
          subtitle="Explore our innovative robotics projects transforming warehouse operations across South Korea."
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-sky-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Visual placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-sky-500/15 rounded-full" />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-sky-500/15 rounded-full" />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2 h-2 bg-sky-400/60 rounded-full" />
                  <div className="w-2 h-2 bg-blue-400/40 rounded-full" />
                  <div className="w-2 h-2 bg-indigo-400/30 rounded-full" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                {project.live ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-400 text-sm font-medium hover:text-sky-300 transition-colors"
                  >
                    View Live Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-gray-600 text-sm font-medium">
                    Coming Soon <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

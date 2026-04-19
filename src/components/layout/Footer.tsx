import Link from 'next/link'
import { Bot, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#030810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">
                Incheon <span className="text-sky-400">Robotics</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Presenting new standards in logistics automation through innovative technology —
              maximizing efficiency and precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-500 hover:text-sky-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="mailto:admin@incheonrobotics.com"
                  className="text-gray-500 hover:text-sky-400 text-sm transition-colors"
                >
                  admin@incheonrobotics.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Incheon Global Campus, B1006
                  <br />
                  South Korea 21985
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© {year} Incheon Robotics. All rights reserved.</p>
          <p className="text-gray-600 text-xs font-mono">Reg: 348-86-03747</p>
        </div>
      </div>
    </footer>
  )
}

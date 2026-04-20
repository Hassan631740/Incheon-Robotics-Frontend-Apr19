import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Incheon Robotics | Warehouse Automation Solutions',
  description:
    'Leading warehouse robotics solutions in South Korea. 3D simulation technology for logistics automation.',
  keywords: 'warehouse robotics, automation, logistics, simulation, South Korea, 인천로보틱스',
  openGraph: {
    title: 'Incheon Robotics | Warehouse Automation Solutions',
    description:
      'Most reasonable warehouse robot solution — advancing logistics with innovative technology.',
    type: 'website',
    url: 'https://incheonrobotics.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-mood="ocean">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

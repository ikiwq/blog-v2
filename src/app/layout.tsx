import Navbar from '@/components/navbar/Navbar'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ikiwq blog',
  description: 'The v2 of the ikiwq blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container duration-200'>
          <div className='wrapper md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
            <MobileMenu/>
            <Navbar />
            <div className='px-4 md:px-0'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

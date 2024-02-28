import Navbar from '@/components/navbar/Navbar'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: "Ikiwq Blog",
  description: "Welcome to my blog, where I talk about programming and other interesting stuff.",
  metadataBase: new URL("https://blog.ikiwq.it"),
  openGraph: {
    title: "Ikiwq Blog",
    description: "Welcome to my blog, where I talk about programming and other interesting stuff."
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
            <MobileMenu/>
            <Navbar />
            <div className='px-2 md:px-0 min-h-screen'>
              {children}
            </div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}

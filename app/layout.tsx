import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BONOBO GAMES',
  description: 'Play nice. Make games.',
  openGraph: {
    title: 'BONOBO GAMES',
    description: 'Play nice. Make games.',
    url: 'https://bonobo.games',
    siteName: 'BONOBO GAMES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

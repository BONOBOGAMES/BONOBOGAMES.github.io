import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import TransitionOverlay from '@/components/TransitionOverlay'
import PageTransition from '@/components/PageTransition'

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
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white antialiased font-sans min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <TransitionOverlay />
          <Nav />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

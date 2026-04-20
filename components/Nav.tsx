'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Games', href: '/games' },
  { label: 'Team', href: '/team' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-white text-sm font-semibold tracking-widest hover:text-lime-400 transition-colors"
        >
          BONOBO GAMES
        </Link>
        <div className="flex gap-7 text-sm">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname.startsWith(href)
                  ? 'text-lime-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

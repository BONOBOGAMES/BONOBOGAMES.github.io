import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/header.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative text-center px-6">
          <Image
            src="/logo-lime.png"
            alt="BONOBO GAMES"
            width={220}
            height={110}
            className="mx-auto mb-6 drop-shadow-lg"
            priority
          />
          <p className="text-gray-300 text-base tracking-[0.2em] uppercase">
            Play nice. Make games.
          </p>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest animate-bounce">
          ↓
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-6 py-28">
        <p className="text-gray-300 text-lg leading-relaxed mb-5">
          Bonobos are the apes that chose play over politics. Good enough reason to name a studio after them.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-5">
          The team is whoever shows up — open door, no contracts. Right now that's Gábor, building the first game.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          First up:{' '}
          <Link href="/games/pieceful" className="text-lime-400 hover:underline">
            Pieceful
          </Link>
          . Meet the{' '}
          <Link href="/team" className="text-lime-400 hover:underline">
            team
          </Link>
          .
        </p>
      </section>
    </>
  )
}

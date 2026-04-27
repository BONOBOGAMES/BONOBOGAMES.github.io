import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
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
          <div className="absolute inset-0 bg-black/50 dark:bg-black/65" />
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
      </section>
      {/* Negative margin to pull footer up */}
      <div className="-mt-24"></div>
    </div>
  )
}

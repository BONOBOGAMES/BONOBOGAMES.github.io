import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ marginTop: '56px' }}>
      <Image
        src="/header.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        style={{ zIndex: -2 }}
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/65" style={{ zIndex: -1 }} />
      <div className="text-center px-6">
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
    </div>
  )
}

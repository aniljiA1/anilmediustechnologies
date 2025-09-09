import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold">Better Replica</span>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/mortgage-calculator">Calculator</Link>
        <Link href="/start">Start</Link>
      </div>
    </nav>
  )
}

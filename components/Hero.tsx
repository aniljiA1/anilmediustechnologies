import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Home loans that are easier and faster
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Example copy — match tone with Better.com and tweak spacing for pixel parity.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/start" className="px-5 py-3 bg-blue-600 text-white rounded">Get started</Link>
          <Link href="/mortgage-calculator" className="px-5 py-3 border rounded">Mortgage Calculator</Link>
        </div>
      </div>
    </section>
  )
}

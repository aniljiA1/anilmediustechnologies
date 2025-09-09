import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Better Replica</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/mortgage-calculator">Mortgage Calculator</Link>
        </div>
      </div>
    </nav>
  );
}

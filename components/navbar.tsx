import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-500 transition">
          yusufaslanyks
        </Link>

        {/* Linkler */}
        <div className="hidden md:flex gap-6 text-gray-300">
          <Link href="/" className="hover:text-white transition">Anasayfa</Link>
          <Link href="/blog" className="hover:text-white transition">Blog & Notlar</Link>
          <Link href="/hakkimda" className="hover:text-white transition">Hakkımda</Link>
        </div>

      </div>
    </nav>
  );
}
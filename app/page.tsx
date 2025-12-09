import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden relative">
      
      {/* Arka Plan Efekti (Mavi Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 py-12">
        
        {/* --- SOL TARAFTAKİ YAZILAR --- */}
        <div className="space-y-6 text-center md:text-left">
          
          {/* Etiket */}
          <div className="inline-block px-4 py-1.5 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-2">
            🚀 2024 YKS Sayısal 6.
          </div>

          {/* Ana Başlık */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            YKS Sürecini <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hack'le!
            </span>
          </h1>

          {/* Alt Metin */}
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Ezberleyerek değil, mantığını kavrayarak çalış. Mühendislik vizyonuyla analiz edilmiş ders notları, taktikler ve rehberlik burada.
          </p>

          {/* --- SOSYAL MEDYA İKONLARI --- */}
          {/* Linklerin içindeki '#' kısımlarını kendi profil linklerinle değiştir */}
          <div className="flex justify-center md:justify-start gap-6 pt-2">
            {/* Instagram */}
            <a href="https://instagram.com/seninkullaniciadin" target="_blank" className="text-gray-400 hover:text-pink-500 transition hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@seninkanalin" target="_blank" className="text-gray-400 hover:text-red-500 transition hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          {/* TikTok (Net Görünüm: Gri -> Pembe Hover) */}
            <a href="https://tiktok.com/@seninkullaniciadin" target="_blank" className="text-gray-400 hover:text-pink-500 transition hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.66a6.33 6.33 0 0 0 10.81-3.19v-6.31a8.15 8.15 0 0 0 3.77 1.54v-3.44a4.16 4.16 0 0 1-3.77-1.54z"/>
              </svg>
            </a>
            {/* Mail (İletişim) */}
            {/* href kısmına kendi mail adresini yazmalısın */}
            <a href="mailto:yusuf@yusufaslanyks.com" className="text-gray-400 hover:text-yellow-400 transition hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Butonlar */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Link href="/blog" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105 shadow-lg shadow-blue-500/30 text-center">
              Rehbere Başla
            </Link>
            <Link href="/hakkimda" className="px-8 py-4 bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition text-center">
              Ben Kimim?
            </Link>
          </div>

        </div>

        {/* --- SAĞ TARAFTAKİ FOTOĞRAF --- */}
        <div className="relative flex justify-center md:justify-end">
          {/* Fotoğrafın arkasındaki süsleme kutusu */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-95 opacity-50 blur-lg"></div>
          
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
             <Image 
               src="/ben.png" 
               alt="Yusuf Aslan" 
               fill 
               className="object-cover"
               priority
             />
          </div>

          {/* Yüzen Küçük Kart */}
          <div className="absolute bottom-10 -left-6 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl border border-gray-700 shadow-xl hidden md:block animate-bounce-slow">
            <p className="text-xs text-gray-400">Hedef</p>
            <p className="text-lg font-bold text-white">İlk 1.000 🎯</p>
          </div>
        </div>

      </div>
    </main>
  );
}
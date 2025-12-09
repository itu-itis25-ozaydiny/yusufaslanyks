import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      
      {/* Başlık Kısmı */}
      <h1 className="text-5xl font-bold text-blue-500 mb-6 text-center">
        yusufaslanyks
      </h1>

      {/* Alt Açıklama */}
      <p className="text-xl text-gray-300 max-w-2xl text-center mb-8">
        Bilgisayar Mühendisliği öğrencisinden, YKS (TYT-AYT) yolculuğunda seni zirveye taşıyacak taktikler, notlar ve rehberlik.
      </p>

      {/* Butonlar */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
          Rehbere Başla
        </button>
        <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition">
          Hakkımda
        </button>
      </div>

    </div>
  );
}
"use client";

import { useState } from "react";

export default function Hesaplama() {
  const [turkce, setTurkce] = useState(0);
  const [sosyal, setSosyal] = useState(0);
  const [mat, setMat] = useState(0);
  const [fen, setFen] = useState(0);
  const [obp, setObp] = useState(0);
  const [sonuc, setSonuc] = useState<{ puan: number; siralama: number } | null>(null);

  // --- 1. VERİ SETİ (Referans Noktaları) ---
  // Bu verileri internetteki 2024 tablolarından alıp buraya eklemelisin.
  // Mantık: "Şu puana -> Şu sıralama gelmiş"
  const SIRALAMA_VERILERI = [
    { puan: 560, siralama: 1 },
    { puan: 500, siralama: 1500 },
    { puan: 480, siralama: 5000 },
    { puan: 450, siralama: 15000 },
    { puan: 400, siralama: 40000 },
    { puan: 350, siralama: 80000 },
    { puan: 300, siralama: 150000 },
    { puan: 250, siralama: 300000 },
    { puan: 200, siralama: 600000 },
    { puan: 150, siralama: 1500000 },
    { puan: 0, siralama: 3000000 },
  ];

  // --- 2. SIRALAMA TAHMİN ALGORİTMASI (Lineer İnterpolasyon) ---
  const siralamayiBul = (puan: number) => {
    // Puanın hangi iki referans aralığında olduğunu buluyoruz
    for (let i = 0; i < SIRALAMA_VERILERI.length - 1; i++) {
      const ustSinir = SIRALAMA_VERILERI[i];
      const altSinir = SIRALAMA_VERILERI[i + 1];

      if (puan <= ustSinir.puan && puan >= altSinir.puan) {
        // Formül: İki nokta arasındaki orantıyı bul
        // Matematiksel modelleme: (y - y1) = m(x - x1)
        const puanFarki = ustSinir.puan - altSinir.puan;
        const siralamaFarki = altSinir.siralama - ustSinir.siralama;
        const bizimPuanFarki = puan - altSinir.puan;

        // Ters orantı olduğu için (Puan arttıkça sıralama azalır)
        const oran = bizimPuanFarki / puanFarki;
        const tahminiSiralama = altSinir.siralama - (siralamaFarki * oran);
        
        return Math.floor(tahminiSiralama);
      }
    }
    return 3000000; // En kötü ihtimal
  };

  const hesapla = () => {
    // 2024 TYT Katsayıları (Örnek)
    const hamPuan = (turkce * 3.3) + (sosyal * 3.4) + (mat * 3.3) + (fen * 3.4) + 100;
    const yerlestirmePuani = hamPuan + (obp * 0.6);
    
    // Sıralamayı Hesapla
    const gelenSiralama = siralamayiBul(yerlestirmePuani);

    setSonuc({
      puan: Number(yerlestirmePuani.toFixed(2)),
      siralama: gelenSiralama
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700">
        
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-500">
          YKS 2026 Robotu
        </h1>
        <p className="text-center text-gray-400 text-sm mb-6">TYT Puan ve Sıralama Hesapla</p>

        {/* --- FORM ALANI --- */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-300">Türkçe (40):</label>
            <input type="number" className="w-20 p-2 bg-gray-700 rounded text-white text-center" onChange={(e) => setTurkce(Number(e.target.value))} />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-300">Sosyal (20):</label>
            <input type="number" className="w-20 p-2 bg-gray-700 rounded text-white text-center" onChange={(e) => setSosyal(Number(e.target.value))} />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-300">Matematik (40):</label>
            <input type="number" className="w-20 p-2 bg-gray-700 rounded text-white text-center" onChange={(e) => setMat(Number(e.target.value))} />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-300">Fen (20):</label>
            <input type="number" className="w-20 p-2 bg-gray-700 rounded text-white text-center" onChange={(e) => setFen(Number(e.target.value))} />
          </div>
          <div className="flex justify-between items-center border-t border-gray-600 pt-4">
            <label className="font-semibold text-yellow-400">OBP (Diploma):</label>
            <input type="number" placeholder="90" className="w-20 p-2 bg-gray-700 rounded text-white text-center border border-yellow-500/30" onChange={(e) => setObp(Number(e.target.value))} />
          </div>
        </div>

        <button onClick={hesapla} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200">
          HESAPLA
        </button>

        {/* --- SONUÇ KARTLARI --- */}
        {sonuc && (
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg text-center">
              <p className="text-gray-400 text-xs uppercase tracking-wider">Puanın</p>
              <p className="text-2xl font-bold text-white">{sonuc.puan}</p>
            </div>
            
            <div className="p-4 bg-blue-900/20 border border-blue-500 rounded-lg text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <p className="text-blue-400 text-xs uppercase tracking-wider">Tahmini Sıralama</p>
              <p className="text-2xl font-bold text-white">
                {sonuc.siralama.toLocaleString('tr-TR')}
              </p>
            </div>
            
            <p className="col-span-2 text-xs text-center text-gray-500 mt-2">
              *2024 YKS verileri baz alınarak hesaplanmıştır.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
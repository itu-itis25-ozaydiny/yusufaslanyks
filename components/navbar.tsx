"use client"; // İnteraktif olduğu için bunu ekliyoruz

import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  // Menünün açık olup olmadığını tutan hafıza (State)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-500 transition">
          yusufaslanyks
        </Link>

        {/* --- MASAÜSTÜ MENÜ (Telefonda Gizli) --- */}
        <div className="hidden md:flex gap-6 text-gray-300">
          <Link href="/" className="hover:text-white transition">Anasayfa</Link>
          <Link href="/blog" className="hover:text-white transition">Blog & Notlar</Link>
          <Link href="/hesaplama" className="hover:text-white transition text-blue-400 font-semibold">Puan Hesapla</Link>
          <Link href="/hakkimda" className="hover:text-white transition">Hakkımda</Link>
        </div>

        {/* --- MOBİL MENÜ BUTONU (Hamburger İkonu) --- */}
        {/* Sadece telefonda (md:hidden) görünür */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Tıklayınca durumu tersine çevir (Aç/Kapa)
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Eğer menü açıksa "X" işareti göster
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Eğer kapalıysa "3 Çizgi" göster
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* --- MOBİL MENÜ LİSTESİ --- */}
      {/* Eğer isOpen "true" ise bu kutuyu göster */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 flex flex-col gap-4 border border-gray-700 shadow-xl animate-fadeIn">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded block">
            Anasayfa
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded block">
            Blog & Notlar
          </Link>
          <Link href="/hesaplama" onClick={() => setIsOpen(false)} className="text-blue-400 font-bold hover:bg-gray-700 p-2 rounded block">
            Puan Hesapla
          </Link>
          <Link href="/hakkimda" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded block">
            Hakkımda
          </Link>
        </div>
      )}

    </nav>
  );
}
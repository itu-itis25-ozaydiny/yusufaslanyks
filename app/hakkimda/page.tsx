import Image from "next/image";
export default function Hakkimda() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Başlık */}
        <h1 className="text-4xl font-bold text-blue-500 mb-8 border-b border-gray-700 pb-4">
          Ben Kimim?
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sol Taraf: Özet Bilgi Kartı */}
            <div className="md:col-span-1 bg-gray-800 p-6 rounded-lg h-fit">
              
              {/* --- DÜZELTİLEN KISIM BAŞLANGIÇ --- */}
              {/* h-96 yaptık ki dikey fotoğrafın rahat sığsın */}
              <div className="relative w-full h-96 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/ben.png"
                  alt ="yusuf aslan"
                  fill  // Resmi kutuya yayar
                  className="object-cover" // Resmi bozmadan (yamultmadan) kırparak sığdırır
                  priority // Sayfa açılınca bu resim hemen yüklensin (LCP için iyi)
                />
              </div>
              {/* --- DÜZELTİLEN KISIM BİTİŞ --- */}
            <h2 className="text-xl font-bold text-white">Yusuf Aslan</h2>
            <p className="text-blue-400 text-sm mb-4">İstanbul Teknik Üniversitesi Bilgisayar Mühendisliği 1/4</p>
            
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🎓 1. Sınıf Öğrencisi</li>
              <li>🏋️‍♂️ Spor & Disiplin</li>
              <li>💻 Yazılım & Girişimcilik</li>
              <li>📍 İstanbul</li>
            </ul>
          </div>

          {/* Sağ Taraf: Hikaye ve Vizyon */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h3 className="text-2xl font-semibold text-white mb-2">Yolculuğum</h3>
              <p className="leading-relaxed text-gray-300">
                Merhaba! Ben Yusuf. 20 yaşındayım ve Bilgisayar Mühendisliği 1. sınıf öğrencisiyim. 
                YKS süreci sadece bir sınav değil, benim için disiplini ve analitik düşünmeyi öğrendiğim bir maratondu.
                Şimdi bu tecrübelerimi, mühendislik vizyonuyla birleştirerek seninle paylaşıyorum.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-2">Neden Bu Site?</h3>
              <p className="leading-relaxed text-gray-300">
                Piyasada çok fazla bilgi kirliliği var. Amacım sana "yapamazsın" diyenlere inat, 
                doğru strateji ve verimli çalışmayla neler başarabileceğini göstermek. 
                Burada sadece ders notları değil, hayatını düzene sokacak mental taktikler de bulacaksın.
              </p>
            </section>

            {/* İstatistik Kutuları */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-800 p-4 rounded text-center">
                <span className="block text-3xl font-bold text-blue-500">+20</span>
                <span className="text-sm text-gray-400">Yazılan Makale</span>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <span className="block text-3xl font-bold text-blue-500">Hedef</span>
                <span className="text-sm text-gray-400">Maksimum Verim</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
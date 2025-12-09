import Link from "next/link";
import { notFound } from "next/navigation";

// 1. Veri seti (Diğer sayfadakiyle aynı)
const posts = [
  {
    id: 1,
    title: "TYT Matematik Nasıl 2 Ayda Biter?",
    content: "Matematik aslında bir dil gibidir. Temel kavramları oturtmadan integrale geçmek, alfabeyi bilmeden roman yazmaya benzer. İlk 2 hafta sadece Problemler ve Sayılar konusuna odaklanmalısın. Günde en az 40 soru çözerek...",
    date: "10 Aralık 2025",
  },
  {
    id: 2,
    title: "YKS Sürecinde Uyku Düzeni ve Beslenme",
    content: "Sabah 5'te kalkmak herkes için uygun olmayabilir. Önemli olan kaçta kalktığın değil, uykunun verimidir. REM uykusunu alabilmek için...",
    date: "08 Aralık 2025",
  },
  {
    id: 3,
    title: "AYT Fizik: Modern Fizik Notları",
    content: "Einstein'ın izafiyet teorisi ve fotoelektrik olay, AYT Fiziğin en zevkli ama en kafa karıştırıcı konularındandır. İşte unutmaman gereken 5 formül...",
    date: "05 Aralık 2025",
  },
  {
    id: 4,
    title: "Bilgisayar Mühendisliği İsteyenlere Tavsiyeler",
    content: "Sadece kod yazmak değil, problem çözmek mühendisliğin temelidir. Eğer analitik düşünmeyi seviyorsan bu bölüm tam sana göre. Üniversiteye girmeden önce İngilizceni halletmelisin.",
    date: "01 Aralık 2025",
  },
];

export default async function BlogDetay({ params }: { params: Promise<{ id: string }> }) {
  // URL'den gelen ID'yi alıyoruz (Örn: "1")
  const { id } = await params;

  // 2. ARAMA MOTORU (FIND METODU)
  // Listeden, ID'si URL'deki numarayla eşleşen yazıyı buluyoruz.
  const post = posts.find((p) => p.id === Number(id));

  // Eğer öyle bir yazı yoksa (Örn: /blog/999 yazıldıysa) 404 sayfasına at
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Geri Dön Butonu */}
        <Link href="/blog" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Listeye Dön
        </Link>

        {/* Başlık ve Tarih */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <span className="text-gray-500 text-sm">{post.date}</span>
          <h1 className="text-4xl font-bold mt-2 text-white leading-tight">
            {post.title}
          </h1>
        </div>

        {/* İçerik Alanı */}
        <article className="prose prose-invert prose-lg text-gray-300">
          {/* Burada paragrafı simüle ediyoruz */}
          <p className="leading-relaxed">
            {post.content}
          </p>
          
          <div className="bg-gray-800 p-4 rounded-lg mt-8 border-l-4 border-blue-500">
            <p className="text-sm italic">
              💡 Not: Bu yazı YKS rehberlik serisinin bir parçasıdır.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
}
import Link from "next/link";

// 1. Veri Yapısını Tanımlıyoruz (Bir blog yazısı neye benzer?)
type BlogPost = {
  id: number;
  title: string;
  excerpt: string; // Kısa açıklama
  category: string;
  date: string;
};

// 2. Mock Data (Sanki veritabanından gelmiş gibi verilerimiz)
const posts: BlogPost[] = [
  {
    id: 1,
    title: "TYT Matematik Nasıl 2 Ayda Biter?",
    excerpt: "Fonksiyonlardan problemlere, net arttıran çalışma programı ve kaynak önerileri.",
    category: "TYT Matematik",
    date: "10 Aralık 2025",
  },
  {
    id: 2,
    title: "YKS Sürecinde Uyku Düzeni ve Beslenme",
    excerpt: "Sabah 5'te kalkmak şart mı? Beyin fonksiyonlarını artıran besinler neler?",
    category: "Rehberlik",
    date: "08 Aralık 2025",
  },
  {
    id: 3,
    title: "AYT Fizik: Modern Fizik Notları",
    excerpt: "Fotoelektrik olay ve Compton saçılması üzerine kısa özetler ve formüller.",
    category: "AYT Fizik",
    date: "05 Aralık 2025",
  },
  {
    id: 4,
    title: "Bilgisayar Mühendisliği İsteyenlere Tavsiyeler",
    excerpt: "Bölümü kazanmadan önce neleri bilmelisin? Yazılıma nereden başlanır?",
    category: "Kariyer",
    date: "01 Aralık 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">
          Blog & Ders Notları
        </h1>

        {/* 3. MAP FONKSİYONU (Döngü)
            Burada "posts" listesindeki her bir elemanı alıp, 
            bir HTML kutusuna çeviriyoruz. 
            Yazılımda en çok kullanacağın yöntem budur.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div 
              key={post.id} // React listeleri takip etmek için eşsiz bir anahtar ister
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 transition cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {post.excerpt}
              </p>

              <Link 
                href={`/blog/${post.id}`} 
                className="text-blue-500 text-sm font-semibold hover:underline"
              >
                Devamını Oku →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
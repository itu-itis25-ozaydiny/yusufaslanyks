import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// DİKKAT: src olmadığı için import yolunu şöyle yapıyoruz:
import Navbar from "@/components/navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yusuf Aslan | YKS Rehberi",
  description: "Bilgisayar mühendisliği öğrencisinden YKS taktikleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html >
  );
}
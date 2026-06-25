"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface News {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();

        setNews(data.slice(0, 3));
      } catch {}
    }

    load();
  }, []);

  return (
    <section
      id="news"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F5132]"
    >
      {/* Globe */}

      <div className="absolute -right-52 bottom-[-180px] opacity-10 pointer-events-none animate-[spin_40s_linear_infinite]">

        <img
          src="/globe.png"
          alt=""
          className="w-[700px]"
        />

      </div>

      {/* Glow */}

      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#198754]/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
            Berita Terbaru
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4">
            Kegiatan Pondok
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
            Ikuti perkembangan terbaru,
            kegiatan santri, serta berbagai
            informasi Pondok Pesantren
            Huffadh Nur Khoiri.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item) => (

            <div
              key={item._id}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-2 transition duration-300"
            >

              <img
                src={item.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-white font-bold text-2xl mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="inline-block mt-6 text-[#D4AF37] font-semibold"
                >
                  Baca Selengkapnya →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
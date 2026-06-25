"use client";

import { useState } from "react";

export default function GalleryClient({
galleries,
}: {
galleries: any[];
}) {
const [category, setCategory] =
useState("Semua");

const [selected, setSelected] =
useState<any>(null);

const filtered =
category === "Semua"
? galleries
: galleries.filter(
(item) =>
item.category === category
);

const categories = [
"Semua",
...new Set(
galleries.map(
(item) => item.category
)
),
];

return (
  <div className="relative min-h-screen bg-[#0F5132] overflow-hidden pt-20">

    {/* Background Globe */}
    <div className="absolute -right-56 top-1/2 -translate-y-1/2 opacity-10 animate-[spin_60s_linear_infinite]">

      <img
        src="/globe.png"
        alt=""
        className="w-[700px]"
      />

    </div>

    <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">

    
      <div className="text-center mb-14">

      <span className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
        Galeri
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4">
        Galeri Pesantren
      </h1>

      <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
        Dokumentasi kegiatan, pendidikan,
        ibadah, dan aktivitas santri Pondok
        Pesantren Huffadh Nur Khoiri.
      </p>

    </div>

  <div className="flex flex-wrap gap-3 mb-8">

    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() =>
          setCategory(cat)
        }
        className={`px-4 py-2 rounded-full ${
          category === cat
          ? "bg-[#D4AF37] text-[#0F5132] font-semibold"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
      >
        {cat}
      </button>
    ))}

  </div>

  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

    {filtered.map((item) => (
      <div
        key={item._id}
        className="
        cursor-pointer
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-xl
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
        onClick={() =>
          setSelected(item)
        }
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover hover:scale-105 transition"
        />

        <div className="p-4">

          <h3 className="font-bold">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500">
            {item.category}
          </p>

        </div>

      </div>
    ))}

  </div>

  {selected && (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={() =>
        setSelected(null)
      }
    >

      <div className="max-w-5xl">

        <img
          src={selected.image}
          alt={selected.title}
          className="max-h-[80vh] rounded-xl"
        />

        <h3 className="text-white text-center mt-4 text-xl">
          {selected.title}
        </h3>

      </div>

    </div>
  )}

    </div>

  </div>

);
}

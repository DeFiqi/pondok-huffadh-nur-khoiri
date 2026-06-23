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

return ( <div className="max-w-7xl mx-auto py-16 px-6">

 
  <h1 className="text-5xl font-bold text-[#0F5132] mb-10">
    Galeri Pesantren
  </h1>

  <div className="flex flex-wrap gap-3 mb-8">

    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() =>
          setCategory(cat)
        }
        className={`px-4 py-2 rounded-full ${
          category === cat
            ? "bg-[#0F5132] text-white"
            : "bg-gray-200"
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
        className="cursor-pointer overflow-hidden rounded-xl shadow bg-white"
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
 

);
}

import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import Link from "next/link";

export default async function NewsPage() {
await connectDB();

const news = await News.find({
published: true,
})
.sort({
createdAt: -1,
})
.lean();

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

  <div className="mb-12">

    <h1 className="text-5xl lg:text-6xl font-bold text-white">
      Berita Pesantren
    </h1>

    <p className="mt-4 text-gray-300 text-lg">
      Informasi terbaru kegiatan,
      pengumuman, dan aktivitas
      Pondok Pesantren Huffadh Nur Khoiri.
    </p>

  </div>

  {news.length === 0 ? (

    <div className="bg-white border rounded-xl p-10 text-center">

      <h2 className="text-2xl font-semibold">
        Belum Ada Berita
      </h2>

    </div>

  ) : (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {news.map((item: any) => (

        <Link
          href={`/news/${item.slug}`}
          key={item._id.toString()}
          className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            border
            border-white/20
          "
        >

          {item.cover && (
            <img
              src={item.cover}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
          )}

          <div className="p-6">

            {item.featured && (
              <span className="inline-block bg-[#D4AF37] text-[#0F5132] px-3 py-1 rounded-full text-xs font-bold mb-4">
                BERITA UNGGULAN
              </span>
            )}

            <h2 className="text-2xl font-bold text-[#0F5132] line-clamp-2">
              {item.title}
            </h2>

            <p className="text-sm text-gray-500 mt-3">
              {new Date(
                item.createdAt
              ).toLocaleDateString(
                "id-ID",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </p>

            <p className="mt-4 text-gray-700 line-clamp-3">
              {item.excerpt}
            </p>

            <div className="mt-6 text-[#198754] font-semibold">
              Baca Selengkapnya →
            </div>

          </div>

        </Link>

      ))}

    </div>

  )}

    </div>

  </div>

);
}

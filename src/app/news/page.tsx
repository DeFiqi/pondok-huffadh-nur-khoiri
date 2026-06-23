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

return ( <div className="max-w-7xl mx-auto py-16 px-6">

  <div className="mb-12">

    <h1 className="text-5xl font-bold text-[#0F5132]">
      Berita Pesantren
    </h1>

    <p className="mt-4 text-gray-600">
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

      <p className="text-gray-500 mt-3">
        Silakan tambahkan berita melalui
        panel admin.
      </p>

    </div>

  ) : (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {news.map((item: any) => (

        <Link
          href={`/news/${item.slug}`}
          key={item._id.toString()}
          className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
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


);
}

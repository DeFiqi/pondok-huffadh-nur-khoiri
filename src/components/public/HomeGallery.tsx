import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export default async function HomeGallery() {
await connectDB();

const items =
await Gallery.find({
featured: true,
})
.sort({
createdAt: -1,
})
.limit(8);

if (!items.length)
return null;

return ( <section className="py-20 bg-gray-50">

 
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between mb-10">

      <h2 className="text-4xl font-bold text-[#0F5132]">
        Galeri Kegiatan
      </h2>

      <Link
        href="/gallery"
        className="text-[#198754] font-semibold"
      >
        Lihat Semua →
      </Link>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

      {items.map(
        (item: any) => (
          <img
            key={item._id}
            src={item.image}
            alt={item.title}
            className="w-full h-52 object-cover rounded-xl"
          />
        )
      )}

    </div>

  </div>

</section>
 

);
}

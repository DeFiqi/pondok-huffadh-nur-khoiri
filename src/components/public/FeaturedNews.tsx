import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export default async function FeaturedNews() {
await connectDB();

const featured =
await News.findOne({
featured: true,
published: true,
}).sort({
createdAt: -1,
});

if (!featured) return null;

return ( <section className="py-20">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-[#0F5132] mb-10">
      Berita Unggulan
    </h2>

    <Link
      href={`/news/${featured.slug}`}
      className="block bg-white rounded-xl overflow-hidden shadow"
    >

      {featured.cover && (
        <img
          src={featured.cover}
          alt={featured.title}
          className="w-full h-[400px] object-cover"
        />
      )}

      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {featured.title}
        </h3>

        <p className="mt-4">
          {featured.excerpt}
        </p>

      </div>

    </Link>

  </div>

</section>


);
}

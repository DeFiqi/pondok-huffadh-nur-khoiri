import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import Image from "next/image";

export default async function DetailNews({
params,
}: {
params: Promise<{
slug: string;
}>;
}) {
await connectDB();

const { slug } = await params;

const news = await News.findOne({
slug,
});

if (!news) {
return ( <div className="p-20">
Berita tidak ditemukan </div>
);
}

await News.findByIdAndUpdate(
news._id,
{
$inc: {
views: 1,
},
}
);

return ( <div className="max-w-4xl mx-auto py-16 px-6">

  {news.cover && (
    <Image
      src={news.cover}
      alt={news.title}
      width={1200}
      height={600}
      className="w-full h-[400px] object-cover rounded-xl mb-8"
    />
  )}

  <h1 className="text-5xl font-bold mb-4">
    {news.title}
  </h1>

  <div className="flex gap-4 text-gray-500 mb-8">

    <span>
      {new Date(
        news.createdAt
      ).toLocaleDateString("id-ID")}
    </span>

    <span>
      👁 {news.views}
    </span>

  </div>

  <div className="leading-8 text-lg whitespace-pre-wrap">
    {news.content}
  </div>

</div>


);
}

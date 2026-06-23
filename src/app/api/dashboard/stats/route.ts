import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import Gallery from "@/models/Gallery";
import Contact from "@/models/Contact";

export async function GET() {
  await connectDB();

  const totalNews =
    await News.countDocuments();

  const totalGallery =
    await Gallery.countDocuments();

  const totalMessages =
    await Contact.countDocuments();

  return Response.json({
    totalNews,
    totalGallery,
    totalMessages,
  });
}
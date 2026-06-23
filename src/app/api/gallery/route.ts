import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function GET() {
  await connectDB();

  const data =
    await Gallery.find().sort({
      createdAt: -1,
    });

  return Response.json(data);
}

export async function POST(
  req: Request
) {
  await connectDB();

  const body = await req.json();

  const item =
    await Gallery.create({
      title: body.title,
      image: body.image,
      category: body.category,
      featured:
        body.featured || false,
    });

  return Response.json(item);
}
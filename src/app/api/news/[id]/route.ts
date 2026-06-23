import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  await News.findByIdAndDelete(id);

  return Response.json({
    success: true,
  });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const body = await req.json();

  const { id } = await params;

  const news = await News.findByIdAndUpdate(
    id,
    {
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      slug: body.title
        .toLowerCase()
        .replace(/\s+/g, "-"),
    },
    {
      new: true,
    }
  );

  return Response.json(news);
}
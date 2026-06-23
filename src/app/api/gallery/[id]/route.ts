import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  await Gallery.findByIdAndDelete(
    id
  );

  return Response.json({
    success: true,
  });
}
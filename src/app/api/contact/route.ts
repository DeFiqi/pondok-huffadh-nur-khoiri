import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(
  req: Request
) {
  await connectDB();

  const body = await req.json();

  const data =
    await Contact.create(body);

  return Response.json({
    success: true,
    data,
  });
}

export async function GET() {
  await connectDB();

  const data =
    await Contact.find()
      .sort({
        createdAt: -1,
      });

  return Response.json(data);
}
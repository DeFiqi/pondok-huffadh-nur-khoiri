import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export async function GET() {
  await connectDB();

  const news = await News.find()
    .sort({ createdAt: -1 });

  return Response.json(news);
}

export async function POST(req: Request) {
await connectDB();

const body = await req.json();

const slug = body.title
.toLowerCase()
.replace(/[^\w\s]/gi, "")
.replace(/\s+/g, "-");

const news = await News.create({
title: body.title,
slug,
excerpt: body.excerpt,
content: body.content,
cover: body.cover || "",
featured: body.featured || false,
published: body.published ?? true,
});

return Response.json(news);
}

import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

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

await (Contact as any).findByIdAndDelete(
  id
);

return Response.json({
success: true,
});
}

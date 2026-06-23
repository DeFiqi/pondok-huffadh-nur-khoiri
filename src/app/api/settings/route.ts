import { connectDB } from "@/lib/mongodb";
import Settings from "@/models/Settings";

export async function GET() {
await connectDB();

let settings =
await Settings.findOne();

if (!settings) {
settings =
await Settings.create({
siteName:
"Pondok Pesantren Huffadh Nur Khoiri",
});
}

return Response.json(settings);
}

export async function POST(
req: Request
) {
await connectDB();

const body =
await req.json();

let settings =
await Settings.findOne();

if (!settings) {
settings =
await Settings.create(body);
} else {
await Settings.updateOne(
{
_id: settings._id,
},
body
);
}

return Response.json({
success: true,
});
}

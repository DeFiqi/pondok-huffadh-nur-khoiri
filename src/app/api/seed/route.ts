import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  await connectDB();

  const exists = await Admin.findOne({
    username: "admin"
  });

  if (exists) {
    return Response.json({
      message: "Admin sudah ada"
    });
  }

  const hashedPassword =
    await bcrypt.hash("admin123", 10);

  await Admin.create({
    username: "admin",
    password: hashedPassword
  });

  return Response.json({
    message: "Admin berhasil dibuat"
  });
}
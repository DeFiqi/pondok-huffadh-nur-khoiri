import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    await connectDB();

    const admin =
    await (Admin as any).findOne({
      username: body.username,
    });

    if (!admin) {
      return Response.json(
        {
          success: false,
          message: "Username salah"
        },
        { status: 401 }
      );
    }

    const valid =
      await bcrypt.compare(
        body.password,
        admin.password
      );

    if (!valid) {
      return Response.json(
        {
          success: false,
          message: "Password salah"
        },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
      user: {
        id: admin._id,
        username: admin.username
      }
    });

  } catch (error) {

    return Response.json(
      {
        success: false
      },
      {
        status: 500
      }
    );

  }
}
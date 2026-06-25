import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === "fawwa" &&
    password === "masuk123"
  ) {
    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json({
    success: false,
    message: "Username atau Password salah",
  });
}
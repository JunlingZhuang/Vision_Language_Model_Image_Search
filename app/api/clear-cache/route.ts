import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  await kv.del("all_images");
  return NextResponse.json({ message: "Cache cleared" });
}

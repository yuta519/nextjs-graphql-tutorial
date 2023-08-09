// App Router以降

// http://localhost:3000/api/hello が同じく該当エンドポイントになる

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //  https://github.com/vercel/next.js/issues/48524#issuecomment-1541340762
  return new NextResponse(JSON.stringify({ title: "Hello, Next.js!" }));
}

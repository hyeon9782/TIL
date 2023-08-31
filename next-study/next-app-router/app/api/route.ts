import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const res = fetch("");
  return NextResponse(res);
}

export { GET };

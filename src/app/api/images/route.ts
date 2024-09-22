import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const generateRandomNumber = (): number =>
    Math.floor(Math.random() * 1000000) + 1;

  const seed = generateRandomNumber();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}&seed=${seed}`;
  await fetch(imageUrl);

  return NextResponse.json({ message: "POST OK", url: imageUrl });
}

export async function GET() {
  return NextResponse.json({ message: "GET OK" });
}

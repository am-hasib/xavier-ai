import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "No User Found" }, { status: 401 });
  }
  const { prompt } = await request.json();
  const generateRandomNumber = (): number =>
    Math.floor(Math.random() * 1000000) + 1;

  const seed = generateRandomNumber();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}&seed=${seed}&width=512&height=512&nologo=True`;
  await fetch(imageUrl);
  await prisma.post.create({
    data: {
      prompt,
      url: imageUrl,
      seed,
      userId: session.user.id,
    },
  });
  return NextResponse.json({ message: "POST OK", url: imageUrl });
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "No User Found" }, { status: 401 });
  }
  const posts = await prisma.post.findMany({
    where: {
      userId: session.user.id,
    },
  });
  return NextResponse.json(posts);
}

export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "No User Found" }, { status: 401 });
  }
  await prisma.post.deleteMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json({ message: "All posts deleted successfully" });
}

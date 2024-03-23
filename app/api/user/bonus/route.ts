import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, amount, desc } = await req.json();
    if (!username || !amount || !desc) {
      return NextResponse.json({ message: "Data is required", success: false });
    }

    await prisma.notifications.create({
      data: {
        username,
        sender: "Admin",
        desc,
      },
    });

    await prisma.users.update({
      where: {
        username,
      },
      data: {
        bonus: {
          increment: amount,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Bonus added successfully",
    });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message });
  }
}

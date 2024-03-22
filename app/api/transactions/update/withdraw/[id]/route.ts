import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const username = request.url.split("/").pop();
    const { balance } = await request.json();

    if (!username || !balance) {
      return NextResponse.json({ success: false, message: "Data is required" });
    }

    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });

    await prisma.users.update({
      where: {
        username,
      },
      data: {
        balance: user?.balance - balance,
      },
    });

    return NextResponse.json({ success: true, message: "Deposit updated" });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
}

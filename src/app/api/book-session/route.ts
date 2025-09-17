import { NextRequest, NextResponse } from "next/server";
import { createTentativeSessionAndBooking } from "@/lib/provider-data";

// This API route creates a tentative session and booking, then returns the sessionId
export async function POST(req: NextRequest) {
  const { userId, providerId, startTime, amountCad, description } = await req.json();

  // Insert a row in sessions + bookings (unpaid)
  const sessionId = await createTentativeSessionAndBooking({
    userId,
    providerId,
    startTime,
    amountCad,
    description,
  });

  return NextResponse.json({ sessionId, amountCad, description });
}

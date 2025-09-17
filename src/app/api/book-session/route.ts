import { NextRequest, NextResponse } from "next/server";
import { createTentativeSessionAndBooking } from "@/lib/provider-data";
import { supabase } from "@/lib/supabase";
import { sendBookingConfirmationEmail } from "@/lib/email";

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

  // Fetch user email
  const { data: userProfile, error: userError } = await supabase
    .from("profiles")
    .select("email")
    .eq("id", userId)
    .single();
  // Fetch provider name
  const { data: provider, error: providerError } = await supabase
    .from("providers")
    .select("name")
    .eq("id", providerId)
    .single();

  if (!userError && !providerError && userProfile?.email && provider?.name) {
    await sendBookingConfirmationEmail({
      to: userProfile.email,
      providerName: provider.name,
      startTime,
      sessionId,
    });
  }

  return NextResponse.json({ sessionId, amountCad, description });
}

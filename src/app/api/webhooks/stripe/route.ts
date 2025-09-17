import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const buf = Buffer.from(await req.arrayBuffer());
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    // Try to get sessionId from success_url or metadata
    let sessionId: string | undefined = undefined;
    if (s.success_url) {
      const url = new URL(s.success_url);
      sessionId = url.searchParams.get("sid") || undefined;
    }
    if (!sessionId && s.metadata?.sessionId) {
      sessionId = s.metadata.sessionId;
    }
    if (sessionId) {
      // Mark bookings.payment_status='paid' and sessions.status='confirmed'
      await supabase.from("bookings").update({ paid: true }).eq("session_id", sessionId);
      await supabase.from("sessions").update({ status: "confirmed" }).eq("id", sessionId);
    }
  }

  return NextResponse.json({ received: true });
}

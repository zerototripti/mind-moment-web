import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { sessionId, amountCad, description } = await req.json();

  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "cad",
        product_data: { name: description ?? "Mind Moment session" },
        unit_amount: amountCad, // cents
      },
      quantity: 1
    }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/bookings/success?sid=${sessionId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/bookings/cancel?sid=${sessionId}`,
  });

  return NextResponse.json({ url: checkout.url });
}

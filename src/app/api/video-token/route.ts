import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export async function POST(req: NextRequest) {
  const { room, identity } = await req.json(); // e.g., session id + user id
  const at = new AccessToken(process.env.LIVEKIT_API_KEY!, process.env.LIVEKIT_API_SECRET!, {
    identity: identity, ttl: "30m"
  });
  at.addGrant({ room, roomJoin: true, canPublish: true, canSubscribe: true });
  return NextResponse.json({ token: await at.toJwt() });
}

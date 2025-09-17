import { NextRequest, NextResponse } from "next/server";

const riskyWords = [
  /diagnose/i,
  /treat/i,
  /psychotherapy/i,
  /PTSD treatment/i,
];

const suggestions =
  "Please avoid terms like 'diagnose', 'treat', 'psychotherapy', 'PTSD treatment'. Try neutral phrases like 'guided conversations' or 'support with…'.";

export async function POST(req: NextRequest) {
  const { bio } = await req.json();
  for (const word of riskyWords) {
    if (word.test(bio)) {
      return NextResponse.json(
        { error: suggestions },
        { status: 400 }
      );
    }
  }
  // TODO: Save bio to database here
  return NextResponse.json({ success: true });
}

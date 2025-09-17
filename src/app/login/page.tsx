"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSent(true);
  }
  return (
    <main className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      {sent ? (
        <p>Check your email for the sign-in link.</p>
      ) : (
        <form onSubmit={sendLink} className="space-y-3">
          <input
            className="border rounded p-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <label className="flex gap-2 text-sm">
            <input type="checkbox" required />
            <span>
              I agree: Mind Moment offers wellness conversations only; providers
              are not regulated in Canada. This is not medical or crisis care.
            </span>
          </label>
          <button className="btn-brand px-4 py-2 rounded">Send link</button>
        </form>
      )}
    </main>
  );
}

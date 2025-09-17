"use client";
import { useState } from "react";
import Link from "next/link";

// Stub: Replace with real provider/session data fetching
const providerAvailability = [
  { date: "2025-09-18T14:00:00-04:00" },
  { date: "2025-09-18T15:00:00-04:00" },
  { date: "2025-09-19T10:00:00-04:00" },
];

const DURATIONS = [30, 45, 60];

export default function BookSession() {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState<number | null>(null);
  const [slot, setSlot] = useState<string>("");
  const [consent, setConsent] = useState(false);
  const [crisis, setCrisis] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [session, setSession] = useState<any>(null);

  // Step 1: Select duration, slot, timezone
  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (duration && slot) setStep(2);
  }

  // Step 2: Review & consent
  function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    if (consent && crisis) setStep(3);
  }

  // Step 3: Pay (stub)
  async function handlePay() {
    setLoading(true);
    // Simulate API call
    const res = await fetch("/api/checkout", { method: "POST" });
    if (res.ok) {
      // Simulate Stripe redirect and return
      setTimeout(() => {
        setSession({
          id: "sess_123",
          start: slot,
          duration,
        });
        setSuccess(true);
        setLoading(false);
      }, 1200);
    } else {
      setLoading(false);
      alert("Payment failed. Please try again.");
    }
  }

  // Success page: join button enabled 5 min before start
  const canJoin = session && new Date(session.start).getTime() - Date.now() <= 5 * 60 * 1000;

  if (success && session) {
    return (
      <div className="max-w-lg mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-anchor mb-4">Booking Confirmed!</h1>
        <div className="mb-4">Your session is scheduled for <b>{new Date(session.start).toLocaleString("en-CA", { timeZone: "America/Toronto" })}</b> ({session.duration} min).</div>
        <button
          className="btn bg-anchor text-sand text-lg px-6 py-3 mt-4 disabled:opacity-60"
          disabled={!canJoin}
        >
          Join session
        </button>
        {!canJoin && <div className="text-xs mt-2 text-ink/70">You can join up to 5 minutes before your session starts.</div>}
        <Link href="/" className="block mt-8 text-anchor underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold text-anchor mb-8">Book a Session</h1>
      {step === 1 && (
        <form onSubmit={handleStep1} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-anchor mb-2 block">Select duration</label>
            <div className="flex gap-3">
              {DURATIONS.map((d) => (
                <button
                  type="button"
                  key={d}
                  className={`chip px-4 py-2 ${duration === d ? "bg-anchor text-sand" : "bg-sand text-anchor border border-anchor"}`}
                  onClick={() => setDuration(d)}
                  aria-pressed={duration === d}
                >
                  {d} min
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-semibold text-anchor mb-2 block">Pick a timeslot</label>
            <div className="flex flex-col gap-2">
              {providerAvailability.map((s) => (
                <label key={s.date} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="slot"
                    value={s.date}
                    checked={slot === s.date}
                    onChange={() => setSlot(s.date)}
                  />
                  {new Date(s.date).toLocaleString("en-CA", { timeZone: "America/Toronto" })}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="font-semibold text-anchor mb-2 block">Timezone</label>
            <div className="chip bg-sand text-anchor">America/Toronto (Eastern Time)</div>
          </div>
          <button type="submit" className="btn bg-anchor text-sand text-lg px-6 py-3 mt-4" disabled={!duration || !slot}>
            Continue
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleStep2} className="flex flex-col gap-6">
          <div className="bg-sand text-ink rounded p-4 text-sm">
            <b>Review:</b> You are booking a {duration} min session on <b>{slot && new Date(slot).toLocaleString("en-CA", { timeZone: "America/Toronto" })}</b>.
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
              I understand this is a supportive, non-clinical conversation. No medical or crisis services are provided.
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={crisis} onChange={e => setCrisis(e.target.checked)} />
              If this is an emergency or crisis, I will contact 9-1-1 or 9-8-8 for immediate help.
            </label>
          </div>
          <button type="submit" className="btn bg-anchor text-sand text-lg px-6 py-3 mt-4" disabled={!consent || !crisis}>
            Continue to payment
          </button>
        </form>
      )}
      {step === 3 && (
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-sand text-ink rounded p-4 text-sm w-full">
            You will be redirected to a secure payment page. After payment, you’ll return here for your session details.
          </div>
          <button
            className="btn bg-coral text-sand text-lg px-6 py-3 mt-2"
            onClick={handlePay}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay & Book"}
          </button>
        </div>
      )}
    </div>
  );
}

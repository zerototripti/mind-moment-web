import Link from "next/link";
import Image from "next/image";

// Placeholder provider data (replace with real data fetching as needed)
const provider = {
  id: 1,
  name: "Amanpreet K.",
  avatar: "/avatar1.png",
  languages: ["Punjabi", "English"],
  segments: ["Family Support", "Women’s Well-Being"],
  bio: "Amanpreet is passionate about supporting South Asian families and women through everyday challenges. She offers a welcoming, culturally aware space for open conversation and practical guidance.",
  price30: 35,
  price60: 60,
  availability: [
    "2025-09-18",
    "2025-09-19",
    "2025-09-22",
    "2025-09-25",
  ],
};

export default function ProviderProfile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-ink dark:text-sand flex items-center gap-2" aria-label="Breadcrumb">
        <Link href="/providers" className="underline hover:text-anchor">Providers</Link>
        <span aria-hidden="true">/</span>
        <span className="font-semibold" aria-current="page">{provider.name}</span>
      </nav>
      <Link href="/providers" className="text-anchor text-xs underline mb-4 inline-block">← Back to directory</Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <Image
          src={provider.avatar}
          alt={`Avatar of ${provider.name}`}
          width={96}
          height={96}
          className="rounded-full border-2 border-sage object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-anchor mb-1">{provider.name}</h1>
          <div className="flex flex-wrap gap-2 mb-2">
            {provider.languages.map((l) => (
              <span key={l} className="chip bg-sand text-ink border border-sage">{l}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {provider.segments.map((s) => (
              <span key={s} className="chip bg-sand text-ink border border-anchor">{s}</span>
            ))}
          </div>
          <div className="chip bg-sage text-ink mt-2">India-trained, non-regulated in Canada</div>
        </div>
      </div>

      {/* About & Claims Guard */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-anchor">About</h2>
        <p className="mb-3 text-ink dark:text-sand">{provider.bio}</p>
        <div className="bg-coral/10 border-l-4 border-coral text-coral px-4 py-2 rounded mb-2 text-sm" role="alert">
          <b>Reminder:</b> Please avoid using regulated healthcare language (e.g., diagnose, treat, therapy, patient, mental illness, etc.) in your profile or communications. Mind Moment is a non-clinical platform.
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-anchor">Session Pricing</h2>
        <div className="flex gap-4">
          <span className="bg-sand text-anchor rounded px-3 py-2">${provider.price30} / 30 min</span>
          <span className="bg-sand text-anchor rounded px-3 py-2">${provider.price60} / 60 min</span>
        </div>
      </section>

      {/* Availability */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2 text-anchor">Availability</h2>
        <div className="flex flex-wrap gap-2">
          {provider.availability.map((date) => (
            <span key={date} className="chip bg-sand text-ink border border-sage">{new Date(date).toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" })}</span>
          ))}
        </div>
      </section>

      {/* Book CTA */}
      <div className="mt-8">
  <Link href={`/sessions/book?provider=${provider.id}`} className="btn bg-anchor text-sand text-lg px-6 py-3 w-full sm:w-auto" aria-label={`Book a session with ${provider.name}`}>Book session</Link>
      </div>
    </div>
  );
}

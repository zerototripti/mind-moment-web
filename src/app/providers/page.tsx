"use client";
import { useState } from "react";
import Link from "next/link";

const LANGUAGES = [
  "Punjabi",
  "Hindi",
  "Urdu",
  "Bengali",
  "Tamil",
  "Gujarati",
  "English",
];
const SEGMENTS = [
  "Family Support",
  "Couples & Relationships",
  "Students & Early Career",
  "Newcomer & Immigration",
  "Women’s Well-Being",
  "Men’s Well-Being",
  "Mind–Body Practices",
  "Faith-integrated (optional)",
];

const PROVIDERS = [
  {
    id: 1,
    name: "Amanpreet K.",
    avatar: "/avatar1.png",
    languages: ["Punjabi", "English"],
    segments: ["Family Support", "Women’s Well-Being"],
    price30: 35,
    price60: 60,
  },
  {
    id: 2,
    name: "Ravi S.",
    avatar: "/avatar2.png",
    languages: ["Hindi", "English"],
    segments: ["Students & Early Career", "Mind–Body Practices"],
    price30: 30,
    price60: 55,
  },
  {
    id: 3,
    name: "Farah B.",
    avatar: "/avatar3.png",
    languages: ["Urdu", "English"],
    segments: ["Couples & Relationships", "Faith-integrated (optional)"],
    price30: 40,
    price60: 70,
  },
];

export default function ProvidersDirectory() {
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [selectedSegs, setSelectedSegs] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(80);
  const [date, setDate] = useState("");

  const handleLangChange = (lang: string) => {
    setSelectedLangs((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };
  const handleSegChange = (seg: string) => {
    setSelectedSegs((prev) =>
      prev.includes(seg) ? prev.filter((s) => s !== seg) : [...prev, seg]
    );
  };

  const filtered = PROVIDERS.filter((p) =>
    (selectedLangs.length === 0 || p.languages.some((l) => selectedLangs.includes(l))) &&
    (selectedSegs.length === 0 || p.segments.some((s) => selectedSegs.includes(s))) &&
    (p.price30 <= maxPrice || p.price60 <= maxPrice)
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-12">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 bg-sand dark:bg-ink rounded-[16px] p-6 mb-4 md:mb-0" aria-label="Provider filters">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend className="font-semibold text-anchor mb-2">Languages</legend>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <label key={lang} className="chip cursor-pointer" tabIndex={0} onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && handleLangChange(lang)}>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedLangs.includes(lang)}
                    onChange={() => handleLangChange(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-semibold text-anchor mb-2">Segments</legend>
            <div className="flex flex-col gap-2">
              {SEGMENTS.map((seg) => (
                <label key={seg} className="flex items-center gap-2 cursor-pointer" tabIndex={0} onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && handleSegChange(seg)}>
                  <input
                    type="checkbox"
                    className="accent-anchor"
                    checked={selectedSegs.includes(seg)}
                    onChange={() => handleSegChange(seg)}
                  />
                  <span>{seg}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-semibold text-anchor mb-2">Max Price (CAD)</legend>
            <input
              type="range"
              min={20}
              max={100}
              step={5}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full accent-anchor"
              aria-valuenow={maxPrice}
              aria-valuemin={20}
              aria-valuemax={100}
            />
            <div className="text-sm mt-1">Up to ${maxPrice}</div>
          </fieldset>
          <fieldset>
            <legend className="font-semibold text-anchor mb-2">Availability</legend>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="input w-full"
            />
          </fieldset>
        </form>
      </aside>
      {/* Provider Cards */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-ink dark:text-sand">No providers match your filters.</div>
        )}
        {filtered.map((p) => (
          <div key={p.id} className="card flex flex-col gap-3 rounded-[16px] bg-white dark:bg-ink shadow-md p-6">
            <div className="flex items-center gap-4">
              <img
                src={p.avatar}
                alt={`Avatar of ${p.name}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-sage"
              />
              <div>
                <div className="font-semibold text-lg text-anchor">{p.name}</div>
                <div className="chip bg-sage text-ink mt-1">India-trained, non-regulated in Canada</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.languages.map((l) => (
                <span key={l} className="chip bg-sand text-ink border border-sage">{l}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {p.segments.map((s) => (
                <span key={s} className="chip bg-sand text-ink border border-anchor">{s}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="bg-sand text-anchor rounded px-2 py-1">${p.price30}/30min</span>
              <span className="bg-sand text-anchor rounded px-2 py-1">${p.price60}/60min</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Link href={`/providers/${p.id}`} className="btn bg-sand text-anchor border border-anchor w-1/2" aria-label={`View profile for ${p.name}`}>View profile</Link>
              <Link href={`/sessions/book?provider=${p.id}`} className="btn bg-anchor text-sand w-1/2" aria-label={`Book a session with ${p.name}`}>Book</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

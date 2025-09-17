"use client";

import { getProviders } from "@/lib/provider-data";
import { useState, useTransition, useEffect } from "react";
interface Provider {
  id: string;
  name: string;
  price: number;
  category?: string;
  languages: string[];
  profile?: {
    id: string;
    avatar_url?: string;
    bio?: string;
  };
}

export default function ProvidersPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isPending, startTransition] = useTransition();
  const [allLanguages, setAllLanguages] = useState<string[]>([]);

  // Fetch providers on mount and when filters change
  useEffect(() => {
    startTransition(() => {
      getProviders({
        language: selectedLanguage || undefined,
        category: category || undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
      })
        .then((data) => {
          // Map profile from array to object if needed
          const mapped: Provider[] = (data || []).map((p) => ({
            ...p,
            profile: Array.isArray(p.profile) ? p.profile[0] : p.profile,
          }));
          setProviders(mapped);
          // Collect all unique languages from results
          setAllLanguages(
            Array.from(
              new Set(
                mapped.flatMap((p) => p.languages || [])
              )
            )
          );
        })
        .catch(() => setProviders([]));
    });
  }, [selectedLanguage, maxPrice, category]);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Providers</h1>
      <div className="flex gap-4 mb-8">
        <select
          className="border rounded px-3 py-2"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All Languages</option>
          {allLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="border rounded px-3 py-2"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          min="0"
        />
        <input
          type="text"
          className="border rounded px-3 py-2"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isPending ? (
          <div className="col-span-full text-center text-gray-500">Loading...</div>
        ) : providers.length > 0 ? (
          providers.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <div className="mb-1 text-gray-600">
                Languages: {(p.languages || []).join(", ")}
              </div>
              <div className="mb-1 text-gray-600">
                Category: {p.category || "-"}
              </div>
              <div className="font-bold text-lg">${p.price}</div>
              {p.profile && (
                <div className="mt-2 text-sm text-gray-500">{p.profile.bio}</div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No providers found.
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

const riskyWords = [
  /diagnose/i,
  /treat/i,
  /psychotherapy/i,
  /PTSD treatment/i,
];

const suggestions =
  "Please avoid terms like 'diagnose', 'treat', 'psychotherapy', 'PTSD treatment'. Try neutral phrases like 'guided conversations' or 'support with…'.";

export default function EditProviderBio({ initialBio = "" }) {
  const [bio, setBio] = useState(initialBio);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validateBio(text: string) {
    for (const word of riskyWords) {
      if (word.test(text)) {
        return suggestions;
      }
    }
    return "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validateBio(bio);
    if (validation) {
      setError(validation);
      setSuccess("");
      return;
    }
    setError("");
    // Call API to save bio
    const res = await fetch("/api/provider-bio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio }),
    });
    if (res.ok) {
      setSuccess("Bio updated successfully.");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update bio.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <label className="block mb-2 font-semibold">Edit Bio</label>
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={5}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Bio
      </button>
    </form>
  );
}

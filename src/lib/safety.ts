// src/lib/safety.ts

const flaggedWords: { [key: string]: string } = {
  'diagnose': 'support with',
  'treat': 'support with',
  'psychotherapy': 'guided conversations',
  'PTSD treatment': 'support with trauma',
  'registered therapist': 'support provider',
  'psychologist': 'support provider',
};

const wordRegex = new RegExp(
  Object.keys(flaggedWords)
    .map(w => w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
    .join('|'),
  'gi'
);

export function sanitizeCopy(input: string): { ok: boolean; warnings: string[]; cleaned: string } {
  const warnings: string[] = [];
  let cleaned = input;

  cleaned = cleaned.replace(wordRegex, (match) => {
    const replacement = flaggedWords[match.toLowerCase() as keyof typeof flaggedWords] || 'support';
    warnings.push(`Flagged: "${match}" → "${replacement}"`);
    return replacement;
  });

  return {
    ok: warnings.length === 0,
    warnings,
    cleaned,
  };
}

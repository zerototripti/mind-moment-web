// src/lib/safety.test.ts
import { sanitizeCopy } from './safety';

describe('sanitizeCopy', () => {
  it('flags and replaces single word', () => {
    const result = sanitizeCopy('We diagnose issues.');
    expect(result.ok).toBe(false);
    expect(result.cleaned).toContain('support with');
    expect(result.warnings[0]).toMatch(/diagnose/);
  });

  it('flags and replaces phrase', () => {
    const result = sanitizeCopy('We offer PTSD treatment.');
    expect(result.ok).toBe(false);
    expect(result.cleaned).toContain('support with trauma');
    expect(result.warnings[0]).toMatch(/PTSD treatment/);
  });

  it('flags multiple terms', () => {
    const result = sanitizeCopy('Our registered therapist can diagnose and treat.');
    expect(result.ok).toBe(false);
    expect(result.cleaned).not.toContain('diagnose');
    expect(result.cleaned).not.toContain('treat');
    expect(result.cleaned).toContain('support with');
    expect(result.cleaned).toContain('support provider');
    expect(result.warnings.length).toBeGreaterThan(1);
  });

  it('returns ok=true for safe input', () => {
    const result = sanitizeCopy('We offer guided conversations and support.');
    expect(result.ok).toBe(true);
    expect(result.warnings.length).toBe(0);
    expect(result.cleaned).toBe('We offer guided conversations and support.');
  });
});

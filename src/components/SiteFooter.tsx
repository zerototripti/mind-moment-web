import Link from 'next/link';
import NewsletterOptIn from './NewsletterOptIn';
import LegalDisclaimer from './LegalDisclaimer';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8">
        <nav className="flex flex-wrap gap-6 justify-center text-sm font-medium text-gray-700">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/providers/signup">Provider Signup</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="max-w-md mx-auto w-full">
          <NewsletterOptIn 
            microcopy="Subscribe to our newsletter for updates. You will receive a confirmation email to complete your subscription (double opt-in, CASL-compliant). We respect your privacy and you can unsubscribe at any time."
          />
        </div>
        <div className="mt-8 text-xs text-gray-500">
          <LegalDisclaimer />
        </div>
      </div>
    </footer>
  );
}

import React from "react";

interface NewsletterOptInProps {
  microcopy?: string;
}

/**
 * CASL-compliant newsletter opt-in with customizable microcopy.
 */
const NewsletterOptIn: React.FC<NewsletterOptInProps> = ({ microcopy }) => (
  <div className="flex flex-col gap-2 mt-4">
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        className="mt-1"
        required
      />
      <label htmlFor="newsletter" className="text-sm">
        I consent to receive informational emails from Mind Moment. I understand
        my information will be handled in accordance with Canadian privacy laws
        (PIPEDA/PHIPA), and I can unsubscribe at any time.
        <span className="block text-xs opacity-70">
          No health or medical advice is provided. For details, see our privacy
          policy.
        </span>
      </label>
    </div>
    {microcopy && (
      <div className="text-xs text-gray-500 italic mt-1">{microcopy}</div>
    )}
  </div>
);

export default NewsletterOptIn;

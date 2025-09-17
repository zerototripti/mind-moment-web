import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="w-full bg-anchor text-sand dark:bg-anchor-dark dark:text-sand sticky top-0 z-30 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl tracking-tight">Mind Moment</Link>
        <div className="flex gap-6 text-base font-medium">
          <Link href="/providers" className="hover:text-coral transition-colors">Providers</Link>
          <Link href="/how-it-works" className="hover:text-coral transition-colors">How it Works</Link>
          <Link href="/pricing" className="hover:text-coral transition-colors">Pricing</Link>
          <Link href="/providers/signup" className="btn bg-coral text-sand px-4 py-2 ml-2">Provider Signup</Link>
        </div>
      </div>
    </nav>
  );
}

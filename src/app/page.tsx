
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import CrisisBanner from "../components/CrisisBanner";

const segments = [
  { name: "Family Support", icon: "👨‍👩‍👧‍👦", desc: "Guidance for family harmony and connection.", query: "family" },
  { name: "Couples & Relationships", icon: "💞", desc: "Support for couples and relationship growth.", query: "couples" },
  { name: "Students & Early Career", icon: "🎓", desc: "Navigate school, work, and life transitions.", query: "students" },
  { name: "Newcomer & Immigration", icon: "🛬", desc: "Adjusting to life in Canada as a newcomer.", query: "newcomer" },
  { name: "Women’s Well-Being", icon: "🌸", desc: "Empowering women’s wellness journeys.", query: "women" },
  { name: "Men’s Well-Being", icon: "🧑‍💼", desc: "Resources for men’s personal growth.", query: "men" },
  { name: "Mind–Body Practices", icon: "🧘‍♂️", desc: "Explore mindfulness and holistic practices.", query: "mindbody" },
  { name: "Faith-integrated (optional)", icon: "🕌", desc: "Support that respects your faith and values.", query: "faith" },
];


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Only one CrisisBanner at the top, remove any duplicate in layout or parent */}
        {/* Hero Section */}
        <section className="w-full min-h-[60vh] flex flex-col justify-center items-center relative bg-sand rounded-none overflow-hidden">
          <Image
            src="/assets/mind-moment-hero.png"
            alt="South Asian family and friends in conversation, Mind Moment hero background"
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center py-16 md:py-24 px-4 max-w-2xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-anchor drop-shadow-sm mb-4">
              Culturally aware wellness conversations for South Asians in Canada.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ink bg-sand/80 rounded-lg px-4 py-2 mb-6 shadow-sm">
              India-trained support providers offering guided conversations and practical strategies. Not a medical or crisis service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xs mx-auto">
              <Link href="/providers" className="btn bg-anchor text-sand text-lg px-6 py-3 min-h-[44px] min-w-[44px]" aria-label="Find a Support Provider">
                Find a Support Provider
              </Link>
              <Link href="#how-it-works" className="btn bg-sand text-anchor border border-anchor text-lg px-6 py-3 min-h-[44px] min-w-[44px]" aria-label="Learn how Mind Moment works">
                How it works
              </Link>
            </div>
          </div>
        </section>

        {/* Split Section */}
        <section className="w-full flex flex-col md:flex-row items-center gap-8 py-16 max-w-5xl mx-auto px-4">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/mind-moment-paragraph.png"
              alt="Gentle abstract illustration beside paragraph about culturally aware support"
              width={400}
              height={320}
              className="rounded-[16px] shadow-md object-cover"
              priority={false}
            />
          </div>
          <div className="w-full md:w-1/2 text-lg text-ink dark:text-sand">
            <h2 className="text-2xl font-semibold mb-3 text-anchor">What is Mind Moment?</h2>
            <p>
              Mind Moment is a safe, welcoming space for South Asians in Canada to find culturally aware support for everyday life. Our platform connects you with providers who understand your background and values—no diagnosis, no labels, just real conversations and practical guidance.
            </p>
          </div>
        </section>

        {/* Features (Segments) */}
        <section className="w-full bg-sand py-12 px-4">
          <h2 className="text-2xl font-bold text-anchor text-center mb-8">Explore Support Segments</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {segments.map((seg) => (
              <div key={seg.name} className="card flex flex-col items-center p-6 rounded-[16px] bg-white dark:bg-ink shadow-md">
                <span className="text-4xl mb-2" aria-hidden="true">{seg.icon}</span>
                <h3 className="text-lg font-semibold text-anchor mb-1 text-center">{seg.name}</h3>
                <p className="text-sm text-ink dark:text-sand text-center mb-4">{seg.desc}</p>
                <Link
                  href={`/providers?segment=${encodeURIComponent(seg.query)}`}
                  className="btn bg-anchor text-sand w-full mt-auto min-h-[44px] min-w-[44px]"
                >
                  Find Providers
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="w-full py-16 px-4 bg-white dark:bg-ink">
          <h2 className="text-2xl font-bold text-anchor text-center mb-8">How it works</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
            <div className="card flex-1 flex flex-col items-center p-6 rounded-[16px] bg-sand dark:bg-ink shadow-md">
              <span className="text-3xl mb-2">🔎</span>
              <h3 className="font-semibold text-lg mb-1">Browse</h3>
              <p className="text-sm text-center">Explore provider profiles and find the right fit for your needs and preferences.</p>
            </div>
            <div className="card flex-1 flex flex-col items-center p-6 rounded-[16px] bg-sand dark:bg-ink shadow-md">
              <span className="text-3xl mb-2">📅</span>
              <h3 className="font-semibold text-lg mb-1">Book & Pay</h3>
              <p className="text-sm text-center">Book a session and pay securely online—no referrals or paperwork needed.</p>
            </div>
            <div className="card flex-1 flex flex-col items-center p-6 rounded-[16px] bg-sand dark:bg-ink shadow-md">
              <span className="text-3xl mb-2">🎥</span>
              <h3 className="font-semibold text-lg mb-1">Private Video Session</h3>
              <p className="text-sm text-center">Connect privately and securely with your provider in a video session at your convenience.</p>
            </div>
          </div>
        </section>

        {/* Testimonials (Provider Highlights) */}
        <section className="w-full py-16 px-4 bg-sand">
          <h2 className="text-2xl font-bold text-anchor text-center mb-8">Meet Some of Our Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card flex flex-col items-center p-6 rounded-[16px] bg-white dark:bg-ink shadow-md">
                <div className="w-20 h-20 bg-sage flex items-center justify-center rounded-full mb-4">
                  <span className="text-4xl" aria-hidden="true">🧑‍💼</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-anchor">Provider {n}</h3>
                <p className="text-sm text-ink dark:text-sand text-center">Experienced, culturally aware, and here to listen. No diagnosis or medical advice—just support for your journey.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
  <SiteFooter />
  {/* Only one SiteFooter (with disclaimer) at the bottom, remove any duplicate in layout or parent */}
    </>
  );
}

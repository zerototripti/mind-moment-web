import Image from "next/image";
import Link from "next/link";

const SEGMENTS = [
  {
    title: "Family Support",
    desc: "Navigate intergenerational expectations and communication.",
    icon: "users",
  },
  {
    title: "Couples & Relationships",
    desc: "Support for healthy communication and connection.",
    icon: "heart",
  },
  {
    title: "Students & Early Career",
    desc: "Guidance for academic, career, and life transitions.",
    icon: "graduation-cap",
  },
  {
    title: "Newcomer & Immigration",
    desc: "Adjust to life in Canada with culturally aware guidance.",
    icon: "globe",
  },
  {
    title: "Women’s Well-Being",
    desc: "Space for women’s unique experiences and needs.",
    icon: "venus",
  },
  {
    title: "Men’s Well-Being",
    desc: "Support for men’s mental and emotional health.",
    icon: "mars",
  },
  {
    title: "Mind–Body Practices",
    desc: "Breathwork, routine, and gentle lifestyle strategies.",
    icon: "leaf",
  },
  {
    title: "Faith-integrated (optional)",
    desc: "Incorporate faith and spirituality if you choose.",
    icon: "hands",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Crisis & Disclaimer Strip */}
      <div
        style={{
          background: "var(--cloud)",
          borderBottom: "1px solid var(--border)",
          padding: "8px 0",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            fontSize: 14,
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            In an emergency call 911. Crisis support: Talk Suicide Canada
            1-833-456-4566 / text 45645.
          </span>
          <span
            style={{
              background: "var(--brand-2)",
              color: "var(--ink)",
              borderRadius: 12,
              padding: "2px 10px",
              fontSize: 13,
              marginTop: 2,
            }}
          >
            Providers are not regulated health professionals in Canada.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-hero-gradient flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-sans">
            Culturally aware wellness conversations for South Asians in Canada.
          </h1>
          <p className="text-lg md:text-xl text-ink mb-8 font-sans">
            India-trained support providers offering guided conversations and practical strategies. Not a medical or crisis service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="#directory"
              className="bg-primary text-white rounded-full px-8 py-4 font-semibold text-lg shadow-md hover:bg-primary-dark transition min-w-[200px]"
            >
              Find a Support Provider
            </a>
            <a
              href="#how"
              className="bg-surface text-primary border-2 border-primary rounded-full px-8 py-4 font-semibold text-lg hover:bg-primary-light hover:text-primary-dark transition min-w-[160px]"
            >
              How it works
            </a>
          </div>
          {/* Hero Illustration */}
          <div className="flex justify-center mt-8">
            <Image
              src="/globe.svg"
              alt="South Asian community"
              width={220}
              height={160}
              className="rounded-2xl bg-accent-light shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section
        id="directory"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "32px 16px 0 16px",
        }}
      >
        <h2
          style={{
            color: "var(--brand)",
            fontWeight: 600,
            fontSize: 24,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Areas of Support
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              style={{
                background: "var(--brand-2)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 1px 6px 0 rgba(15,76,92,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                minHeight: 140,
              }}
            >
              {/* Replace with Lucide icons in production */}
              <div
                style={{
                  background: "var(--brand)",
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: 22,
                  }}
                >
                  &#9679;
                </span>
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color: "var(--brand)",
                  marginBottom: 6,
                }}
              >
                {seg.title}
              </div>
              <div
                style={{
                  color: "var(--ink)",
                  fontSize: 15,
                }}
              >
                {seg.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        style={{
          maxWidth: 800,
          margin: "48px auto 0 auto",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            color: "var(--brand)",
            fontWeight: 600,
            fontSize: 24,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          How it works
        </h2>
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            fontSize: 17,
            color: "var(--ink)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li
            style={{
              background: "var(--surface)",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 1px 6px 0 rgba(15,76,92,0.04)",
            }}
          >
            <b>1.</b> Browse providers by language, culture, and schedule
          </li>
          <li
            style={{
              background: "var(--surface)",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 1px 6px 0 rgba(15,76,92,0.04)",
            }}
          >
            <b>2.</b> Book a time and pay securely in CAD
          </li>
          <li
            style={{
              background: "var(--surface)",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 1px 6px 0 rgba(15,76,92,0.04)",
            }}
          >
            <b>3.</b> Join a private video room at your slot
            <div
              style={{
                fontSize: 13,
                color: "var(--muted)",
                marginTop: 6,
              }}
            >
              Conversations are guidance-focused; not clinical care.
            </div>
          </li>
        </ol>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--cloud)",
          marginTop: 56,
          padding: "32px 0 16px 0",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: 15,
            }}
          >
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/providers">Provider Signup</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div
            style={{
              background: "var(--brand-2)",
              color: "var(--ink)",
              borderRadius: 12,
              padding: "2px 10px",
              fontSize: 13,
            }}
          >
            Providers are not regulated health professionals in Canada.
          </div>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
            }}
          >
            <input
              type="checkbox"
              id="optin"
              style={{
                accentColor: "var(--brand)",
                width: 18,
                height: 18,
              }}
            />
            <label
              htmlFor="optin"
              style={{
                fontSize: 14,
                color: "var(--muted)",
              }}
            >
              Email me respectful updates (never spammy)
            </label>
          </form>
          <div
            style={{
              color: "var(--muted)",
              fontSize: 13,
              marginTop: 8,
            }}
          >
            &copy; {new Date().getFullYear()} Mind Moment. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

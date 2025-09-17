import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto mt-20 mb-8 rounded-2xl bg-gradient-to-br from-[#ffe5b4] via-[#fdf6f0] to-[#a3c9c7] shadow-lg/20 px-6 py-8 text-center border border-[#f3e9dc]">
      <p className="text-[13px] md:text-sm text-ink/70 leading-relaxed">
        Mind Moment offers wellness conversations and culturally aware guidance.<br />
        Providers are trained outside Canada and are not regulated health professionals in Canada.<br />
        This is not medical care or psychotherapy. In an emergency call 911.<br />
        Crisis: <span className="font-semibold text-primary">Talk Suicide Canada 1-833-456-4566 / text 45645</span>.
      </p>
    </footer>
  );
}

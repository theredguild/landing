'use client';

import Link from "next/link";

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from '../components/ParticlesDOM';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={12} countDesktop={24} />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            Reach the Guild
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
            Contact
          </h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            For general inquiries, partnerships, disclosures, speaking, and collaboration.
          </p>
          <a
            href="mailto:hello@theredguild.org"
            className="mt-5 inline-block text-lg font-spartan-subtitle text-white hover:text-[color:var(--color-primary)] transition-colors"
          >
            hello@theredguild.org
          </a>
          <p className="mt-3 text-xs text-white/60 font-spartan-body">
            You can also DM members directly via their socials in the{" "}
            <Link
              href="/members"
              className="text-[color:var(--color-primary)] hover:opacity-80 transition-opacity"
            >
              Members
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">Emergency channels</h2>
            <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
              <li>
                Intel and info reports:{" "}
                <a
                  href="https://t.me/seal_tips_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-primary)]"
                >
                  @seal_tips_bot
                </a>
              </li>
              <li>
                Serious active incidents:{" "}
                <a
                  href="https://t.me/seal_911_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-primary)]"
                >
                  @seal_911_bot
                </a>
              </li>
              <li>For escalation context, ask for Matta.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">Include in your message</h2>
            <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
              <li>Name</li>
              <li>Handle</li>
              <li>Organization</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

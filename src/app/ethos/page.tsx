'use client';

import React from "react";

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from "../components/ParticlesDOM";

export default function EthosPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={10} countDesktop={22} />
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            About the Guild
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
            Our Ethos
          </h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            The Red Guild is a security collective devoted to protecting the open crypto ecosystem.
            We move like a guild: research, education, and open-source tooling built in public for the
            benefit of the community.
          </p>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            Our work blends adversarial rigor with public-good intent. We investigate threats, teach
            defenders, and ship practical tools that raise the baseline for everyone.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">What we do</h2>
            <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
              <li>Security research, advisories, and investigations</li>
              <li>Education programs, workshops, and awareness campaigns</li>
              <li>Open-source tooling for safer development</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">How we work</h2>
            <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
              <li>Community-first collaboration and open knowledge</li>
              <li>Responsible disclosure and transparent reporting</li>
              <li>Iterative practice, shared playbooks, repeatable wins</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

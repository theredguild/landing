'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { cardContent } from "../data/cardContent";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from '../components/ParticlesDOM';

export default function InitiativesPage() {
  const totalInitiatives = Object.keys(cardContent).length;

  const initiativeEntries = Object.entries(cardContent).filter(([, c]) => !!c.primaryLink);
  const resourceEntries = Object.entries(cardContent).filter(([, c]) => !c.primaryLink && !!c.secondaryLinks);

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={12} countDesktop={24} />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            About the Guild
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
            Initiatives
          </h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            Our initiatives turn security knowledge into practical impact: training, tooling,
            research, and public resources that anyone can use to harden crypto systems.
          </p>
        </div>

        <div className="mx-auto mt-8 mb-10 max-w-4xl grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">What is active now</h2>
            <p className="mt-3 text-xs text-white/70 font-spartan-body">
              {totalInitiatives} active lines of work, from adversarial training grounds to
              open-source safety tooling and long-form technical advisories.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h2 className="text-sm text-white font-spartan-subtitle">How to engage</h2>
            <p className="mt-3 text-xs text-white/70 font-spartan-body">
              Pick an initiative below to access challenges, documentation, event archives, or
              code repositories and join the work where it is happening.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-10 px-0 sm:px-8 overflow-visible">
          {initiativeEntries.map(([key, content]) => (
            <div
              key={key}
              className="relative w-full overflow-visible"
            >
              <Card
                title={content.title}
                description={content.description}
                primaryLink={content.primaryLink}
                secondaryLinks={content.secondaryLinks}
                variant="ethos"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[360px] gap-10 mt-10 px-0 sm:px-8 overflow-visible">
          {resourceEntries.map(([key, content]) => (
            <div
              key={key}
              className="relative w-full overflow-visible"
            >
              <Card
                title={content.title}
                description={content.description}
                primaryLink={content.primaryLink}
                secondaryLinks={content.secondaryLinks}
                variant="ethos"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
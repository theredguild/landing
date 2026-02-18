'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { cardContent } from "../data/cardContent";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from '../components/ParticlesDOM';

export default function InitiativesPage() {
  const handleExplore = (title: string) => {
    console.log('Explorar clickeado:', title);
  };

  const totalInitiatives = Object.keys(cardContent).length;

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={12} countDesktop={24} />
      <Navbar />
      <main className="container mx-auto px-4 pt-45 pb-8 relative z-20">
        <section className="relative mx-auto mb-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-[#120d0d]/90 p-6 md:p-8 shadow-[0_0_50px_rgba(247,57,47,0.24)]">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.2),transparent_65%)]" />
          <div className="relative z-10">
            <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
              About the Guild
            </p>
            <h1 className="mt-2 text-2xl text-white font-spartan-title">Initiatives</h1>
            <p className="mt-4 text-sm text-white/70 font-spartan-body max-w-3xl">
              Our initiatives turn security knowledge into practical impact: training, tooling,
              research, and public resources that anyone can use to harden crypto systems.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
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
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-0 sm:px-8 overflow-visible">
          {Object.entries(cardContent).map(([key, content]) => (
            <div 
              key={key}
              className="relative w-auto overflow-visible"
            >
              <Card
                title={content.title}
                description={content.description}
                buttonText={content.buttonText}
                links={content.links}
                variant="ethos"
                onExplore={() => handleExplore(content.title)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 

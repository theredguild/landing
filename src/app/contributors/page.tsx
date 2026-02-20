'use client';

import React, { useMemo } from "react";

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from "../components/ParticlesDOM";
import ContributorMiniCard from "../components/ContributorMiniCard";
import { contributors } from "../data/membersConfig";

export default function ContributorsPage() {
  const contributorsScoreboard = useMemo(
    () =>
      [...contributors]
        .sort((a, b) => b.participationScore - a.participationScore)
        .slice(0, 10),
    []
  );
  const totalParticipation2026 = useMemo(
    () => contributors.reduce((sum, contributor) => sum + contributor.participationScore, 0),
    []
  );

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={10} countDesktop={22} />
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            Who
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
            Contributors
          </h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            Community contributors who collaborated with The Red Guild on specific projects.
          </p>
        </div>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.55fr_0.95fr]">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-pixelify-sans text-white/70">
              Contributor Roster
            </h2>
            <div className="mt-4 grid justify-items-center gap-3 sm:grid-cols-2">
              {contributors.map((contributor) => (
                <ContributorMiniCard key={contributor.id} contributor={contributor} />
              ))}
            </div>
          </div>

          <aside className="xl:sticky xl:top-32 h-fit rounded-2xl border border-white/10 bg-black/35 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-pixelify-sans text-white/70">
                2026 Scoreboard
              </h2>
              <span className="text-[10px] font-manrope-body text-white/60">
                Total: {totalParticipation2026}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {contributorsScoreboard.map((contributor, index) => (
                <div
                  key={`score-${contributor.id}`}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5"
                >
                  <span className="text-[10px] uppercase tracking-[0.12em] font-pixelify-sans text-white/75">
                    {index + 1}. {contributor.alias}
                  </span>
                  <span className="text-[12px] font-pixelify-sans text-[color:var(--color-primary)]">
                    {contributor.participationScore}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

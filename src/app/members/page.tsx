'use client';

import React, { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from "../components/ParticlesDOM";
import MemberCard from "../components/MemberCard";
import MemberPreviewCard from "../components/MemberPreviewCard";
import { members } from "../data/membersConfig";

export default function MembersPage() {
  const [selectedMemberId, setSelectedMemberId] = useState<string>(members[0]?.id || "");

  const selectedMember = useMemo(
    () => members.find((member) => member.id === selectedMemberId) || members[0],
    [selectedMemberId]
  );

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={10} countDesktop={22} />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            The Red Guild Roster
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
            Members
          </h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body">
            Contributors presented as playable profiles: a mix of ethos, skills,
            and tactical focus. Please, don&apos;t take this too seriously.
          </p>
          <p className="mt-2 text-xs text-white/50 font-spartan-body">
            Select a member card to open the full profile.
          </p>
        </div>

        <div className="mt-10 grid justify-items-center gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <MemberPreviewCard
              key={member.id}
              member={member}
              isActive={member.id === selectedMember?.id}
              onSelect={() => setSelectedMemberId(member.id)}
            />
          ))}
        </div>

        {selectedMember && (
          <div className="mt-8">
            <MemberCard member={selectedMember} />
          </div>
        )}
      </main>
    </div>
  );
}

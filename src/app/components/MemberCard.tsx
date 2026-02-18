import React from "react";
import Image from "next/image";

import { MemberProfile } from "../data/membersConfig";
import RadarChart from "./RadarChart";
import SkillTree from "./SkillTree";

interface MemberCardProps {
  member: MemberProfile;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const initials =
    member.alias
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || member.name.slice(0, 2).toUpperCase();
  const avatarUrl =
    member.avatar ||
    (member.githubUsername
      ? `https://github.com/${member.githubUsername}.png?size=256`
      : undefined);

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/70 backdrop-blur-[12px] p-6 md:p-8 shadow-[0_0_40px_rgba(247,57,47,0.12)]">
      <div className="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(247,57,47,0.35),transparent_70%)] opacity-70" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent,rgba(255,255,255,0.03))]" />
      <div className="relative z-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#2a0f0f] via-[#1a0f0f] to-[#0d0d0d]">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 112px, 96px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-pixelify-sans text-white">
                  {initials}
                </div>
              )}
              <div className="absolute inset-0 border border-white/10" />
            </div>
            <div>
              <div className="text-lg text-white font-spartan-title">{member.name}</div>
              <div className="text-[11px] font-pixelify-sans text-[color:var(--color-primary)] tracking-[0.3em] uppercase">
                {member.alias}
              </div>
              <div className="mt-2 text-xs text-white/60 font-spartan-body">{member.title}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] uppercase font-pixelify-sans">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              Level {member.level}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              {member.className}
            </span>
          </div>

          <p className="text-sm text-white/70 font-spartan-body">{member.bio}</p>

          <ul className="space-y-2 text-xs text-white/65 font-spartan-body">
            {member.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {member.specialties.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase font-pixelify-sans text-white/70 tracking-[0.18em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
          <SkillTree tiers={member.skillTree} careerPath={member.careerPath} />

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] uppercase font-pixelify-sans text-white/70 tracking-[0.18em]">
                Radix Chart
              </h3>
              <span className="text-[10px] text-white/40">Capability Mesh</span>
            </div>
            <div className="mt-3">
              <RadarChart stats={member.radar} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-pixelify-sans text-white/60 uppercase tracking-[0.16em]">
              {member.radar.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1">
                  <span>{stat.label}</span>
                  <span className="text-white/90">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MemberCard;

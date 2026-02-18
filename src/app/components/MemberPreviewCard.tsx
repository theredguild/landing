import Image from "next/image";
import React from "react";

import { MemberProfile } from "../data/membersConfig";
import RadarChart from "./RadarChart";

interface MemberPreviewCardProps {
  member: MemberProfile;
  isActive: boolean;
  onSelect: () => void;
}

const MemberPreviewCard: React.FC<MemberPreviewCardProps> = ({
  member,
  isActive,
  onSelect,
}) => {
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
  const socials = [
    { key: "github", label: "GH", href: member.socials?.github },
    { key: "x", label: "X", href: member.socials?.x },
    { key: "linkedin", label: "IN", href: member.socials?.linkedin },
    { key: "website", label: "WEB", href: member.socials?.website },
  ];

  return (
    <article
      className={`relative w-full max-w-[320px] overflow-hidden rounded-2xl border p-2.5 text-left transition-all ${
        isActive
          ? "border-[#f7392f]/70 bg-[#1a1111]/92 shadow-[0_0_24px_rgba(247,57,47,0.22)]"
          : "border-white/10 bg-black/45 hover:border-white/25"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(130deg,rgba(255,255,255,0.05),transparent,rgba(255,255,255,0.02))]" />
      <button type="button" onClick={onSelect} className="relative z-10 w-full text-left">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-2.5">
            <div className="relative aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#2a0f0f] via-[#1a0f0f] to-[#0d0d0d]">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={member.name}
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs font-pixelify-sans text-white">
                  {initials}
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] uppercase tracking-[0.2em] font-pixelify-sans text-[color:var(--color-primary)]">
                {member.alias}
              </p>
              <p className="mt-1 text-[10px] leading-tight text-white/58 font-manrope-body">
                {member.title}
              </p>
              <div className="mt-1">
                <p className="text-[10px] uppercase tracking-[0.12em] leading-tight font-pixelify-sans text-white/70">
                  {member.className}
                </p>
                <span className="mt-1 inline-flex rounded-full border border-white/15 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase font-pixelify-sans text-white/75">
                  Lv {member.level}
                </span>
              </div>
            </div>
          </div>

          <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/35 p-1">
            <div className="flex h-full w-full items-center justify-center scale-[1.28]">
              <RadarChart stats={member.radar} size={72} showLabels={false} />
            </div>
          </div>
        </div>
      </button>

      <div className="relative z-10 mt-2 flex items-center gap-1.5 border-t border-white/8 pt-2">
        {socials.map((social) =>
          social.href ? (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/14 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-pixelify-sans text-white/75 transition-colors hover:text-[color:var(--color-primary)] hover:border-[color:var(--color-primary)]/40"
            >
              {social.label}
            </a>
          ) : (
            <span
              key={social.key}
              className="inline-flex items-center rounded-md border border-white/8 bg-white/[0.03] px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-pixelify-sans text-white/30"
            >
              {social.label}
            </span>
          )
        )}
      </div>
    </article>
  );
};

export default MemberPreviewCard;

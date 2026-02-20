import Image from "next/image";
import React from "react";

import { ContributorProfile } from "../data/membersConfig";

interface ContributorMiniCardProps {
  contributor: ContributorProfile;
}

const toSafeExternalUrl = (value?: string): string | null => {
  if (!value) {
    return null;
  }

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
};

const ContributorMiniCard: React.FC<ContributorMiniCardProps> = ({ contributor }) => {
  const initials =
    contributor.alias
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || contributor.name.slice(0, 2).toUpperCase();

  const fallbackGithubAvatar = contributor.githubUsername
    ? `https://github.com/${encodeURIComponent(contributor.githubUsername)}.png?size=256`
    : undefined;
  const avatarUrl =
    toSafeExternalUrl(contributor.avatar) || toSafeExternalUrl(fallbackGithubAvatar);

  return (
    <article className="relative w-full max-w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-2.5 text-left">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(130deg,rgba(255,255,255,0.05),transparent,rgba(255,255,255,0.02))]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-2.5">
            <div className="relative aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#2a0f0f] via-[#1a0f0f] to-[#0d0d0d]">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={contributor.name}
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
              <p className="whitespace-nowrap text-[11px] uppercase tracking-[0.2em] font-pixelify-sans text-[color:var(--color-primary)]">
                {contributor.alias}
              </p>
              <p className="mt-1 text-[10px] leading-tight text-white/58 font-manrope-body">
                {contributor.title}
              </p>
              <div className="mt-1">
                <p className="text-[10px] uppercase tracking-[0.12em] leading-tight font-pixelify-sans text-white/70">
                  {contributor.className}
                </p>
                <span className="mt-1 inline-flex rounded-full border border-white/15 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase font-pixelify-sans text-white/75">
                  Lv {contributor.level}
                </span>
              </div>
            </div>
          </div>

          <div className="w-[170px] shrink-0 rounded-lg border border-white/10 bg-black/35 p-2">
            <p className="text-[8px] uppercase tracking-[0.15em] font-pixelify-sans text-white/55">
              Projects
            </p>
            <div className="mt-1.5 space-y-1">
              {contributor.projects.slice(0, 3).map((project) => (
                <p
                  key={`${contributor.id}-${project}`}
                  className="whitespace-nowrap text-[10px] leading-tight text-white/78 font-manrope-body"
                  title={project}
                >
                  {project}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-white/8 pt-2">
          <p className="text-[8px] uppercase tracking-[0.14em] font-pixelify-sans text-white/55">
            Participation Score
          </p>
          <p className="mt-1 text-[14px] leading-none font-pixelify-sans text-[color:var(--color-primary)]">
            {contributor.participationScore}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ContributorMiniCard;

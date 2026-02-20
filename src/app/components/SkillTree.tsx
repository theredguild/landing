import React, { useMemo, useState } from "react";

import { CareerPathNode, SkillTier } from "../data/membersConfig";

const MAX_LEVEL = 5;
const HEXAGON_CLIP_PATH = "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)";
const SKILL_EMOJIS = ["🛡️", "🧠", "⚙️", "🔍", "🧪", "📡", "🧰", "🛰️", "🗝️", "🚀"];

type SkillBadge = {
  id: string;
  label: string;
  description: string;
  level: number;
  requires: string[];
  emoji: string;
};

interface SkillTreeProps {
  tiers: SkillTier[];
  careerPath?: CareerPathNode[];
}

interface LevelPipsProps {
  level: number;
  compact?: boolean;
}

const normalizeRequires = (requires?: string | string[]): string[] => {
  if (!requires) {
    return [];
  }
  const values = Array.isArray(requires) ? requires : [requires];
  return values.map((value) => value.trim()).filter(Boolean);
};

const LevelPips: React.FC<LevelPipsProps> = ({ level, compact = false }) => (
  <span className={`inline-flex items-center ${compact ? "gap-0.5" : "gap-1"}`}>
    {Array.from({ length: MAX_LEVEL }).map((_, index) => {
      const active = index < level;
      return (
        <span
          key={`level-pip-${index}`}
          className={`block border ${compact ? "h-2 w-2.5" : "h-2.5 w-3"} ${
            active
              ? "border-[#f7392f]/95 bg-[#f7392f] shadow-[0_0_5px_rgba(247,57,47,0.45)]"
              : "border-white/55 bg-white/18"
          }`}
          style={{ clipPath: HEXAGON_CLIP_PATH }}
        />
      );
    })}
  </span>
);

const SkillTree: React.FC<SkillTreeProps> = ({ tiers, careerPath }) => {
  const badges = useMemo<SkillBadge[]>(() => {
    if (careerPath && careerPath.length > 0) {
      return careerPath.map((node, index) => ({
        id: node.id,
        label: node.label,
        description: node.description,
        level: node.level,
        requires: normalizeRequires(node.requires),
        emoji: SKILL_EMOJIS[index % SKILL_EMOJIS.length],
      }));
    }

    let emojiIndex = 0;

    return tiers.flatMap((tier, tierIndex) =>
      tier.nodes.map((node, nodeIndex) => {
        const previousTier = tiers[tierIndex - 1];
        const previousNode =
          previousTier?.nodes[Math.min(nodeIndex, previousTier.nodes.length - 1)];

        const fallback: SkillBadge = {
          id: `${tier.label}-${node.label}`,
          label: node.label,
          description:
            node.description ||
            (tierIndex === 0
              ? `${node.label} is part of the core foundation every guild member starts with.`
              : `${node.label} is developed during the ${tier.label.toLowerCase()} stage.`),
          level: node.level,
          requires: node.requires ? [node.requires] : previousNode ? [previousNode.label] : [],
          emoji: SKILL_EMOJIS[emojiIndex % SKILL_EMOJIS.length],
        };

        emojiIndex += 1;
        return fallback;
      })
    );
  }, [careerPath, tiers]);

  const [activeBadgeId, setActiveBadgeId] = useState<string>(badges[0]?.id || "");

  const badgeById = useMemo(() => {
    const map = new Map<string, SkillBadge>();
    badges.forEach((badge) => map.set(badge.id, badge));
    return map;
  }, [badges]);

  const badgeByLabel = useMemo(() => {
    const map = new Map<string, SkillBadge>();
    badges.forEach((badge) => {
      if (!map.has(badge.label.toLowerCase())) {
        map.set(badge.label.toLowerCase(), badge);
      }
    });
    return map;
  }, [badges]);

  const activeBadge = badgeById.get(activeBadgeId) || badges[0] || null;

  const activeDependencies = (activeBadge?.requires || []).map((requiredLabel) => {
    const requiredBadge = badgeByLabel.get(requiredLabel.toLowerCase());
    return {
      label: requiredLabel,
      level: requiredBadge?.level || 0,
    };
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] uppercase font-pixelify-sans text-white/70 tracking-[0.18em]">
          Career Badges
        </h3>
        <span className="text-[10px] text-white/45">Compact View</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {badges.map((badge) => {
          const isActive = activeBadge?.id === badge.id;

          return (
            <button
              key={badge.id}
              type="button"
              onClick={() => setActiveBadgeId(badge.id)}
              onFocus={() => setActiveBadgeId(badge.id)}
              className={`grid w-full grid-cols-[26px_minmax(0,1fr)_auto] items-center gap-2 rounded-xl border px-2.5 py-1.5 text-left transition-colors ${
                isActive
                  ? "border-[#f7392f]/70 bg-[#f7392f]/12"
                  : "border-white/12 bg-white/5 hover:border-white/25"
              }`}
              aria-label={`${badge.label} badge`}
            >
              <span className="relative block h-7 w-6 shrink-0">
                <span
                  className="absolute inset-0 border border-white/25 bg-[#f7392f]/30"
                  style={{ clipPath: HEXAGON_CLIP_PATH }}
                />
                <span
                  className="absolute inset-[1.5px] bg-[#0f0f0f]"
                  style={{ clipPath: HEXAGON_CLIP_PATH }}
                />
                <span className="absolute inset-[3px] flex items-center justify-center">
                  <span className="text-[11px]" aria-hidden="true">
                    {badge.emoji}
                  </span>
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.12em] font-pixelify-sans text-white/85">
                {badge.label}
              </span>
              <LevelPips level={badge.level} compact />
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 min-h-[128px]">
        {activeBadge ? (
          <div className="flex min-h-[102px] flex-col">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs uppercase tracking-[0.14em] font-pixelify-sans text-[#f7392f]">
                {activeBadge.label}
              </p>
              <LevelPips level={activeBadge.level} compact />
            </div>

            <p className="mt-2 text-[12px] text-white/82 font-manrope-body">
              {activeBadge.description}
            </p>

            <div className="mt-auto pt-3 border-t border-[#f7392f]/20">
              <p className="text-[10px] uppercase tracking-[0.12em] font-pixelify-sans text-[#ff9c92]">
                Dependencies
              </p>
              {activeDependencies.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeDependencies.map((dependency) => (
                    <span
                      key={`${activeBadge.id}-${dependency.label}`}
                      className="inline-flex items-center gap-1 rounded-md border border-[#f7392f]/35 bg-[#f7392f]/10 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.08em] text-[#ffd6d3] font-pixelify-sans"
                    >
                      <span>{dependency.label}</span>
                      <LevelPips level={dependency.level} compact />
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-1 text-[11px] text-white/45 font-manrope-body">
                  None
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex min-h-[102px] flex-col">
            <p className="mt-auto text-xs text-white/55 font-manrope-body">
              No skill badges configured.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillTree;

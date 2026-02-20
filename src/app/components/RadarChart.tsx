import React from "react";

import { MemberStat } from "../data/membersConfig";

interface RadarChartProps {
  stats: MemberStat[];
  size?: number;
  showLabels?: boolean;
}

const RADAR_LABEL_ABBREVIATIONS: Record<string, string> = {
  SOCIAL: "SOC",
  EDUCATION: "EDU",
  ART: "ART",
  DEVELOPMENT: "DEV",
  OPERATIONS: "OPS",
  SECURITY: "SEC",
};

const toRadarLabel = (label: string): string => {
  const normalized = label.trim().toUpperCase();
  return RADAR_LABEL_ABBREVIATIONS[normalized] || normalized.slice(0, 3);
};

const RadarChart: React.FC<RadarChartProps> = ({ stats, size = 220, showLabels = true }) => {
  if (!stats.length) {
    return null;
  }

  const isCompact = !showLabels || size <= 96;
  const padding = showLabels ? 24 : 14;
  const center = size / 2;
  const radius = size / 2 - padding;
  const angleStep = (Math.PI * 2) / stats.length;
  const maxValue = 100;
  const pointRadius = isCompact ? Math.max(0.9, size * 0.012) : 3;
  const pointStroke = isCompact ? 0.55 : 1;
  const axisStroke = isCompact ? 0.7 : 1;
  const polygonStroke = isCompact ? 1.15 : 2;

  const buildPolygon = (ratio: number) =>
    stats
      .map((_, index) => {
        const angle = -Math.PI / 2 + index * angleStep;
        const r = radius * ratio;
        const x = center + Math.cos(angle) * r;
        const y = center + Math.sin(angle) * r;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");

  const dataPolygon = stats
    .map((stat, index) => {
      const angle = -Math.PI / 2 + index * angleStep;
      const r = (stat.value / maxValue) * radius;
      const x = center + Math.cos(angle) * r;
      const y = center + Math.sin(angle) * r;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const labelRadius = radius + 14;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto block"
      aria-hidden="true"
    >
      {[0.25, 0.5, 0.75, 1].map((ratio) => (
        <polygon
          key={ratio}
          points={buildPolygon(ratio)}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={axisStroke}
        />
      ))}

      {stats.map((_, index) => {
        const angle = -Math.PI / 2 + index * angleStep;
        const x = center + Math.cos(angle) * radius;
        const y = center + Math.sin(angle) * radius;
        return (
          <line
            key={`axis-${index}`}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={axisStroke}
          />
        );
      })}

      <polygon
        points={dataPolygon}
        fill="rgba(247,57,47,0.18)"
        stroke="rgba(247,57,47,0.9)"
        strokeWidth={polygonStroke}
      />

      {stats.map((stat, index) => {
        const angle = -Math.PI / 2 + index * angleStep;
        const r = (stat.value / maxValue) * radius;
        const x = center + Math.cos(angle) * r;
        const y = center + Math.sin(angle) * r;
        return (
          <circle
              key={`dot-${stat.label}`}
              cx={x}
              cy={y}
              r={pointRadius}
              fill="rgba(247,57,47,0.95)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth={pointStroke}
            />
          );
      })}

      {showLabels &&
        stats.map((stat, index) => {
          const angle = -Math.PI / 2 + index * angleStep;
          const x = center + Math.cos(angle) * labelRadius;
          const y = center + Math.sin(angle) * labelRadius;
          const anchor = x < center - 6 ? "end" : x > center + 6 ? "start" : "middle";
          return (
            <text
              key={`label-${stat.label}`}
              x={x}
              y={y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize="8"
              fill="rgba(255,255,255,0.6)"
              fontFamily="Spartan, sans-serif"
              letterSpacing="0.08em"
            >
              {toRadarLabel(stat.label)}
            </text>
          );
        })}
    </svg>
  );
};

export default RadarChart;

import React from 'react';

import { CardLink } from '../data/cardContent';

interface CardProps {
  title: string;
  description: string;
  onClose?: () => void;
  primaryLink?: CardLink;
  secondaryLinks?: CardLink[];
  variant?: 'default' | 'ethos';
}

const toSafeExternalUrl = (value: string): string | null => {
  try {
    const parsed = new URL(value);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  onClose,
  primaryLink,
  secondaryLinks,
  variant = 'default',
}) => {
  const isEthos = variant === 'ethos';
  const isResourceCard = !primaryLink && secondaryLinks && secondaryLinks.length > 0;
  const hasLinks = primaryLink || (secondaryLinks && secondaryLinks.length > 0);

  return (
    <div className={`relative w-full ${isEthos ? 'h-full' : 'h-auto sm:h-[33vh]'}`}>
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 rounded-2xl ${
            isEthos
              ? 'border border-white/20 bg-[#120d0d]/90 shadow-[0_0_50px_rgba(247,57,47,0.24)]'
              : 'border border-[#D02D30] bg-[#D02D301A] backdrop-blur-[15px]'
          }`}
        />
        {isEthos && (
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.2),transparent_65%)]" />
        )}
        <div className={`relative z-10 flex h-full flex-col ${isEthos ? 'p-6 md:p-7' : 'p-4 pt-5 pb-6'}`}>
          {onClose && (
            <button
              className={`absolute flex items-center justify-center transition-colors ${
                isEthos
                  ? 'right-4 top-4 h-8 w-8 rounded-full border border-white/20 bg-black/60 text-white/80 hover:text-white hover:border-white/35'
                  : '-top-3 -right-3 w-8 h-8 rounded-full border border-[#D02D30] bg-white/80 text-[#D02D30] hover:bg-white'
              }`}
              onClick={onClose}
              aria-label="Close popup"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
          <div className="flex-1 min-h-0">
            <h2 className={`text-white font-spartan-title mb-2 ${isEthos ? 'text-xl md:text-2xl pr-10' : 'text-xl'}`}>{title}</h2>
            <p className={`font-spartan-body ${isEthos ? 'text-sm text-white/72 leading-relaxed' : 'text-base text-white/80'}`}>
              {description}
            </p>
          </div>

          {hasLinks && (
            <div className={`mt-4 ${isEthos ? 'pt-3 border-t border-white/10' : ''}`}>
              {primaryLink ? (
                <div className="flex flex-col gap-2.5">
                  <a
                    href={toSafeExternalUrl(primaryLink.url) || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-spartan-subtitle inline-flex items-center gap-2 rounded-lg transition-colors ${
                      isEthos
                        ? 'text-sm bg-white/[0.07] hover:bg-white/[0.14] text-white px-3 py-2.5 border border-white/15 hover:border-white/30'
                        : 'text-base bg-white/10 hover:bg-white/20 text-white px-3 py-2'
                    }`}
                  >
                    <span aria-hidden="true" className="text-white/50">&rarr;</span>
                    {primaryLink.label}
                  </a>
                  {secondaryLinks && secondaryLinks.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      {secondaryLinks.map((link, idx) => {
                        const safeUrl = toSafeExternalUrl(link.url);
                        if (!safeUrl) return null;
                        return (
                          <a
                            key={idx}
                            href={safeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-spartan-subtitle transition-colors underline underline-offset-2 ${
                              isEthos
                                ? 'text-white/65 hover:text-white text-sm decoration-white/35'
                                : 'text-white/70 hover:text-white text-sm decoration-white/40'
                            }`}
                          >
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : isResourceCard ? (
                <div className={`grid gap-x-4 gap-y-2 ${secondaryLinks.length >= 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {secondaryLinks.map((link, idx) => {
                    const safeUrl = toSafeExternalUrl(link.url);
                    if (!safeUrl) return null;
                    return (
                      <a
                        key={idx}
                        href={safeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-spartan-subtitle transition-colors underline underline-offset-2 ${
                          isEthos
                            ? 'text-white/70 hover:text-white text-sm decoration-white/40'
                            : 'text-white/70 hover:text-white text-sm decoration-white/40'
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
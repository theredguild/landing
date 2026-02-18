import React from 'react';

import { CardLink } from '../data/cardContent';

interface CardProps {
  title: string;
  description: string;
  onClose?: () => void;
  onExplore: () => void;
  buttonText?: string;
  links?: CardLink[];
  variant?: 'default' | 'ethos';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  onClose,
  onExplore,
  buttonText,
  links,
  variant = 'default',
}) => {
  const isEthos = variant === 'ethos';

  return (
    <div className={`relative w-full ${isEthos ? 'h-auto min-h-[270px]' : 'h-auto sm:h-[33vh]'}`}>
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
        <div className={`relative z-10 flex h-full flex-col justify-between ${isEthos ? 'p-6 md:p-7' : 'p-4 pt-5 pb-6'}`}>
          <div>
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
            <h2 className={`text-white font-spartan-title mb-4 ${isEthos ? 'text-xl md:text-2xl pr-10' : 'text-xl'}`}>{title}</h2>
            <p className={`font-spartan-body ${isEthos ? 'text-sm text-white/72 leading-relaxed' : 'text-base text-white/80'}`} 
               dangerouslySetInnerHTML={{ __html: description.replace(
                 /<a /g,
                 "<a style='text-decoration:underline;color:#f7392f;' "
               ) }} 
            />
          </div>
          {links && links.length > 0 ? (
            <div className={`flex flex-col gap-3 mt-6 ${isEthos ? 'pt-2 border-t border-white/10' : ''}`}>
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-spartan-subtitle transition-colors underline underline-offset-2 ${
                    isEthos
                      ? 'text-white/90 hover:text-white text-sm decoration-white/60'
                      : 'text-white hover:text-white/80 text-base decoration-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onExplore();
              }}
              className={`font-spartan-subtitle transition-colors uppercase underline underline-offset-2 mt-6 ${
                isEthos
                  ? 'text-white/90 hover:text-white text-sm decoration-white/60'
                  : 'text-white hover:text-white/80 text-base decoration-white'
              }`}
            >
              {buttonText || "Explore"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card; 

'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const TRANSITION_SCROLL = 50; // Scroll para activar transición

const MainContent = ({ onSectionEnd, transitioning: parentTransitioning }: { onSectionEnd: () => void; transitioning?: boolean }) => {
  const [, setProgress] = useState(0); // 0 a 1
  const [transitioning, setTransitioning] = useState(false);
  const [blockScroll, setBlockScroll] = useState(false);
  const [showSection, setShowSection] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (transitioning || blockScroll) return;
      const scroll = window.scrollY;
      const p = Math.min(scroll / TRANSITION_SCROLL, 1);
      setProgress(p);
      if (p === 1 && onSectionEnd) {
        setTransitioning(true);
        setBlockScroll(true);
        setTimeout(() => {
          setShowSection(false);
          setTransitioning(false);
          setBlockScroll(false);
          window.scrollTo({ top: 0, behavior: 'auto' });
          onSectionEnd();
        }, 500); // Match fade duration
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transitioning, blockScroll, onSectionEnd]);

  useEffect(() => {
    document.body.style.overflow = (transitioning || blockScroll || parentTransitioning) ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [transitioning, blockScroll, parentTransitioning]);

  const lines = [
    'Advancing crypto security',
    ' with research, tools and resources',
    ' for the public good.'
  ];

  if (!showSection) return null;

  return (
    <div style={{ minHeight: '200vh', position: 'relative' }}>
      <section
        ref={scrollContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          opacity: (transitioning || parentTransitioning) ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: (transitioning || parentTransitioning) ? 'none' : 'auto',
        }}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-[800px]">
          <div className="w-[169px] h-[169px] relative flex-shrink-0 [&>*]:!opacity-100 [&>*]:!transition-none">
            <Image
              src="/assets/trg-logo.svg"
              alt="TRG Logo"
              fill
              priority
              className="object-contain"
              sizes="169px"
            />
          </div>
          <h1 className="text-base sm:text-xl lg:text-4xl text-center w-11/12 md:w-[45%] min-h-[120px] flex items-center justify-center font-spartan-title text-white">
            <div className="flex flex-col items-center gap-2">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex">
                  {line.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="font-spartan-title"
                      style={{
                        color: '#ffffff',
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default MainContent;

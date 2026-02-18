'use client';

import React from 'react';
import Image from 'next/image';

const SupportersCollaborators: React.FC = () => {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-center mt-30">
      <section className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-[#120d0d]/90 p-6 md:p-8 shadow-[0_0_50px_rgba(247,57,47,0.24)]">
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.2),transparent_65%)]" />
        <div className="relative z-10">
          <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
            About the Guild
          </p>
          <h1 className="mt-2 text-2xl text-white font-spartan-title">Supporters & Collaborators</h1>
          <p className="mt-4 text-sm text-white/70 font-spartan-body max-w-3xl">
            We collaborate with aligned organizations that support The Red Guild through grants,
            shared security initiatives, and ecosystem efforts focused on public-benefit outcomes.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 md:gap-20 items-center mt-8 mb-6">
        <a
          href="https://ethereum.foundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/assets/contact-section/ethereum-foundation-official.svg"
            alt="Ethereum Foundation"
            width={180}
            height={100}
            className="object-contain h-14 w-auto"
          />
        </a>
        <a
          href="https://www.securityalliance.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/assets/contact-section/security-alliance-official.svg"
            alt="Security Alliance"
            width={180}
            height={100}
            className="object-contain h-14 w-auto"
          />
        </a>
        <a
          href="https://worldethicaldata.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            src="/assets/contact-section/wedf-logo.png"
            alt="World Ethical Data Foundation"
            width={220}
            height={100}
            className="object-contain h-14 w-auto"
          />
        </a>
      </div>
      <p className="text-center mt-4 text-sm font-spartan-caption max-w-full md:whitespace-nowrap whitespace-normal" style={{ color: '#7F7F7F' }}>
        The Red Guild works thanks to grants and donations - if you&apos;d like to support our public-benefit work, get in touch.
      </p>
    </div>
  );
};

export default SupportersCollaborators;

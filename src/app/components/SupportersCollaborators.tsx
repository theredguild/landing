'use client';

import React from 'react';
import Image from 'next/image';

const SupportersCollaborators: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
          About the Guild
        </p>
        <h1 className="mt-3 text-2xl sm:text-3xl text-white font-spartan-title">
          Supporters & Collaborators
        </h1>
        <p className="mt-4 text-sm text-white/70 font-spartan-body">
          We collaborate with aligned organizations that support The Red Guild through grants,
          shared security initiatives, and ecosystem efforts focused on public-benefit outcomes.
        </p>
      </div>

      <div className="mx-auto mt-8 w-full max-w-4xl grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-sm text-white font-spartan-subtitle">Aligned partners</h2>
          <p className="mt-3 text-xs text-white/70 font-spartan-body">
            Foundations, security alliances, and public-interest groups helping sustain research,
            tooling, and education for a safer ecosystem.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-sm text-white font-spartan-subtitle">Support model</h2>
          <p className="mt-3 text-xs text-white/70 font-spartan-body">
            Grants, donations, and collaborative programs that keep public-benefit security work
            active and broadly accessible.
          </p>
        </div>
      </div>

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

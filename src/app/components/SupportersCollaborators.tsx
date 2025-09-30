'use client';

import React from 'react';

const SupportersCollaborators: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-30">
      <span className="text-white text-lg mb-4 font-spartan-subtitle">Supporters & Collaborators</span>
      <div className="flex flex-row gap-30">
        <a href="https://ethereum.foundation/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/contact-section/ethereum-foundation.svg" alt="Ethereum Foundation" className="w-40 h-24 object-contain" />
        </a>
        <a href="https://www.securityalliance.org/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/contact-section/security-alliance.svg" alt="Security Alliance" className="w-40 h-24 object-contain" />
        </a>
      </div>
      <p className="text-center mt-4 text-sm font-spartan-caption max-w-full md:whitespace-nowrap whitespace-normal" style={{ color: '#7F7F7F' }}>
        The Red Guild works thanks to grants and donations - if you'd like to support our public-benefit work, get in touch.
      </p>
    </div>
  );
};

export default SupportersCollaborators;

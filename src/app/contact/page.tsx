'use client';

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from '../components/ParticlesDOM';
import XIcon from '../components/assets/XIcon';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center justify-center">
      <BackgroundClouds />
      <ParticlesDOM countMobile={24} countDesktop={48} />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-8 relative z-30 flex flex-col items-center justify-center w-full">
        <h1 className="text-lg sm:text-xl text-center text-white font-spartan-title px-6">Contact Us</h1>
        
        {/* Email - Prominent position */}
        <div className="mt-8 mb-6">
          <a href="mailto:hello@theredguild.org" className="inline-block px-6 py-3 hover:opacity-80 transition-opacity duration-300" target="_blank" rel="noopener noreferrer">
            <span className="text-white text-lg font-spartan-subtitle">hello@theredguild.org</span>
          </a>
        </div>

        {/* Social media icons */}
        <div className="mx-auto flex flex-col items-center justify-center mt-4 backdrop-blur-[15px] contact-card">
          <div className="flex flex-1 items-center justify-center gap-20 w-full px-12 py-6 contact-card-content">
            <a href="https://x.com/theredguild" className="w-14 h-14 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
              <XIcon className="w-8 h-8 text-white contact-icon" />
            </a>
            <a href="https://github.com/theredguild" className="w-14 h-14 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/contact-section/github-icon.svg" alt="GitHub" width={36} height={36} className="contact-icon" />
            </a>
            <a href="https://blog.theredguild.org/" className="w-14 h-14 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/contact-section/blog-icon.svg" alt="Blog" width={56} height={56} className="contact-icon" />
            </a>
          </div>
        </div>
        
        {/* Supporters & Collaborators */}
        {/* <SupportersCollaborators /> */}
      </main>
    </div>
  );
} 
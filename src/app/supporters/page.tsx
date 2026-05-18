'use client';

import Navbar from "../components/Navbar";
import BackgroundClouds from "../components/BackgroundClouds";
import ParticlesDOM from '../components/ParticlesDOM';
import SupportersCollaborators from '../components/SupportersCollaborators';

export default function SupportersPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={12} countDesktop={24} />
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-30 w-full">
        {/* Supporters & Collaborators Section */}
        <SupportersCollaborators />
      </main>
    </div>
  );
}

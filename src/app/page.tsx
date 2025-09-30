'use client';

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Scene from './components/Scene';
import BackgroundClouds from "./components/BackgroundClouds";
import LoadingScreen from './components/LoadingScreen';
import Indicators from './components/Indicators';
import ParticlesDOM from './components/ParticlesDOM';

export default function Home() {
  const [showLoading, setShowLoading] = useState(false);
  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [blockScroll, setBlockScroll] = useState(false);
  const [unmountScene, setUnmountScene] = useState(false);

  // When MainContent animation ends (Section1) - Fade to Scene
  const handleSection1End = () => {
    setTransitioning(true);
    setBlockScroll(true);
    setTimeout(() => {
      setShowSection1(false);
      setShowSection2(true);
      setTransitioning(false);
      setBlockScroll(false);
      setUnmountScene(false); // Ensures Scene is mounted
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 500); // Match fade duration
  };

  // Return from Scene (Section2) to MainContent (Section1) - Fade back
  const handleBackToSection1 = () => {
    setTransitioning(true);
    setBlockScroll(true);
    setTimeout(() => {
      setShowSection2(false);
      setShowSection1(true);
      setTransitioning(false);
      setBlockScroll(false);
      setUnmountScene(true); // Unmounts Scene after fade-out
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 500); // Match fade duration
  };

  React.useEffect(() => {
    document.body.style.overflow = transitioning || blockScroll ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [transitioning, blockScroll]);

  return (
    <div className="bg-black relative min-h-[100dvh]">
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <BackgroundClouds onlyInScene={showSection2} />
      </div>
      {/* Global particles that persist across all sections */}
      <ParticlesDOM countMobile={12} countDesktop={72} zIndexClass="z-[25]" />
      <Navbar />
      <Indicators inMain={showSection1} inScene={showSection2} />
      <main className="relative min-h-[100dvh] z-10">
        <LoadingScreen enabled={showLoading} onLoadingComplete={() => setShowLoading(false)} />
        {showSection1 && <MainContent onSectionEnd={handleSection1End} transitioning={transitioning} />}
        {(showSection2 || (!unmountScene && transitioning)) && (
          <Scene show={showSection2} transitioning={transitioning} onBack={handleBackToSection1} />
        )}
      </main>
    </div>
  );
}

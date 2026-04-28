'use client';

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Scene from './components/Scene';
import BackgroundClouds from "./components/BackgroundClouds";
import LoadingScreen from './components/LoadingScreen';
import Indicators from './components/Indicators';
import ParticlesDOM from './components/ParticlesDOM';
import GivethSupportCard from "./components/GivethSupportCard";

export default function Home() {
  const [showLoading, setShowLoading] = useState(false);
  const [showSection1, setShowSection1] = useState(true);
  const [showSection2, setShowSection2] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [blockScroll, setBlockScroll] = useState(false);
  const [unmountScene, setUnmountScene] = useState(false);
  const [showSupportPopup, setShowSupportPopup] = useState(true);

  const handleSection1End = () => {
    setTransitioning(true);
    setBlockScroll(true);
    setTimeout(() => {
      setShowSection1(false);
      setShowSection2(true);
      setTransitioning(false);
      setBlockScroll(false);
      setUnmountScene(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 500);
  };

  const handleBackToSection1 = () => {
    setTransitioning(true);
    setBlockScroll(true);
    setTimeout(() => {
      setShowSection2(false);
      setShowSection1(true);
      setTransitioning(false);
      setBlockScroll(false);
      setUnmountScene(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 500);
  };

  React.useEffect(() => {
    document.body.style.overflow = transitioning || blockScroll || (showSection1 && showSupportPopup) ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [transitioning, blockScroll, showSection1, showSupportPopup]);

  return (
    <div className="bg-black relative min-h-[100dvh]">
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <BackgroundClouds onlyInScene={showSection2} />
      </div>
      <ParticlesDOM countMobile={12} countDesktop={24} zIndexClass="z-[25]" />
      <Navbar />
      <Indicators inMain={showSection1} inScene={showSection2} />
      <main className={`relative min-h-[100dvh] ${showSection1 && showSupportPopup ? 'z-[80]' : 'z-10'}`}>
        <LoadingScreen enabled={showLoading} onLoadingComplete={() => setShowLoading(false)} />
        {showSection1 && <MainContent onSectionEnd={handleSection1End} transitioning={transitioning} />}
        {(showSection2 || (!unmountScene && transitioning)) && (
          <Scene show={showSection2} transitioning={transitioning} onBack={handleBackToSection1} />
        )}
      </main>
      {showSection1 && showSupportPopup ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/55 px-3 py-4 backdrop-blur-[3px] sm:px-4 sm:py-6">
          <GivethSupportCard
            variant="banner"
            onClose={() => setShowSupportPopup(false)}
            className="max-w-[44rem] max-h-[calc(100dvh-1.5rem)] overflow-y-auto sm:max-h-[calc(100dvh-3rem)]"
          />
        </div>
      ) : null}
    </div>
  );
}

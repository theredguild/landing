'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isEthosOpen, setIsEthosOpen] = useState(false);
  const closeAboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isAboutActive = pathname === "/members";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsMobileAboutOpen(false);
  };

  const clearAboutCloseTimer = () => {
    if (closeAboutTimeoutRef.current) {
      clearTimeout(closeAboutTimeoutRef.current);
      closeAboutTimeoutRef.current = null;
    }
  };

  const openAboutMenu = () => {
    clearAboutCloseTimer();
    setIsAboutOpen(true);
  };

  const scheduleAboutClose = () => {
    clearAboutCloseTimer();
    closeAboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 220);
  };

  const openEthos = () => {
    setIsEthosOpen(true);
    setIsAboutOpen(false);
    setIsMobileAboutOpen(false);
    setIsMenuOpen(false);
  };

  const closeEthos = () => {
    setIsEthosOpen(false);
  };

  useEffect(() => {
    if (!isEthosOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsEthosOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEthosOpen]);

  useEffect(() => {
    return () => {
      clearAboutCloseTimer();
    };
  }, []);

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[min(92vw,1040px)] max-w-[1040px] bg-[#191919] text-white px-4 sm:px-6 xl:px-8 py-2 rounded-full flex items-center justify-between gap-3 sm:gap-5 xl:gap-7 border border-white/50 font-spartan-body z-[60]">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/assets/navbar-logo.svg"
              alt="TRG Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-4 xl:gap-6 2xl:gap-8">
          <li>
            <Link
              href="/"
              data-text="Home"
              className={`transition-all duration-300 relative ${
                pathname === "/"
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/initiatives"
              data-text="Initiatives"
              className={`transition-all duration-300 relative ${
                pathname === "/initiatives"
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              href="/supporters"
              data-text="Supporters"
              className={`transition-all duration-300 relative ${
                pathname === "/supporters"
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
            >
              Supporters
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={openAboutMenu}
            onMouseLeave={scheduleAboutClose}
          >
            <button
              type="button"
              data-text="About"
              onClick={() => setIsAboutOpen((prev) => !prev)}
              onFocus={openAboutMenu}
              className={`transition-all duration-300 relative inline-flex items-center gap-1.5 align-middle ${
                isAboutActive
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
              aria-expanded={isAboutOpen}
              aria-haspopup="true"
            >
              About
              <span
                className={`text-[9px] leading-none transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {isAboutOpen && (
              <div
                className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2"
                onMouseEnter={openAboutMenu}
                onMouseLeave={scheduleAboutClose}
              >
                <div className="relative rounded-2xl border border-white/20 bg-[#111111] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.18),transparent_60%)]" />
                  <div className="relative z-10 flex flex-col gap-3">
                    <button
                      type="button"
                      data-text="Our ethos"
                      onClick={openEthos}
                      className="text-left text-xs text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                    >
                      Our ethos
                    </button>
                    <Link
                      href="/members"
                      data-text="Members"
                      onClick={() => setIsAboutOpen(false)}
                      className="text-left text-xs text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                    >
                      Members
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <a
              href="https://blog.theredguild.org/"
              target="_blank"
              rel="noopener noreferrer"
              data-text="Blog"
              className="transition-all duration-300 relative text-[11px] 2xl:text-sm hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
            >
              Blog
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              data-text="Contact"
              className={`transition-all duration-300 relative ${
                pathname === "/contact"
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed left-0 right-0 top-16 bottom-0 bg-black/80 z-50 xl:hidden"
            onClick={closeMenu}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 bg-[#191919] rounded-2xl border border-white/50 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6">
                <li>
                  <Link
                    href="/"
                    data-text="Home"
                    className={`block transition-all duration-300 relative ${
                      pathname === "/"
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives"
                    data-text="Initiatives"
                    className={`block transition-all duration-300 relative ${
                      pathname === "/initiatives"
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    onClick={closeMenu}
                  >
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link
                    href="/supporters"
                    data-text="Supporters"
                    className={`block transition-all duration-300 relative ${
                      pathname === "/supporters"
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    onClick={closeMenu}
                  >
                    Supporters
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    data-text="About"
                    onClick={() => setIsMobileAboutOpen((prev) => !prev)}
                    className={`block transition-all duration-300 relative text-left ${
                      isAboutActive
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    aria-expanded={isMobileAboutOpen}
                  >
                    About
                  </button>
                  {isMobileAboutOpen && (
                    <div className="mt-4 flex flex-col gap-4 border-l border-white/10 pl-4">
                      <button
                        type="button"
                        data-text="Our ethos"
                        onClick={openEthos}
                        className="text-left text-base text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                      >
                        Our ethos
                      </button>
                      <Link
                        href="/members"
                        data-text="Members"
                        onClick={closeMenu}
                        className="text-left text-base text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                      >
                        Members
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="https://blog.theredguild.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-text="Blog"
                    className="block transition-all duration-300 relative text-lg hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                    onClick={closeMenu}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    data-text="Contact"
                    className={`block transition-all duration-300 relative ${
                      pathname === "/contact"
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {isEthosOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeEthos} />
          <div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/20 bg-[#120d0d]/90 p-6 md:p-8 shadow-[0_0_50px_rgba(247,57,47,0.3)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.2),transparent_65%)]" />
            <button
              type="button"
              aria-label="Close ethos"
              onClick={closeEthos}
              className="absolute right-4 top-4 h-8 w-8 rounded-full border border-white/20 bg-black/60 text-white/80 hover:text-white transition-colors"
            >
              X
            </button>
            <div className="relative z-10">
              <p className="text-[11px] uppercase font-pixelify-sans text-white/60 tracking-[0.3em]">
                About the Guild
              </p>
              <h2 className="mt-2 text-2xl text-white font-spartan-title">Our Ethos</h2>
              <p className="mt-4 text-sm text-white/70 font-spartan-body">
                The Red Guild is a security collective devoted to protecting the open crypto ecosystem.
                We move like a guild: research, education, and open-source tooling built in public for the
                benefit of the community.
              </p>
              <p className="mt-4 text-sm text-white/70 font-spartan-body">
                Our work blends adversarial rigor with public-good intent. We investigate threats, teach
                defenders, and ship practical tools that raise the baseline for everyone.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <h3 className="text-sm text-white font-spartan-subtitle">What we do</h3>
                  <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
                    <li>Security research, advisories, and investigations</li>
                    <li>Education programs, workshops, and awareness campaigns</li>
                    <li>Open-source tooling for safer development</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <h3 className="text-sm text-white font-spartan-subtitle">How we work</h3>
                  <ul className="mt-3 space-y-2 text-xs text-white/70 font-spartan-body">
                    <li>Community-first collaboration and open knowledge</li>
                    <li>Responsible disclosure and transparent reporting</li>
                    <li>Iterative practice, shared playbooks, repeatable wins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 

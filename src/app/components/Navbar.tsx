'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhoOpen, setIsWhoOpen] = useState(false);
  const [isMobileWhoOpen, setIsMobileWhoOpen] = useState(false);
  const closeWhoTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isWhoActive = pathname === "/members" || pathname === "/contributors";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsWhoOpen(false);
    setIsMobileWhoOpen(false);
  };

  const clearWhoCloseTimer = () => {
    if (closeWhoTimeoutRef.current) {
      clearTimeout(closeWhoTimeoutRef.current);
      closeWhoTimeoutRef.current = null;
    }
  };

  const openWhoMenu = () => {
    clearWhoCloseTimer();
    setIsWhoOpen(true);
  };

  const scheduleWhoClose = () => {
    clearWhoCloseTimer();
    closeWhoTimeoutRef.current = setTimeout(() => {
      setIsWhoOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      clearWhoCloseTimer();
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
            className="relative flex items-center"
            onMouseEnter={openWhoMenu}
            onMouseLeave={scheduleWhoClose}
          >
            <button
              type="button"
              data-text="Who"
              onClick={() => setIsWhoOpen((prev) => !prev)}
              onFocus={openWhoMenu}
              className={`transition-all duration-300 relative inline-flex items-center gap-1 leading-[1] py-0 translate-y-[1px] ${
                isWhoActive
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
              aria-expanded={isWhoOpen}
              aria-haspopup="true"
            >
              Who
              <span
                className={`text-[8px] leading-none translate-y-[0.5px] transition-transform ${isWhoOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {isWhoOpen && (
              <div
                className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2"
                onMouseEnter={openWhoMenu}
                onMouseLeave={scheduleWhoClose}
              >
                <div className="relative rounded-2xl border border-white/20 bg-[#111111] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(247,57,47,0.18),transparent_60%)]" />
                  <div className="relative z-10 flex flex-col gap-3">
                    <Link
                      href="/members"
                      data-text="Members"
                      onClick={() => setIsWhoOpen(false)}
                      className="text-left text-xs text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                    >
                      Members
                    </Link>
                    <Link
                      href="/contributors"
                      data-text="Contributors"
                      onClick={() => setIsWhoOpen(false)}
                      className="text-left text-xs text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                    >
                      Contributors
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/ethos"
              data-text="Our Ethos"
              className={`transition-all duration-300 relative ${
                pathname === "/ethos"
                  ? "text-[color:var(--color-primary)] text-[11px] 2xl:text-sm"
                  : "text-[11px] 2xl:text-sm"
              } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
            >
              Our Ethos
            </Link>
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
                    data-text="Who"
                    onClick={() => setIsMobileWhoOpen((prev) => !prev)}
                    className={`block transition-all duration-300 relative text-left ${
                      isWhoActive
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    aria-expanded={isMobileWhoOpen}
                  >
                    Who
                  </button>
                  {isMobileWhoOpen && (
                    <div className="mt-4 flex flex-col gap-4 border-l border-white/10 pl-4">
                      <Link
                        href="/members"
                        data-text="Members"
                        onClick={closeMenu}
                        className="text-left text-base text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                      >
                        Members
                      </Link>
                      <Link
                        href="/contributors"
                        data-text="Contributors"
                        onClick={closeMenu}
                        className="text-left text-base text-white/80 transition-all duration-300 hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none"
                      >
                        Contributors
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/ethos"
                    data-text="Our Ethos"
                    className={`block transition-all duration-300 relative ${
                      pathname === "/ethos"
                        ? "text-[color:var(--color-primary)] text-lg"
                        : "text-lg"
                    } hover:text-[color:var(--color-primary)] hover:glitch-effect focus-visible:text-[color:var(--color-primary)] focus-visible:outline-none`}
                    onClick={closeMenu}
                  >
                    Our Ethos
                  </Link>
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
    </>
  );
};

export default Navbar;

'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface BookReaderProps {
  fileUrl: string;
}

export default function BookReader({ fileUrl }: BookReaderProps) {
  const [numPages, setNumPages] = useState(0);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(800);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitioningRef = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setSpreadIndex(0);
  }, []);

  const totalSpreads = useMemo(() => {
    if (numPages === 0) return 0;
    return Math.ceil((numPages - 1) / 2) + 1;
  }, [numPages]);

  const numPagesRef = useRef(numPages);
  numPagesRef.current = numPages;

  const getSpreadPages = useCallback(
    (si: number): [number | null, number | null] => {
      if (numPages === 0) return [null, null];
      const left = si === 0 ? null : si * 2;
      const right = si === 0 ? 1 : si * 2 + 1;
      return [left, right > numPages ? null : right];
    },
    [numPages]
  );

  const currentPages = useMemo(() => getSpreadPages(spreadIndex), [spreadIndex, getSpreadPages]);

  const goToSpread = useCallback(
    (si: number) => {
      if (si < 0 || si >= totalSpreads || transitioningRef.current) return;
      transitioningRef.current = true;
      setTransitioning(true);
      requestAnimationFrame(() => {
        setSpreadIndex(si);
        requestAnimationFrame(() => {
          setTimeout(() => {
            setTransitioning(false);
            transitioningRef.current = false;
          }, 120);
        });
      });
    },
    [totalSpreads]
  );

  const goNext = useCallback(() => {
    if (spreadIndex < totalSpreads - 1) goToSpread(spreadIndex + 1);
  }, [spreadIndex, totalSpreads, goToSpread]);

  const goPrev = useCallback(() => {
    if (spreadIndex > 0) goToSpread(spreadIndex - 1);
  }, [spreadIndex, goToSpread]);

  const goToSpreadRef = useRef(goToSpread);
  goToSpreadRef.current = goToSpread;

  const handleItemClick = useCallback(({ pageNumber }: { pageNumber: number }) => {
    const n = numPagesRef.current;
    if (pageNumber < 1 || pageNumber > n) return;
    const targetSpread = pageNumber === 1 ? 0 : Math.ceil((pageNumber - 1) / 2);
    goToSpreadRef.current(targetSpread);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goPrev, goNext]);

  const pageWidth = useMemo(
    () => Math.min(Math.max((containerWidth - 48) / 2, 180), 520),
    [containerWidth]
  );

  const currentPageNum = spreadIndex === 0 ? 1 : spreadIndex * 2;
  const lastPageNum = currentPages[1] || currentPages[0] || 1;

  const cacheBustedUrl = useMemo(() => {
    const sep = fileUrl.includes('?') ? '&' : '?';
    return `${fileUrl}${sep}_t=${Date.now()}`;
  }, [fileUrl]);

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full h-full">
      <div
        className="relative flex-1 w-full flex items-center justify-center overflow-hidden select-none"
        onClick={(e) => {
          if (numPages === 0) return;
          if ((e.target as HTMLElement).closest('[data-internal-link], .linkAnnotation')) {
            e.stopPropagation();
            return;
          }
          const rect = e.currentTarget.getBoundingClientRect();
          if (e.clientX - rect.left < rect.width / 2) goPrev();
          else goNext();
        }}
      >
        <div
          className={`flex gap-1 items-stretch transition-opacity duration-150 ease-out ${
            transitioning ? 'opacity-10' : 'opacity-100'
          }`}
        >
          <Document
            file={cacheBustedUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={handleItemClick}
            loading={
              <div className="flex items-center justify-center h-64 text-white/40 font-spartan-body text-sm">
                Loading document...
              </div>
            }
            error={
              <div className="flex items-center justify-center h-64 text-red-400 font-spartan-body text-sm">
                Failed to load document.
              </div>
            }
          >
            {numPages > 0 && (
              <>
                {currentPages[0] === null && (
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: pageWidth }}
                  >
                    {spreadIndex === 0 && (
                      <div className="text-white/20 font-spartan-body text-[11px] text-center">
                        <span className="block text-white/40 text-sm font-spartan-subtitle">
                          The Red Guild
                        </span>
                        <span className="mt-1 block">Library</span>
                      </div>
                    )}
                  </div>
                )}
                {currentPages[0] !== null && (
                  <div className="book-page-wrap book-page-left shrink-0">
                    <Page
                      pageNumber={currentPages[0]}
                      width={pageWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      loading={<PageSkeleton width={pageWidth} />}
                      className="book-page"
                    />
                  </div>
                )}
                {currentPages[1] !== null && (
                  <div className="book-page-wrap book-page-right shrink-0">
                    <Page
                      pageNumber={currentPages[1]}
                      width={pageWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      loading={<PageSkeleton width={pageWidth} />}
                      className="book-page"
                    />
                  </div>
                )}
                {currentPages[1] === null && currentPages[0] !== null && (
                  <div className="shrink-0" style={{ width: pageWidth }} />
                )}
              </>
            )}
          </Document>
        </div>

        {totalSpreads > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              disabled={spreadIndex <= 0 || transitioning}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              disabled={spreadIndex >= totalSpreads - 1 || transitioning}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {numPages > 0 && (
        <div className="flex items-center gap-4 py-2 px-4 text-white/40 font-spartan-body text-[11px] shrink-0 border-t border-white/5">
          <button
            onClick={goPrev}
            disabled={spreadIndex <= 0 || transitioning}
            className="hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-white/70 tabular-nums">
            {currentPageNum}{lastPageNum !== currentPageNum ? `\u2013${lastPageNum}` : ''} / {numPages}
          </span>
          <button
            onClick={goNext}
            disabled={spreadIndex >= totalSpreads - 1 || transitioning}
            className="hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function PageSkeleton({ width }: { width: number }) {
  const height = Math.round(width * 1.414);
  return (
    <div
      className="bg-white/5 animate-pulse rounded-sm"
      style={{ width, height }}
    />
  );
}
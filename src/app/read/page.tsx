'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import BackgroundClouds from '../components/BackgroundClouds';
import ParticlesDOM from '../components/ParticlesDOM';
import { books } from '../data/booksConfig';

const BookReader = dynamic(() => import('./components/BookReader'), { ssr: false });

export default function ReadPage() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundClouds />
      <ParticlesDOM countMobile={8} countDesktop={16} />
      <Navbar />

      <div className="flex h-screen pt-16 relative z-30">
        <aside className="w-56 shrink-0 border-r border-white/5 bg-black/60 backdrop-blur-sm flex flex-col">
          <div className="px-4 py-5 border-b border-white/5">
            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-pixelify-sans hover:text-white/60 transition-colors"
            >
              Back to Home
            </Link>
            <h1 className="mt-2 text-lg text-white font-spartan-title">Library</h1>
            <p className="mt-1 text-[11px] text-white/40 font-spartan-body">
              Select a book to read
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-2">
            {books.map((book) => (
              <button
                key={book.filename}
                onClick={() => setSelectedBook(book)}
                className={`w-full text-left px-4 py-3 transition-all duration-200 group ${
                  selectedBook.filename === book.filename
                    ? 'bg-white/8 border-l-2 border-[#F7392F] pl-[calc(1rem-2px)]'
                    : 'hover:bg-white/4 border-l-2 border-transparent'
                }`}
              >
                <span
                  className={`block text-sm font-spartan-subtitle transition-colors ${
                    selectedBook.filename === book.filename
                      ? 'text-white'
                      : 'text-white/50 group-hover:text-white/80'
                  }`}
                >
                  {book.title}
                </span>
                <span
                  className={`block mt-0.5 text-[10px] font-spartan-body transition-colors ${
                    selectedBook.filename === book.filename
                      ? 'text-white/40'
                      : 'text-white/20 group-hover:text-white/40'
                  }`}
                >
                  {book.description}
                </span>
              </button>
            ))}
          </nav>

          <div className="px-4 py-3 border-t border-white/5">
            <p className="text-[9px] text-white/20 font-spartan-body">
              Use arrow keys to turn pages
            </p>
          </div>
        </aside>

        <main className="flex-1 overflow-hidden bg-black/20">
          <BookReader fileUrl={`/books/${selectedBook.filename}`} />
        </main>
      </div>
    </div>
  );
}
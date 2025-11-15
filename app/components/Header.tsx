// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-red-600 text-2xl font-bold">
            StreamFlix
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="#popular" className="text-white hover:text-gray-300 transition">
              Popular
            </Link>
            <Link href="#top-rated" className="text-white hover:text-gray-300 transition">
              Top Rated
            </Link>
            <Link href="#upcoming" className="text-white hover:text-gray-300 transition">
              Upcoming
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              href="/"
              className="block text-white hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#popular"
              className="block text-white hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Popular
            </Link>
            <Link
              href="#top-rated"
              className="block text-white hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Top Rated
            </Link>
            <Link
              href="#upcoming"
              className="block text-white hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
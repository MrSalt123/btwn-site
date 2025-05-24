'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScroll } from '@/components/ScrollWrapper';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const { visible, scrolled } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['home', 'services', 'about', 'contact'];

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`
          h-[10vh] md:h-[15vh] sticky top-0 z-50 w-full px-6 sm:px-8 transition-all duration-700 ease-in-out
          flex items-center justify-between
          ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          ${scrolled ? 'bg-neutral-900/70 backdrop-blur-sm shadow-md' : 'bg-transparent'}
        `}
      >
        {/* Logo (Desktop) */}
        <Image
          src="/btwnlogofixed.svg"
          alt="Btwn logo"
          className="cursor-pointer hidden md:block"
          width={125}
          height={125}
          priority
          onClick={() => router.push('/')}
        />

        {/* Logo (Mobile) */}
        <Image
          src="/lines.svg"
          alt="Btwn icon"
          className="cursor-pointer block md:hidden"
          width={40}
          height={40}
          priority
          onClick={() => router.push('/')}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm sm:text-xl">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'home' ? '/' : `/${item}`}
              className="nav-link relative text-2xl capitalize font-display"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70vw] bg-background z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-start gap-6 p-6">
          <button
            className="mb-4 self-end text-foreground"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'home' ? '/' : `/${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-display capitalize"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

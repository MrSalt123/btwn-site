'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScroll } from '@/components/ScrollWrapper';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use other icons if you prefer

export default function Navbar() {
  const router = useRouter();
  const { visible, scrolled } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['services', 'work', 'about', 'contact'];

  return (
    <div
      className={`
        h-[15vh] sticky top-0 z-50 w-full px-6 sm:px-8 transition-all duration-700 ease-in-out
        flex items-center justify-between
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${scrolled ? 'bg-neutral-900/70 backdrop-blur-sm shadow-md' : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <Image
        src="/btwnlogowtext.svg"
        alt="Btwn logo"
        className="cursor-pointer invert"
        width={200}
        height={200}
        priority
        onClick={() => router.push('/')}
      />

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 text-sm sm:text-xl">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="nav-link relative text-2xl capitalize font-display"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[15vh] right-0 w-full bg-background py-6 shadow-md md:hidden z-40">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-display capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

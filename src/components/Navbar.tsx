'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScroll } from '@/components/ScrollWrapper';   // ← path to your context

export default function Navbar() {
  const router = useRouter();
  const { visible, scrolled } = useScroll();              // ← get booleans here

  return (
    <div
      className={`
        h-[15vh] sticky top-0 z-50 w-full p-8 transition-all duration-700 ease-in-out
        flex items-center justify-between
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${scrolled ? 'bg-neutral-100/70 backdrop-blur-sm' : 'bg-transparent'}
      `}
    >
      <Image
        src="/btwnlogowtext.svg"
        alt="Btwn logo"
        className="cursor-pointer"
        width={200}
        height={100}
        priority
        onClick={() => router.push('/')}
      />

      <nav className="flex gap-12 text-sm sm:text-xl">
        {['services', 'quotes', 'about', 'contact'].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="nav-link relative text-2xl capitalize font-display"
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
}

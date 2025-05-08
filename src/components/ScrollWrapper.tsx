/* components/ScrollWrapper.tsx */
'use client';
import { useEffect, useState, createContext, useContext } from 'react';

const ScrollCtx = createContext({ scrolled: false, visible: true });
export const useScroll = () => useContext(ScrollCtx);

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0);
      setVisible(y < lastY || y < 64);
      lastY = y;
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ScrollCtx.Provider value={{ scrolled, visible }}>
      {children}
    </ScrollCtx.Provider>
  );
}

'use client';                                              // ① mark as Client Component

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';              // ② smallest preset (~35 kB gz)

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  /* ③ initialise the engine once */
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);                              // or loadFull/loadSnowPreset etc.
    }).then(() => setReady(true));
  }, []);

  /* ④ memo‑ise your options so React doesn’t re‑create them every render */
  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },            // behind all content
      background: { color: '#f1f1f1' },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' } },
        modes : { repulse: { distance: 120 } },
      },
      particles: {
        number : { value: 60, density: { enable: true, area: 800 } },
        size   : { value: { min: 1, max: 4 } },
        stroke : { width: 0 },
        move   : { enable: true, speed: 1.2 },
        links  : { enable: true, opacity: 0.4 },
        color  : { value: '#1a1a1a' },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;                                 // optional loader

  return <Particles id="btwn-particles" options={options} />;
}

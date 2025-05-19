'use client';                                      

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';             

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);                              
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },            
      background: { color: '#1a1a1a' },
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
        color  : { value: '#f1f1f1' },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;                                 // optional loader

  return <Particles id="btwn-particles" options={options} />;
}

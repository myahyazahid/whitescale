import Lenis from 'lenis';
import { gsap } from 'gsap';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Entrance satu kali per elemen. Jaring pengaman: apa pun yang masih tersembunyi di layar setelah load ditampilkan.
const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px', threshold: 0 },
  );
  revealTargets.forEach((el) => io.observe(el));
  window.addEventListener('load', () =>
    setTimeout(() => {
      revealTargets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 2500),
  );
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}

if (!reduced) {
  const lenis = new Lenis({ anchors: true });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

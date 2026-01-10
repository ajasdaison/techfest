import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

try {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animation
  gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 1 });
  gsap.from('.hero-title', { opacity: 0, scale: 0.9, duration: 1, delay: 0.2 });
  gsap.from('.timer-box', {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.4
  });

  // Sections reveal
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      }
    });
  });

  // Floating icons
  gsap.to('.event-icon', {
    y: -6,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut'
  });
} catch (err) {
  console.error('Animation error:', err);
}

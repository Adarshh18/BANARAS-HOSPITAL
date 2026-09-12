import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout() {
  const location = useLocation();

  /* ---------------- Sticky header + back-to-top visibility ---------------- */
  useEffect(() => {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    if (!header || !backToTop) return;

    const onScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 40);
      backToTop.classList.toggle('visible', window.scrollY > 500);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------------- Mobile nav toggle ---------------- */
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navLinks) return;

    const toggleMenu = () => navLinks.classList.toggle('active');
    const closeMenu = () => navLinks.classList.remove('active');

    menuToggle.addEventListener('click', toggleMenu);
    const linkEls = navLinks.querySelectorAll('a');
    linkEls.forEach((link) => link.addEventListener('click', closeMenu));

    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
      linkEls.forEach((link) => link.removeEventListener('click', closeMenu));
    };
  }, []);

  /* ---------------- Scroll to top on route change ---------------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('active');
  }, [location.pathname]);

  /* ---------------- Scroll-reveal animations (re-run per page) ---------------- */
  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [location.pathname]);

  /* ---------------- Animated stat counters (re-run per page) ---------------- */
  useEffect(() => {
    const counters = document.querySelectorAll('.count');
    if (!counters.length) return;

    const animateCount = (el) => {
      const target = +el.getAttribute('data-target');
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.ceil(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => countObserver.observe(c));

    return () => countObserver.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

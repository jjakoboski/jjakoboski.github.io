(function () {
  'use strict';

  // --- Nav scroll effect ---
  const nav = document.getElementById('nav');
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        nav.classList.toggle('nav--scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    links.classList.toggle('nav__links--open');
  });

  // --- Close nav on link click ---
  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('nav__links--open');
    });
  });

  // --- Close nav on outside click ---
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      links.classList.remove('nav__links--open');
    }
  });
})();

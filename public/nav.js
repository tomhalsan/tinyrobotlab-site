(function () {
  'use strict';

  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (!navToggle || !primaryNav) return;

    document.documentElement.classList.add('has-mobile-nav');

    function setMenuState(isOpen) {
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      primaryNav.classList.toggle('is-open', isOpen);
    }

    navToggle.addEventListener('click', function () {
      const isCurrentlyOpen = navToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isCurrentlyOpen);
    });

    // Close on Escape key press and return focus to toggle
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        navToggle.focus();
      }
    });

    // Close on click outside of nav
    document.addEventListener('click', function (event) {
      if (navToggle.getAttribute('aria-expanded') === 'true') {
        if (!primaryNav.contains(event.target) && !navToggle.contains(event.target)) {
          setMenuState(false);
        }
      }
    });

    // Close when navigating via any menu link
    primaryNav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenuState(false);
      }
    });

    // Reset menu state when expanding to desktop viewport
    const mediaQuery = window.matchMedia('(min-width: 861px)');
    function handleBreakpointChange(e) {
      if (e.matches && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
      }
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleBreakpointChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleBreakpointChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();

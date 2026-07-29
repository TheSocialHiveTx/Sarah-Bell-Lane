/* =====================================================
   SARAH BELL LANE MORTGAGE
   JavaScript: assets/js/main.js
   Version: 1.1
   ===================================================== */

(function () {
  'use strict';

  /* =====================================================
     CURRENT YEAR
     ===================================================== */
  function setCurrentYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  /* =====================================================
     STICKY HEADER
     ===================================================== */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =====================================================
     MOBILE NAVIGATION
     ===================================================== */
  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    var closeBtn = document.getElementById('mobile-nav-close');

    if (!toggle || !mobileNav) return;

    function openNav() {
      mobileNav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      mobileNav.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeNav() {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', function () {
      mobileNav.classList.contains('is-open') ? closeNav() : openNav();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeNav);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* =====================================================
     ACCORDION
     ===================================================== */
  function initAccordions() {
    var triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        var panelId = trigger.getAttribute('aria-controls');
        var panel = panelId ? document.getElementById(panelId) : null;

        /* Close siblings in same accordion */
        var parentAccordion = trigger.closest('.accordion');
        if (parentAccordion) {
          parentAccordion.querySelectorAll('.accordion-trigger').forEach(function (t) {
            if (t !== trigger) {
              t.setAttribute('aria-expanded', 'false');
              var pid = t.getAttribute('aria-controls');
              var p = pid ? document.getElementById(pid) : null;
              if (p) p.classList.remove('is-open');
            }
          });
        }

        trigger.setAttribute('aria-expanded', String(!expanded));
        if (panel) panel.classList.toggle('is-open', !expanded);
      });

      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  /* =====================================================
     BACK TO TOP
     ===================================================== */
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =====================================================
     REVEAL ANIMATIONS (IntersectionObserver)
     ===================================================== */
  function initReveal() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* =====================================================
     EXTERNAL LINK CONFIRMATION
     ===================================================== */
  function initExternalLinkNotice() {
    var notice = document.getElementById('external-notice');
    var proceedBtn = document.getElementById('external-proceed');
    var cancelBtn = document.getElementById('external-cancel');

    if (!notice) return;

    var pendingUrl = '';

    document.querySelectorAll('a[data-external-confirm]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        pendingUrl = link.href;
        notice.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        if (proceedBtn) proceedBtn.focus();
      });
    });

    function closeNotice() {
      notice.classList.remove('is-open');
      document.body.style.overflow = '';
      pendingUrl = '';
    }

    if (proceedBtn) {
      proceedBtn.addEventListener('click', function () {
        var url = pendingUrl;
        closeNotice();
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      });
    }

    if (cancelBtn) cancelBtn.addEventListener('click', closeNotice);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && notice.classList.contains('is-open')) closeNotice();
    });

    notice.addEventListener('click', function (e) {
      if (e.target === notice) closeNotice();
    });
  }

  /* =====================================================
     CONTACT FORM VALIDATION
     ===================================================== */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var successMsg = document.getElementById('form-success');
    var formWrapper = document.getElementById('contact-form-wrapper');

    function showError(input, msg) {
      input.classList.add('is-error');
      var errorEl = document.getElementById(input.id + '-error');
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.classList.add('is-visible');
      }
    }

    function clearError(input) {
      input.classList.remove('is-error');
      var errorEl = document.getElementById(input.id + '-error');
      if (errorEl) errorEl.classList.remove('is-visible');
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
      return phone === '' || /^[\d\s\(\)\-\+\.]{7,20}$/.test(phone);
    }

    form.querySelectorAll('.form-control').forEach(function (input) {
      input.addEventListener('input', function () { clearError(input); });
      input.addEventListener('blur', function () { clearError(input); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hasErrors = false;

      var nameEl    = document.getElementById('contact-name');
      var emailEl   = document.getElementById('contact-email');
      var phoneEl   = document.getElementById('contact-phone');
      var consentEl = document.getElementById('contact-consent');

      if (nameEl && !nameEl.value.trim()) {
        showError(nameEl, 'Please enter your full name.');
        hasErrors = true;
      }

      if (emailEl && !isValidEmail(emailEl.value.trim())) {
        showError(emailEl, 'Please enter a valid email address.');
        hasErrors = true;
      }

      if (phoneEl && !isValidPhone(phoneEl.value.trim())) {
        showError(phoneEl, 'Please enter a valid phone number.');
        hasErrors = true;
      }

      if (consentEl && !consentEl.checked) {
        showError(consentEl, 'Please acknowledge your consent to continue.');
        hasErrors = true;
      }

      if (hasErrors) {
        var firstError = form.querySelector('.form-control.is-error');
        if (firstError) firstError.focus();
        return;
      }

      /* 
        PRODUCTION NOTE:
        Set the form's action attribute to your FormSubmit/Formspree/Basin endpoint
        and remove the e.preventDefault() call above to allow real submission.
        Example: <form action="https://formsubmit.co/your@email.com" method="POST">
      */

      /* Development: show success message */
      if (successMsg) {
        successMsg.classList.add('is-visible');
        successMsg.focus();
      }
      if (formWrapper) formWrapper.style.display = 'none';
    });
  }

  /* =====================================================
     SMOOTH SCROLL (internal anchors)
     ===================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          /* Move focus without scrolling again */
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  /* =====================================================
     ACTIVE NAV STATE
     ===================================================== */
  function setActiveNav() {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.primary-nav a, .mobile-nav a, .footer-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var linkFile = href.split('/').pop() || 'index.html';
      var isHome = (filename === '' || filename === 'index.html') && (linkFile === 'index.html' || linkFile === '');
      var isMatch = filename === linkFile;

      if (isHome || isMatch) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* =====================================================
     INIT
     ===================================================== */
  function init() {
    setCurrentYear();
    initStickyHeader();
    initMobileNav();
    initAccordions();
    initBackToTop();
    initReveal();
    initExternalLinkNotice();
    initContactForm();
    initSmoothScroll();
    setActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

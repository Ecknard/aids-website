/* ============================================
   AIDS Website — scripts.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu?.classList.remove('open'));
  });

  /* ---- Scroll reveal ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile-menu a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active-nav');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ---- Donation amounts ---- */
  const amountBtns = document.querySelectorAll('.don-amount-btn');
  const customInput = document.querySelector('.don-custom');
  const donBtn = document.querySelector('.btn-don');

  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (customInput) customInput.value = '';
      const amount = btn.dataset.amount;
      updateDonLink(amount);
    });
  });

  customInput?.addEventListener('input', () => {
    amountBtns.forEach(b => b.classList.remove('active'));
    updateDonLink(customInput.value);
  });

  function updateDonLink(amount) {
    if (donBtn && amount) {
      donBtn.href = `https://www.helloasso.com/associations/alliance-internationale-pour-le-developpement-social/formulaires/1?montant=${amount}`;
    }
  }

  /* ---- Contact form ---- */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.innerHTML = '⏳ Envoi en cours...';
    btn.disabled = true;

    // Simulate form submission (replace with Formspree or Netlify Forms)
    setTimeout(() => {
      form.reset();
      btn.innerHTML = '✅ Message envoyé !';
      const success = document.getElementById('form-success');
      if (success) success.style.display = 'block';
      setTimeout(() => {
        btn.innerHTML = '📨 Envoyer le message';
        btn.disabled = false;
        if (success) success.style.display = 'none';
      }, 4000);
    }, 1500);
  });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Counter animation for hero stats ---- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.count;
        const suffix = entry.target.dataset.suffix || '';
        let current = 0;
        const step = Math.max(1, Math.floor(target / 50));
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          entry.target.textContent = current.toLocaleString('fr-FR') + suffix;
          if (current >= target) clearInterval(timer);
        }, 30);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

});

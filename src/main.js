/* ============================================
   VOCA — Interactive JS
   "Swiss Gold" Design System
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll Progress Bar ---
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // --- Scroll Reveal Observer ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -80px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Nav Scroll Effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 60) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // --- Nav Pill Scroll Effect ---
  const navPill = document.querySelector('.nav-pill');
  if (navPill) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        navPill.classList.add('nav-pill--scrolled');
      } else {
        navPill.classList.remove('nav-pill--scrolled');
      }
    }, { passive: true });
  }

  // --- Mobile Nav Toggle (Full Screen) ---
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav__links--open');
      navToggle.classList.toggle('nav__toggle--active');
      document.body.style.overflow = navLinks.classList.contains('nav__links--open') ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav__links--open');
        navToggle.classList.remove('nav__toggle--active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Nav Pill Mobile Toggle ---
  const pillToggle = document.querySelector('.nav-pill__toggle');
  const pillLinks = document.querySelector('.nav-pill__links');
  if (pillToggle && pillLinks) {
    pillToggle.addEventListener('click', () => {
      pillLinks.classList.toggle('nav-pill__links--open');
      pillToggle.classList.toggle('nav-pill__toggle--active');
      document.body.style.overflow = pillLinks.classList.contains('nav-pill__links--open') ? 'hidden' : '';
    });

    pillLinks.querySelectorAll('.nav-pill__link').forEach(link => {
      link.addEventListener('click', () => {
        pillLinks.classList.remove('nav-pill__links--open');
        pillToggle.classList.remove('nav-pill__toggle--active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Counter Animation (Smooth) ---
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutExpo(progress);
          const current = Math.floor(easedProgress * target);
          el.textContent = prefix + current.toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = prefix + target.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  // --- Service Box Stagger Animation ---
  const svcBoxes = document.querySelectorAll('.svc-box');
  if (svcBoxes.length > 0) {
    const svcObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(svcBoxes).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 120);
          svcObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    svcBoxes.forEach(box => svcObserver.observe(box));
  }

  // --- Atmospheric Glow Reveal ---
  const svcGlows = document.querySelectorAll('.svc-glow');
  if (svcGlows.length > 0) {
    const glowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          svcGlows.forEach((glow, i) => {
            setTimeout(() => glow.classList.add('revealed'), i * 300);
          });
          glowObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    glowObserver.observe(document.getElementById('services'));
  }

  // --- Artifact Animations ---
  function initShuffler(container) {
    const cards = container.querySelectorAll('.shuffler__card');
    let order = [0, 1, 2];

    function render() {
      order.forEach((labelIdx, position) => {
        const card = cards[labelIdx];
        card.style.zIndex = 3 - position;
        card.style.transform = `translateY(${position * 14}px) scale(${1 - position * 0.03})`;
        card.style.opacity = 1 - position * 0.15;
      });
    }

    render();
    const intervalId = setInterval(() => {
      order.unshift(order.pop());
      render();
    }, 3000);

    return () => clearInterval(intervalId);
  }

  function initTypewriter(container) {
    const messages = [
      'Brand Identity Development',
      'Brand Communication Strategy',
      'Market-Entry Expansion Playbooks'
    ];
    const textEl = container.querySelector('.typewriter-artifact__text');
    let msgIndex = 0;
    let charIndex = 0;
    let phase = 'typing';
    let displayed = '';
    let timeoutId = null;

    function tick() {
      switch (phase) {
        case 'typing':
          if (charIndex < messages[msgIndex].length) {
            charIndex++;
            displayed = messages[msgIndex].slice(0, charIndex);
            textEl.textContent = displayed;
            timeoutId = setTimeout(tick, 60);
          } else {
            phase = 'pausing';
            timeoutId = setTimeout(tick, 2000);
          }
          break;
        case 'pausing':
          phase = 'erasing';
          timeoutId = setTimeout(tick, 0);
          break;
        case 'erasing':
          if (displayed.length > 0) {
            displayed = displayed.slice(0, -1);
            textEl.textContent = displayed;
            timeoutId = setTimeout(tick, 30);
          } else {
            phase = 'waiting';
            timeoutId = setTimeout(tick, 500);
          }
          break;
        case 'waiting':
          msgIndex = (msgIndex + 1) % messages.length;
          charIndex = 0;
          displayed = '';
          textEl.textContent = '';
          phase = 'typing';
          timeoutId = setTimeout(tick, 0);
          break;
      }
    }

    tick();
    return () => { if (timeoutId) clearTimeout(timeoutId); };
  }

  function initScheduler(container) {
    const daySequence = [1, 3, 5]; // Mon, Wed, Fri
    const cells = container.querySelectorAll('.scheduler__cell');
    const saveBtn = container.querySelector('.scheduler__save');
    const cursor = container.querySelector('.scheduler__cursor');
    const schedulerEl = container.querySelector('.scheduler');

    let seqIndex = 0;
    let phase = 'idle';
    let timeoutId = null;

    function getCellPos(index) {
      const cell = cells[index];
      const parentRect = schedulerEl.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      return {
        x: cellRect.left - parentRect.left + cellRect.width / 2,
        y: cellRect.top - parentRect.top + cellRect.height / 2
      };
    }

    function getSavePos() {
      const parentRect = schedulerEl.getBoundingClientRect();
      const btnRect = saveBtn.getBoundingClientRect();
      return {
        x: btnRect.left - parentRect.left + btnRect.width / 2,
        y: btnRect.top - parentRect.top + btnRect.height / 2
      };
    }

    function moveCursor(x, y) {
      cursor.style.transform = `translate(${x - 8}px, ${y - 10}px)`;
    }

    function advance() {
      const currentDay = daySequence[seqIndex];
      switch (phase) {
        case 'idle':
          cursor.style.display = 'none';
          timeoutId = setTimeout(() => {
            cursor.style.display = 'block';
            cursor.style.transition = 'none';
            moveCursor(schedulerEl.offsetWidth + 20, 30);
            cursor.offsetHeight; // force reflow
            cursor.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
            phase = 'entering';
            timeoutId = setTimeout(advance, 100);
          }, 800);
          break;
        case 'entering': {
          const dayPos = getCellPos(currentDay);
          moveCursor(dayPos.x, dayPos.y);
          phase = 'moving-to-day';
          timeoutId = setTimeout(advance, 600);
          break;
        }
        case 'moving-to-day':
          cells[currentDay].classList.add('scheduler__cell--clicking');
          phase = 'clicking-day';
          timeoutId = setTimeout(advance, 400);
          break;
        case 'clicking-day':
          cells[currentDay].classList.remove('scheduler__cell--clicking');
          cells[currentDay].classList.add('scheduler__cell--highlighted');
          const savePos = getSavePos();
          moveCursor(savePos.x, savePos.y);
          phase = 'moving-to-save';
          timeoutId = setTimeout(advance, 600);
          break;
        case 'moving-to-save':
          saveBtn.classList.add('scheduler__save--active');
          phase = 'clicking-save';
          timeoutId = setTimeout(advance, 400);
          break;
        case 'clicking-save':
          saveBtn.classList.remove('scheduler__save--active');
          moveCursor(schedulerEl.offsetWidth + 20, schedulerEl.offsetHeight);
          phase = 'exiting';
          timeoutId = setTimeout(advance, 700);
          break;
        case 'exiting':
          seqIndex = (seqIndex + 1) % daySequence.length;
          if (seqIndex === 0) {
            cells.forEach(c => c.classList.remove('scheduler__cell--highlighted'));
          }
          phase = 'idle';
          advance();
          break;
      }
    }

    phase = 'idle';
    advance();
    return () => { if (timeoutId) clearTimeout(timeoutId); };
  }

  function initMorph(container) {
    const translations = [
      { lang: 'JA', text: '創造する' },
      { lang: 'KO', text: '만들다' },
      { lang: 'AR', text: 'يَخلُق' },
      { lang: 'DE', text: 'Erstellen' },
      { lang: 'TH', text: 'สร้างสรรค์' }
    ];

    const textEl = container.querySelector('.morph__text');
    const tags = container.querySelectorAll('.morph__tag');
    let index = 0;

    function setActive(i) {
      tags.forEach((tag, ti) => {
        tag.classList.toggle('morph__tag--active', ti === i);
      });
    }

    function show(i) {
      textEl.textContent = translations[i].text;
      textEl.classList.remove('morph__text--exiting');
      textEl.classList.add('morph__text--entering');
      textEl.offsetHeight; // force reflow
      textEl.classList.remove('morph__text--entering');
      setActive(i);
    }

    show(0);

    const intervalId = setInterval(() => {
      textEl.classList.add('morph__text--exiting');
      setTimeout(() => {
        index = (index + 1) % translations.length;
        show(index);
      }, 500);
    }, 2500);

    return () => clearInterval(intervalId);
  }

  // --- Artifact Observer ---
  const artifactInits = {
    shuffler: initShuffler,
    typewriter: initTypewriter,
    scheduler: initScheduler,
    morph: initMorph
  };

  const artifactEls = document.querySelectorAll('.svc-box__artifact');
  if (artifactEls.length > 0) {
    const artifactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const type = el.getAttribute('data-artifact');
        if (entry.isIntersecting && !el._artifactRunning) {
          el._artifactRunning = true;
          el._artifactCleanup = artifactInits[type](el);
        } else if (!entry.isIntersecting && el._artifactRunning) {
          if (el._artifactCleanup) el._artifactCleanup();
          el._artifactRunning = false;
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    artifactEls.forEach(el => artifactObserver.observe(el));
  }

  // --- Magnetic Buttons ---
  const magneticBtns = document.querySelectorAll('.btn');
  if (window.matchMedia('(pointer: fine)').matches) {
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translateY(-3px) translate(${x * 0.12}px, ${y * 0.12}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // --- Parallax Light Elements ---
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length > 0 && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, { passive: true });
  }

  // --- Smooth anchor scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq-item--open');
        // Close all
        faqItems.forEach(i => i.classList.remove('faq-item--open'));
        // Toggle current
        if (!isOpen) {
          item.classList.add('faq-item--open');
        }
      });
    }
  });

  // --- Typewriter Effect ---
  const typewriterEls = document.querySelectorAll('.typewriter');
  typewriterEls.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    el.style.borderRight = '2px solid var(--yellow)';
    let i = 0;
    const typeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            el.textContent += text[i];
            i++;
            if (i >= text.length) {
              clearInterval(interval);
              setTimeout(() => { el.style.borderRight = 'none'; }, 1000);
            }
          }, 50);
          typeObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    typeObserver.observe(el);
  });

  // --- Blog/Stage Filter Buttons ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('btn--primary');
        b.classList.add('btn--outline-dark');
      });
      btn.classList.remove('btn--outline-dark');
      btn.classList.add('btn--primary');
    });
  });

  // --- Loading Screen ---
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('loader--hidden');
      setTimeout(() => loader.remove(), 600);
    }, 400);
  }

});

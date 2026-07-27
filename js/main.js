// ==========================================
// IBISQ TECTONIC — Custom Landing Page JS
// ==========================================

// 1. Navigation Sticky & Active Link Highlight
const header = document.getElementById('main-header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  // Highlight active nav link on scroll
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// 2. Mobile Menu Toggle
const ham = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');

if (ham && menu) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-link') || e.target.closest('a')) {
      ham.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

// 3. Service Tab System (Full Services Grid Section)
const bestServiceBtns = document.querySelectorAll('.best-service-tab-btn');
const bestServicePanes = document.querySelectorAll('.best-service-pane');

if (bestServiceBtns && bestServicePanes) {
  bestServiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bestServiceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      bestServicePanes.forEach(pane => pane.classList.remove('active'));
      const targetPane = document.getElementById(btn.dataset.target);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

// 4. FAQ Accordion Toggle
const faqTriggers = document.querySelectorAll('.faq-trigger');
faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.parentElement;
    const content = item.querySelector('.faq-content');
    const isOpen = item.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-content').style.maxHeight = '0';
    });

    // Toggle clicked item
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// 5. Contact Form Submission Success Toggle
const contactForm = document.getElementById('contact-form');
const successCard = document.getElementById('form-success');

if (contactForm && successCard) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.classList.add('hide');
    successCard.classList.add('show');
  });
}

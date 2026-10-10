// AOS initialization
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');

if (navbar) {
    const updateNavbar = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function closeMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
    }

    if (overlay) {
        overlay.classList.remove('show');
    }

    if (menuToggle) {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

if (menuToggle && mobileMenu && overlay) {
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');

        if (isOpen) {
            closeMenu();
        } else {
            mobileMenu.classList.add('open');
            overlay.classList.add('show');

            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    });

    overlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close the mobile menu when Escape is pressed
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

// Typing effect
const texts = [
    'Backend Engineer',
    'Java Specialist',
    'System Architect',
    'Problem Solver'
];

const typingEl = document.getElementById('typing');

if (typingEl) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = texts[textIndex];

        if (isDeleting) {
            charIndex--;
            typingEl.textContent = current.substring(0, charIndex);
        } else {
            charIndex++;
            typingEl.textContent = current.substring(0, charIndex);
        }

        let speed = isDeleting ? 35 : 65;

        if (!isDeleting && charIndex === current.length) {
            speed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    setTimeout(typeEffect, 600);
}

// Pricing enquiry links
const pricingLinks = document.querySelectorAll('[data-service]');

pricingLinks.forEach(link => {
    link.addEventListener('click', () => {
        const service = link.dataset.service;

        if (!service) return;

        // Store the selected service for the contact form
        sessionStorage.setItem('selectedService', service);

        // Allow the browser to navigate normally to #contact.
        // Do not preventDefault() and do not open a mailto link.
    });
});

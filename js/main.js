// AOS initialization
AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        mobileMenu.classList.add('open');
        overlay.classList.add('show');
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    }
});

overlay.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Typing effect
const texts = ["Backend Engineer", "Java Specialist", "System Architect", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing');

function typeEffect() {
    const current = texts[textIndex];

    if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
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
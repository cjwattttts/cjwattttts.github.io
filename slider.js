// Add smooth scroll animation for sections when navigating from the navbar
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset for the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Scroll animations: Fade in and slide in sections
const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Smooth scroll animations when sections come into view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case sections are already visible
});

// Select the hamburger and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and navLinks
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

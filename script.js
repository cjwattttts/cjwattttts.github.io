// Select the hamburger button, navigation links container, and individual navigation items
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li'); // Select all the list items inside the nav

// Add a click event to the hamburger button
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and the navigation links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Add a click event to each navigation item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'active' class from the hamburger and navLinks to close the menu
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

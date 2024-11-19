const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle the dropdown menu and icon change
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('change');
});

// Close the dropdown menu and reset icon when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('change');
    });
});
window.onload = function() {
    window.location.hash = ''; // Remove any existing hash
    window.location.hash = '#home'; // Navigate to the home section
};


//
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    function updateNavLinks() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Handle the case when scrollY is 0 (top of the page)
        if (scrollY === 0) {
            currentSectionId = sections[0].getAttribute('id'); // Assuming the first section is 'home'
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateNavLinks);
    updateNavLinks(); // Initial call to set the active link on page load
});

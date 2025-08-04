document.addEventListener('DOMContentLoaded', function() {
    
    // --- THEME SWITCHER LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    };

    themeToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click from closing the menu immediately
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    // --- THREE-DOT DROPDOWN MENU LOGIC ---
    const menuIcon = document.getElementById('menu-icon-dots');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents click from bubbling up to the window
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown if user clicks anywhere else
    window.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Close dropdown when a link inside it is clicked
    dropdownMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            dropdownMenu.classList.remove('active');
        }
    });

    // --- SCROLL ANIMATION LOGIC ---
    const sections = document.querySelectorAll('.content-section, .full-page-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // --- INITIALIZATION ---
    applySavedTheme();
});

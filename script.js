// --- DATA : WEBSITES ---
const websites = [
    {
        id: 1,
        title: 'Aether Tools',
        image: 'assets/images/mywebsite-Aether Tools.jpg.png',
        description: 'Check air condition, date, time, stopwatch/alarm with real-time API integration. A comprehensive dashboard for daily utilities.',
        tech: ['Full Stack', 'API', 'User Auth', 'Weather API'],
        url: 'https://rajpratham1.github.io/Aether-Tools/'
    },
    {
        id: 2,
        title: 'Auto Portfolio',
        image: 'assets/images/AutoPortfolio.png',
        description: 'An instant portfolio generator built with Next.js and Firebase. Create and deploy a professional portfolio in minutes with real-time updates.',
        tech: ['Next.js', 'Firebase', 'Full Stack', 'Databases'],
        url: 'https://auto-portfolio-ufmx.vercel.app/'
    },
    {
        id: 3,
        title: 'EduScheduler',
        image: 'assets/images/EduScheduler.png',
        description: 'EduScheduler is a web-based application that manages School digitally. Features include automated schedule generation, class management, and teacher assignments.',
        tech: ['Full Stack', 'Schedule Generator', 'JavaScript', 'Database'],
        url: 'https://edu-scheduler.onrender.com/'
    },
    {
        id: 4,
        title: 'Health Care',
        image: 'assets/images/mywebsite-healthcare.jpg.png',
        description: 'Web app providing health analysis, personalized routines, and connecting users with doctors. Includes health monitoring and consultation booking.',
        tech: ['Health Tech', 'APIs', 'JavaScript', 'Full Stack'],
        url: 'https://v0-new-project-j2bgprzpxzm.vercel.app/'
    },
    {
        id: 5,
        title: 'Campus Clash',
        image: 'assets/images/mywebsite-campusclash.jpg.png',
        description: 'Gaming site featuring interactive quizzes, a creative meme generator, and a competitive speed typing challenge. Built for college students.',
        tech: ['Gamification', 'JavaScript', 'HTML/CSS', 'Game Engine'],
        url: 'https://v0-campus-clash-game.vercel.app/'
    },
    {
        id: 6,
        title: 'AI Maze',
        image: 'assets/images/mywebsite-aimaze.jpg.png',
        description: 'Intelligent quiz platform powered by AI, covering multiple subjects. Features adaptive difficulty and personalized learning paths.',
        tech: ['AI Integration', 'JavaScript', 'APIs', 'Machine Learning'],
        url: 'https://v0-new-project-ypz7qhvhpwv.vercel.app/'
    },
    {
        id: 7,
        title: 'Search-GPT',
        image: 'assets/images/mywebsite-searchgpt.jpg.png',
        description: 'My first website not fully working condition, but includes tools like calculator and a game. A learning journey in web development.',
        tech: ['Fun', 'JavaScript', 'APIs', 'Basic Web'],
        url: 'https://rajpratham1.github.io/Search-GPT/'
    },
    {
        id: 8,
        title: 'WebFolio',
        image: 'assets/images/mywebsite-WebFolio.jpg.png',
        description: 'Website for developing custom websites and professional resumes. Offers templates, customization tools, and export functionality.',
        tech: ['Full Stack', 'API', 'User Auth', 'Templates'],
        url: 'https://rajpratham1.github.io/WebFolio/'
    }
];

// --- DATA : PROJECTS ---
const projectsData = {
    'Smoke Detector Sensor': {
        image: 'assets/images/project-smoke.jpg.jpg',
        title: 'Smoke Detector Sensor',
        badge: { text: 'Team Lead', class: 'lead' },
        description: 'A comprehensive fire safety solution using advanced sensor technology. This IoT-based system provides real-time smoke detection and alerts to prevent fire hazards.',
        techStack: ['Arduino', 'IoT', 'C++', 'Safety Systems'],
        links: [
            { text: 'View Presentation', url: 'assets/documents/Smoke detector sensor.pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    },
    'Retail Sales Analytics': {
        image: 'assets/images/retailsales.jpg.png',
        title: 'Retail Sales Analytics',
        badge: { text: 'Current', class: 'current' },
        description: 'A powerful data analysis project using machine learning to predict sales trends and optimize inventory management. Implements linear regression models.',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization', 'ML'],
        links: [
            { text: 'View Presentation', url: 'assets/documents/Retail-Sales_Analytics.pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    },
    'Smart Agriculture System': {
        image: 'assets/images/project-smartagriculture.jpg.webp',
        title: 'Smart Agriculture System',
        badge: null,
        description: 'An IoT-based agricultural solution that monitors environmental conditions and automates farming processes. Features include soil moisture monitoring.',
        techStack: ['Raspberry Pi', 'Python', 'IoT', 'Sensors', 'Automation'],
        links: [
            { text: 'View Presentation', url: 'assets/documents/Smart Agriculture (2).pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    },
    'Agronomy-Farmer App': {
        image: 'assets/images/project-agronomy.jpg.avif',
        title: 'Agronomy-Farmer App',
        badge: null,
        description: 'A comprehensive software solution bridging agricultural experts and farmers. Provides crop recommendations and disease detection using AI.',
        techStack: ['Python', 'TensorFlow', 'Flask', 'AI/ML', 'Web App'],
        links: [
            { text: 'View Presentation', url: 'assets/documents/INVI-CULTURE.pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    },
    'MediScan AI': {
        image: 'assets/images/mediscan.png',
        title: 'MediScan AI',
        badge: null,
        description: 'An advanced machine learning application for breast cancer detection using Random Forest Classifier. Provides accurate diagnostic predictions.',
        techStack: ['Flask', 'Machine Learning', 'Python', 'Healthcare AI'],
        links: [
            { text: 'Visit Website', url: 'https://cancerdetction.vercel.app/', icon: 'fa-globe', type: 'secondary' },
            { text: 'View Presentation', url: 'assets/documents/mmm.pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    },
    'Crime Portal': {
        image: 'assets/images/crime.png',
        title: 'Crime Portal',
        badge: null,
        description: 'A full-stack web application for reporting and managing crime incidents. Features secure user authentication and real-time tracking.',
        techStack: ['Full Stack', 'Web Development', 'Database', 'Security'],
        links: [
            { text: 'Visit Website', url: 'https://crimeportal-mu.vercel.app/team', icon: 'fa-globe', type: 'secondary' },
            { text: 'View Presentation', url: 'assets/documents/JAVA.pdf', icon: 'fa-file-powerpoint', type: 'primary' }
        ]
    }
};

// --- DATA : CERTIFICATES ---
const certificatesData = [
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "2024",
        type: "learning",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Cisco+Cybersec"
    },
    {
        title: "Python Programming",
        issuer: "Infosys Springboard",
        date: "2023",
        type: "learning",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Python"
    },
    {
        title: "Full Stack Development",
        issuer: "Udemy",
        date: "2024",
        type: "learning",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Full+Stack"
    },
    {
        title: "Leadership Fundamentals",
        issuer: "LinkedIn Learning",
        date: "2023",
        type: "softskills",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Leadership"
    },
    {
        title: "Communication Mastery",
        issuer: "Coursera",
        date: "2023",
        type: "softskills",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Communication"
    },
    {
        title: "Web Developer Intern",
        issuer: "TechCorp Inc.",
        date: "2024",
        type: "working",
        image: "https://placehold.co/600x400/1e1e1e/00aeff?text=Internship"
    }
];

// --- DATA : SKILLS ---
const fullStackSkillsData = {
    frontend: [
        { name: "React.js", percent: 90, icon: "fab fa-react" },
        { name: "HTML5/CSS3", percent: 95, icon: "fab fa-html5" },
        { name: "JavaScript (ES6+)", percent: 85, icon: "fab fa-js" },
        { name: "Tailwind CSS", percent: 90, icon: "fab fa-css3" }
    ],
    backend: [
        { name: "Node.js", percent: 80, icon: "fab fa-node" },
        { name: "Python", percent: 85, icon: "fab fa-python" },
        { name: "SQL / Database", percent: 75, icon: "fas fa-database" },
        { name: "API Integration", percent: 85, icon: "fas fa-plug" }
    ],
    tools: [
        { name: "Git & GitHub", percent: 90, icon: "fab fa-github" },
        { name: "VS Code", percent: 95, icon: "fas fa-code" },
        { name: "Firebase", percent: 70, icon: "fas fa-fire" }
    ]
};

const cybersecuritySkillsData = {
    core: [
        { name: "Network Security", percent: 80, icon: "fas fa-network-wired" },
        { name: "Ethical Hacking", percent: 75, icon: "fas fa-user-secret" },
        { name: "Cryptography", percent: 70, icon: "fas fa-key" }
    ],
    programming: [
        { name: "Python for Security", percent: 85, icon: "fab fa-python" },
        { name: "Bash Scripting", percent: 75, icon: "fas fa-terminal" },
        { name: "Linux Administration", percent: 80, icon: "fab fa-linux" }
    ],
    emerging: [
        { name: "Cloud Security", percent: 70, icon: "fas fa-cloud" },
        { name: "IoT Security", percent: 65, icon: "fas fa-wifi" },
        { name: "AI in Security", percent: 75, icon: "fas fa-robot" }
    ]
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    typeRole();
    initParticles();
    // renderWebsites();       // For the carousel - HARDCODED IN HTML
    // renderAllProjects();    // For the Projects Overlay - HARDCODED IN HTML
    renderAllCertificates();// For the Certificates Overlay
    renderAllSkills();      // For Full Stack & Cyber Overlays
    initScrollReveal();

    // Contact Form & Captcha
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        generateMathQuestion();
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorOutline.style.left = `${e.clientX}px`;
            cursorOutline.style.top = `${e.clientY}px`;
            cursorOutline.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect
        document.querySelectorAll('a, button, .clickable').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }


    // Explicitly attach click listeners for Skills to ensure they work
    const fullstackBtn = document.getElementById('btn-fullstack');
    if (fullstackBtn) {
        fullstackBtn.addEventListener('click', function () {
            console.log('Full Stack Clicked via Listener');
            window.openFullStackSkills();
        });
    }

    const cyberBtn = document.getElementById('btn-cybersecurity');
    if (cyberBtn) {
        cyberBtn.addEventListener('click', function () {
            console.log('Cybersecurity Clicked via Listener');
            window.openCybersecuritySkills();
        });
    }
});


// --- THEME LOGIC ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
    }
}

// Global toggleTheme function for onclick in HTML
window.toggleTheme = function () {
    const body = document.body;
    const isLight = body.classList.toggle('light-theme');

    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Update icons
    updateThemeIcon(isLight);
}

function updateThemeIcon(isLight) {
    const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
    icons.forEach(icon => {
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Also attach via event listener as fallback
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    window.toggleTheme();
});



// --- RENDER FUNCTIONS ---
function renderWebsites() {
    const sliderTrack = document.querySelector('.slider-track');
    // If using the carousel layout in style.css which I might not have. 
    // Index.html uses <div id="websitesList"></div> inside the overlay.
    // Also "My Websites" section in body is static HTML in index.html, not JS rendered.
    // So "websites" data is primarily for the OVERLAY list.

    const listContainer = document.getElementById('websitesList');
    if (listContainer) {
        listContainer.innerHTML = websites.map(site => `
            <div class="project-card">
                <div class="project-content">
                    <img src="${site.image}" alt="${site.title}" onerror="this.src='https://placehold.co/600x400/1e1e1e/00aeff?text=${site.title}'">
                    <div class="project-info">
                        <h3>${site.title}</h3>
                        <p>${site.description}</p>
                        <div class="tech-stack">
                            ${site.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                        <div class="project-buttons">
                            <a href="${site.url}" target="_blank" class="project-link">Visit Site <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderAllProjects() {
    console.log('renderAllProjects called');
    const container = document.getElementById('projectsList');
    if (!container) {
        console.error('CRITICAL: projectsList container NOT found!');
        return;
    }

    const projects = Object.entries(projectsData);
    console.log(`Found ${projects.length} projects to render.`);

    if (projects.length === 0) {
        console.warn('projectsData is empty!');
        container.innerHTML = '<p>No projects found.</p>';
        return;
    }

    const html = projects.map(([name, project]) => {
        // console.log('Rendering project:', name); // Optional: detailed log
        return `
        <div class="project-card">
            <div class="project-content">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://placehold.co/600x400/1e1e1e/00aeff?text=${encodeURIComponent(project.title)}'">
                <div class="project-info">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <h3>${project.title}</h3>
                        ${project.badge ? `<span class="badge ${project.badge.class}">${project.badge.text}</span>` : ''}
                    </div>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.techStack.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-buttons">
                        ${project.links.map(link => `
                            <a href="${link.url}" target="_blank" class="project-link ${link.type}">
                                <i class="fas ${link.icon}"></i> ${link.text}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    container.innerHTML = html;
    console.log('Projects rendered successfully into container.');
}

function renderAllCertificates() {
    // We will render all certificates initially hidden, or just render based on active tab
    // Let's render active tab 'learning' by default
    renderCertificatesTab('learning');
}

function renderCertificatesTab(type) {
    const container = document.getElementById('certificatesList');
    if (!container) return;

    const filtered = certificatesData.filter(c => c.type === type);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">No certificates in this category yet.</p>';
        return;
    }

    container.innerHTML = `<div class="pub-grid">
        ${filtered.map(cert => `
            <div class="pub-card">
                <img src="${cert.image}" alt="${cert.title}" class="pub-image" onerror="this.src='https://placehold.co/600x400/1e1e1e/00aeff?text=Certificate'">
                <div class="pub-content">
                    <h3 class="pub-title">${cert.title}</h3>
                    <p class="pub-desc">${cert.issuer} • ${cert.date}</p>
                </div>
            </div>
        `).join('')}
    </div>`;
}

function renderSkillsList(skills, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `<div class="skills-grid">
        ${skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon-box">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-info-box">
                    <h4>${skill.name}</h4>
                    <div class="skill-bar-container">
                        <div class="skill-bar-fill" style="width: ${skill.percent}%"></div>
                    </div>
                </div>
                <span class="skill-percentage">${skill.percent}%</span>
            </div>
        `).join('')}
    </div>`;
}

function renderAllSkills() {
    // Skills rendering disabled in favor of static HTML
    // renderSkillsList(fullStackSkillsData.frontend, 'fullstackFrontendSkills');
    // renderSkillsList(fullStackSkillsData.backend, 'fullstackBackendSkills');
    // renderSkillsList(fullStackSkillsData.tools, 'fullstackToolsSkills');

    // renderSkillsList(cybersecuritySkillsData.core, 'cybersecurityCoreSkills');
    // renderSkillsList(cybersecuritySkillsData.programming, 'cybersecurityProgrammingSkills');
    // renderSkillsList(cybersecuritySkillsData.emerging, 'cybersecurityEmergingSkills');
}


// --- OVERLAY INTERACTION FUNCTIONS ---

// Projects
window.openProjects = function () {
    console.log('Opening Projects Overlay...');
    renderAllProjects(); // Content is now dynamically rendered from projectsData
    document.getElementById('projectsOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
};
window.closeProjects = function () {
    document.getElementById('projectsOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
};

// Websites
window.openWebsites = function () {
    console.log('Opening Websites Overlay...');
    // renderWebsites(); // Content is now static HTML
    document.getElementById('websitesOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
};
window.closeWebsites = function () {
    document.getElementById('websitesOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
};

// Certificates
window.openCertificates = function () {
    document.getElementById('certificatesOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
};
window.closeCertificates = function () {
    document.getElementById('certificatesOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
};
window.showCertTab = function (type) {
    // 1. Remove 'active' class from all tabs
    document.querySelectorAll('.cert-tab').forEach(btn => btn.classList.remove('active'));
    // 2. Add 'active' class to clicked tab
    event.currentTarget.classList.add('active');

    // 3. Hide all certificate sections
    document.querySelectorAll('.cert-section').forEach(sec => sec.classList.remove('active'));

    // 4. Show the selected section
    const targetId = 'cert-' + type;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
};

// Full Stack Skills
window.openFullStackSkills = function () {
    console.log('FUNC: openFullStackSkills CALLED');
    document.getElementById('fullstackOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
};
window.closeFullStackSkills = function () {
    document.getElementById('fullstackOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
};

// Cybersecurity Skills
window.openCybersecuritySkills = function () {
    console.log('FUNC: openCybersecuritySkills CALLED');
    document.getElementById('cybersecurityOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
};
window.closeCybersecuritySkills = function () {
    document.getElementById('cybersecurityOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
    toggleBlur(false);
};

// About (Already exists in HTML onclick="openAbout()")
window.openAbout = function () {
    document.getElementById('aboutOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    toggleBlur(true);
};
window.closeAbout = function () {
    document.getElementById('aboutOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
    toggleBlur(false);
};

// Publications
window.openPublications = function () {
    document.getElementById('publicationsOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    toggleBlur(true);
};
window.closePublications = function () {
    document.getElementById('publicationsOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
    toggleBlur(false);
};

// Contact
window.openContact = function () {
    document.getElementById('contactOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    toggleBlur(true);
};
window.closeContact = function () {
    document.getElementById('contactOverlay').classList.remove('show');
    document.body.style.overflow = 'auto';
    toggleBlur(false);
};

// Close all on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const overlays = document.querySelectorAll('.projects-overlay');
        overlays.forEach(o => o.classList.remove('show'));
        document.body.style.overflow = 'auto';
    }
});


// --- OTHER GRAPHICS & LOGIC ---

// --- UI INTERACTION FUNCTIONS ---

function toggleMobileMenu() {
    const header = document.querySelector('.main-header');
    header.classList.toggle('mobile-menu-open');

    // Animate hamburger icon
    const icon = document.querySelector('.mobile-menu-toggle i');
    if (header.classList.contains('mobile-menu-open')) {
        icon.classList.remove('fa-ellipsis-v');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-ellipsis-v');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function toggleBlur(active) {
    const mainContent = document.querySelectorAll('.hero-section, .about-section, .featured-projects-section, .websites-section, .skills-section, .contact-section, footer');
    mainContent.forEach(el => {
        if (active) {
            el.classList.add('blur-content');
        } else {
            el.classList.remove('blur-content');
        }
    });
}


// --- OTHER GRAPHICS & LOGIC ---

// Particles
function initParticles() {
    const canvas = document.getElementById('tech-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];

    // Optimize for mobile: Reduce particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(0, 174, 255, ${Math.random() * 0.5})`;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

// Typing
function typeRole() {
    const roles = ["Full Stack Developer", "Cybersecurity Enthusiast", "Engineer"];
    let roleIdx = 0, charIdx = 0, isDeleting = false;
    const el = document.getElementById('primary-typing');
    if (!el) return;

    function type() {
        const current = roles[roleIdx];
        el.textContent = current.substring(0, isDeleting ? charIdx-- : charIdx++);

        let delay = isDeleting ? 50 : 100;
        if (!isDeleting && charIdx === current.length) {
            delay = 2000; isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false; roleIdx = (roleIdx + 1) % roles.length;
        }
        setTimeout(type, delay);
    }
    type();
}

// Scroll Reveal
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Contact Form
let captchaAnswer = 0;
function generateMathQuestion() {
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);
    captchaAnswer = n1 + n2;
    const el = document.getElementById('math-question');
    if (el) el.textContent = `${n1} + ${n2} =`;
}

function handleContactSubmit(e) {
    e.preventDefault();
    const userAns = parseInt(document.getElementById('math-answer').value);
    if (userAns !== captchaAnswer) {
        alert("Incorrect math answer.");
        generateMathQuestion();
        return;
    }

    const btn = this.querySelector('.send-btn');
    const originalContent = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    // Simulate send (or real send if API key works)
    const formData = new FormData(this);
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                btn.innerHTML = 'Sent!';
                this.reset();
                setTimeout(() => { btn.innerHTML = originalContent; btn.disabled = false; }, 3000);
                generateMathQuestion();
            } else {
                alert('Something went wrong.');
                btn.innerHTML = originalContent;
                btn.disabled = false;
            }
        })
        .catch(err => {
            console.error(err);
            btn.innerHTML = 'Error';
            btn.disabled = false;
        });
}

// Scroll To Top Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================================================
// INTERSECTION OBSERVER - Fade-in Animations on Scroll
// ==========================================================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing after animation triggers
            // fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    fadeInObserver.observe(el);
});

// Also observe project cards, website cards, and pub cards for dynamic content
document.querySelectorAll('.project-card, .website-card, .pub-card, .about-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    fadeInObserver.observe(el);
});

// ==========================================================================
// CANVAS MOBILE OPTIMIZATION - Reduce particles for 60FPS
// ==========================================================================
function optimizeCanvasForMobile() {
    const isMobile = window.innerWidth <= 768;
    const canvas = document.querySelector('canvas');

    if (canvas && typeof particlesJS !== 'undefined') {
        // Reduce particle count on mobile
        const particleCount = isMobile ? 30 : 80;
        const speed = isMobile ? 1 : 2;

        // If particles.js is being used, update config
        if (window.pJSDom && window.pJSDom.length > 0) {
            try {
                window.pJSDom[0].pJS.particles.number.value = particleCount;
                window.pJSDom[0].pJS.particles.move.speed = speed;
                window.pJSDom[0].pJS.fn.particlesRefresh();
            } catch (e) {
                console.log('Canvas optimization skipped:', e);
            }
        }
    }
}

// Run optimization on load and resize
window.addEventListener('load', optimizeCanvasForMobile);
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(optimizeCanvasForMobile, 250);
});

// ==========================================================================
// SCROLL PROGRESS BAR
// ==========================================================================
function initScrollProgressBar() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ==========================================================================
// 3D CARD TILT EFFECT
// ==========================================================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .pub-card, .fav-website-item, .about-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ==========================================================================
// BUTTON RIPPLE EFFECT
// ==========================================================================
function initRippleEffect() {
    const buttons = document.querySelectorAll('.cta-button, .project-link, .pub-btn, .fav-btn, .contact-card-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnim 0.6s ease-out forwards;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes dynamically
    if (!document.querySelector('#ripple-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ripple-keyframes';
        style.textContent = `
            @keyframes rippleAnim {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ==========================================================================
// PAGE LOADER
// ==========================================================================
function initPageLoader() {
    // Create loader
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">PK</div>
            <div class="loader-bar">
                <div class="loader-bar-fill"></div>
            </div>
        </div>
    `;
    document.body.prepend(loader);

    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 1500);
    });
}

// ==========================================================================
// STAGGERED REVEAL (Enhanced)
// ==========================================================================
function initStaggeredReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add stagger-reveal class to all cards
    document.querySelectorAll('.project-card, .pub-card, .fav-website-item, .about-card, .contact-card').forEach((el, index) => {
        el.classList.add('stagger-reveal');
        el.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(el);
    });
}

// ==========================================================================
// INITIALIZE ALL ANIMATIONS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initScrollProgressBar();
    initTiltEffect();
    initRippleEffect();
    initStaggeredReveal();
    initSkillBarsAnimation();
});

// ==========================================================================
// ANIMATED SKILLS PROGRESS BARS
// ==========================================================================
function initSkillBarsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillBars.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                bar.style.setProperty('--progress-width', progress + '%');
                bar.classList.add('animated');
                bar.style.width = progress + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ==========================================================================
// LIVE CLOCK WITH TIMEZONE
// ==========================================================================
function initLiveClock() {
    const clockElement = document.getElementById('liveClock');
    const dateElement = document.getElementById('clockDate');
    const statusElement = document.getElementById('clockStatus');

    if (!clockElement) return;

    function updateClock() {
        const now = new Date();

        // Format time (IST: UTC+5:30)
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const time = now.toLocaleTimeString('en-IN', options);
        clockElement.textContent = time;

        // Format date
        const dateOptions = {
            timeZone: 'Asia/Kolkata',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const date = now.toLocaleDateString('en-IN', dateOptions);
        dateElement.textContent = date;

        // Update availability status based on time
        const hour = parseInt(time.split(':')[0]);
        if (hour >= 9 && hour < 22) {
            statusElement.textContent = '🟢 Available for collaboration';
            statusElement.style.color = '#4ade80';
        } else {
            statusElement.textContent = '🟡 Away - Will respond soon';
            statusElement.style.color = '#fbbf24';
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// ==========================================================================
// TESTIMONIALS CAROUSEL
// ==========================================================================
let currentTestimonial = 0;
const totalTestimonials = 3;

function moveTestimonial(direction) {
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (!track) return;

    currentTestimonial += direction;

    // Loop around
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;

    // Move track
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-play testimonials
function autoPlayTestimonials() {
    setInterval(() => {
        moveTestimonial(1);
    }, 5000);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLiveClock();
    autoPlayTestimonials();
});




// ==========================================================================
// CASE STUDIES - Interactive Modal & Data
// ==========================================================================

(function () {
    'use strict';

    // Case Study Data
    const caseStudies = {
        viru: {
            title: 'VIRU - AI Assistant',
            subtitle: 'A privacy-focused, local AI chatbot',
            badge: 'fullstack',
            badgeText: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
            problem: `Traditional AI assistants require cloud connectivity, raising privacy concerns for users who want to keep their conversations confidential. Many existing solutions also require expensive subscriptions, limiting accessibility for students and developers.`,
            solution: `Developed VIRU, a 100% local AI assistant that runs entirely in the browser. No data leaves the user's device, ensuring complete privacy. Built with a modern, intuitive interface that makes AI accessible to everyone, completely free forever.`,
            techStack: [
                { icon: 'fab fa-js', name: 'JavaScript' },
                { icon: 'fab fa-html5', name: 'HTML5' },
                { icon: 'fab fa-css3-alt', name: 'CSS3' },
                { icon: 'fas fa-brain', name: 'Web AI' },
                { icon: 'fas fa-server', name: 'Local Storage' }
            ],
            impact: [
                { value: '100%', label: 'Private & Local' },
                { value: 'Free', label: 'Forever' },
                { value: '0', label: 'Data Sent to Cloud' }
            ],
            lessons: [
                'Implementing AI models in the browser requires careful optimization for performance',
                'User privacy should be a priority, not an afterthought',
                'Simple, intuitive UI increases user adoption significantly',
                'Service workers enable powerful offline-first experiences'
            ],
            liveLink: 'https://viru-ptif.vercel.app/',
            githubLink: '#'
        },
        portfolio: {
            title: 'Personal Portfolio',
            subtitle: 'Modern, responsive portfolio website',
            badge: 'web-dev',
            badgeText: 'Web Development',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            problem: `Needed a professional online presence to showcase projects and skills. Most portfolio templates look generic and don't effectively communicate technical expertise in both web development and cybersecurity.`,
            solution: `Designed and built a custom portfolio from scratch with a unique cybersecurity-inspired aesthetic. Features include an interactive terminal, glassmorphism design, smooth animations, PWA support, and case studies that tell the story behind each project.`,
            techStack: [
                { icon: 'fab fa-html5', name: 'HTML5' },
                { icon: 'fab fa-css3-alt', name: 'CSS3' },
                { icon: 'fab fa-js', name: 'JavaScript' },
                { icon: 'fas fa-mobile-alt', name: 'PWA' },
                { icon: 'fas fa-palette', name: 'Glassmorphism' }
            ],
            impact: [
                { value: '100%', label: 'Responsive' },
                { value: 'A+', label: 'Performance' },
                { value: 'PWA', label: 'Installable' }
            ],
            lessons: [
                'CSS custom properties make theme management much easier',
                'Progressive enhancement ensures accessibility for all users',
                'Interactive elements like terminals increase engagement',
                'Case studies are more impactful than simple project lists'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        securityScanner: {
            title: 'Web Security Scanner',
            subtitle: 'Automated vulnerability detection tool',
            badge: 'security',
            badgeText: 'Cybersecurity',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
            problem: `Small businesses and individual developers often lack the resources to conduct comprehensive security audits. Commercial security tools are expensive and complex, leaving many websites vulnerable to common attacks.`,
            solution: `Created an automated web security scanner that checks for OWASP Top 10 vulnerabilities, including XSS, SQL injection, and insecure headers. The tool provides clear, actionable reports with remediation suggestions.`,
            techStack: [
                { icon: 'fab fa-python', name: 'Python' },
                { icon: 'fas fa-shield-alt', name: 'OWASP' },
                { icon: 'fas fa-terminal', name: 'CLI' },
                { icon: 'fas fa-database', name: 'SQLite' },
                { icon: 'fas fa-file-alt', name: 'Reports' }
            ],
            impact: [
                { value: '10+', label: 'Vulnerability Types' },
                { value: '50+', label: 'Scans Performed' },
                { value: '< 2min', label: 'Scan Time' }
            ],
            lessons: [
                'Security testing must be automated to be effective at scale',
                'Clear documentation and reports are essential for remediation',
                'Ethical considerations are crucial when building security tools',
                'Continuous learning is required as new vulnerabilities emerge'
            ],
            liveLink: '#',
            githubLink: '#'
        }
    };

    // Open Case Study Modal
    window.openCaseStudy = function (projectId) {
        const project = caseStudies[projectId];
        if (!project) return;

        const modal = document.getElementById('caseStudyModal');
        if (!modal) return;

        // Populate modal content
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalSubtitle').textContent = project.subtitle;
        document.getElementById('modalProblem').textContent = project.problem;
        document.getElementById('modalSolution').textContent = project.solution;

        // Tech Stack
        const techContainer = document.getElementById('modalTechStack');
        techContainer.innerHTML = project.techStack.map(tech => `
            <div class="tech-stack-item">
                <i class="${tech.icon}"></i>
                <span>${tech.name}</span>
            </div>
        `).join('');

        // Impact
        const impactContainer = document.getElementById('modalImpact');
        impactContainer.innerHTML = project.impact.map(item => `
            <div class="impact-card">
                <span class="impact-value">${item.value}</span>
                <span class="impact-label">${item.label}</span>
            </div>
        `).join('');

        // Lessons
        const lessonsContainer = document.getElementById('modalLessons');
        lessonsContainer.innerHTML = project.lessons.map(lesson => `
            <li>
                <i class="fas fa-check-circle"></i>
                <span>${lesson}</span>
            </li>
        `).join('');

        // Links
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close Case Study Modal
    window.closeCaseStudy = function () {
        const modal = document.getElementById('caseStudyModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCaseStudy();
        }
    });

    // Close on backdrop click
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('case-study-modal')) {
            closeCaseStudy();
        }
    });
})();

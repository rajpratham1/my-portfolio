// ==========================================================================
// PROJECT DETAILS - Detailed Project Reports Modal
// ==========================================================================

(function () {
    'use strict';

    // Project Details Data
    const projectDetails = {
        privychat: {
            title: 'PrivyChat',
            tagline: 'The Zero-Trace Spy Messenger',
            icon: 'fas fa-user-secret',
            badges: [
                { text: 'Real-time', type: 'tech' },
                { text: 'E2E Encrypted', type: 'security' },
                { text: 'Live', type: 'status' }
            ],
            description: `PrivyChat is an open-source, ultra-secure, and ephemeral messaging platform designed for journalists, activists, whistleblowers, and privacy enthusiasts. Built with a "Zero-Trust" philosophy: we assume the server is compromised, the network is tapped, and the device might be seized.`,
            features: [
                {
                    icon: 'fas fa-memory',
                    title: 'RAM-Only Architecture',
                    desc: 'Data exists only in volatile memory. Server restart = 100% data wipe.'
                },
                {
                    icon: 'fas fa-eye-slash',
                    title: 'Zero-Knowledge Server',
                    desc: 'Server routes messages but cannot read them. All encryption is browser-side.'
                },
                {
                    icon: 'fas fa-calculator',
                    title: 'Stealth Calculator Mode',
                    desc: 'Transform the app into a working calculator. Enter 1337+= to unlock chat.'
                },
                {
                    icon: 'fas fa-siren-on',
                    title: 'Panic Button',
                    desc: 'Instantly disconnect, clear all data, and redirect to Google.'
                },
                {
                    icon: 'fas fa-microphone',
                    title: 'Voice Masks',
                    desc: 'Record voice notes with disguises (Robot, Chipmunk, Monster).'
                },
                {
                    icon: 'fas fa-video',
                    title: 'Secure Video Calls',
                    desc: 'WebRTC P2P video chat with DTLS-SRTP encryption.'
                }
            ],
            techStack: [
                { icon: 'fab fa-node-js', name: 'Node.js' },
                { icon: 'fas fa-plug', name: 'Socket.io' },
                { icon: 'fab fa-js', name: 'JavaScript' },
                { icon: 'fas fa-lock', name: 'AES-GCM' },
                { icon: 'fas fa-key', name: 'PBKDF2' },
                { icon: 'fas fa-mobile-alt', name: 'PWA' }
            ],
            security: [
                'Military-Grade AES-256-GCM encryption',
                '100,000 iteration PBKDF2 key derivation',
                'Unique 12-byte IV for every message',
                'XSS protection with strict DOM sanitization',
                'Helmet.js for secure HTTP headers',
                'Rate limiting to prevent DDoS attacks'
            ],
            liveUrl: 'https://privy-chat.onrender.com/',
            githubUrl: 'https://github.com/rajpratham1/PrivyChat'
        },

        billorax: {
            title: 'BilloraX',
            tagline: 'Smart Billing & Inventory Platform for Indian Shopkeepers',
            icon: 'fas fa-store',
            badges: [
                { text: 'MSME Registered', type: 'status' },
                { text: 'GST Compliant', type: 'tech' },
                { text: 'PWA', type: 'tech' }
            ],
            description: `BilloraX is a comprehensive billing and inventory management platform designed specifically for Indian shopkeepers. Built with modern web technologies, it provides a seamless experience for managing products, customers, billing, analytics, and online orders—all in one place.`,
            features: [
                {
                    icon: 'fas fa-boxes',
                    title: 'Inventory Management',
                    desc: 'Track stock in real-time with low stock alerts, categories, and barcode scanning.'
                },
                {
                    icon: 'fas fa-users',
                    title: 'Customer Management',
                    desc: 'Maintain customer database, track Udhaar balances, WhatsApp reminders.'
                },
                {
                    icon: 'fas fa-receipt',
                    title: 'Fast Billing',
                    desc: 'GST-compliant invoices, multiple payment methods, thermal printing support.'
                },
                {
                    icon: 'fas fa-chart-pie',
                    title: 'Profit Analytics',
                    desc: 'Sales trends, dead stock identification, Excel export for GST filing.'
                },
                {
                    icon: 'fas fa-shopping-cart',
                    title: 'Online Storefront',
                    desc: 'Digital store for customers, WhatsApp order notifications.'
                },
                {
                    icon: 'fas fa-language',
                    title: 'Hindi/English',
                    desc: 'Multi-language support for accessibility across India.'
                }
            ],
            techStack: [
                { icon: 'fab fa-react', name: 'Next.js 14' },
                { icon: 'fas fa-fire', name: 'Firebase' },
                { icon: 'fab fa-js', name: 'TypeScript' },
                { icon: 'fas fa-palette', name: 'Tailwind CSS' },
                { icon: 'fas fa-qrcode', name: 'Barcode Scanner' },
                { icon: 'fas fa-file-pdf', name: 'PDF Export' }
            ],
            security: [
                'Firebase Authentication for secure login',
                'Firestore security rules for data protection',
                'Data encryption in transit and at rest',
                'Role-based access control (Shopkeeper/Admin)',
                'Secure payment integration with UPI'
            ],
            liveUrl: 'https://billorax.vercel.app/',
            githubUrl: 'https://github.com/rajpratham1/BilloraX'
        },

        viru: {
            title: 'VIRU',
            tagline: 'Virtual Intelligence Response Unit - Self-Hosted AI Coding Assistant',
            icon: 'fas fa-robot',
            badges: [
                { text: 'Open Source', type: 'status' },
                { text: '100% Local', type: 'security' },
                { text: 'Autonomous', type: 'tech' }
            ],
            description: `VIRU is a privacy-first, self-hosted AI coding assistant that runs 100% locally. Unlike cloud-based alternatives like ChatGPT and GitHub Copilot, your code never leaves your machine, and there are no monthly subscription fees. Free forever.`,
            features: [
                {
                    icon: 'fas fa-eye',
                    title: 'The Eye (Vision-to-Code)',
                    desc: 'Drop any UI screenshot—VIRU writes the complete React/Tailwind code to replicate it.'
                },
                {
                    icon: 'fas fa-microphone-alt',
                    title: 'God Mode (Voice)',
                    desc: 'Hands-free coding. VIRU listens, thinks, executes, and speaks back.'
                },
                {
                    icon: 'fas fa-brain',
                    title: 'Neural Link (RAG Memory)',
                    desc: 'Persistent vector database remembers context from conversations and docs.'
                },
                {
                    icon: 'fas fa-plane',
                    title: 'Autopilot Mode',
                    desc: 'Self-healing code: writes, tests, reads errors, and fixes automatically.'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Overwatch Admin',
                    desc: 'Standalone SaaS dashboard for user management and system alerts.'
                },
                {
                    icon: 'fas fa-lock',
                    title: '100% Private',
                    desc: 'All processing happens locally. No data ever leaves your machine.'
                }
            ],
            techStack: [
                { icon: 'fab fa-react', name: 'React 19' },
                { icon: 'fab fa-node-js', name: 'Node.js' },
                { icon: 'fas fa-database', name: 'SQLite + Prisma' },
                { icon: 'fas fa-brain', name: 'Ollama' },
                { icon: 'fab fa-docker', name: 'Docker' },
                { icon: 'fas fa-bolt', name: 'Vite' }
            ],
            security: [
                'No cloud dependency - runs entirely on your machine',
                'Uses local Ollama models (Mistral, LLaMA, etc.)',
                'No API keys required for basic usage',
                'Code never transmitted to external servers',
                'MIT License - fully open source'
            ],
            liveUrl: 'https://viru-ptif.vercel.app/index.html',
            githubUrl: 'https://github.com/rajpratham1/VIRU'
        },

        pravi: {
            title: 'Pravi Marketplace',
            tagline: 'The Premier Marketplace for Ready-Made Websites',
            icon: 'fas fa-shopping-bag',
            badges: [
                { text: 'Full Stack', type: 'tech' },
                { text: 'Payment Ready', type: 'status' },
                { text: 'Live', type: 'status' }
            ],
            description: `Pravi is a secure marketplace to buy and sell ready-made websites. Full-featured platform with user authentication, seller verification, payment integration, and comprehensive admin dashboard for managing listings and orders.`,
            features: [
                {
                    icon: 'fas fa-user-plus',
                    title: 'User Accounts',
                    desc: 'Create buyer accounts, save favorites, track purchase history.'
                },
                {
                    icon: 'fas fa-store-alt',
                    title: 'Seller Portal',
                    desc: 'Apply to become a seller, create listings, manage inventory.'
                },
                {
                    icon: 'fas fa-shopping-cart',
                    title: 'Shopping Cart',
                    desc: 'Add items, apply coupon codes, seamless checkout flow.'
                },
                {
                    icon: 'fas fa-credit-card',
                    title: 'UPI Payments',
                    desc: 'Integrated payment system with order tracking.'
                },
                {
                    icon: 'fas fa-user-shield',
                    title: 'Admin Dashboard',
                    desc: 'Manage seller applications, verify identity docs, moderate listings.'
                },
                {
                    icon: 'fas fa-envelope',
                    title: 'Inquiry System',
                    desc: 'Contact sellers directly, track conversation history.'
                }
            ],
            techStack: [
                { icon: 'fab fa-react', name: 'React' },
                { icon: 'fab fa-node-js', name: 'Node.js' },
                { icon: 'fas fa-database', name: 'MongoDB' },
                { icon: 'fas fa-key', name: 'JWT Auth' },
                { icon: 'fas fa-credit-card', name: 'UPI Integration' },
                { icon: 'fas fa-cloud', name: 'Vercel' }
            ],
            security: [
                'JWT-based authentication',
                'Seller KYC verification (Aadhaar/PAN)',
                'Admin approval workflow for sellers',
                'Secure document upload and storage',
                'Role-based access control'
            ],
            liveUrl: 'https://pravi-phi.vercel.app',
            githubUrl: 'https://github.com/rajpratham1/pravi'
        }
    };

    // Open Project Detail Modal
    window.openProjectDetail = function (projectId) {
        const project = projectDetails[projectId];
        if (!project) return;

        const modal = document.getElementById('projectDetailModal');
        if (!modal) return;

        // Populate content
        document.getElementById('detailIcon').className = project.icon;
        document.getElementById('detailTitle').textContent = project.title;
        document.getElementById('detailTagline').textContent = project.tagline;
        document.getElementById('detailDescription').textContent = project.description;

        // Badges
        const badgesContainer = document.getElementById('detailBadges');
        badgesContainer.innerHTML = project.badges.map(b =>
            `<span class="detail-badge ${b.type}">${b.text}</span>`
        ).join('');

        // Features
        const featuresContainer = document.getElementById('detailFeatures');
        featuresContainer.innerHTML = project.features.map(f => `
            <div class="feature-card">
                <h4><i class="${f.icon}"></i> ${f.title}</h4>
                <p>${f.desc}</p>
            </div>
        `).join('');

        // Tech Stack
        const techContainer = document.getElementById('detailTechStack');
        techContainer.innerHTML = project.techStack.map(t => `
            <div class="tech-item">
                <i class="${t.icon}"></i>
                <span>${t.name}</span>
            </div>
        `).join('');

        // Security
        const securityContainer = document.getElementById('detailSecurity');
        securityContainer.innerHTML = project.security.map(s => `
            <li><i class="fas fa-shield-alt"></i> <span>${s}</span></li>
        `).join('');

        // Links
        document.getElementById('detailLiveLink').href = project.liveUrl;
        document.getElementById('detailGithubLink').href = project.githubUrl;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close Modal
    window.closeProjectDetail = function () {
        const modal = document.getElementById('projectDetailModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeProjectDetail();
        }
    });

    // Close on backdrop click
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('project-detail-modal')) {
            closeProjectDetail();
        }
    });
})();

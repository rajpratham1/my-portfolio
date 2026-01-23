// ==========================================================================
// INTERACTIVE TERMINAL - Portfolio Command Console
// ==========================================================================

(function () {
    'use strict';

    // Terminal Commands
    const commands = {
        help: {
            description: 'Show available commands',
            execute: () => {
                return `
<span class="terminal-response info">Available Commands:</span>
<span class="terminal-response">  whoami    - Display my identity</span>
<span class="terminal-response">  skills    - List my technical skills</span>
<span class="terminal-response">  projects  - View my projects</span>
<span class="terminal-response">  contact   - Get in touch with me</span>
<span class="terminal-response">  social    - My social links</span>
<span class="terminal-response">  clear     - Clear terminal</span>
<span class="terminal-response">  help      - Show this help message</span>`;
            }
        },
        whoami: {
            description: 'Display identity',
            execute: () => {
                return `
<span class="terminal-response success">┌─────────────────────────────────────────┐</span>
<span class="terminal-response success">│  Pratham Kumar                          │</span>
<span class="terminal-response success">│  Full Stack Developer & Security Buff   │</span>
<span class="terminal-response success">└─────────────────────────────────────────┘</span>
<span class="terminal-response">
  🔧 Role: Full Stack Web Developer
  🛡️ Focus: Cybersecurity Enthusiast
  💻 Passion: Clean Code & Security
  📍 Location: India
  📧 Email: rajpratham40@gmail.com
</span>`;
            }
        },
        skills: {
            description: 'List technical skills',
            execute: () => {
                return `
<span class="terminal-response list">═══ Frontend ═══</span>
<span class="terminal-response">  HTML5 │ CSS3 │ JavaScript │ React │ Vue.js</span>

<span class="terminal-response list">═══ Backend ═══</span>
<span class="terminal-response">  Node.js │ Python │ PHP │ Express │ Django</span>

<span class="terminal-response list">═══ Database ═══</span>
<span class="terminal-response">  MongoDB │ MySQL │ PostgreSQL │ Firebase</span>

<span class="terminal-response list">═══ Security ═══</span>
<span class="terminal-response">  Penetration Testing │ Network Security</span>
<span class="terminal-response">  OWASP │ Burp Suite │ Wireshark │ Nmap</span>

<span class="terminal-response list">═══ Tools ═══</span>
<span class="terminal-response">  Git │ Docker │ Linux │ VS Code │ Postman</span>`;
            }
        },
        projects: {
            description: 'View projects',
            execute: () => {
                if (typeof openProjects === 'function') {
                    setTimeout(() => openProjects(), 500);
                    return `<span class="terminal-response success">Opening projects overlay...</span>`;
                }
                return `<span class="terminal-response">Check out my projects in the Projects section!</span>`;
            }
        },
        contact: {
            description: 'Contact information',
            execute: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                    return `<span class="terminal-response success">Scrolling to contact section...</span>`;
                }
                return `
<span class="terminal-response info">═══ Contact Me ═══</span>
<span class="terminal-response">📧 Email: rajpratham40@gmail.com</span>
<span class="terminal-response">💼 LinkedIn: linkedin.com/in/prathamkumar</span>
<span class="terminal-response">🐙 GitHub: github.com/rajpratham</span>`;
            }
        },
        social: {
            description: 'Social links',
            execute: () => {
                return `
<span class="terminal-response info">═══ Connect With Me ═══</span>
<span class="terminal-response">🐙 GitHub    : github.com/rajpratham</span>
<span class="terminal-response">💼 LinkedIn  : linkedin.com/in/prathamkumar</span>
<span class="terminal-response">📸 Instagram : @rajpratham_</span>
<span class="terminal-response">🐦 Twitter   : @rajpratham_dev</span>`;
            }
        },
        clear: {
            description: 'Clear terminal',
            execute: () => {
                return 'CLEAR_TERMINAL';
            }
        }
    };

    // Welcome message
    const welcomeMessage = `
<span class="terminal-response info">╔══════════════════════════════════════════════════════════════╗</span>
<span class="terminal-response info">║  Welcome to Pratham's Interactive Terminal v1.0              ║</span>
<span class="terminal-response info">║  Type 'help' to see available commands                       ║</span>
<span class="terminal-response info">╚══════════════════════════════════════════════════════════════╝</span>
`;

    // Initialize terminal
    function initTerminal() {
        const terminalOutput = document.getElementById('terminal-output');
        const terminalInput = document.getElementById('terminal-input');

        if (!terminalOutput || !terminalInput) return;

        // Show welcome message
        terminalOutput.innerHTML = welcomeMessage;

        // Handle input
        terminalInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const command = this.value.trim().toLowerCase();
                processCommand(command);
                this.value = '';
            }
        });

        // Focus input when clicking terminal
        document.querySelector('.terminal-body')?.addEventListener('click', () => {
            terminalInput.focus();
        });
    }

    function processCommand(input) {
        const terminalOutput = document.getElementById('terminal-output');
        const terminalInput = document.getElementById('terminal-input');

        if (!input) return;

        // Add command to output
        const commandLine = `
<div class="terminal-line">
    <span class="terminal-prompt">┌──(</span><span class="terminal-user">pratham@portfolio</span><span class="terminal-prompt">)-[</span><span class="terminal-path">~</span><span class="terminal-prompt">]</span>
</div>
<div class="terminal-line">
    <span class="terminal-prompt">└─$ </span><span class="terminal-command">${escapeHtml(input)}</span>
</div>`;

        terminalOutput.innerHTML += commandLine;

        // Process command
        if (commands[input]) {
            const result = commands[input].execute();
            if (result === 'CLEAR_TERMINAL') {
                terminalOutput.innerHTML = welcomeMessage;
            } else {
                terminalOutput.innerHTML += `<div class="terminal-response-block">${result}</div>`;
            }
        } else {
            terminalOutput.innerHTML += `
<div class="terminal-response" style="color: #ff6b6b;">
  Command not found: ${escapeHtml(input)}
  Type 'help' for available commands.
</div>`;
        }

        // Scroll to bottom
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTerminal);
    } else {
        initTerminal();
    }

    // Expose for external use
    window.terminalCommands = commands;
})();

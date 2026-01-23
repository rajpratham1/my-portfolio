// DOM Elements
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotWindow = document.querySelector(".chatbot-window");

document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector(".chatbot-toggler");
    const chatWindow = document.querySelector(".chatbot-window");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");
    const sendBtn = document.querySelector("#send-btn");

    let userMessage = null;
    const inputInitHeight = chatInput.style.height;

    // Toggle Chatbot
    toggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

    // Knowledge Base Data
    const knowledgeBase = {
        identity: {
            keywords: ["who are you", "what is this", "your name", "bot", "ai"],
            response: "I'm **Pratham's AI Assistant**! 🤖 I was built to help you navigate this portfolio and answer questions about Pratham's skills, projects, and experience."
        },
        personal: {
            keywords: ["who is pratham", "about pratham", "age", "location", "from", "bio", "background"],
            response: "Pratham Kumar is a passionate **Full Stack Developer** & **Cybersecurity Enthusiast**. He loves building secure, scalable web applications and exploring AI technologies. He is always learning and innovating!"
        },
        skills: {
            keywords: ["skill", "stack", "technology", "language", "coding", "programming", "react", "python", "node", "cyber"],
            response: "Pratham is proficient in:<br>• **Frontend:** React, Next.js, HTML5, CSS3/Tailwind<br>• **Backend:** Node.js, Express, Python (Django/Flask)<br>• **Cybersecurity:** Network Defense, Ethical Hacking basics<br>• **AI:** Integrating LLMs like Gemini & OpenAI."
        },
        projects_general: {
            keywords: ["project", "work", "portfolio", "built", "creation"],
            response: "Pratham has built some amazing things! 🚀<br>Top projects include:<br>1. **PrivyChat** (Anonymous Chat)<br>2. **BilloraX** (Billing System)<br>3. **VIRU** (AI Assistant)<br>Ask me about any specific project!"
        },
        project_billorax: {
            keywords: ["billorax", "billing", "inventory", "gst"],
            response: "📊 **BilloraX** is a complete billing & inventory management solution for Indian businesses. It features GST reports, thermal printing, and an online store system.<br><a href='https://billorax.vercel.app/' target='_blank'>Visit BilloraX</a>"
        },
        project_privychat: {
            keywords: ["privychat", "chat", "anonymous", "message"],
            response: "🔒 **PrivyChat** is a secure, anonymous messaging platform. No logs, no tracking—just pure private communication.<br><a href='https://privy-chat.onrender.com/' target='_blank'>Visit PrivyChat</a>"
        },
        project_viru: {
            keywords: ["viru", "ai assistant", "coding system"],
            response: "🤖 **VIRU** is a custom autonomous coding system designed by Pratham. It combines privacy with superhuman coding capabilities.<br><a href='https://viru-ptif.vercel.app/' target='_blank'>Try VIRU</a>"
        },
        project_pravi: {
            keywords: ["pravi", "marketplace", "buy website"],
            response: "🛒 **Pravi** is a marketplace for buying and selling ready-made websites. It features secure payments and a robust admin dashboard."
        },
        contact: {
            keywords: ["contact", "email", "mail", "hire", "phone", "reach"],
            response: "📧 You can reach Pratham at: **rajpratham40@gmail.com**<br>Or connect on <a href='https://www.linkedin.com/in/pratham-kumar-2a4b151a7/' target='_blank'>LinkedIn</a>."
        },
        resume: {
            keywords: ["resume", "cv", "download", "pdf"],
            response: "📄 you can <a href='assets/documents/raj-pratham cv.pdf' download>Download the Resume here</a>."
        },
        fun: {
            keywords: ["joke", "funny", "story", "trick", "secret"],
            response: "Here's a secret: Try entering the **Konami Code** (Shift+Up+Down...) on the keyboard for a Matrix surprise! 🕶️"
        },
        greetings: {
            keywords: ["hi", "hello", "hey", "sup", "yo", "greeting"],
            response: "Hello there! 👋 How can I help you today? Ask me about my projects or skills!"
        }
    };

    // Create Chat List Item
    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat-message", className);

        let chatContent = className === "chat-outgoing"
            ? `<p></p>`
            : `<div class="chat-avatar"><i class="fas fa-robot"></i></div><p></p>`;

        chatLi.innerHTML = chatContent;
        // Interpret HTML for links but be safe
        chatLi.querySelector("p").innerHTML = message; 
        return chatLi;
    };

    // Generate Response
    const generateResponse = (incomingChatLi) => {
        const messageElement = incomingChatLi.querySelector("p");
        const msg = userMessage.toLowerCase().trim();
        
        let response = "I'm not sure about that. 🤔<br>Try asking about **'Projects'**, **'Skills'**, **'Contact'**, or specific apps like **'BilloraX'**.";

        // Smart Matching
        let bestMatch = null;
        
        // Check Knowledge Base
        for (const category in knowledgeBase) {
            const data = knowledgeBase[category];
            // Check if ANY keyword matches
            const match = data.keywords.some(keyword => msg.includes(keyword));
            if (match) {
                bestMatch = data.response;
                break; // Stop at first match (Priority determined by object order if needed, but this is simple)
            }
        }

        if (bestMatch) {
            response = bestMatch;
        }

        // Simulate Typing Delay based on response length
        const delay = Math.min(1000, Math.max(600, response.length * 20));

        setTimeout(() => {
            messageElement.innerHTML = response;
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, delay);
    };

    // Handle Chat
    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;

        // Clear input and reset height
        chatInput.value = "";
        chatInput.style.height = inputInitHeight;

        // Append User Message
        // Use textContent for user input to prevent XSS
        const userLi = createChatLi("", "chat-outgoing");
        userLi.querySelector("p").textContent = userMessage;
        chatbox.appendChild(userLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        // Simulate "Thinking"
        setTimeout(() => {
            const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    };

    // Event Listeners
    chatInput.addEventListener("input", () => {
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
            e.preventDefault();
            handleChat();
        }
    });

    sendBtn.addEventListener("click", handleChat);
});

// DOM Elements
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotWindow = document.querySelector(".chatbot-window"); // Use a separate class/ID for the window container if needed, script assumes structure
// Actually, I need to check the HTML structure I haven't added yet.
// I'll assume standard structure: toggler, window, close btn, chatbox, input.

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

    // Create Chat List Item
    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat-message", className);

        let chatContent = className === "chat-outgoing"
            ? `<p></p>`
            : `<div class="chat-avatar"><i class="fas fa-robot"></i></div><p></p>`;

        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
    };

    // Generate Response
    const generateResponse = (incomingChatLi) => {
        const messageElement = incomingChatLi.querySelector("p");

        // Simple Keywords Logic (Predefined)
        const msg = userMessage.toLowerCase();
        let response = "I'm not sure about that. Try asking about 'projects', 'skills', or 'contact'.";

        if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
            response = "Hello! I'm Pratham's AI assistant. How can I help you today? 😊";
        } else if (msg.includes("who are you")) {
            response = "I'm a virtual assistant built by Pratham to showcase his skills!";
        } else if (msg.includes("project") || msg.includes("work")) {
            response = "Pratham has built amazing projects like PrivyChat, BilloraX, and VIRU. Check out the 'Featured Projects' section!";
        } else if (msg.includes("skill") || msg.includes("stack")) {
            response = "Pratham is an expert in Full Stack Dev (MERN), Python, and Cybersecurity.";
        } else if (msg.includes("contact") || msg.includes("email") || msg.includes("hire")) {
            response = "You can contact Pratham via the 'Let's Connect' button or email directly.";
        } else if (msg.includes("resume") || msg.includes("cv")) {
            response = "You can download the Resume from the 'Looking for Opportunities' section.";
        }

        // Simulate Typing Delay
        setTimeout(() => {
            messageElement.textContent = response;
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    };

    // Handle Chat
    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;

        // Clear input and reset height
        chatInput.value = "";
        chatInput.style.height = inputInitHeight;

        // Append User Message
        chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
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

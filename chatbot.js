// Toggle chatbot visibility (show/hide chat window)
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

// Handle sending messages
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user-message';
        userMessageElement.textContent = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Display bot response
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot-message';
        botMessageElement.textContent = getBotReply(userMessage);
        chatMessages.appendChild(botMessageElement);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        userInput.value = '';
    }
}

// Default bot replies
function getBotReply(message) {
    const defaultReplies = {
        hello: "Hello! How can I assist you today?",
        hi: "Hi there! What can I do for you?",
        help: "Sure! Please let me know what you need help with.",
        default: "Sorry, I didn't understand that. Can you try again?"
    };

    const lowerMessage = message.toLowerCase();
    return defaultReplies[lowerMessage] || defaultReplies.default;
}

// Function to clear chat messages
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = ''; // Clears all the messages
}

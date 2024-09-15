document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim()) {
        displayUserMessage(userInput);
        simulateBotResponse(userInput);
        document.getElementById("user-input").value = ''; // Clear the input after sending
    }
});

// Add event listener for "Enter" key to send message
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        document.getElementById("send-btn").click();
    }
});

function displayUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("chat-message", "user");
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

function simulateBotResponse(userMessage) {
    const chatBox = document.getElementById("chat-box");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("chat-message", "bot");

    // Simulated AI response logic using conditional statements
    let botResponse = '';
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
        botResponse = "Sure, what do you need help with?";
    } else if (userMessage.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
    } else {
        botResponse = "I'm not sure I understand. Can you please clarify?";
    }

    botMessageDiv.textContent = botResponse;
    setTimeout(() => {
        chatBox.appendChild(botMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }, 500); // Simulate delay in bot response
}
const chatBoxLog = document.getElementById("chatbox-prompts");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-it");
const sendButtonIcon = document.getElementById("send-it-icon");
const apiKey = import.meta.env.VITE_API_KEY;

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") sendMessage();
});

function sendMessage() {
    alert("Hello!")
    console.log(apiKey)
}


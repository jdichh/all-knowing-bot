const chatBoxLog = document.getElementById("chatbox-prompts");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-it");
const sendButtonIcon = document.getElementById("send-it-icon");

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") sendMessage();
});

function sendMessage() {
    alert("Hello!")
}

const chatBoxLog = document.getElementById("chatbox-prompts");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-it");
const sendButtonIcon = document.getElementById("send-it-icon");

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") sendMessage();
});

function appendMessage(sender, message) {
  const messageDiv = document.createElement("p");
  const iconDiv = document.createElement("div");
  const icon = document.createElement("i");
  const chatDiv = document.createElement("div");

  chatDiv.classList.add("chats");
  iconDiv.classList.add("icon");
  messageDiv.classList.add(sender);
  messageDiv.innerText = message;

  if (sender == "user") {
    icon.classList.add("fa-solid", "fa-user");
    iconDiv.setAttribute("id", "user-icon");
  } else {
    icon.classList.add("fa-solid", "fa-robot");
    iconDiv.setAttribute("id", "ai-icon");
  }

  iconDiv.appendChild(icon);
  chatDiv.appendChild(iconDiv);
  chatDiv.appendChild(messageDiv);
  chatBoxLog.appendChild(chatDiv);
  chatBoxLog.scrollTo = chatBoxLog.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message == "") return;

  appendMessage("user", message);
  userInput.value = "";

  const url ="https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
      "X-RapidAPI-Host": "chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com",
    },
    body: `{
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": "${message}"
        }
      ],
      "temperature": 0.8
    }`,
  };


  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      appendMessage("ai", response.choices[0].message.content);
      sendButtonIcon.classList.add("fa-solid", "fa-paper-plane");
      sendButtonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
    })
    .catch((err) => {
      console.log(err);
      if (err.name === "TypeError") {
        appendMessage("ai", `Error: Check the console for error details.`);
        sendButtonIcon.classList.add("fa-solid", "fa-paper-plane");
        sendButtonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
      }
    });
}

// function testMessage() {
//   console.log("hello!");
// }

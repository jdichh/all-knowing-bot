require('dotenv').config();

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

const url = 'https://open-ai21.p.rapidapi.com/conversationllama';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
	},
	body: {
		messages: [
			{
				role: 'user',
				content: 'hello'
			}
		],
		web_access: false
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

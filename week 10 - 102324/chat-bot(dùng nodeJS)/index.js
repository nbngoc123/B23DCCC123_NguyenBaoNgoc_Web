const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const messagesFilePath = 'messages.json'; // File to store messages
let messages = []; // Store messages here

// Load messages from file
function loadMessages() {
  try {
    const data = fs.readFileSync(messagesFilePath, 'utf8');
    messages = JSON.parse(data);
  } catch (err) {
    // If the file doesn't exist or is invalid, start with an empty array
    messages = [];
  }
}

// Save messages to file
function saveMessages() {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
}

// Load messages on startup
loadMessages();

async function handleRequest(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const prompt = new URLSearchParams(body).get('prompt');

      messages.push({ role: "user",  content: prompt }); // Save user message
      saveMessages();

      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);

      messages.push({ role: "assistant", content: result.response.text() }); // Save assistant message
      saveMessages();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ response: result.response.text(), messages }));
    });
  } else {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
}



const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const { GoogleGenerativeAI } = require("@google/generative-ai");
const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

async function handleRequest(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const prompt = new URLSearchParams(body).get('prompt');
      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result.response.text());
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

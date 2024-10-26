const http = require('http');
const express = require('express');

const hostname = 'localhost';
const port = 3000;
const app = express();

const users = [
    { id: '1', name: 'ngoc' },
     { id: '2', name: 'nguyen' }
];

app.get('/', (req, res) => {
  
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  console.log(req.body)
  res.json(users);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

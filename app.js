const http = require('http')

const express = require('express')

const app = express();

// three args: req, res, next
app.use((req, res, next) => {
  console.log('In the middelware');
  next()
});
app.use((req, res, next) => {
  console.log('Second middleware');
  res.send('<h1>Express Sent this message</h1>')
});

const server = http.createServer(app);

server.listen(3000);
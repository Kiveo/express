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
});

const server = http.createServer(app);

server.listen(3000);
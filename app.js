const express = require('express')

const app = express();

app.use('/add', (req, res, next) => {
  console.log('middleware');
  res.send('<h1>Add path</h1>')
});

// three args: req, res, next
app.use('/', (req, res, next) => {
  console.log('Sequential middleware');
  res.send('<h1>Express Sent this message</h1>')
});

app.listen(3000)
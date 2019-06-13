const express = require('express')
const bodyParser = require('body-parser')
const app = express();

//parser mw
app.use(bodyParser.urlencoded({extended: true}))

app.use('/add', (req, res, next) => {
  console.log('middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="addName"/><button type="submit">Add Name</button></form>')
});

app.use('/product', (req, res, next) => {
  res.redirect('/')
  console.log(req.body)
})

// three args: req, res, next
app.use('/', (req, res, next) => {
  console.log('Sequential middleware');
  res.send('<h1>Express Home</h1>')
});

app.listen(3000)
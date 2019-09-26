const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

/* 
| implicit /admin from app.js
*/
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log('add-product request:', req.body)
  res.redirect('/')
})

module.exports = router;
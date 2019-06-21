const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Root Catcher MW');
  res.send('<h1>Express Home</h1>')
});

module.exports = router;
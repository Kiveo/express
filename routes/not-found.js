const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

router.use((req, res, next) => {
  // render('viewName', data)
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: ''
  })
})

module.exports = router;
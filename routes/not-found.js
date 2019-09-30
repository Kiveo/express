const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  // render('viewName', data)
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: ''
  })
})

module.exports = router;
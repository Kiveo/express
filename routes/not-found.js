const express = require('express');
const router = express.Router();

const errorsController = require('../controllers/errors.js');

router.use(errorsController.getNotFound)

module.exports = router;
const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookcontroller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', bookController.index);

module.exports = router; 

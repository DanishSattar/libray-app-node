const express = require('express');
const router = express.Router();

const userController = require('../controllers/usercontroller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', userController.index);

module.exports = router;

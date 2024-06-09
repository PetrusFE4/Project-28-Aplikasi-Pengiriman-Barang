const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

//register
router.post('/register', adminController.register);

module.exports = router;
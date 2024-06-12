const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const adminController = require('../controller/adminController');
const authToken = require('../middleware/authentications')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout',  authToken, authController.logout);
router.post('/registerAdmin', adminController.registerAdmin);

module.exports = router;
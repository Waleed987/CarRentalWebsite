const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth-controllers');

router.route('/signup').post(authController.registerUser);

router.route('/login').post(authController.getLogin);


module.exports = router;
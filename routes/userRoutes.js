const router = require('express').Router();

/**
 * @inheritdoc
 * all user related route handler
 */

const authController = require('../controller/AuthController');
router.post('/register',authController.register);
router.post('/login',authController.login);

module.exports = router;
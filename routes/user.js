const router = require('express').Router();


const authController = require('../controller/AuthController');
router.post('/register',authController.register);

module.exports = router;
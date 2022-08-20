const router = require('express').Router();

/**
 * @inheritdoc
 * Users authentication
 */
const usersAuth = require('./user');
router.use('/users',usersAuth);


module.exports = router;
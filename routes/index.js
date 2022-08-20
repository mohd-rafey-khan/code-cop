const router = require('express').Router();

/**
 * @inheritdoc
 */

router.use('/users',require('./userRoutes'));

module.exports = router;
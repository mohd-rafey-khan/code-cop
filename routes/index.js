const router = require('express').Router();

const auth = require('../controller/Auth');

router.use('/api/users/register',auth.register);


module.exports = router;
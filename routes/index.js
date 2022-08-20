const router = require('express').Router();

const auth = require('../controller/Auth');

router.use('/api/users/register',auth.register);
router.post('/api/users/login',auth.login);


module.exports = router;
const {Router} = require('express');
const router   = Router();

const user     = require('../controllers/user');
const utils    = require('../controllers/utils');

router.post('/login',    user.login);
router.post('/register', user.register);
router.get('/profile',   utils.guard('user'), user.profile);

module.exports = router;
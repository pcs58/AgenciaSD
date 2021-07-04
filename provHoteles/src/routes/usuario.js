const {Router} = require('express');
const router   = Router();

const user     = require('../controllers/usuario');
const utils    = require('../controllers/utils');

router.post('/entrar',    user.login);
router.post('/registrar', user.register);
router.get('/perfil',   utils.guard('usuario'), user.profile);

module.exports = router;
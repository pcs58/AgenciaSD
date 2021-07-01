const {Router}  = require('express');
const router    = Router(); // inicializamos enrutador

var usuario   = require('../controllers/usuario');

router.post('/entrar', usuario.login);
router.post('/registrar', usuario.register);
router.get('/perfil/:idUsuario', usuario.profile);



module.exports = router
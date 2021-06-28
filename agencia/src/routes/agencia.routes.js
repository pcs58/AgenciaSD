const {Router}  = require('express');
const router    = Router(); // inicializamos enrutador

var agencia   = require('../controllers/agencia');

router.get    ('/:coleccion'   , agencia.get);  
router.get    ('/:coleccion/:ubicacion'   , agencia.getByLocation);  
router.post   ('/'   , agencia.post); 
router.put    ('/:id', agencia.updateById);
router.delete ('/:id', agencia.deleteById);
module.exports = router;
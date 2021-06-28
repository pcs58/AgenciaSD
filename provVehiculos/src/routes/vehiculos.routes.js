const {Router}  = require('express');
const router    = Router(); // inicializamos enrutador

var vehiculos   = require('../controllers/vehiculos');

router.get    ('/'   , vehiculos.get);  
router.get    ('/:location'   , vehiculos.getByLocation);  
router.post   ('/'   , vehiculos.post); 
router.put    ('/:id', vehiculos.updateById);
router.delete ('/:id', vehiculos.deleteById);
module.exports = router;
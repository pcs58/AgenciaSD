const {Router} = require('express');
const router   = Router();

var vuelos   = require('../controllers/Vuelos');
const utils   = require('../controllers/utils');

router.get    ('/'   , vuelos.get);  
router.get    ('/:id'   , vuelos.getById);  
router.get    ('/ubicacion/:location', vuelos.getByLocation);
router.get    ('/:id/:fechaInicio/:fechaFin', vuelos.ocupado);
router.post   ('/'   , utils.guard('proveedor'), vuelos.post); 
router.put    ('/:id', utils.guard('proveedor'), vuelos.updateById);
router.delete ('/:id', utils.guard('proveedor'), vuelos.deleteById);

module.exports = router;

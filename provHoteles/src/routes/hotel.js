const {Router} = require('express');
const router   = Router();

var hotel   = require('../controllers/hotel');
const utils   = require('../controllers/utils');

router.get    ('/'   , hotel.get);  
router.get    ('/:id'   , hotel.getById);  
router.get    ('/ubicacion/:location', hotel.getByLocation);
router.get    ('/:id/:fechaInicio/:fechaFin', hotel.ocupado);
router.post   ('/'   , utils.guard('proveedor'), hotel.post); 
router.put    ('/:id', utils.guard('proveedor'), hotel.updateById);
router.delete ('/:id', utils.guard('proveedor'), hotel.deleteById);

module.exports = router;

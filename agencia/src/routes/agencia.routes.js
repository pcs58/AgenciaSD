const {Router}  = require('express');
const router    = Router(); // inicializamos enrutador

var agencia   = require('../controllers/agencia');
const utils   = require('../controllers/utils');
const coleccionesValidas = ["vehiculos","vuelos","hoteles"];

router.get    ('/:coleccion'            , utils.verifyUrl(coleccionesValidas), agencia.getCollection);  
router.get    ('/:coleccion/:ubicacion' , utils.verifyUrl(coleccionesValidas), agencia.getCollectionByLocation);  
router.get    ('/:coleccion/:ubicacion/:fechaEntrada/:fechaSalida/:plazas' , utils.verifyUrl(coleccionesValidas), agencia.getCollectionByVehiculo);  
router.post   ('/:coleccion'            , utils.guard('proveedor') , utils.verifyUrl(coleccionesValidas), agencia.postCollection); 
router.put    ('/:coleccion/:id'        , utils.guard('proveedor') , utils.verifyUrl(coleccionesValidas), agencia.updateCollectionById);
router.delete ('/:coleccion/:id'        , utils.guard('proveedor') , utils.verifyUrl(coleccionesValidas), agencia.deleteCollectionById);
module.exports = router;
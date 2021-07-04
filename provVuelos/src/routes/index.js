const {Router}   = require('express');
const router     = Router();

router.get('/',  (req, res) => {
    res.json({
        status:  'API online',
        message: 'Bienvenido a la API periódico digital'
    });
});

module.exports   = router;
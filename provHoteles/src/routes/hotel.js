const {Router} = require('express');
const router   = Router();

var articles   = require('../controllers/article');
const utils   = require('../controllers/utils');

router.get    ('/'   , articles.get);  
router.get    ('/:id', articles.getById);
router.post   ('/'   , utils.guard('redactor'), articles.create); 
router.put    ('/:id', utils.guard('redactor'), utils.verifyUserId('Article'), articles.updateById);
router.delete ('/:id', utils.guard('redactor'), utils.verifyUserId('Article'), articles.deleteById);

module.exports = router;

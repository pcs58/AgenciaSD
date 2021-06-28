const {Router}  = require('express');
const router    = Router(); // inicializamos enrutador

var comments    = require('../controllers/comment');
const utils     = require('../controllers/utils');

// ROUTING COMMENTS
router.get    ('/:idArticle',      comments.get);
router.post   ('/:idArticle',      utils.guard('user'), comments.create);
router.put    ('/:idArticle/:_id', utils.guard('user'), utils.verifyUserId('Comment'), comments.updateById);
router.delete ('/:idArticle/:_id', utils.guard('user'), utils.verifyUserId('Comment'), comments.deleteById);

module.exports = router;
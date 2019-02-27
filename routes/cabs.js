var express = require('express');
var router = express.Router();
var cabsCtrl = require('../controllers/cabs');

/* GET users listing. */
router.get('/', cabsCtrl.index);
router.get('/new', cabsCtrl.new);
router.get('/:id', cabsCtrl.show);
router.post('/', cabsCtrl.create);
router.get('/:id/delete', cabsCtrl.delete);
// router.delete('/:id', cabsCtrl.removeDish);
// router.post('/:id', cabsCtrl.update);
// router.get('/:id/edit', cabsCtrl.edit);



module.exports = router;


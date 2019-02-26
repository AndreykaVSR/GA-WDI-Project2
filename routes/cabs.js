var express = require('express');
var router = express.Router();
var cabsCtrl = require('../controllers/cabs');

/* GET users listing. */
router.get('/', cabsCtrl.index);
router.get('/new', cabsCtrl.new);
router.get('/:id', cabsCtrl.show);
router.post('/', cabsCtrl.create);
// router.delete('/:id/delete', cabsCtrl.delete);
// router.post('/:id/', cabsCtrl.update);



module.exports = router;

// router.get('/', dishesCtrl.index);
// router.get('/new', dishesCtrl.new);
// router.get('/:id', dishesCtrl.show);
// router.post('/', dishesCtrl.create);
// router.get('/:id/edit', dishesCtrl.edit);
// router.get('/:id/delete', dishesCtrl.delete);
// // router.post('/:id', dishesCtrl.update);
// router.delete('/:id', dishesCtrl.removeDish);

var express = require('express');
var router = express.Router();
var driversCtrl = require('../controllers/drivers');

/* GET users listing. */
router.get('/', driversCtrl.index);
router.get('/new', driversCtrl.new);
router.get('/:id', driversCtrl.show);
router.post('/', driversCtrl.create);
router.delete('/:id', driversCtrl.delete);
// router.delete('/:id', driversCtrl.removeDriver);
// router.post('/:id', driversCtrl.update);
// router.get('/:id/edit', driversCtrl.edit);



module.exports = router;


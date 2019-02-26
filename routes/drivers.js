var express = require('express');
var router = express.Router();
var driversCtrl = require('../controllers/drivers');

/* GET users listing. */
router.get('/', driversCtrl.index);
router.get('/new', driversCtrl.new);
router.get('/:id', driversCtrl.show);
// router.post('/', driversCtrl.create);
// router.post('/:id', driversCtrl.delete);
// router.post('/:id', driversCtrl.update);


module.exports = router;

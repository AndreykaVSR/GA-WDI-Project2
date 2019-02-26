var express = require('express');
var router = express.Router();
var cabsCtrl = require('../controllers/cabs');

/* GET users listing. */
router.get('/', cabsCtrl.index);
router.get('/new', cabsCtrl.new);
router.get('/:id', cabsCtrl.show);
// router.post('/', cabsCtrl.create);
// router.post('/:id', cabsCtrl.delete);
// router.post('/:id', cabsCtrl.update);



// router.get('cabs/index', function(req, res, next) {
//   res.send('index', { title: 'All Cabs' });
// });

module.exports = router;

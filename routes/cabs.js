var express = require('express');
var router = express.Router();
var cabsCtrl = require('../controllers/cabs');

/* GET users listing. */
router.get('/', cabsCtrl.index);
router.get('/new', isLoggedIn, cabsCtrl.new);
router.get('/:id', cabsCtrl.show);
router.post('/', isLoggedIn, cabsCtrl.create);
router.delete('/:id', isLoggedIn, cabsCtrl.delete);
// router.delete('/:id', cabsCtrl.removeDish);
// router.post('/:id', cabsCtrl.update);
// router.get('/:id/edit', cabsCtrl.edit);


// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;


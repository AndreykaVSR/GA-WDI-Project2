var express = require('express');
var router = express.Router();
var driversCtrl = require('../controllers/drivers');

/* GET users listing. */
router.get('/', driversCtrl.index);
router.get('/new', isLoggedIn, driversCtrl.new);
router.get('/:id', driversCtrl.show);
router.post('/', isLoggedIn, driversCtrl.create);
router.delete('/:id', isLoggedIn, driversCtrl.delete);
// router.delete('/:id', driversCtrl.removeDriver);
// router.post('/:id', driversCtrl.update);
// router.get('/:id/edit', driversCtrl.edit);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;


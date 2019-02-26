var Cab = require('../models/cab');

module.exports = {
    new: newCab,
    create,
    index,
    show
};

function show(req, res) {
    // console.log('I see you');
      Cab.findById(req.params.id, function(err, cab) {
      // console.log(cabs);
      res.render('./cabs/show', { title: 'Cabs',  cab})
    });
  }

function index(req, res) {
    Cab.find({}).exec(function(err, cabs) {
      res.render('cabs/index', { cabs });
    });
  };

//   function create(req, res) {
//     console.log('hi' + req.params.id);
//   Cab.findById(req.params.id, function(err, cab) {
//     console.log('cab ' + cab);
//     cab.push(req.body);
//     cab.save(function(err) {
//     res.redirect('cabs/index');
//     });
//   });
// }

// res.redirect(`/cabs/${cab._id}`);

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var cab = new Cab(req.body);
    console.log(cab);
    cab.save(function(err) {
      // one way to handle errors
      if (err) return res.render('cabs/new');
      console.log(cab + 'cab');
      res.redirect('/cabs/');
    });
};

function newCab(req, res) {
    res.render('cabs/new');
};
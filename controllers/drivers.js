var Driver = require('../models/driver');

module.exports = {
    new: newDriver,
    create,
    index,
    show
};


function show(req, res) {
    // console.log('I see you');
      Driver.findById(req.params.id, function(err, driver) {
      // console.log(cabs);
      res.render('./drivers/show', { title: 'Drivers',  driver})
    });
  }

function index(req, res) {
    Driver.find({}).exec(function(err, drivers) {
      res.render('drivers/index', { drivers });
    });
  };

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var driver = new Driver(req.body);
    driver.save(function(err) {
      // one way to handle errors
      if (err) return res.render('drivers/new');
      // console.log(cab);
      res.redirect('/drivers');
    });
};

function newDriver(req, res) {
    res.render('drivers/new');
};
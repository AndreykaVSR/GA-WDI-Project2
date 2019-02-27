var Driver = require('../models/driver');

module.exports = {
    new: newDriver,
    create: createDriver,
    index,
    show
};

function show(req, res) {
    console.log('I see you');
    Driver.findById(req.params.id, function(err, driver) {
      console.log('Here is another' + driver);
      res.render('drivers/show', { title: 'Drivers',  driver })
    //   console.log('Here is one more', + '', + driver);
    });
  }

function index(req, res) {
    Driver.find({}).exec(function(err, drivers) {
        // console.log(drivers);
      res.render('drivers/index', { title: 'Drivers', drivers });
    });
  };

function createDriver(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var driver = new Driver(req.body);
    console.log(driver);
    // console.log(req.body);
    driver.save(function(err) {
      // one way to handle errors
      if (err) return res.render('drivers/new');
    //   console.log(driver + 'You Driver Is Here!!!');
      res.redirect('/drivers');
    });
};

function newDriver(req, res) {
    res.render('drivers/new');
    // console.log('Hello! Your Driver Is Here!!!');
    // console.log(driver);
};
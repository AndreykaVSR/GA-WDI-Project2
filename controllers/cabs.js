var Cab = require('../models/cab');

module.exports = {
    new: newCab,
    create: createCab,
    index,
    show,
    delete: deleteCab
};

function deleteCab(req, res) {
    console.log('Atmpting to delete a Cab');
    Cab.findById(req.params.id, function(err, cab) {
      res.render('cabs/show', { title: 'Delete Cab', cab});
    });
}

// function deleteCab(req, res) {
//     Cab.findById(req.params.id, function(err, cab) {
//         console.log('DONE!!!');
//         var cab_id = cab; //to redirect to /cabs/:id
//         cab.delete(function(err, cab){
//             if(err){
//                 console.log('error deleting cab')
//             } else {
//                 res.redirect('/cabs' + cab.cab);
//                     console.log('DONE AGAIN!!!');
//             }
//         });
//         });
//   };

function show(req, res) {
    // console.log('I see you');
      Cab.findById(req.params.id, function(err, cab) {
    //   console.log('Here is another' + cab);
      res.render('cabs/show', { title: 'Cabs',  cab })
    //   console.log('Here is one more', + '', + cab);
    });
  }

function index(req, res) {
    Cab.find({}).exec(function(err, cabs) {
        // console.log(cabs);
      res.render('cabs/index', { title: 'Cabs', cabs });
    });
  };

function createCab(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var cab = new Cab(req.body);
    // console.log(cab);
    // console.log(req.body);
    cab.save(function(err) {
      // one way to handle errors
      if (err) return res.render('cabs/new');
    //   console.log(cab + 'cab');
      res.redirect('/cabs');
    });
};

function newCab(req, res) {
    res.render('cabs/new');
};
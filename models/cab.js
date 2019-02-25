var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var cabSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    frameType: String,
    serialNum: Number,
    eAssist: Boolean,
    canopy: Boolean,
    rented: Boolean,
    driver: String
    
});

module.exports = mongoose.model('Cab', cabSchema);
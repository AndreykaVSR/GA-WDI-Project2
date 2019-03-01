var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var driverSchema = new Schema({
    driverFirst: String,
    driverLast: String,
    born: Date,
    DLNum: Number,
    DLExpDate: Date,
    permitNum: Number,
    permitExpDate: Date,
    googleId: String
});

module.exports = mongoose.model('Driver', driverSchema);
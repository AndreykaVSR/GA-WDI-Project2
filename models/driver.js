var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var driverSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    born: Date,
    DLNum: Number,
    DLExpDate: Number,
    permitNum: Number,
    permitExpDate: Number
});

module.exports = mongoose.model('Driver', driverSchema);
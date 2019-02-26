var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var cabSchema = new Schema({
    make: {
        type: String,
        enum: ['Main Street', 'Cycles Maximus', 'Precision', 'Coaster', 'Pedalac', 'Some China Cab']
    },
    model: {
        type: String,
        enum: ['Classic', 'Broadway', 'Boardwalk', 'Cargo', 'Custom']
    },
    year: Number,
    frameType: String,
    capacity: Number,
    serialNum: Number,
    eAssist: Boolean,
    canopy: Boolean,
    rented: Boolean,
    driver: {
        name: String,
        first: String,
        last: String,
        nickname: String
    },
    comments: [{ 
        body: String, 
        date: Date 
    }],
    dateUpdated: { 
        type: Date, 
        default: Date.now 
    }
});


module.exports = mongoose.model('Cab', cabSchema);

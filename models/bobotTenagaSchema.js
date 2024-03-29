const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

// Schema utama (parent)
const bobotSchema = new Schema({
    tglKerja: {
        type: Date,
        default: Date.now,
        get: value => moment(value).format('DD-MM-YYYY')
    },
    pointMax: {
        type: Number,
        default: 0
    },
    pointNow: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Bobot', bobotSchema);


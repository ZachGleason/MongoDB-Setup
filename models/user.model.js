const mongoose = require('mongoose');

const Students = new mongoose.Schema(
    {
    name: String,
    home_state: String,
    lucky_number: Number,
    birthday: {month: Number, day: Number, year: Number},
    }
);

const User = mongoose.model('User', Students);

module.exports = User;
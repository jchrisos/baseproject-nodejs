var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    birthDate: Date,
    acceptTerms: Boolean,
    amountOfCars: Number,
    balance: Number
});

module.exports = mongoose.model('User', userSchema);
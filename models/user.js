var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    birthDate: Date,
    acceptTerms: Boolean,
    amountOfCars: Number,
    balance: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
});

module.exports = mongoose.model('User', userSchema);
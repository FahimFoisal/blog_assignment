const mongoose = require('mongoose');


const registrationSchema = mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    UserName: {type: String, unique: true},
    Email: {type: String, unique: true},
    Password: {type: String},
    Date: {type: Date, default: Date.now()}
},{versionKey: false});

const registrationModel = mongoose.model("Users", registrationSchema);

module.exports = registrationModel;
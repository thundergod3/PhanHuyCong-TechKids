const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserShemas = new Shemas({
    name: {type: String, required: true},
    dob: {type: String, required: true},
    account: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    location: {type: String, required: true},
    gender: String
});

const UserModel = model("question", UserShemas);
module.exports = UserModel;
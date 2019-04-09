const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const ImagesSchema = new Schema({
    link: {type: String, required: true},
    view: {type: Number, required: true, default: 0},
    like: {type: Number, required: true, default: 0},
    title: {type: String, required: true},
    content: {type: String, require: true},
    author: {type: mongoose.Types.ObjectId, ref: 'User'},   
},{
    timestamps: true // createdAt, updateAt
});

const ImagesModel = model("images", ImagesSchema);
module.exports = ImagesModel;
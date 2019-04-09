const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const CommentShemas = new Schema({
    imgaeId: {type: mongoose.Types.ObjectId, ref: "Image"},
    userId: {type: mongoose.Types.ObjectId, ref: "User"},
    comment: {type: String, required: true}
}, {
    timestamps: true
});

const ContentModel = model("images", CommentShemas);
module.exports = ContentModel;
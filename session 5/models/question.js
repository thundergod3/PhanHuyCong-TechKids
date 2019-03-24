const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const QuestionSchema = new Schema({
    content: { type: String, required: true, default: 'Question'},
    yes: Number,
    no: Number,
});

const QuestionModel = model("question", QuestionSchema);
module.exports = QuestionModel;
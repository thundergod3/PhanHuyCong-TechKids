const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    content: String,
    yes: Number,
    no: Number
});

module.exports = QuestionSchema;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    question: { type: String, required: true },
    answers: {
        type: Map,
        of: String,
    },
    correctAns: {
        type: String,
    },
    category: { type: String, required: true },
    thumbnails: {
        type: Map,
        of: String
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;


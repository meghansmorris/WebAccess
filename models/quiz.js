const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    question: { type: String, required: true },
    answers: {
        type: Map,
        of: {
            type: String,
            boolean: false
        }
    },
    category: { type: String, required: true },
    thumbnails: {
        type: Map,
        of: String
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;


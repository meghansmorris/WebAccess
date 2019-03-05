const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess"
);

const quizSeed = [
  {
    question: "What is the correct way to organize the structure of your website content?",
    answers: {
      ans1: "It doesn't matter as long as an <h1> is used at the beginning of the page layout.",
      ans2: "Use the <h1> as the primary title of the page and don't skip heading levels in your layout (e.g., go from an <h1> to <h3>)-true.",
      ans3: "Screen readers don't use heading structure to navigate content.",
    },
    correctAns: "ans2",
    category: "Understandable",
    thumbnail: ""
  },
  {
    question: "How should color be used to allow all individuals to understand and read your content?",
    answers: {
      ans1: "Color shouldn't be used as the sole method of conveying content and distinguishing visual elements-true.",
      ans2: "Color can be used to distinguish visual elements from surrounding text as long as the contrast is at least 2:1.",
      ans3: "As long as colors are high contrast, they will not affect readability."
    },
    correctAns: "ans1",
    category: "Perceivable",
    thumbnail: ""
  },

]

db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

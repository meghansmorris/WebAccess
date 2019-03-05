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
  {
    question: "What considerations for keyboard navigation should be included in an accessible web application?",
    answers: {
      ans1: "All page functionality is available using the keyboard.",
      ans2: "At least 75% page functionality is available using a keyboard, but other functionality is locked.",
      ans3: "Page functionality can be made available at timed intervals as long as it's intuitive for the user."
    },
    correctAns: "ans1",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "Why is an important consideration for form design?",
    answers: {
      ans1: "Without specific instructions for how to use the form, it isn't accessible to all users.",
      ans2: "As long as the form is navigable using the keyboard, all users can complete it.",
      ans3: "If a form isn't labeled descriptively, it might be impossible for a user to know what type of content is required in an input field."
    },
    correctAns: "ans3",
    category: "Operable",
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

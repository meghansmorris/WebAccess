const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess", { useNewUrlParser: true }
);


const cardSeed = [
  {
    question: "When organizing your website structure, how should you deal with heading tags?",
    answer: "You should use <h1> as the primary title on your page, and make sure not to skip heading levels, <h2> to <h4>, for example.",
    category: "Understandable",
    thumbnail: ""
  },
  {
    question: "When considering the use of color on your site, how should it be used?",
    answer: "Color should not be used as the only visual method of conveying information, any visual cues or actions represented by a color should also be explained in text.",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "Many people do not use a mouse to navigate the web, how can you make your site keyboard friendly?",
    answer: "Take the time to make sure all functions on your page can be accessed or operated be keyboard, for example,a page that allows users to click and drag items in a list to reorder them also includes a series of controls that allows keyboard users to move items up, down or to the beginning and end of the list.",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "When designing a form, what is an essential step to make it accessible?",
    answer: "All form fields should be meaningfully labeled with the type of content it's asking for along with weather the field is required.",
    category: "Operable",
    thumbnail: ""
  },

]

db.Card
  .deleteMany({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
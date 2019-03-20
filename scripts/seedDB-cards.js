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
    question: "Visually impaired users often use screen readers to interact with websites, what can you add to non-text content to convey it's meaning?" ,
    answer: "Adding things such as Aria labels and alt tags provides information when a person is unable to see an image or other non-text component.",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "When adding videos or audio to your site, what is an important addition to ensure that content is available to all users?",
    answer: "Adding captions to the video or transcripts of the audio will allow all users to access the information.",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "When laying out your site, if the order of the content tells a story or conveys an important meaning, how would you ensure someone who is unable to see can still get the information.",
    answer: "Making sure that the code is in the same order as the visual layout makes sure that a screen reader or other device would present the content in a logical progression.",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "Using responsive web design ensures your site will look good on various sized devices, but how does it benefit a person with a disability?",
    answer: "Responsive design allows text to reflow so a user would not have to scroll horizontally if the page was zoomed in, therefore avoiding a disruption while reading.",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "Many people do not use a mouse to navigate the web, how can you make your site keyboard friendly?",
    answer: "Take the time to make sure all functions on your page can be accessed or operated be keyboard, for example, a page that allows users to click and drag items in a list to reorder them also includes a series of controls that allows keyboard users to move items up, down or to the beginning and end of the list.",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "When designing a form, what is an essential step to make it accessible?",
    answer: "All form fields should be meaningfully labeled with the type of content it's asking for along with weather the field is required.",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "Moving features such as animations and slideshows can add flair to a web site, what is an easy way to make sure everyone can enjoy them?",
    answer: "Any information that starts automatically, lasts longer than 5 seconds, and is presented along side other content should have the ability to be paused or stopped to allow for reading or viewing at the users pace.",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "Seizures can be a very real risk when browsing the internet, how can you make sure your site is safe for all viewers?",
    answer: "Web pages should not contain anything that flashes more than three times in a one second period.",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "Embedding links is a very common practice on most pages, what should you consider when writing the text of one?",
    answer: "The purpose of the link should be apperent from the text of the link or the link text along with the surrounding content",
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
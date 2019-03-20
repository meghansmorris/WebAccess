const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess", { useNewUrlParser: true }
);


const quizSeed = [
  {
    question: "What is the correct way to organize the structure of your website content?",
    ans1: "It doesn't matter as long as an <h1> is used at the beginning of the page layout.",
    ans2: "Use the <h1> as the primary title of the page and don't skip heading levels in your layout (e.g., go from an <h1> to <h3>).",
    ans3: "Screen readers don't use heading structure to navigate content.",
    correctAns: "ans2",
    category: "Understandable",
    thumbnail: ""
  },
  {
    question: "How should color be used to allow all individuals to understand and read your content?",
    ans1: "Color shouldn't be used as the sole method of conveying content and distinguishing visual elements.",
    ans2: "Color can be used to distinguish visual elements from surrounding text as long as the contrast is at least 2:1.",
    ans3: "As long as colors are high contrast, they will not affect readability.",
    correctAns: "ans1",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "What can you add to non-text content to convey it's meaning to visually impaired users?",
    ans1: "Nothing, the meaning is just lost.",
    ans2: "Aria labels and alt tags.",
    ans3: "A paragraph length description of what is in the photo.",
    correctAns: "ans2",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "How can you make sure video and audio is accessible to all users?",
    ans1: "Add a rewind button.",
    ans2: "Make sure the sound plays very loudly.",
    ans3: "Add captions to the video or transcripts to the audio.",
    correctAns: "ans3",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "When laying out your site, what consideration should you have for visually impaired users?",
    ans1: "Make sure the code is in the same order as the visual layout, so the progression through the information makes sense even without visual cues.",
    ans2: "It doesn't matter how the page is laid out.",
    ans3: "As long as there's text on the page, it's fine.",
    correctAns: "ans1",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "How is responsive design important to a disabled person accessing your site?",
    ans1: "It makes sure your site looks nice on different screen sizes.",
    ans2: "Your pictures will be larger.",
    ans3: "If your page needs to be zoomed in, the text will reflow to prevent the user from having to scroll horizontally, potentially disrupting their reading.",
    correctAns: "ans3",
    category: "Perceivable",
    thumbnail: ""
  },
  {
    question: "What considerations for keyboard navigation should be included in an accessible web application?",
    ans1: "All page functionality is available using the keyboard.",
    ans2: "At least 75% page functionality is available using a keyboard, but other functionality is locked.",
    ans3: "Page functionality can be made available at timed intervals as long as it's intuitive for the user.",
    correctAns: "ans1",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "What is an important consideration for form design?",
    ans1: "Without specific instructions for how to use the form, it isn't accessible to all users.",
    ans2: "As long as the form is navigable using the keyboard, all users can complete it.",
    ans3: "If a form isn't labeled descriptively, it might be impossible for a user to know what type of content is required in an input field.",
    correctAns: "ans3",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "What is an important feature to add to moving infomation or pictures on your site?",
    ans1: "The ability to stop or pause the content.",
    ans2: "An infinite loop of the content.",
    ans3: "A touch screen swipe feature.",
    correctAns: "ans1",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "How can you make sure your site is safe to view for users who have a risk of seizures?",
    ans1: "Make your site monochromatic.",
    ans2: "Make sure you do not have anything that flashes more than three times in a one second period.",
    ans3: "Put a giant warning sign at the top of the page.",
    correctAns: "ans2",
    category: "Operable",
    thumbnail: ""
  },
  {
    question: "When creating a link for your page, how should it be written?",
    ans1: "The text of the link, or the link along with the surrounding content, should clearly convey it's purpose.",
    ans2: "You can just use the work 'link'.",
    ans3: "Just make sure the link is highlighted.",
    correctAns: "ans1",
    category: "Operable",
    thumbnail: ""
  },

]

db.Quiz
  .deleteMany({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

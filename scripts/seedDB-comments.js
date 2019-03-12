const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess", { useNewUrlParser: true }
);


const commentSeed = [
  {
    name: "Jane",
    headline: "headline",
    commentText: "this is the text",
  },
  {
    name: "Steve",
    headline: "second sample headline",
    commentText: "text for second comment"
  }

]

db.Comment
  .deleteMany({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
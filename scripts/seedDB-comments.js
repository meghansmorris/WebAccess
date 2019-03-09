const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess", { useNewUrlParser: true }
);


const commentSeed = [
  {
    _headlineId: "sample",
    commentText: "this is the text",
  },

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
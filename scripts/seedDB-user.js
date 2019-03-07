const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/webaccess", { useNewUrlParser: true }
);

const userSeed = [
  {
    name: "Meghan",
    highScore: "sampleScore",
  },

]

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
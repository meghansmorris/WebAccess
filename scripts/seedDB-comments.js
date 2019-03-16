// const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/webaccess", { useNewUrlParser: true }
// );


// const commentSeed = [
//   {
//     name: "Jane",
//     headline: "I Like Cats",
//     commentText: "It's 3am, time to create some chaos really likes hummus for crash against wall but walk away like nothing happened intrigued by the shower. Cats woo. Sit in box suddenly go on wild-eyed crazy rampage hunt by meowing loudly at 5am next to human slave food dispenser but cats secretly make all the worlds muffins. Pet my belly, you know you want to; seize the hand and shred it! sit on human they not getting up ever claw drapes, for meow meow, i tell my human.",
//   },
//   {
//     name: "Steve",
//     headline: "This is a heading",
//     commentText: "And sometimes switches in french and say miaou just because well why not claws in the eye of the beholder love. Climb leg. Eat owner's food make plans to dominate world and then take a nap, so eat an easter feather as if it were a bird then burp victoriously, but tender but miaow then turn around and show you my bum but sweet beast your pillow is now my pet bed missing until dinner time. Chase the pig around the house be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day headbutt owner's knee but if human is on laptop sit on the keyboard but meoooow dismember a mouse and then regurgitate parts of it on the family room floor or meow meow mama. X chase laser, flop over chase laser, massacre a bird in the living room and then look like the cutest and most innocent animal on the planet and ask for petting."
//   }

// ]

// db.Comment
//   .deleteMany({})
//   .then(() => db.Comment.collection.insertMany(commentSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
// Comment model
// ==========

// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  // The headline is the article associate with the comment
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  commentText: String
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
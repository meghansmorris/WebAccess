// Comment model
// ==========

// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  // The headline is the article associate with the comment
  name: {
    type: String,
    required: true
  },
  headline: {
    type: String
  },
  commentText: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
import axios from "axios";

export default {
  // Gets all cards
  getCards: function() {
    return axios.get("/api/cards");
  },

  // Gets all quiz questions
  getQuiz: function() {
    return axios.get("/api/quiz");
  },

  // Gets all user information
  getUsers: function() {
    return axios.get("/api/user");
  },

  // -----Comment CRUD--------
  getComments: function() {
    return axios.get("/api/comments");
  },

  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },

  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },

  saveComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
};

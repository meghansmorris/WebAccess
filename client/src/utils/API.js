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

  // Gets all quiz questions
  getUsers: function() {
    return axios.get("/api/user");
  },

  // Gets all quiz questions
  getComments: function() {
    return axios.get("/api/comments");
  }
};

import axios from "axios";

export default {
  // Gets all cards
  getCards: function() {
    return axios.get("/api/cards");
  },

  // Gets all quiz questions
  getQuiz: function() {
    return axios.get("/api/quiz");
  }
};
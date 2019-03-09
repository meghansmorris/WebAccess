const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Quiz.find({})
        .then(dbQuiz => res.json(dbQuiz))
        .catch(err => res.status(422).json(err))
    }
}
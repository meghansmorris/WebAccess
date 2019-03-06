const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Card.find({})
        .then(dbCard => res.json(dbCard))
        .catch(err => res.status(422).json(err))
    }
}
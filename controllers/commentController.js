const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Comment.find({})
        .then(dbComment => res.json(dbComment))
        .catch(err => res.status(422).json(err))
    }
}
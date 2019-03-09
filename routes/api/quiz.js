const router = require("express").Router();
const quizController = require("../../controllers/quizController");

router.route("/")
    .get(quizController.findAll);



module.exports = router;
const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

router.route("/")
    .get(flashcardController.findAll);



module.exports = router;
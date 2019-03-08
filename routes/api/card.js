const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

router.route("/cards")
    .get(flashcardController.findAll);



module.exports = router;
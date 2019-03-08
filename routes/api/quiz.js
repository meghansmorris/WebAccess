const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

router.route("/api/cards")
    .get(flashcardController.findAll);



module.exports = router;
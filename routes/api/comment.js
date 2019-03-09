const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.route("/")
    .get(commentController.findAll);



module.exports = router;
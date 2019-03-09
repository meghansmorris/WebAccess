const router = require("express").Router();
const cardRoutes = require("./card");
const quizRoutes = require("./quiz")

// Card routes
router.use("/cards", cardRoutes);

// Quiz routes
router.use("/quiz", quizRoutes);

module.exports = router;
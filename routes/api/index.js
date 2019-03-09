const router = require("express").Router();
const cardRoutes = require("./card");
const quizRoutes = require("./quiz")
const userRoutes = require("./user")
const commentsRoutes = require("./comment")

// Card routes
router.use("/cards", cardRoutes);

// Quiz routes
router.use("/quiz", quizRoutes);

// User routes
router.use("/user", userRoutes);

// Comments routes
router.use("/comments", commentsRoutes);

module.exports = router;
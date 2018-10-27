const router = require("express").Router();
const articleRoutes = require("./articles");

// Articles routes
router.use("/books", articleRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();
const basicAuth = require("../middleware/authMiddleware");


router.get("/dashboard", basicAuth, (req, res) => {
  res.json({ message: "Welcome to protected dashboard" });
});

module.exports = router;

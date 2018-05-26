const express = require("express");
const router = express.Router();

// @route   GET Request to api/profile/test
// @desc    Tests Profile route
// @access  Public 
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;

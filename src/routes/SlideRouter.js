const express = require("express");
const SlideController = require("../app/controllers/SlideController");
const router = express.Router();

// [get, push,delete,path,put]
router.post("/newslides", SlideController.newSlide);
router.get("/getslides", SlideController.getSlide);

module.exports = router;

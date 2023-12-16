const express = require("express");
const CategoryController = require("../app/controllers/CategoryController");
const router = express.Router();

// [get, push,delete,path,put]
router.get("", CategoryController.selectCategory);

module.exports = router;

const express = require("express");
const UserController = require("../app/controllers/UserController");
const router = express.Router();

// [get, push,delete,path,put]
router.post("/login", UserController.login);
router.post("/signup", UserController.createAccount);

module.exports = router;

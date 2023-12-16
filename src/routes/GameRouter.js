const express = require("express");
const GameController = require("../app/controllers/GameController");
const router = express.Router();

// [get, push,delete,path,put]
router.post("/newgame", GameController.createGame);

module.exports = router;

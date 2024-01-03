const express = require("express");
const GameController = require("../app/controllers/GameController");
const router = express.Router();

// [get, push,delete,path,put]
router.post("/newgame", GameController.createGame);
router.get("/getgame", GameController.getGame);
router.put("/updategame", GameController.updateGame);

module.exports = router;

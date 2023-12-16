const gameModel = require("../models/gameModel");

class GameController {
  //[Post] category
  async createGame(req, res, nex) {
    console.log(req.body);
  }
}

module.exports = new GameController();

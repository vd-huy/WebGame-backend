const gameModel = require("../models/gameModel");

class GameController {
  //[Post] category
  async createGame(req, res, nex) {
    console.log(req.body);

    const findNameGame = await gameModel.findOne({
      nameGame: req.body.nameGame,
    });

    if (findNameGame) {
      res.send({ message: "Game is already register", alert: false });
    } else {
      const data = gameModel(req.body);
      const save = data.save();

      res.send({ message: "Game have added", alert: true });
    }
  }
}

module.exports = new GameController();

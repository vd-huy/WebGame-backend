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

  //[GET]
  async getGame(req, res, next) {
    const dataGame = await gameModel.find({});

    res.send(JSON.stringify(dataGame));
  }

  //[PUT]

  async updateGame(req, res, next) {
    console.log(req.body);

    const dataUpdate = await gameModel
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.send({ message: "Update Complete", alert: true });
      })
      .catch(next);
  }
}

module.exports = new GameController();

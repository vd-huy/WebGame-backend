const UserRouter = require("./UserRouter");
const CategoryRouter = require("./CategoryRouter");
const GameController = require("./GameRouter");

function route(app) {
  app.use("/game", GameController);
  app.use("/category", CategoryRouter);
  app.use("/user", UserRouter);
}

module.exports = route;

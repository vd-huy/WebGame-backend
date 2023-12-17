const UserRouter = require("./UserRouter");
const CategoryRouter = require("./CategoryRouter");
const GameRouter = require("./GameRouter");
const SlideRouter = require("./SlideRouter");

function route(app) {
  app.use("/game", GameRouter);
  app.use("/category", CategoryRouter);
  app.use("/user", UserRouter);
  app.use("/slide", SlideRouter);
}

module.exports = route;

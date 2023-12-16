const UserRouter = require("./UserRouter");
const CategoryRouter = require("./CategoryRouter");

function route(app) {
  app.use("/category", CategoryRouter);
  app.use("/user", UserRouter);
}

module.exports = route;

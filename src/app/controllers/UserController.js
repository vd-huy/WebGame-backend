const userModel = require("../models/userModel");

class UserController {
  //[Post] /signup/
  async createAccount(req, res, next) {
    console.log(req.body);

    const { email } = req.body;
    const findEmail = await userModel.findOne({ email: email });

    if (findEmail) {
      res.send({ message: "Email is already register", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();

      res.send({ message: "Successfully sign up", alert: true });
    }
  }

  // [Post] /login
  async login(req, res, next) {
    console.log(req.body);

    const { email, password } = req.body;

    const checkLogin = await userModel.findOne({
      email: email,
      password: password,
    });

    console.log(checkLogin);
    if (checkLogin) {
      const dataSend = {
        id: checkLogin._id,
        email: checkLogin.email,
        password: checkLogin.password,
        username: checkLogin.userName,
        role: checkLogin.role,
      };
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({ message: "Email or Password not correct", alert: false });
    }
  }
}

module.exports = new UserController();

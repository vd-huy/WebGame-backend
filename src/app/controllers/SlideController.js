const slideModel = require("../models/slideModel");

class SlideController {
  //[Post] /slide/newslides
  async newSlide(req, res, next) {
    console.log(req.body);

    const data = slideModel(req.body);
    const save = data.save();

    res.send({ message: "Add slides", alert: true });
  }

  //[Get] /slide/getslides
  async getSlide(req, res, next) {
    const data = await slideModel.find({});
    res.send(JSON.stringify(data));
  }
}

module.exports = new SlideController();

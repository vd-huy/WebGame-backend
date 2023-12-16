const categoryModel = require("../models/categoryModel");

class CategoryController {
  //[Get] category
  async selectCategory(req, res, nex) {
    const data = await categoryModel.find({});
    res.send(JSON.stringify(data));
  }
}

module.exports = new CategoryController();

const { Photo } = require("../models");
require("dotenv").config();

module.exports = {
  async savePhoto({ body, params }, res) {
    try {
      const photoSave = await Photo.create({
        photo: body.convertedImage,
        userId: params.userId,
      });

      return res.status(200).json({ status: "success" });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        msg: `Error saving Photo: ${err.message}`,
      });
    }
  },

  async showPhotos(req, res) {
    try {
      const photos = await Photo.find();
      console.log(photos); //working
      return res.status(200).json({ status: "success", photos });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        msg: `Error retrieving Photo: ${err.message}`,
      });
    }
  },
};

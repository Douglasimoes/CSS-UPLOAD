const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  image: { type: Buffer, required: true },
  // Campo que armazena o tipo de conteúdo da imagem
  contentType: { type: String, required: true }
});

module.exports = mongoose.model("Picture", PictureSchema);


const express = require("express");
const router = express.Router();
const pictureController = require("../controllers/PictureController");

// Rota para excluir a imagem por ID
router.delete("/images/:id", pictureController.delete);

module.exports = router;
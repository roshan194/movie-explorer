const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  imdbID: { type: String, required: true, unique: true },
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  Poster: { type: String, required: true },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
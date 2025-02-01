const express = require("express");
const Favorite = require("../models/Favorite");
const router = express.Router();

// Add a movie to favorites
router.post("/", async (req, res) => {
  try {
    const { imdbID, Title, Year, Poster } = req.body;
    const favorite = new Favorite({ imdbID, Title, Year, Poster });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remove a movie from favorites
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.findOneAndDelete({ imdbID: id });
    res.status(200).json({ message: "Favorite removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all favorites
router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const favoritesRouter = require("./routes/favorites");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/api/favorites", favoritesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
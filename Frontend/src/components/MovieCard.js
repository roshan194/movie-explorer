import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axios.delete(`http://localhost:3002/api/favorites/${movie.imdbID}`);
      } else {
        await axios.post("http://localhost:3002/api/favorites", {
          imdbID: movie.imdbID,
          Title: movie.Title,
          Year: movie.Year,
          Poster: movie.Poster,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="details-button">
          Details
        </Link>
        <button onClick={toggleFavorite} className="favorite-button">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorite movies from the backend
  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/favorites");
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Remove a movie from favorites
  const removeFromFavorites = async (imdbID) => {
    try {
      await axios.delete(`http://localhost:3002/api/favorites/${imdbID}`);
      // Update the favorites list after removal
      fetchFavorites();
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies found.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="favorite-movie">
              <MovieCard movie={movie} showFavoriteButton={false} />
              <button
                onClick={() => removeFromFavorites(movie.imdbID)}
                className="remove-favorite-button"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
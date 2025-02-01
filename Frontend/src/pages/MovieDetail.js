import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=5837c8c2`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h1>{movie.Title}</h1>
        <p className="movie-plot">{movie.Plot}</p>
        <div className="movie-meta">
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
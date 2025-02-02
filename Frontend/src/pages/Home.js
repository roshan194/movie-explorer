import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch random movies on component mount
  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const randomTerms = ["action", "comedy", "drama", "horror", "sci-fi"];
        const randomTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)];
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${randomTerm}&apikey=5837c8c2`
        );
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching random movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMovies();
  }, []);

  // Handle search functionality
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=5837c8c2`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Redirect to Favorites page
  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="home">
      <h1>Movie Explorer</h1>
      <p>Search for a movie...</p>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <button onClick={goToFavorites} className="view-favorites-button">
          View Favorites
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
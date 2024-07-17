import React, { useEffect, useState } from "react";
import "../Movies/Movies.css";
import fetchMovies from "../Api/Api";
export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Database Movies List </h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.movie}</h2>
            <p>Rating: {movie.rating}</p>
            <a href={movie.imdb_url} target="_blank" rel="noreferrer" >
              View 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

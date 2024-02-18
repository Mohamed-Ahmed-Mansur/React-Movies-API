import React, { useState, useEffect } from 'react';
import Movie from './movie';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = () => {
  const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(null);
  const favoriteCount = useSelector(state => state.counter.counter);

  useEffect(() => {
    console.log("Movies componentDidMount");
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const moviesData = data.results.map(movie => ({
          title: movie.title,
          poster: movie.poster_path,
          date: movie.release_date
        }));
        setMovies(moviesData);
        setFlag(1);
      });
  }, []);

  console.log("Movies rendered");
  console.log(flag);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap'}}>
      <div style={{ position: 'sticky', top: '10px', left: '10px', color: 'red', fontSize: '24px' }}>
        <Link to="/favmovies" style={{ color: 'red' }}>
          <i className="fas fa-heart" style={{ cursor: 'pointer' }}></i>
        </Link>
        <span>{favoriteCount}</span>
      </div>
      {flag ? <Movie path={imagePath}>{movies}</Movie> : <p>Loading.....</p>}
    </div>
  );
};

export default Movies;

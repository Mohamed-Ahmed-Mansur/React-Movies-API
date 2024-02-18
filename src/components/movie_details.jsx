import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { title, poster } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w200/";

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ marginBottom: '20px' }}>Movie Details</h2>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Movie title: {title}</p>
        <img src={imagePath + poster} alt="Movie" style={{ width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
        <div style={{ width: '50%', marginLeft: '25%' }}>
          <b>Description</b><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aliquid animi deserunt, odit quo nobis iusto amet doloribus! Optio soluta deleniti quisquam debitis maiores, consequatur accusantium culpa alias minus ipsam!</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

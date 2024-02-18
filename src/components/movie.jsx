/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/slices/counter';
import { pushItem, removeItem } from '../redux/slices/fav';
import Swal from 'sweetalert2';

const Movie = (props) => {
  // const counter = useSelector(state => state.counter.counter);
  const favorite = useSelector(state => state.favorite.favorite);
  const dispatch = useDispatch();
  let favColor = 'black';

  function handleChange(e){
    if(e.target.style.color === 'red') {
      e.target.style.color = 'black';
      dispatch(decrementCounter());
      dispatch(removeItem(e.target.title))
    }else {
      if (!favorite.includes(e.target.title)) {
        e.target.style.color = 'red';
        dispatch(incrementCounter());
        dispatch(pushItem(e.target.title))
        Swal.fire({
          title: "Good job!",
          text: "You added this movie to your favorites",
          icon: "success"
        });
      } else {
        Swal.fire("You have already been add this movie");
      }
    }
  }

  useEffect(() => {
    console.log('Movie Component did mount');
  }, []);
    
  console.log('Movie rendered');
  // console.log(props);
  // console.log(counter)
  // console.log(favorite)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
      {props.children.map(movie => {
        return (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '25%',  // Set the width of the first div
            border: '2px solid #3498db',
            borderRadius: '10px',
            margin: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#ecf0f1',
            padding: '20px',
            fontSize: '16pt'
          }}>
            <Link to={{
              pathname: `/movie/${movie.title + movie.poster}`,
              state: {movie: movie}
            }} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <p><b>Title:</b> {movie.title}</p>
              <p><img src={props.path + movie.poster} alt="Movie" style={{ width: '100%', margin: 'auto' }} /></p>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p><b>Release year:</b> {movie.date.slice(0, 4)}</p>
              <i className="fas fa-heart" style={{ marginRight: '5px', cursor: 'pointer', color: favColor }} 
              title={movie.title + "," + movie.poster + "," + movie.date.slice(0, 4)} onClick={handleChange}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;

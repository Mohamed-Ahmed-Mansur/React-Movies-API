/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useApi } from '../provider/apiContext';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';

const Favorite = () => {
    const favorite = useSelector(state => state.favorite.favorite);
    // const { apiData, fetchData } = useApi();
    const imagePath = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        console.log('Movie Component did mount');
        // fetchData()
    }, []);
    
    console.log('Movie rendered');
    // console.log(apiData.results);
    // console.log(props);
    console.log(favorite)

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Your List of Favorite Movies</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
            {favorite.map(movie => {
                const [title, poster, date] = movie.split(',')
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
                        pathname: `/movie/${title + poster}`,
                        }} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <p><b>Title:</b> {title}</p>
                        <p><img src={imagePath + poster} alt="Movie" style={{ width: '100%', margin: 'auto' }} /></p>
                        </Link>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p><b>Release year:</b> {date.slice(0, 4)}</p>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
};

export default Favorite;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Movies from './components/movies';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Series from './components/series';
import TVShows from './components/tv_shows';

import Not from './components/notFound';
import MovieDetails from './components/movie_details.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ApiProvider } from './provider/apiContext.js';
import Favorite from './components/fav-movies.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <>
      <ApiProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/movies' element={<Movies />}></Route>
              <Route path='/favmovies' element={<Favorite />}></Route>
              <Route path='/movie/:title/:poster' element={<MovieDetails />}></Route>
              <Route path='/series' element={<Series />}></Route>
              <Route path='/tv_shows' element={<TVShows />}></Route>
              <Route path='*' element={<Not />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    </>
    // <Slider />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

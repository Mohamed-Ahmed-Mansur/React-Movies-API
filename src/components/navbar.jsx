import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ favoriteCount }) => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14pt'
  };

  const navItemStyle = {
    marginRight: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/movies" style={linkStyle}>
            Movies
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/series" style={linkStyle}>
            Series
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/tv_shows" style={linkStyle}>
            TV Shows
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

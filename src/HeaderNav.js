import React from 'react';
import './Header.css';
const Header = ({ cinemaInfo }) => {
  return (
    <header>
      <h1>{cinemaInfo.name}</h1>
      <div>
      <p>Rate: {cinemaInfo.rate}</p>
      <p>Address: {cinemaInfo.address}</p>
      </div>
    </header>
  );
};

export default Header;
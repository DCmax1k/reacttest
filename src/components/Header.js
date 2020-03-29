import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='header'>
      <header>
        <img
          src='https://www.dcmax1k.tk/images/Dcmax1klogo-round.png'
          alt='Logo'
          height='40px'
          width='40px'
        />
        <h1>DCmax1k</h1>
      </header>
      <Nav />
    </div>
  );
};

export default Header;

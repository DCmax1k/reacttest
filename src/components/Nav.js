import React from 'react';

const Nav = () => {
  function navMenuTog() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  }

  return (
    <div className='nav-links'>
      <ul>
        <li>Home</li>
        <li>Are you?</li>
        <li>IQ</li>
      </ul>
      <h1 className='navTogOpen' onClick={navMenuTog}>
        <div></div>
      </h1>
    </div>
  );
};

export default Nav;

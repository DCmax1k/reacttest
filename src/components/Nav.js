import React from 'react';

const Nav = () => {
  function areyouLink() {
    document.querySelector('.areyou-page').classList.add('active');
    document.querySelector('.home-page').classList.remove('active');
    document.querySelector('.iq-page').classList.remove('active');
  }

  function homeLink() {
    document.querySelector('.home-page').classList.add('active');
    document.querySelector('.areyou-page').classList.remove('active');
    document.querySelector('.iq-page').classList.remove('active');
  }

  function iqLink() {
    document.querySelector('.iq-page').classList.add('active');
    document.querySelector('.areyou-page').classList.remove('active');
    document.querySelector('.home-page').classList.remove('active');
  }

  function navMenuTog() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  }

  return (
    <div className='nav-links'>
      <ul>
        <li onClick={homeLink}>Home</li>
        <li onClick={areyouLink}>Are you?</li>
        <li onClick={iqLink}>IQ</li>
      </ul>
      <h1 className='navTogOpen' onClick={navMenuTog}>
        <div></div>
      </h1>
    </div>
  );
};

export default Nav;

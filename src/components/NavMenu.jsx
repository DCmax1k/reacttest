import React from 'react';

const NavMenu = () => {
  function areyouLink() {
    document.querySelector('.areyou-page').classList.add('active');
    document.querySelector('.home-page').classList.remove('active');
    // ALSO REMOVE THE IQ PAGE
  }

  function homeLink() {
    document.querySelector('.home-page').classList.add('active');
    document.querySelector('.areyou-page').classList.remove('active');
    // ALSO REMOVE TEH IQ PAGE
  }

  function iqLink() {
    // ADD THE IQ PAGE
    // REMOVE HOMEPAGE AND AREYOUPAGE
    alert('UNDER CONSTRUCTION!');
  }

  return (
    <div className='nav-menu'>
      <ul>
        <li onClick={homeLink}>Home</li>
        <li onClick={areyouLink}>Are you?</li>
        <li onClick={iqLink}>IQ</li>
      </ul>
    </div>
  );
};

export default NavMenu;

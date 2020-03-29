import React from 'react';

const NavMenu = () => {
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

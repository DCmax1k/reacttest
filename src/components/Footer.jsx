import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='footer'>
        <img
          src='https://www.dcmax1k.tk/images/dcmax1klogo-round.png'
          alt='Logo'
          height='16px'
          width='16px'
        />
        <footer>Copyright © 2020 Dylan Caldwell</footer>
      </div>
    );
  }
}

export default Footer;

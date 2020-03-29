import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BodyCont from './components/Body';
import AreyouBody from './components/Areyou';
import IqBody from './components/Iq';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <NavMenu />
        <div className='home-page active'>
          <Header />
          <BodyCont />
          <Footer />
        </div>
        <div className='areyou-page'>
          <Header />
          <AreyouBody />
          <Footer />
        </div>
        <div className='iq-page'>
          <Header />
          <IqBody />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

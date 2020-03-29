import React from 'react';
import './App.css';
import Header from './components/Header';
import BodyCont from './components/Body';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className='App'>
      <NavMenu />
      <div className='home-page'>
        <Header />
        <BodyCont />
        <Footer />
      </div>
    </div>
  );
}

export default App;

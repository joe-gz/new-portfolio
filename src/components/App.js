import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Intro from './Body/Intro';
import About from './Body/About'
import Experience from './Body/Experience';
import Portfolio from './Body/Projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;

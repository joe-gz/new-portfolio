import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Introduction from './Body/Introduction'
import Experience from './Body/Experience';
import Projects from './Body/Projects';
import About from './Body/About';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

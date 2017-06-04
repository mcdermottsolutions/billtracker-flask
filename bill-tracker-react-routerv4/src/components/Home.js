import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';



class Home extends Component {
  render() {
    return (
      <p>
        <Header/>
        I am the main content on the home page.
        <Footer/>
      </p>
    );
  }
}

export default Home;

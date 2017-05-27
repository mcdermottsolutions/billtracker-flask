import React, { Component } from 'react';
import {
  Browser as Router,
  Route
} from 'react-router';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bill Tracker</h2>
        </div>
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

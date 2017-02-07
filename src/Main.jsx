import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Main.css';
import Nav from './components/Nav';



class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Main.jsx</code> and save to reload.
        </p>
        <Nav />
      </div>
    );
  }
}



export default Main;

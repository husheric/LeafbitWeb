import React, { Component } from 'react';
import Homepage from './Components/Homepage';
import Marketplace from './Components/Marketplace';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Marketplace />
      </div>
    );
  }
}

export default App;
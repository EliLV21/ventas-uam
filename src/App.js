import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ventas UAM</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.handleAuth}></button>
        </p>
      </div>
    );
  }
}

export default App;

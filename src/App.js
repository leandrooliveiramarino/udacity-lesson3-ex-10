import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {};
    this.state.numCorrect = 0;
    this.state.numQuestions = 0;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game score={this.state}/>
      </div>
    );
  }
}

export default App;

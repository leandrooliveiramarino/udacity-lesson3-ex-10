import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = this.generateCombination();
  }
  
  generateCombination() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    
    return {
      value1,
      value2,
      value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
      numQuestions: 0,
      numCorrect: 0
    }
  }

  refreshState(result) {
    const newCombination = this.generateCombination();
    
	this.setState((previousState) => ({
      value1: newCombination.value1,
      value2: newCombination.value2,
      value3: newCombination.value3,
      proposedAnswer: newCombination.proposedAnswer,
      numQuestions: previousState.numQuestions + 1,
      numCorrect: previousState.numCorrect + Number(result)
    }));
  }
  
  calculateAnswer(answer) {
    var result = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer;
    this.refreshState(result === answer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.calculateAnswer(true)}>True</button>
          <button onClick={() => this.calculateAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

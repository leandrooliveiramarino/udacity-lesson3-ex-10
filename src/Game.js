import React, { Component } from 'react';
import Score from './Score';

class Game extends Component {
  
    constructor(props) {
      	super();
      	const combination = this.generateCombination();
      	this.state = props.score;
		this.state.value1 = combination.value1;
		this.state.value2 = combination.value2;
		this.state.value3 = combination.value3;
		this.state.proposedAnswer = combination.proposedAnswer;
    }
  
	render() {
      const { value1, value2, value3, proposedAnswer } = this.state;
      const score = {
        numCorrect: this.state.numCorrect,
        numQuestions: this.state.numQuestions
      };
      
      return (
            <div className="game">
              <h2>Mental Math</h2>
              <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
              </div>
              <button onClick={() => this.calculateAnswer(true)}>True</button>
              <button onClick={() => this.calculateAnswer(false)}>False</button>
              <Score score={score}/>
            </div>
		)
    }

    generateCombination = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);

        return {
          value1,
          value2,
          value3,
          proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
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

    calculateAnswer = (answer) => {
      var result = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer;
      this.refreshState(result === answer);
    }
}

export default Game;
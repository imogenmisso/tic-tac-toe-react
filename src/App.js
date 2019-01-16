import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  clicked(event) {
    console.log(event.target);
  }
  render() {
    return (
      <div id="game">
        <div id="head">
          Imogen's tic tac toe
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
          <div className="square"> </div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;

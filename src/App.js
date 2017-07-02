import React, { Component } from 'react';
import {LWWR} from "replikativ";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.increaseCounter = this.increaseCounter.bind(this);
  }
  increaseCounter() {
    const {lwwrId, userId, stage, atom} = this.props.replica;
    LWWR.setRegister(stage, userId, lwwrId, atom + 1).then(function() {
      console.info("Counter increased!");
    }, console.error);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(e) => {this.increaseCounter}}>Replicate!</button>
        <p>{this.props.replica.atom}</p>
      </div>
    );
  }
}

export default App;

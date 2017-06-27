import React, { Component } from 'react';
import {associate, hashIt, toEdn} from "replikativ";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTransaction = this.addTransaction.bind(this);
  }
  addTransaction({description, value, type}) {
    const tx = {description, value, date: new Date()}
    const {ormapId, userId, stage} = this.props.replica
    const hashed = hashIt(toEdn(tx))
    associate(stage, userId, ormapId, hashed , [["add", tx]]).then(function() {
      console.log("associated with " + JSON.stringify(tx));
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
        <button onClick={(e) => {this.addTransaction({foo: "bar"})}}>Replicate!</button>
      </div>
    );
  }
}

export default App;

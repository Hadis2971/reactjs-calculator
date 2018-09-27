import React, { Component } from 'react';
import './App.css';

import Calculator from "./container/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="hdr">
      <i className="fas fa-calculator" style={{fontSize:"3em", marginRight:"0.19em"}}></i>
        <h1 style={{display:"inline", verticalAlign:"super"}}>ReactJS Calculator</h1>
      </div>
        <Calculator />
      </div>
    );
  }
}

export default App;

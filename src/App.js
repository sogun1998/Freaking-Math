import React, { Component } from 'react';
import Control from "./Control.js";

import './App.css';
import './decoration.css';

class App extends Component {
  render(){
  return (
    <div >
      <span class="name">FREAKING MATH</span><br/>
      
      <Control/>
    </div>
  );
  }
}

export default App;

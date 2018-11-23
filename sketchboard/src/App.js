import React, { Component } from 'react';
import Header from './Header';
import Buttons from './buttons/Buttons';
import Canvas from './canvas/Canvas';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shape: []
    }
  }
  chooseShape(shapeName){
    console.log(shapeName)
  }
  render() {
    return (
      <div>
        <Header />
        <Buttons chooseShape={this.chooseShape.bind(this)}/>
        <Canvas shape={this.state.shape}/>
      </div>
    );
  }
}

export default App;

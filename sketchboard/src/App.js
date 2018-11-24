import React, { Component } from 'react';
import Header from './Header';
import Buttons from './buttons/Buttons';
import Canvas from './canvas/Canvas';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shapes: [],
      selectedShapes: []
    }
  }
  addShape(shapeName){
    let { shapes } = this.state;
    shapes= [...shapes, shapeName]
    this.setState({shapes})
  }
  render() {
    return (
      <div>
        <Header />
        <Buttons addShape={this.addShape.bind(this)} selectedShapes={this.state.selectedShapes}/>
        <Canvas shape={this.state.shape}/>
      </div>
    );
  }
}

export default App;

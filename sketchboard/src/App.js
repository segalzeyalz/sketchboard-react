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
    this.generateShape = this.generateShape.bind(this)
  }
  randomizeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
randomizeShape(){
  return 5;
}
  generateShape(shapeName){
    let randomColor = this.randomizeColor()
    console.log(randomColor)
    let randomShape = this.randomizeShape();
    if(shapeName==="oval"){
    } else if("Triangle"){
  
    }else if("Rectangle"){
  
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
        <Canvas shape={this.state.shape} shapes={this.state.shapes}/>
      </div>
    );
  }
}

export default App;

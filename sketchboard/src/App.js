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
    this.addShape = this.addShape.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }
  updateSelected(selected){
    this.setState({selectedShapes:selected})
  }
  randomizeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
randomizeShape(shapeName){
  var width = Math.random() * 250 + 50;
  var height = Math.random() * 250 + 50;
  var posX = Math.round(Math.random() * 930);
  var posY = Math.round(Math.random() * 700);
  if(shapeName==="Rectangle"){
    return {
      width:width,
      height:height,
      posX:posX,
      posY:posY
    }
  }
}
  generateShape(shapeName){
    var randomColor = this.randomizeColor()
    var randomShape = this.randomizeShape(shapeName);
    return {
      shape: randomShape,
      color: randomColor
    }
  }
  addShape(shapeName){
    let shape = this.generateShape(shapeName);
    console.log(shape)
    let { shapes } = this.state;
    shapes= [...shapes, shape]
    console.log(shapes)
    this.setState({shapes})
  }
  render() {
    return (
      <div>
        <Header />
        <Buttons addShape={this.addShape} selectedShapes={this.state.selectedShapes}/>
        <Canvas shapes={this.state.shapes} updateSelected = {this.updateSelected}/>
      </div>
    );
  }
}

export default App;

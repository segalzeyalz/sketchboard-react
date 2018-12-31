import React, { Component } from 'react';

class Canvas extends Component {
  render() {
      //Here is the canvas      
    return (
      <div className="canvas">
        {this.props.shapes.map(function(shape){
          var style = {
            "border":"1px solid black",
            "width":shape.shape.width,
            "height": shape.shape.height,
            "background-color": shape.color
          }
          if(shape.shape.shapeName=="Oval"){
            style= {...style, "border-radius":shape.shape.borderRadius}
          }
          
          return <div style = {style}></div>
        })}
      </div>
    );
  }
}

export default Canvas;

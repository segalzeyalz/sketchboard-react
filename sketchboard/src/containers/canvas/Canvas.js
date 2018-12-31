import React, { Component } from 'react';

class Canvas extends Component {
  render() {
      //Here is the canvas      
    return (
      <div className="canvas">
        {this.props.shapes.map(function(shape){
          console.log(shape.shape)
          var style = {
            "border":"1px solid black",
            "width":shape.width,
            "height": shape.height,
            "background-color": shape.color,
            "top":shape.posY,
            "left":shape.posX,
            "position": "absolute"
            
          }
          if(shape.shapeName=="Oval"){
            style= {...style, "border-radius":shape.borderRadius}
          }
          
          return <div style = {style}></div>
        })}
      </div>
    );
  }
}

export default Canvas;

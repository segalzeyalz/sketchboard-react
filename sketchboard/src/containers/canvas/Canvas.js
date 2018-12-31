import React, { Component } from 'react';
import CSS from './style.css'
class Canvas extends Component {
  render() {
      //Here is the canvas      
    return (
      <div className={CSS.canvas}>
        {this.props.shapes.map(function(shape){
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
          if(shape.shapeName=="TRAINGLE"){
            style={
              ...style,
              "border-width":shape.borderWidth,
              "width":0,
              "background-color": "none",              
              "height": 0,
              "border-color": `transparent transparent ${shape.color} transparent`
            }
          }
          
          return <div key={shape.posY} style = {style}></div>
        })}
      </div>
    );
  }
}

export default Canvas;

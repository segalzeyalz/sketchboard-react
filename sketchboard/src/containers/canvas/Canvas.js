import React, { Component } from 'react';
import CSS from './style.css'
class Canvas extends Component {
  render() {
      //Here is the canvas      
      let {onSelect} = this.props
    return (
      <div className={CSS.canvas}>
        {this.props.shapes.map(function(shape){
          var style = {
            "width":shape.width,
            "height": shape.height,
            "backgroundColor": shape.color,
            "top":shape.posY,
            "left":shape.posX,
            "position": "absolute"
          }
          if(shape.shapeName=="Oval"){
            style= {...style, "borderRadius":shape.borderRadius}
          }
          if(shape.shapeName=="TRAINGLE"){
            style={
              ...style,
              "border":"1px solid black",
              "borderWidth":shape.borderWidth,
              "width":0,
              "backgroundColor": "none",              
              "height": 0,
              "borderColor": `transparent transparent ${shape.color} transparent`
            }
          }
          
          return <div onClick={onSelect()} key={shape.uniqueId} id={shape.uniqueId} style = {style}></div>
        })}
      </div>
    );
  }
}

export default Canvas;

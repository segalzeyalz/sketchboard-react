import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import CSS from './style.css'
import { connect } from 'react-redux';
class Canvas extends Component {
  render() {
    console.log(this.props.shapes)
      //Here is the canvas      
     let { onSelect} = this.props  
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
          
          return <div onClick={()=>onSelect()} key={shape.uniqueId} id={shape.uniqueId} style = {style}></div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shapes: state.shapes,
    selectedShapes: state.selectedShapes,
    showSave:state.showSave,
    showLoad:state.showLoad
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: () =>dispatch({type: actionTypes.SELECTED})  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);

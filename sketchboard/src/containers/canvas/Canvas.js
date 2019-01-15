import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import CSS from './style.css'
import { connect } from 'react-redux';
class Canvas extends Component {
  componentWillMount() {
    //Bind window keydown with component keydown in order to enable delete
    window.addEventListener("keydown", this.props.onDelete);
  }
  render() {
      //Here is the canvas      
     let { onSelect, onMouseDown, onMouseMove, onMouseUp} = this.props
    return (
      <div className={CSS.canvas}
        onMouseDown={(e) =>onMouseDown(e)}
        onMouseMove={(e)=>onMouseMove(e)}
        onMouseUp={()=>onMouseUp()}
        >
        {this.props.shapes.map(function(shape){
          var style = {
            "width":shape.width,
            "height": shape.height,
            "backgroundColor": shape.color,
            "left":shape.posX,
            "top":shape.posY,
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
          
          return <div 
                    onClick={(e)=>{onSelect(shape.uniqueId, e);}}
                    key={shape.uniqueId} id={shape.uniqueId} style = {style}  
                  />
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
    showLoad:state.showLoad,
    selectedPos:state.selectedPos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (id, event) =>dispatch({type: actionTypes.SELECT, id:id, ctrlCliked:event.ctrlKey}),
    onMouseDown: (e)=>dispatch({type:actionTypes.UPDATE_OFFSET, id:e.target.id, startX:e.clientX, startY:e.clientY, offsetX:e.target.style.left, offsetY:e.target.style.top}),
    onMouseMove: (e) =>dispatch({type:actionTypes.CHANGE_POSITION, clientX:e.clientX, clientY:e.clientY}),
    onMouseUp: ()=>dispatch({type:actionTypes.STOP_CHANGE_POSITION}),
    onDelete: (e) => dispatch({type:actionTypes.DELETE, delClicked:e.code==="Delete"}),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);

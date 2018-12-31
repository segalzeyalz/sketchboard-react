import React, { Component } from 'react';
import * as actionTypes from './../../store/actions';
import CSS from './style.css'
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
      //Here is the Buttons
    return (
      <div className={CSS.buttons}>
        <div className={CSS.button}>Save</div>
        <div className={CSS.button}>Load</div>
        <div className={CSS.button}><input type="color"/></div>
        <div className={CSS.button} onClick={()=>{this.props.onAddingRect()}}>Rectangle</div>
        <div className={CSS.button} onClick={()=>{this.props.onAddingTrian()}}>Traingle</div>
        <div className={CSS.button} onClick={()=>{this.props.onAddingOval()}}>Oval</div>
        <div className={CSS.button} onClick={()=>{console.log("deleteShape")}}>delete</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    shapes: state.shapes,
    selectedShapes: state.selectedShapes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingRect: ()=> dispatch({type:actionTypes.ADD_RECT}),
    onAddingOval: () => dispatch({type: actionTypes.ADD_OVAL}),
    onAddingTrian: () => dispatch({type: actionTypes.ADD_TRAINGLE})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

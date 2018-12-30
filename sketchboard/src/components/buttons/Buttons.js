import React, { Component } from 'react';
import CSS from './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
      shapes:[]
    }
    this.deleteShape = this.deleteShape.bind(this)
  }

  deleteShape(){
    let { shapes } = this.state;
    shapes.splice(shapes.length-1,1)
    this.setState({shapes})
  }


  render() {
      //Here is the Buttons
    return (
      <div className={CSS.buttons}>
        <div className={CSS.button}>Sign In</div>
        <div className={CSS.button}>Sign Up</div>
        <div className={CSS.button}>Save</div>
        <div className={CSS.button}>Load</div>
        <div className={CSS.button}><input type="color"/></div>\
        <div className={CSS.button} onClick={()=>{this.props.addShape("Rectangle")}}>Rectangle</div>
        <div className={CSS.button} onClick={()=>{this.deleteShape("deleteShape")}}>delete</div>
      </div>
    );
  }
}
export default Buttons;

import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
      this.state = {
      shapes:[]
    }
    this.deleteShape = this.deleteShape.bind(this)
  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
  deleteShape(){
    let { shapes } = this.state;
    shapes.splice(shapes.length-1,1)
    this.setState({shapes})
  }


  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button">Sign In</div>
        <div className="button">Sign Up</div>
        <div className="button">Save</div>
        <div className="button">Load</div>
        <div className="button"><input type="color"/></div>
        <div className="button">
          <input type="file" name="avatar"accept="image/png, image/jpeg" /> Upload image
        </div>
        <div className="button" onClick={()=>{this.props.addShape("Oval")}}>Oval</div>
        <div className="button" onClick={()=>{this.props.addShape("Triangle")}}>Triangle</div>
        <div className="button" onClick={()=>{this.props.addShape("Rectangle")}}>Rectangle</div>
        <div className="button" onClick={()=>{this.deleteShape("deleteShape")}}>delete</div>
      </div>
    );
  }
}
export default Buttons;

import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
    this.props.chooseShape("Oval")
    this.state = {
      shapes:[]
    }
    this.chooseShape = this.chooseShape.bind(this)
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
  chooseShape(name){
    let { shapes } = this.state;
    this.setState({shapes:[...shapes, name]})
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
        <div className="button" onClick={()=>{this.chooseShape("Oval")}}>Oval</div>
        <div className="button" onClick={()=>{this.chooseShape("Triangle")}}>Triangle</div>
        <div className="button" onClick={()=>{this.chooseShape("Rectangle")}}>Rectangle</div>
        <div className="button" onClick={()=>{this.deleteShape("deleteShape")}}>delete</div>
      </div>
    );
  }
}
export default Buttons;

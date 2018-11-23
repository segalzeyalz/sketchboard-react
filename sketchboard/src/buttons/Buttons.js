import React, { Component } from 'react';
import './style.css'
class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let { counter } = this.state;
    this.setState({counter:counter+1})
  }
  render() {
      //Here is the Buttons
    return (
      <div className="buttons">
        <div className="button" onClick={this.handleClick}>Sign In</div>
        <div className="button">Sign Up</div>
        <div className="button">Save</div>
        <div className="button">Load</div>
        <div className="button"><input type="color"/></div>
        <div className="button">
          <input type="file" name="avatar"accept="image/png, image/jpeg" /> Upload image
        </div>
        <div className="button">Oval</div>
        <div className="button">Triangle</div>
        <div className="button">Rectangle</div>
        <br />
        {this.state.counter}
      </div>
    );
  }
}

export default Buttons;

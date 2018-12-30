import React, { Component } from 'react';
import CSS from './style.css'

class Header extends Component {
  componentWillUpdate(){
    return false;
  }
  render() {
      //Here is the header
    return (
      <div className={CSS.Title}>
        <h1>SketchBoard</h1>
      </div>
    );
  }
}

export default Header;
